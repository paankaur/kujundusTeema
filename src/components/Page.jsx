//Page.jsx
import React from "react";
import Header from "./Header";
import { useTheme } from "../ThemeContext";

const Page = () => {
  const { toggleTheme } = useTheme();
  return (
    <div>
      <Header toggleTheme={toggleTheme} />
      <article>
        <h2>React Course</h2>
        <p>A course that potentially teaches you React.</p>
      </article>
    </div>
  );
};

export default Page;
