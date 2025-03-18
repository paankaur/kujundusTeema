//App.jsx
import { useState } from "react";
// import React from "react";
import Page from './components/Page';
import { useTheme } from "./ThemeContext";

import "./App.css";

function App() {
  const {theme, toggleTheme} = useTheme();


  return (
    <div id="app" className={theme === "dark" ? "dark" : "light"} >
      <Page />
    </div>
  )
  
}

export default App;
