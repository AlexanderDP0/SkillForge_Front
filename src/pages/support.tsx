import React, { useState } from "react";

import VideoPlayer from "../components/videoplayer/videoplayer"; // Asegúrate de que este path sea correcto
import backfront from "../assets/backfront.png";
import { buttonClass } from "../utils/classname/ClassNames";
import html from "../assets/htmlcss.png";
import js from "../assets/jscourse.png";
import nodejs from "../assets/nodejscourse.png";
import react from "../assets/reactcourse.png";
import reactnode from "../assets/react&nodejs.png";

export default function Support() {
  const [currentLink, setCurrentLink] = useState(
    "https://www.youtube.com/embed/dQw4w9WgXcQ"
  );

  const materials = [
    {
      imgSrc: react,
      title: "React",
      description: "Description of the React course",
      link: "https://www.youtube.com/embed/yIr_1CasXkM?si=W0v7Mo0BBs53Ot0x",
    },
    {
      imgSrc: nodejs,
      title: "Node Js",
      description: "Description of the Nodejs course",
      link: "https://www.youtube.com/embed/i3OdKwuBjeM?si=nUXiObHAX9s4zmER",
    },
    {
      imgSrc: reactnode,
      title: "React & Node",
      description: "Description of the React & Node course",
      link: "https://www.youtube.com/embed/NmkY4JgS21A?si=Jvj2ChVIAij-7Pgf",
    },
    {
      imgSrc: html,
      title: "HTML & CSS",
      description: "Description of the HTML & CSS course",
      link: "https://www.youtube.com/embed/MJkdaVFHrto?si=u2Y8UaLP-X7dhR-j",
    },
    {
      imgSrc: js,
      title: "JavaScript",
      description: "Description of the JavaScript course",
      link: "https://www.youtube.com/embed/QoC4RxNIs5M?si=yMe75k9V-pdZZDO3",
    },
    {
      imgSrc: backfront,
      title: "Back & Front",
      description: "Description of the Back & Front course",
      link: "https://www.youtube.com/embed/50RbVujPPGs?si=vh0v9yWuTq0QRqD-",
    },
  ];

  const handleNavigation = (path: string) => {
    window.location.pathname = path;
  };
  return (
    <div className="flex flex-wrap py-5 px-5">
      <h1 className="text-black font-semibold text-4xl pt-5">
        MATERIAL DE APOYO
      </h1>
      <div className="w-1/2 pt-5 px-5 mt-10">
        <VideoPlayer link={currentLink} />
        <button
          className={
            "w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-primary-800 mt-2.5"
          }
          onClick={() => handleNavigation("/course")}
        >
          Empezar curso
        </button>
      </div>
      <div className="flex justify-center flex-wrap p-5">
        {materials.map((material, index) => (
          <div
            key={index}
            className="w-1/4 px-2 pb-8 hover:bg-yellow-100 rounded cursor-pointer"
            onClick={() => setCurrentLink(material.link)} // Cambiar el enlace al hacer clic
          >
            <img
              src={material.imgSrc}
              alt={material.title}
              className="w-full rounded p-1"
            />
            <h1 className="text-black font-bold text-xl font-semibold px-1">
              {material.title}
            </h1>
            <p className="text-gray-800 text-xl font-light px-1">
              {material.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
