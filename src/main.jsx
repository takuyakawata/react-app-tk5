import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const tkInfo = {
    name: "takuya",
    age: 28,
};

const tkInfoContext = createContext(tkInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
    <tkInfoContext.Provider value={tkInfo}>
        <App />
    </tkInfoContext.Provider>

);

export default tkInfoContext;
