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

  // Obtén el Reactscore del localStorage o establece un valor por defecto si es null
  const Reactscore = localStorage.getItem("averageScore") || "0";

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
    score: Reactscore, // Asigna el valor directamente
    status: "Disponible",
    courseLink: "course",
  };

  const otherCourseData = [
    {
      imageSrc: js,
      title: "Curso de JavaScript",
      description: "Desarrollo de aplicaciones con JavaScript",
      score: "0",
      status: "Próximamente",
      courseLink: "2",
    },
    {
      imageSrc: nodejs,
      title: "Curso de NodeJs",
      description: "Desarrollo de APIs con NodeJs",
      score: "0",
      status: "Próximamente",
      courseLink: "/",
    },
  ];

  return (
    <div>
      {/* Contenido del componente... */}
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
