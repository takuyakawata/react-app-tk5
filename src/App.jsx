// App.jsx

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import { ActionButton } from "./components/ActionButton";
import { Seats } from "./pages/Seats";
import { Trello } from "./pages/Trello";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <h1>react app 席替え</h1>
        <ul>
          <li>
            <Link to="/seats">席替え</Link>
          </li>
          <li>
            <Link to="/trello">メモ</Link>
          </li>
        </ul>


        <Routes>
          <Route path="/seats" element={<Seats />} />
          <Route path="/trello" element={<Trello />} />
        </Routes>

      </BrowserRouter>
    </>
  );
};

export default App;
