import React, { useEffect, useState } from "react";

import Cards from "../components/cards/cards";
import { FaRegUserCircle } from "react-icons/fa";
import js from "../assets/js.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";

export default function User() {
  const [imageError, setImageError] = useState(false);
  const [avatar, setAvatar] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [score, setScore] = useState("0");
  const [isHovered, setIsHovered] = useState(false);

  const Reactscore = localStorage.getItem("puntaje") || "0";

  useEffect(() => {
    const savedAvatar = localStorage.getItem("avatar");
    const savedName = localStorage.getItem("name");
    const savedLastName = localStorage.getItem("lastname");
    const savedEmail = localStorage.getItem("email");
    const savedScore = localStorage.getItem("score");

    if (savedAvatar) setAvatar(savedAvatar);
    if (savedName) setName(savedName);
    if (savedLastName) setLastName(savedLastName);
    if (savedEmail) setEmail(savedEmail);
    if (savedScore) setScore(savedScore);
  }, []);

  const handleSaveChanges = () => {
    localStorage.setItem("avatar", avatar || "");
    localStorage.setItem("name", name);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("email", email);
    localStorage.setItem("score", score);
    alert("Información guardada correctamente");
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateUniqueId = (prefix: string = ""): string => {
    return `${prefix}${Date.now()}-${Math.floor(Math.random() * 10000)}`;
  };

  const courseData = {
    imageSrc: react,
    title: "Curso de React",
    description: "Aprende a crear aplicaciones con React",
    score: Reactscore,
    status: "Disponible",
    courseLink: "course",
  };

  const otherCourseData = [
    {
      imageSrc: js,
      title: "Curso de JavaScript",
      description: "Desarrollo de aplicaciones con JavaScript",
      score: "0/5",
      status: "Próximamente",
      courseLink: "2",
    },
    {
      imageSrc: nodejs,
      title: "Curso de NodeJs",
      description: "Desarrollo de APIs con NodeJs",
      score: "0/5",
      status: "Próximamente",
      courseLink: "/",
    },
  ];

  return (
    <div>
      <div className="flex flex-wrap py-10 px-5">
        <div className="w-1/2 p-5 flex justify-center items-center relative">
          <button
            className="h-full hover:bg-yellow-100"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {!imageError && avatar ? (
              <img
                src={avatar}
                alt="icono"
                onError={() => setImageError(true)}
                className="w-10/12 object-cover mx-auto rounded"
              />
            ) : (
              <FaRegUserCircle className="w-16 h-16 text-gray-500 mx-auto" />
            )}
          </button>
          {isHovered && (
            <span className="absolute top-full text-sm text-gray-700 bg-gray-200 p-2 rounded-lg shadow-lg pointer-events-none">
              Cambiar avatar
            </span>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
        </div>
        <div className="w-1/2 p-5 bg-yellow-100 shadow-xl rounded-lg">
          <h1 className="text-2xl font-semibold mb-2 text-center">
            Información del Usuario
          </h1>
          <h2 className="text-xl font-semibold mb-2 mx-1">Nombre/s</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 w-full rounded-lg px-2 py-1 border border-yellow-500"
            placeholder="Nombre"
          />
          <h2 className="text-xl font-semibold mb-2 mx-1">Apellido/s</h2>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            className="mb-4 w-full rounded-lg px-2 py-1 border border-yellow-500"
            placeholder="Apellido"
          />
          <h2 className="text-xl font-semibold mb-2 mx-1">Correo</h2>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full rounded-lg px-2 py-1 border border-yellow-500"
            placeholder="dominio@gmail.com"
          />
          <h2 className="text-xl font-semibold mb-2">Puntajes</h2>
          <p className="mb-4 px-2 py-1 text-lg font-semibold">{score}</p>
          <button
            onClick={handleSaveChanges}
            className="text-black font-semibold py-2 px-4 w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-lg text-center bg-yellow-300 dark:hover:bg-yellow-500 hover:text-black dark:focus:ring-primary-800"
          >
            Guardar cambios
          </button>
        </div>
      </div>
      <div className="py-5">
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
