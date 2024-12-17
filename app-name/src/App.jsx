import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      setTheme("light");
    }

    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme, isDesktop]);

  const toggleTheme = () => {
    if (isDesktop) {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    }
  };

  return (
    <div>
      <button className="toggle-theme" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <div className="content">
        <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      </div>
    </div>
  );
}

export default App;


