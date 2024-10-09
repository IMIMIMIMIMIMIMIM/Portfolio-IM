import { useEffect, useState } from "react";

const Title = () => {
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

  return (
    <h1 className="text-4xl font-bold text-center">
      {text}
      <span className="animate-blink">|</span>
    </h1>
  );
};

export default Title;
