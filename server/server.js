const fs = require("fs");
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const lineReader = require("line-reader");
const childProcess = require("child_process");
const tails = require("./tails");

const serverPort = 9090;

let csvMemory = {};

(async () => {
  const csvExists = fs.existsSync(__dirname + "/csv_folder/removed.csv");

  if (!csvExists) {
    childProcess.execSync("unzip csv.zip -d csv_folder");
  }

  let count = 0;
  // const random100 = [];
  lineReader.eachLine(
    __dirname + "/csv_folder/removed.csv",
    function (line) {
      count++;
      const row = line.split(",");
      if (row[1]) {
        if (!csvMemory[row[1]]) {
          csvMemory[row[1]] = [];
        }
        csvMemory[row[1]].push([row[0], row[2]]);
      }
      if (count % 50000 === 0) {
        console.log(count.toLocaleString() + " rows loaded into memory...");
      }
      // if (Math.random() < 0.0001) {
      //   random100.push("'" + row[1] + "',");
      // }
    },
    () => {
      // console.log(random100.join("\n"));
      /* after reading the last line */
      console.log(count.toLocaleString() + " rows loaded into memory...");
    }
  );
})();

const app = express();

app.use(bodyParser.json());

app.get("/version", (req, res) => {
  res.send("Version 0.0.1");
});

app.post("/public-key", (req, res) => {
  if (req.body.puzzleHashes) {
    const responseArray = [];
    req.body.puzzleHashes.forEach((hash) => {
      if (csvMemory[hash]) {
        csvMemory[hash].forEach((row) => {
          if (tails[row[0]]) {
            const code = tails[row[0]][0];
            const name = tails[row[0]][1];
            responseArray.push([hash, row[0], row[1], code, name]);
          } else {
            responseArray.push([hash, row[0], row[1], "/", hash]);
          }
        });
      }
    });
    res.send({ data: responseArray });
  } else {
    res.send({ error: "missing puzzleHashes key" });
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("/app/dist"));
  childProcess.execSync("cp /server/csv_folder/removed.csv /app/dist/snapshot.csv");
}

const server = http.createServer(app);
server.listen(serverPort);
console.log(`=============> Server listening on port ${serverPort} <=============`);
