import React from "react";
import VideoPlayer from "../components/videoplayer/videoplayer"; // Asegúrate de que este path sea correcto
import backfront from "../assets/backfront.png";
import html from "../assets/htmlcss.png";
import js from "../assets/jscourse.png";
import nodejs from "../assets/nodejscourse.png";
import react from "../assets/reactcourse.png";
import reactnode from "../assets/react&nodejs.png";

export default function Support() {
  const materials = [
    {
      imgSrc: react,
      title: "React",
      description: "Description of the React course",
    },
    {
      imgSrc: nodejs,
      title: "Node Js",
      description: "Description of the Nodejs course",
    },
    {
      imgSrc: reactnode,
      title: "React & Node",
      description: "Description of the React & Node course",
    },
    {
      imgSrc: html,
      title: "HTML & CSS",
      description: "Description of the HTML & CSS course",
    },
    {
      imgSrc: js,
      title: "JavaScript",
      description: "Description of the JavaScript course",
    },
    {
      imgSrc: backfront,
      title: "Back & Front",
      description: "Description of the Back & Front course",
    },
    {
      imgSrc: react,
      title: "React",
      description: "Description of the React course",
    },
    {
      imgSrc: nodejs,
      title: "Node Js",
      description: "Description of the Nodejs course",
    },
    {
      imgSrc: reactnode,
      title: "React & Node",
      description: "Description of the React & Node course",
    },
    {
      imgSrc: html,
      title: "HTML & CSS",
      description: "Description of the HTML & CSS course",
    },
    {
      imgSrc: js,
      title: "JavaScript",
      description: "Description of the JavaScript course",
    },
    {
      imgSrc: backfront,
      title: "Back & Front",
      description: "Description of the Back & Front course",
    },
  ];

  return (
    <div className="flex flex-wrap py-5 px-5">
      <h1 className="text-black font-semibold text-4xl pt-5">
        MATERIAL DE APOYO
      </h1>
      <div className="w-1/2 pt-5 px-5 mt-10">
        <VideoPlayer />
      </div>
      <div className="flex justify-center flex-wrap p-5">
        {materials.map((material, index) => (
          <div
            key={index}
            className="w-1/4 px-2 pb-8 hover:bg-yellow-100 rounded"
          >
            <a href="">
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
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
