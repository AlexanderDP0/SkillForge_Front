import React, { useState } from "react";

import Cards from "../components/cards/cards";
import { FaRegUserCircle } from "react-icons/fa";
import js from "../assets/js.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";

export default function User() {
  const [imageError, setImageError] = useState(false);

  const generateUniqueId = (prefix: string = ""): string => {
    return `${prefix}${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  };
  const courseData = {
    imageSrc: react,
    title: "Curso de React",
    description: "Aprende a crear aplicaciones con React",
    score: "0/5",
    status: "Disponible",
    courseLink: "#",
  };

  const otherCourseData = [
    {
      imageSrc: js,
      title: "Curso de JavaScript",
      description: "Desarrollo de aplicaciones con JavaScript",
      score: "0/5",
      status: "Proximamente",
      courseLink: "#",
    },
    {
      imageSrc: nodejs,
      title: "Curso de NodeJs",
      description: "Desarrollo de api´s con NodeJs",
      score: "0/5",
      status: "Próximamente",
      courseLink: "#",
    },
  ];

  return (
    <div>
      <div className="flex justify-center flex-wrap py-10 px-5">
        <div className="w-1/2 p-5">
          {!imageError ? (
            <img
              src=""
              alt="icono"
              onError={() => setImageError(true)}
              className="w-16 h-16 object-cover"
            />
          ) : (
            <FaRegUserCircle className="w-16 h-16 text-gray-500 mx-auto my-10" />
          )}
        </div>
        <div className="w-1/2 p-5 bg-white shadow-lg rounded-lg text-center">
          <h1 className="text-2xl font-semibold mb-2">Nombre</h1>
          <p className="text-gray-700 mb-4">correo</p>
          <h2 className="text-xl font-semibold mb-2">Puntajes</h2>
          <p className="mb-4"></p>
          <button className="text-black font-semibold py-2 px-4 w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-lg text-center bg-yellow-300 dark:hover:bg-yellow-500 hover:text-black dark:focus:ring-primary-800">
            Guardar cambios
          </button>
        </div>
      </div>
      <div className="py-10">
        <h1 className="text-black font-semibold text-4xl py-5 px-5">Cursos</h1>
        <div className="flex flex-wrap items-center justify-center px-5">
          {Array.from({ length: 3 }).map((_, index) => (
            <Cards
              key={generateUniqueId("-card")}
              imageSrc={
                index === 0
                  ? courseData.imageSrc
                  : otherCourseData[index - 1]?.imageSrc
              }
              title={
                index === 0
                  ? courseData.title
                  : otherCourseData[index - 1]?.title
              }
              description={
                index === 0
                  ? courseData.description
                  : otherCourseData[index - 1]?.description
              }
              score={
                index === 0
                  ? courseData.score
                  : otherCourseData[index - 1]?.score
              }
              status={
                index === 0
                  ? courseData.status
                  : otherCourseData[index - 1]?.status
              }
              courseLink={
                index === 0
                  ? courseData.courseLink
                  : otherCourseData[index - 1]?.courseLink
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
