import { useEffect, useState, useRef } from "react";
import {
  firebase,
  github,
  html,
  javascript,
  notion,
  prettier,
  react,
  reacthookform,
  reactrouter,
  slack,
  styledcomponent,
  tailwindcss,
  typescript,
  vanillaextract,
  vite,
  zustand,
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
    <div className="h-screen flex flex-col justify-center items-center font-cafe24">
      <div
        ref={personalRef}
        className={`flex flex-col items-center my-2 md:mb-[-30px] transition-transform duration-700 ${
          isVisible
            ? "opacity-100 sm:translate-x-0 translate-x-0 md:translate-x-[-65%]"
            : "opacity-0 sm:translate-x-0 translate-x-[-100%] md:translate-x-[-200%]"
        }`}
      >
        <div className="relative border-2 border-gray-400 rounded-lg p-6 text-center my-1">
          <span className="absolute top-[-15px] left-[30%] transform -translate-x-1/2 bg-white dark:bg-gray-900 px-2 text-xl">
            Frontend
          </span>
          <div className="grid grid-cols-3 gap-4 text-xl">
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
            <div className="flex justify-center items-center">
              <img
                src={reacthookform}
                alt="Reacthookform"
                className="h-12 w-12"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={reactrouter}
                alt="Reactrouterreactrouter"
                className="h-12 w-12"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        ref={experienceRef}
        className={`flex flex-col items-center my-2 md:my-[-20px] transition-transform duration-700 ${
          isVisible
            ? "opacity-100 sm:translate-x-0 translate-x-0 md:translate-x-[65%]"
            : "opacity-0 sm:translate-x-0 translate-x-[100%] md:translate-x-[200%]"
        }`}
      >
        <div className="relative border-2 border-gray-400 rounded-lg p-6 text-center my-1">
          <span className="absolute top-[-15px] left-[15%] transform -translate-x-1/2 bg-white dark:bg-gray-900 px-2 text-xl">
            Css
          </span>
          <div className="grid grid-cols-3 gap-4 text-xl">
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
        className={`flex flex-col items-center my-2 md:mb-[-20px] transition-transform duration-700 ${
          isVisible
            ? "opacity-100 sm:translate-x-0 translate-x-0 md:translate-x-[-90%]"
            : "opacity-0 sm:translate-x-0 translate-x-[-100%] md:translate-x-[-200%]"
        }`}
      >
        <div className="relative border-2 border-gray-400 rounded-lg p-6 text-center my-1">
          <span className="absolute top-[-15px] left-[45%] transform -translate-x-1/2 bg-white dark:bg-gray-900 px-2 text-xl">
            State&Data
          </span>
          <div className="grid grid-cols-2 gap-4 text-xl">
            <div className="flex justify-center items-center">
              <img src={zustand} alt="Zustand" className="h-12 w-12" />
            </div>
            <div className="flex justify-center items-center">
              <img src={firebase} alt="Firebase" className="h-12 w-12" />
            </div>
          </div>
        </div>
      </div>
      <div
        ref={experienceRef}
        className={`flex flex-col items-center my-2 md:mt-[-30px] transition-transform duration-700 ${
          isVisible
            ? "opacity-100 sm:translate-x-0 translate-x-0 md:translate-x-[65%]"
            : "opacity-0 sm:translate-x-0 translate-x-[100%] md:translate-x-[200%]"
        }`}
      >
        <div className="relative border-2 border-gray-400 rounded-lg p-6 text-center my-1">
          <span className="absolute top-[-15px] left-[15%] transform -translate-x-1/2 bg-white dark:bg-gray-900 px-2 text-xl">
            ETC
          </span>
          <div className="grid grid-cols-3 gap-4 text-xl">
            <div className="flex justify-center items-center">
              <img src={vite} alt="Vite" className="h-12 w-12" />
            </div>
            <div className="flex justify-center items-center">
              <img src={prettier} alt="Prettier" className="h-12 w-12" />
            </div>
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
