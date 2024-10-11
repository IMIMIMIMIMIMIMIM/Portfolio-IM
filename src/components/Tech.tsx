import { useEffect, useState, useRef } from "react";
import {
  github,
  html,
  javascript,
  notion,
  react,
  slack,
  styledcomponent,
  tailwindcss,
  typescript,
  vanillaextract,
} from "../assets/assets";

const Tech = () => {
  const [isVisible, setIsVisible] = useState(false);
  const personalRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // 슬라이드 애니메이션을 트리거
          }
        });
      },
      { threshold: 0.5 }
    );

    if (personalRef.current) observer.observe(personalRef.current);
    if (experienceRef.current) observer.observe(experienceRef.current);

    return () => {
      if (personalRef.current) observer.unobserve(personalRef.current);
      if (experienceRef.current) observer.unobserve(experienceRef.current);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div
        ref={personalRef}
        className={`flex flex-col items-center my-1 transition-transform duration-700 ${
          isVisible
            ? "opacity-100 sm:translate-x-0 translate-x-0 md:translate-x-[-50%]"
            : "opacity-0 sm:translate-x-0 translate-x-[-100%] md:translate-x-[-200%]"
        }`}
      >
        <div className="relative border-2 border-gray-400 rounded-lg p-8 text-center my-2">
          <span className="absolute top-[-15px] left-[20%] transform -translate-x-1/2 bg-white dark:bg-gray-900 px-2 text-2xl">
            기술
          </span>
          <div className="grid grid-cols-2 gap-4 text-xl">
            <div className="flex justify-center items-center">
              <img src={javascript} alt="JavaScript" className="h-12 w-12" />
            </div>
            <div className="flex justify-center items-center">
              <img src={typescript} alt="TypeScript" className="h-12 w-12" />
            </div>
            <div className="flex justify-center items-center">
              <img src={html} alt="HTML" className="h-12 w-12" />
            </div>
            <div className="flex justify-center items-center">
              <img src={react} alt="React" className="h-12 w-12" />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={experienceRef}
        className={`flex flex-col items-center my-1 transition-transform duration-700 ${
          isVisible
            ? "opacity-100 sm:translate-x-0 translate-x-0 md:translate-x-[50%]"
            : "opacity-0 sm:translate-x-0 translate-x-[100%] md:translate-x-[200%]"
        }`}
      >
        <div className="relative border-2 border-gray-400 rounded-lg p-8 text-center my-2">
          <span className="absolute top-[-15px] left-[20%] transform -translate-x-1/2 bg-white dark:bg-gray-900 px-2 text-2xl">
            CSS
          </span>
          <div className="grid grid-cols-2 gap-4 text-xl">
            <div className="flex justify-center items-center">
              <img
                src={styledcomponent}
                alt="Styledcomponent"
                className="h-12 w-12"
              />
            </div>
            <div className="flex justify-center items-center">
              <img src={tailwindcss} alt="Tailwindcss" className="h-12 w-12" />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={vanillaextract}
                alt="Vanillaextract"
                className="h-12 w-12"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={personalRef}
        className={`flex flex-col items-center my-1 transition-transform duration-700 ${
          isVisible
            ? "opacity-100 sm:translate-x-0 translate-x-0 md:translate-x-[-50%]"
            : "opacity-0 sm:translate-x-0 translate-x-[-100%] md:translate-x-[-200%]"
        }`}
      >
        <div className="relative border-2 border-gray-400 rounded-lg p-8 text-center my-2">
          <span className="absolute top-[-15px] left-[20%] transform -translate-x-1/2 bg-white dark:bg-gray-900 px-2 text-2xl">
            ETC
          </span>
          <div className="grid grid-cols-2 gap-4 text-xl">
            <div className="flex justify-center items-center">
              <img src={github} alt="Github" className="h-12 w-12" />
            </div>
            <div className="flex justify-center items-center">
              <img src={notion} alt="Notion" className="h-12 w-12 " />
            </div>
            <div className="flex justify-center items-center">
              <img src={slack} alt="Slack" className="h-12 w-12 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
