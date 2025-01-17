import React from "react";
import cursos from "../assets/cursos.png";
import einstein from "../assets/einstein.png";
import huxley from "../assets/huxley.png";
import js from "../assets/js.png";
import laptop from "../assets/laptop.png";
import logo from "../assets/logo.jpg";
import material from "../assets/material.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";
import seneca from "../assets/seneca.png";

export default function Home() {
  const handleNavigation = (path: string) => {
    window.location.pathname = path;
  };
  return (
    <div className="px-10 py-5 flex flex-col divide-gray-900 divide-y">
      <div>
        <h1 className="text-black font-bold text-6xl pt-5 italic">
          Forjando habilidades tecnologicas para un mercado competitivo
        </h1>
        <p className="pt-10 w-2/3 text-2xl font-light">
          <b className="font-bold text-yellow-400">SkillForge</b> es una
          herramienta destinada a otorgar a sus usuarios herramientas de
          aprendizaje para reforzar sus conocimientos o adquirir nuevos y que
          tengan lo necesario para la industria laboral
        </p>
        <div className="py-5">
          <button
            className="text-black font-semibold py-2 px-4 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-lg text-center bg-yellow-300 dark:hover:bg-yellow-500 dark:focus:ring-primary-800"
            onClick={() => handleNavigation("/about")}
          >
            Mas informacion
          </button>
        </div>
        <img src={logo} alt="Logo" className="m-10 w-1/2 mx-auto rounded-lg" />
      </div>
      <div>
        <h1 className="text-black font-semibold text-4xl pt-5">
          Podras aprender herramientas como
        </h1>
        <div className="flex justify-center flex-wrap pt-4">
          <div className="w-1/3 p-5">
            <a href="login">
              <img src={react} alt="React Logo" />
              <h1 className="text-black font-bold text-xl font-semibold">
                React
              </h1>
              <p className="text-gray-800 text-xl font-light">
                React es una biblioteca de código abierto que se utiliza para
                crear interfaces de usuario y facilitar el desarrollo de
                aplicaciones web.
              </p>
            </a>
          </div>
          <div className="w-1/3 p-5">
            <a href="login">
              <img src={js} alt="img JavaScript" />
              <h1 className="text-black font-bold text-xl font-semibold">
                JavaScript
              </h1>
              <p className="text-gray-800 text-xl font-light">
                JavaScript es un lenguaje de programación que se utiliza para
                hacer páginas web interactivas. Es una de las tres tecnologías
                web principales.
              </p>
            </a>
          </div>
          <div className="w-1/3 p-5">
            <a href="login">
              <img src={nodejs} alt="img Node Js" />
              <h1 className="text-black font-bold text-xl font-semibold">
                Node Js
              </h1>
              <p className="text-gray-800 text-xl font-light">
                Node.js es un entorno de código abierto que permite a los
                desarrolladores crear toda clase de herramientas del lado del
                servidor.
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-wrap py-10">
        <div className="w-2/6 flex flex-col divide-yellow-300 divide-y">
          <h1 className="text-black font-semibold text-5xl py-5 italic">
            Tendras acceso a
          </h1>
          <div className="py-10">
            <h1 className="text-black font-semibold text-2xl py-1">
              Lecciones de aprendizaje
            </h1>
            <p className="text-gray-800 text-xl my-auto font-light">
              Cada herramienta cuenta con lecciones teoricas y practicas para
              comprender correctamente los temas
            </p>
          </div>
          <div className="py-10">
            <h1 className="text-black font-semibold text-2xl py-1">
              Videos de apoyo
            </h1>
            <p className="text-gray-800 text-xl py-1 font-light">
              Contamos con videos de apoyo para complementar el aprendizaje y
              comprension de los temas
            </p>
          </div>
          <div className="py-10">
            <h1 className="text-black font-semibold text-2xl py-1">
              Biblioteca virtual
            </h1>
            <p className="text-gray-800 text-xl py-1 font-light">
              Tendras acceso a libros, articulos y herramientas teoricas para
              ampliar tu aprendizaje de cada tema visto en las lecciones
            </p>
          </div>
        </div>
        <div className="w-4/6">
          <img src={laptop} className="mx-auto h-full pl-5" alt="laptop" />
        </div>
      </div>
      <div className="py-10">
        <h1 className="text-black font-semibold text-4xl pl-10 pt-5 italic">
          Adentrate a conocer nuevas tecnologias y herramientas
        </h1>
        <div className="flex justify-center flex-wrap py-10">
          <div className="w-1/2">
            <img src={cursos} className="w-11/12 mx-auto" alt="img1" />
            <h1 className="text-black font-semibold text-lg mx-auto w-11/12 pt-5 pb-1">
              Cursos y lecciones
            </h1>
            <p className="text-gray-800 text-lg mx-auto w-11/12">
              Tendras acceso a los cursos cuando quieras y en donde quieras, con
              lecciones de aprendizaje progresivas y con la opcion de guardar tu
              prograso y continuar cuando quieras.
            </p>
          </div>
          <div className="w-1/2">
            <img src={material} className="w-11/12 mx-auto" alt="img2" />
            <h1 className="text-black font-semibold text-lg mx-auto w-11/12 pt-5 pb-1">
              Material de apoyo
            </h1>
            <p className="text-gray-800 text-lg mx-auto w-11/12">
              Al igual que los cursos tendras acceso al material de apoyo
              (videos complementarios y biblioteca virtual) en el momento que
              quieras de acuerdo con los requerimientos de tu curso.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-black font-semibold text-4xl pt-5 italic">
          El conocimiento sera tu mejor herramienta en la industria
        </h1>
        <div className="flex justify-center flex-wrap gap-4 py-10">
          <div className="w-96 bg-yellow-400 p-2 rounded">
            <p className="text-black font-bold text-base text-xl px-5 pt-5 pb-2 italic">
              "La mente es como un paracaidas: sólo funciona si se abre"
            </p>
            <div className="flex flex-wrap gap-4 py-5">
              <img src={einstein} className="pl-5" alt="AE" />
              <p className="text-black text-lg pl-1 my-auto  py-1">
                Albert Einstein
              </p>
            </div>
          </div>
          <div className="w-96 bg-yellow-400 p-2 rounded">
            <p className="text-black font-bold text-base text-xl px-5 pt-5 pb-2 italic">
              "Intenta aprender algo sobre todo y todo sobre algo"
            </p>
            <div className="flex flex-wrap gap-4 py-5">
              <img src={huxley} className="pl-5" alt="TH" />
              <p className="text-black text-lg my-auto pl-1">Thomas Huxley</p>
            </div>
          </div>
          <div className="w-96 bg-yellow-400 p-2 rounded">
            <p className="text-black font-bold text-base text-xl px-5 pt-5 pb-2 italic">
              "Ningún viento es favorable para el que no sabe donde va."
            </p>
            <div className="flex flex-wrap gap-4 py-5">
              <img src={seneca} className="pl-5" alt="S" />
              <p className="text-black text-lg my-auto pl-1">Seneca</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
