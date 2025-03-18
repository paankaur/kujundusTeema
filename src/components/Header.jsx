// rafce react arrowfun component export
// Header.jsx
import React from "react";

const Header = ({ toggleTheme }) => {
  return (
    <header>
      <h1>Demo Website</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;
