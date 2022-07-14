import React from "react";
import { CircularProgress } from "@mui/material";

import Footer from "./Footer";
import GlobalStyle from "./GlobalStyle.css";

import css from "./App.css";

const worker = new Worker("worker.js");

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export default function App() {
  const publicKeyRef = React.useRef(null);

  const [fetchingSnapshot, setFetchingSnapshot] = React.useState(false);
  const [tableData, setTableData] = React.useState(null);
  const [rowCountLimit, setRowCountLimit] = React.useState(100);
  const [fingerPrint, setFingerPrint] = React.useState("");
  const [showError, setShowError] = React.useState("");
  const [learnMore, setLearnMore] = React.useState(false);

  React.useEffect(() => {
    const parsedHash = new URLSearchParams(window.location.hash.substring(1));
    if (parsedHash.get("publicKey")) {
      worker.postMessage({ publicKeyText: parsedHash.get("publicKey") });
      publicKeyRef.current.value = parsedHash.get("publicKey");
      setTableData(null);
      setFetchingSnapshot(true);
      if (parsedHash.get("fingerprint")) {
        setFingerPrint(parsedHash.get("fingerprint"));
      }
    }

    worker.onmessage = (messageEvent) => {
      const data = messageEvent.data;
      if (data.error) {
        console.error(data.error);
      } else {
        postData("/public-key", { puzzleHashes: data.puzzleHashes }).then((response) => {
          setTableData(response.data);
          setFetchingSnapshot(false);
        });
      }
    };
  }, []);

  function queryHash() {
    setShowError("");
    if (!fetchingSnapshot) {
      const publicKeyText = publicKeyRef.current.value;
      if (publicKeyText.length !== 96) {
        setShowError("Public key should be 96 characters long.");
        setTableData(null);
      } else {
        worker.postMessage({ publicKeyText });
        setFetchingSnapshot(true);
        setTableData(null);
      }
    }
  }

  function renderWalletResults() {
    if (fetchingSnapshot) {
      return (
        <css.WalletResults>
          <css.ShadowedBox>
            <css.Gathering>
              <div>
                <CircularProgress color="inherit" disableShrink />
              </div>
              <div>Gathering on-chain data...</div>
            </css.Gathering>
          </css.ShadowedBox>
        </css.WalletResults>
      );
    }
  }

  function dataObject() {
    const balanceObject = {};
    (tableData || []).forEach((row) => {
      const existing = balanceObject[row[1]];
      if (!existing) {
        balanceObject[row[1]] = [row[0], row[1], parseInt(row[2]), row[3], row[4]];
      } else {
        balanceObject[row[1]] = [existing[0], existing[1], existing[2] + parseInt(row[2]), existing[3], existing[4]];
      }
    });
    return balanceObject;
  }

  function dataArray() {
    const objects = dataObject();
    return Object.keys(objects)
      .map((key) => {
        return objects[key];
      })
      .sort((a, b) => {
        return a[3] > b[3] ? 1 : -1;
      });
  }

  function renderTableRows() {
    return dataArray().map((row, idx) => {
      const amount = Number(row[2]).toLocaleString();
      return (
        <tr key={row[0] + "|" + idx} onClick={() => window.open("https://www.taildatabase.com/tail/" + row[1], "_blank")}>
          <td>{row[4]}</td>
          <td>{row[3]}</td>
          <td>{amount}</td>
        </tr>
      );
    });
  }

  function renderWalletNumber() {
    if (!fingerPrint) return null;
    return (
      <css.WalletNumberContainer>
        <css.WalletNumber>Wallet {fingerPrint}</css.WalletNumber>
      </css.WalletNumberContainer>
    );
  }

  function renderShowMoreResults() {
    if (dataArray().length === 0 || dataArray().length <= rowCountLimit) {
      return null;
    }
    return (
      <css.MoreResults>
        Not seeing everything? Try searching additional wallet addresses
        <button
          className="outline-green-button"
          onClick={() => {
            setRowCountLimit(rowCountLimit + 100);
          }}
        >
          Search next 100
        </button>
      </css.MoreResults>
    );
  }

  function renderTableContainer() {
    if (!tableData) {
      return null;
    } else if (tableData.length === 0) {
      return (
        <css.WalletResults>
          <css.ShadowedBox>No CATs found.</css.ShadowedBox>
        </css.WalletResults>
      );
    } else if (tableData.length) {
      return (
        <css.WalletResults>
          {renderWalletNumber()}
          <css.ShadowedBox>
            <css.TableStyled>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Code</th>
                  <th>Balance</th>
                </tr>
              </thead>
              <tbody>{renderTableRows()}</tbody>
            </css.TableStyled>
          </css.ShadowedBox>
          {renderShowMoreResults()}
        </css.WalletResults>
      );
    }
    return null;
  }

  function renderError() {
    if (showError) {
      return <css.ErrorMessage>{showError}</css.ErrorMessage>;
    }
    return null;
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      queryHash();
    }
  }

  function renderLearnMore() {
    if (!learnMore) return null;
    return <img src="/img/chia-public-key.png" />;
  }

  return (
    <css.Container>
      <GlobalStyle />
      <css.Header>
        <img src="/img/branding/chia-logo.svg" alt="Chia Network Logo" />
      </css.Header>
      <div className="pg-title">
        <div className="col-10-container">
          <h1>CAT1 Token balance</h1>
        </div>
      </div>
      <css.Content>
        <div className="col-8-container txt-col-blocks">
          <div className="full-width-col">
            <p className="lrg-txt">Chia’s token standard has been updated to CAT2 and as a result original issuers of CAT tokens will be re-issuing their tokens as of July XXth, 2022, 12:00 UTC and airdropping the updated tokens to your wallet.</p>
            <p>This site will help you understand your balance at the time the snapshot was taken. Any transactions that settled after the snapshot won’t be accounted for in the balances reported here.</p>
          </div>
        </div>
      </css.Content>
      <css.SearchContainer>
        <css.Search>
          <p>Search for a wallet public key</p>
          <css.SearchInput>
            <input type="text" name="key" ref={publicKeyRef} onKeyDown={handleKeyDown} />
            <css.SearchButton onClick={queryHash}>Get my snapshot</css.SearchButton>
          </css.SearchInput>
          {renderError()}
          <css.LearnMore onClick={() => setLearnMore(!learnMore)} learnMore={learnMore}>
            <span>Learn how to find your public key here.</span>
            <img src="/img/arrow_down.svg" alt="Chia Network Logo" />
            {renderLearnMore()}
          </css.LearnMore>
          <p>
            Public keys are 96 characters long. It should look like this:
            <br />
            <font color="#777">a95db0f87574d1af5991f93df7d36f40ccadf6c403889ae5987f6013a28caa150d6bbc24493889c61a4829c1656d7e88</font>
          </p>
        </css.Search>
      </css.SearchContainer>
      {renderWalletResults()}
      {renderTableContainer()}
      <Footer />
    </css.Container>
  );
}
