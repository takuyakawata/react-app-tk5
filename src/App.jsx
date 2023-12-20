// App.jsx

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Seats } from "./pages/Seats";
import { Trello } from "./pages/Trello";
import { Training } from "./pages/Training";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <h1>react app tk5</h1>
        <ul>
          <li>
            <Link to="/seats">席替え</Link>
          </li>
          <li>
            <Link to="/trello">メモ</Link>
          </li>
          <li>
            <Link to="/training">練習</Link>
          </li>
        </ul>


        <Routes>
          <Route path="/seats" element={<Seats />} />
          <Route path="/trello" element={<Trello />} />
          <Route path="/training" element={<Training />} />
        </Routes>

      </BrowserRouter>
    </>
  );
};

export default App;
