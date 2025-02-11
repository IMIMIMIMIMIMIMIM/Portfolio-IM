import { useEffect, useState } from "react";
import { moon, sun } from "../assets/assets";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) {
      document.body.className = "dark";
    } else {
      document.body.className = "";
    }
  });
  return (
    <header className="fixed top-0 left-0 w-full z-10 flex">
      <button
        className="w-6 h-6 absolute top-4 right-4"
        onClick={() => setDarkMode((darkMode) => !darkMode)}
      >
        <img src={darkMode ? moon : sun} alt="darkmode" />
      </button>
    </header>
  );
};
export default Header;
