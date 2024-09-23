import React from "react";
import { useTranslation } from "react-i18next";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  score: string;
  status: string;
  courseLink: string;
}

const Cards: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  score,
  status,
  courseLink,
}) => {
  const { t } = useTranslation("cards");

  const handleNavigation = (path: string) => {
    window.location.pathname = path;
  };

  return (
    <div className="flex flex-col px-1 py-1 w-1/3 rounded-lg hover:bg-yellow-100 border-double border-black">
      <img
        className="mx-auto object-cover w-full h-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={imageSrc}
        alt={`Imagen del curso ${title}`}
      />
      <div className="flex flex-col justify-between p-3 leading-normal w-full">
        <h5 className="mb-2 text-lg font-semibold tracking-tight text-black-900">
          {title}
        </h5>
        <p className="mb-2 font-normal text-black-100 dark:text-black-500">
          {description}
        </p>
        <p className="mb-2 font-normal text-black-100 dark:text-black-500">
          <b className="font-semibold">Puntaje:</b> {score}
        </p>
        <p className="mb-2 font-normal text-black-100 dark:text-black-500">
          <b className="font-semibold">Estado:</b> {status}{" "}
        </p>
        <button
          onClick={() => handleNavigation(courseLink)}
          className="w-full mx-auto text-black font-semibold py-1 px-2 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg bg-yellow-300 dark:hover:bg-yellow-500 hover:text-black dark:focus:ring-primary-800"
        >
          Empezar curso
        </button>
      </div>
    </div>
  );
};

export default Cards;
