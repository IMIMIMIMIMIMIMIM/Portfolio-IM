import { useEffect, useState } from "react";
import { moon, sun } from "../assets/assets";

const Title = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [text, setText] = useState("");
  const fullText = "HI! IM";
  const typingSpeed = 250; // 타이핑 속도 (ms)

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.className = "dark";
    } else {
      document.body.className = "";
    }
  });

  return (
    <div className="h-screen overflow-auto flex justify-center items-center">
      <button
        className="w-6 h-6 absolute top-4 right-4"
        onClick={() => setDarkMode((darkMode) => !darkMode)}
      >
        <img src={darkMode ? moon : sun} alt="darkmode" />
      </button>
      <h1 className="text-4xl font-bold text-center">
        {text}
        <span className="animate-blink">|</span>
      </h1>
    </div>
  );
};

export default Title;
