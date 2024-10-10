import { useState, useRef, TouchEvent, WheelEvent } from "react";
import Title from "./Title";
import Profile from "./Profile";

const PageScroll = () => {
  const [section, setSection] = useState(0);
  const sections = [<Title />, <Profile />];

  const handleScroll = (event: WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0) {
      setSection((prev) => Math.min(prev + 1, sections.length - 1));
    } else {
      setSection((prev) => Math.max(prev - 1, 0));
    }
  };

  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartY.current = e.touches[0].clientY; // 터치 시작 Y 좌표 저장
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartY.current === null) return; // 터치 시작 좌표가 없으면 종료

    const touchEndY = e.changedTouches[0].clientY; // 터치 종료 Y 좌표
    const deltaY = touchStartY.current - touchEndY; // Y 좌표 차이

    // Y 좌표 차이에 따라 섹션 변경
    if (deltaY > 50) {
      setSection((prev) => Math.min(prev + 1, sections.length - 1)); // 아래로 스와이프
    } else if (deltaY < -50) {
      setSection((prev) => Math.max(prev - 1, 0)); // 위로 스와이프
    }

    touchStartY.current = null; // 초기화
  };

  return (
    <div
      className="overflow-hidden h-screen"
      onWheel={handleScroll}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="transition-transform duration-700"
        style={{ transform: `translateY(-${section * 100}vh)` }}
      >
        {sections.map((Section, index) => (
          <div
            key={index}
            className="h-screen flex justify-center items-center"
          >
            {Section}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageScroll;
