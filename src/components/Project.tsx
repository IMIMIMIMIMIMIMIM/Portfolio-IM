import { useState } from "react";
import { im, lotto, murder, perfitt, tfa } from "../assets/assets";

type Project = {
  name: string;
  description: string;
  stack: string;
  url: string;
  date: string;
  people: number;
  link?: string;
  image: string;
};

const ProjectComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      name: "Perfitt-size",
      description:
        "Perfitt-size는 사이즈를 측정하고  사용자의 발에 맞는 신발을 추천해주는 앱입니다.",
      stack:
        "React, Typescript, Vite, Vanilla extract, Firebase, Zustand, React router",
      url: "https://github.com/IMIMIMIMIMIMIMIM/perfitt-size",
      date: "24-09-02 ~ 24-09-27",
      people: 5,
      link: "11-supreme.vercel.app",
      image: perfitt,
    },
    {
      name: "TFA",
      description: "여행경로 추천 및 여행 플랜을 만들어주는 사이트입니다.",
      stack: "React, Typescript, Styled-components, React router",
      url: "https://github.com/Trip-Full-Accel/tfa-FE",
      date: "22-12-01 ~ 22-12-30",
      people: 6,
      image: tfa,
    },
    {
      name: "Portfolio",
      description: "이 포트폴리오는 나의 작업과 기술을 보여주는 공간입니다.",
      stack: "React, Typescript, Vite, Tailwindcss",
      url: "https://github.com/IMIMIMIMIMIMIMIM/Portfolio-IM",
      date: "24-10-08 ~ 24-10-17",
      people: 1,
      link: "",
      image: im,
    },
    {
      name: "Findmurder",
      description: "추리를 통하여 범인을 추적하는 게임입니다.",
      stack: "React, Javascript, Styled-components",
      url: "https://github.com/IMIMIMIMIMIMIMIM/find-murder",
      date: "23-01-04 ~ 23-02-11",
      people: 1,
      link: "",
      image: murder,
    },
    {
      name: "Lotto",
      description: "로또 번호 생성 및 분석을 도와주는 간단한 앱입니다.",
      stack: "React, Typescript, Styled-components",
      url: "https://github.com/IMIMIMIMIMIMIMIM/lotto",
      date: "23-06-08 ~ 23-07-21",
      people: 1,
      link: "",
      image: lotto,
    },
  ];

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // 모달 열려있으면 스크롤 비활성화
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="flex justify-center items-center h-screen relative">
      <div className="grid grid-cols-2 xl:grid-cols-5 gap-4 w-screen xl:h-2/3 p-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="col-span-1 flex justify-center items-center p-4 border-2 rounded-lg border-gray-400 cursor-pointer aspect-square xl:aspect-auto"
            onClick={() => handleOpenModal(project)}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {isModalOpen && selectedProject && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-lg p-6 relative w-11/12 md:w-2/3"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl mb-4">{selectedProject.name}</h2>
            <p>{selectedProject.description}</p>
            <p>사용 기술: {selectedProject.stack}</p>
            <p>개발 기간: {selectedProject.date}</p>
            <p>인원 : {selectedProject.people}</p>
            <div className="flex justify-end gap-4 mt-4">
              {selectedProject.link && (
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Link
                </a>
              )}
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Code
              </a>
            </div>
            <button
              onClick={handleCloseModal}
              className="absolute top-1 right-3 text-3xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectComponent;
