// App.jsx
import React from "react";
import Booklist from "./components/Booklist"; // 追加（コンポーネントのimport）
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';

const getDataFromAPI = async keyword => {
  const requestUrl = 'https://www.googleapis.com/books/v1/volumes?q=inauthor:'
  const result = await axios.get(`${requestUrl}${keyword}`);
  return result;
}

const App = () => {
  const languages = ["三島由紀夫", "村上春樹", "塩野七生"]
  return (
    <BrowserRouter>
      <div>
        <h1>react app</h1>
        <ul>
          <li><Link to="/">三島由紀夫</Link></li>
          <li><Link to="/vue">村上春樹</Link></li>
          <li><Link to="/angular">塩野七生</Link></li>
        </ul>
        <hr />
        <Route
          exact
          path="/"
          render={
            props =>
              <Booklist
                language={languages[0]}
                getData={keyword => getDataFromAPI(keyword)}
              />}
        />
        <Route
          path="/vue"
          render={
            props =>
              <Booklist
                language={languages[1]}
                getData={keyword => getDataFromAPI(keyword)}
              />}
        />
        <Route
          path="/angular"
          render={
            props =>
              <Booklist language={languages[2]}
                getData={keyword => getDataFromAPI(keyword)}
              />}
        />
      </div>
    </BrowserRouter>
  );
};
export default App;