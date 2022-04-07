import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MyContextProvider from "./context/MyContext";

const app =(
  <MyContextProvider>
    <App/>
  </MyContextProvider>

) 


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(app)