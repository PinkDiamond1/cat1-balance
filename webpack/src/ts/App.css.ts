import styled from "styled-components";

const css = {};

css.Header = styled.div`
  padding: 16px 8px;
  background: #fff;
`;

css.Container = styled.div``;

css.Content = styled.div`
  padding: 1.5rem;
`;

css.SearchContainer = styled.div`
  text-align: center;
  padding-bottom: 50px;
`;

css.Search = styled.div`
  display: inline-block;
  text-align: left;
  p {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

css.SearchInput = styled.div`
  input {
    background-color: #fff;
    border: 1px solid #abb0b2;
    border-radius: 4px;
    color: #777;
    font-size: 15px;
    padding: 0 4px;
    vertical-align: top;
    width: 650px;
    margin: 3px 8px 8px 0;
    line-height: 32px;
    height: 40px;
    :focus {
      border-color: #3aac59;
      outline: 0;
    }
  }
`;

css.SearchButton = styled.div`
  background-color: #3aac59;
  border: none;
  border-radius: 4px;
  color: #fff;
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.03em;
  line-height: 32px;
  margin: 8px;
  padding: 0 18px;
  transition: 0.23s ease-in-out;

  :hover {
    background-color: #777;
    color: #fff;
    cursor: pointer;
  }
`;

css.WalletResults = styled.div`
  background: #edfbee;
  padding: 1.5rem;
  text-align: center;
  margin-bottom: 50px;
`;

css.ShadowedBox = styled.div`
  display: inline-block;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  text-align: center;
  margin: 25px 0;
  padding: 15px 50px;
`;

css.TableStyled = styled.table`
  font-family: "Roboto", sans-serif;
  th {
    font-size: 14px;
    font-weight: 500;
    border-bottom: 1px solid #e0e0e0;
  }
  th:last-child {
    text-align: right;
  }
  td:last-child {
    text-align: right;
  }
  td {
    font-size: 14px;
    font-weight: 100;
    border-bottom: 1px solid #e0e0e0;
  }
  tbody tr:hover {
    cursor: pointer;
    background: #f5f5f5;
  }
`;

css.Gathering = styled.div`
  display: inline-block;
  width: 500px;
  line-height: 180px;
`;

css.WalletNumberContainer = styled.div`
  padding-top: 25px;
  text-align: center;
`;

css.WalletNumber = styled.div`
  font-size: 32px;
  font-weight: 500;
  width: 720px;
  display: inline-block;
  text-align: left;
`;

css.MoreResults = styled.div`
  .outline-green-button {
    padding: 0.25rem 1rem;
    cursor: pointer;
    margin-left: 15px;
  }
`;

css.ErrorMessage = styled.p`
  color: red;
`;

export default css;
