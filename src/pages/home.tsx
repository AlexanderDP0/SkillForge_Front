import React from "react";

export default function Home() {
  return (
    <div className="px-10 py-5 flex flex-col divide-gray-900 divide-y">
      <div>
        <h1 className="text-black font-bold text-5xl pt-5 italic">
          Forjando habilidades tecnologicas para un mercado competitivo
        </h1>
        <p className="pt-10 w-2/3 text-xl font-thin">
          <b className="font-bold text-yellow-400">SkillForge</b> es una
          herramienta destinada a otorgar a sus usuarios herramientas de
          aprendizaje para reforzar sus conocimientos o adquirir nuevos y que
          tengan lo necesario para la industria laboral
        </p>
        <div className="py-5">
          <button className="text-black font-semibold py-2 px-4 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-lg text-center bg-yellow-300 dark:hover:bg-yellow-500 dark:focus:ring-primary-800">
            Mas informacion
          </button>
        </div>
        <img src="" alt="Logo" />
      </div>
      <div>
        <h1 className="text-black font-semibold text-4xl pt-5">
          Podras aprender herramientas como
        </h1>
        <div className="flex justify-center flex-wrap gap-4 pt-4">
          <div className="w-96">
            <a href="">
              <img src="../../assets/react.png" alt="React Logo" />
              <h1 className="text-black font-bold text-lg font-semibold">
                React
              </h1>
              <p className="text-gray-800 text-lg">
                React es una biblioteca de código abierto que se utiliza para
                crear interfaces de usuario y facilitar el desarrollo de
                aplicaciones web.
              </p>
            </a>
          </div>
          <div className="w-96">
            <a href="">
              <img src="" alt="img JavaScript" />
              <h1 className="text-black font-bold text-lg font-semibold">
                JavaScript
              </h1>
              <p className="text-gray-800 text-lg">
                JavaScript es un lenguaje de programación que se utiliza para
                hacer páginas web interactivas. Es una de las tres tecnologías
                web principales.
              </p>
            </a>
          </div>
          <div className="w-96">
            <a href="">
              <img src="" alt="img Node Js" />
              <h1 className="text-black font-bold text-lg font-semibold">
                Node Js
              </h1>
              <p className="text-gray-800 text-lg">
                Node.js es un entorno de código abierto que permite a los
                desarrolladores crear toda clase de herramientas del lado del
                servidor.
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-wrap gap-4 py-10">
        <div className="w-2/6 flex flex-col divide-yellow-300 divide-y">
          <h1 className="text-black font-semibold text-4xl pt-5 italic">
            Tendras acceso a
          </h1>
          <div>
            <h1 className="text-black font-semibold text-lg">
              Lecciones de aprendizaje
            </h1>
            <p className="text-gray-800 text-lg">
              Cada herramienta cuenta con llecciones teoricas y practicas para
              comprender correctamente los temas
            </p>
          </div>
          <div>
            <h1 className="text-black font-semibold text-lg">
              Videos de apoyo
            </h1>
            <p className="text-gray-800 text-lg">
              Contamos con videos de apoyo para complementar el aprendizaje y
              comprension de los temas
            </p>
          </div>
          <div>
            <h1 className="text-black font-semibold text-lg">
              Biblioteca virtual
            </h1>
            <p className="text-gray-800 text-lg">
              Tendras acceso a libros, articulos y herramientas teoricas para
              ampliar tu aprendizaje de cada tema visto en las lecciones
            </p>
          </div>
        </div>
        <div className="w-3/6">
          <img src="" alt="imagen bonita" />
        </div>
      </div>
      <div>
        <h1 className="text-black font-semibold text-4xl pt-5 italic">
          Adentrate a conocer nuevas tecnologias y herramientas
        </h1>
        <div className="flex justify-center flex-wrap gap-4 py-10">
          <div className="w-5/12">
            <img src="" alt="img1" />
            <h1 className="text-black font-semibold text-lg">
              Cursos y lecciones
            </h1>
            <p className="text-gray-800 text-lg">
              Tendras acceso a los cursos cuando quieras y en donde quieras, con
              lecciones de aprendizaje progresivas y con la opcion de guardar tu
              prograso y continuar cuando quieras.
            </p>
          </div>
          <div className="w-5/12">
            <img src="" alt="img2" />
            <h1 className="text-black font-semibold text-lg">
              Material de apoyo
            </h1>
            <p className="text-gray-800 text-lg">
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
          <div className="w-96 bg-yellow-400 p-2">
            <p className="text-black font-semibold text-base">
              "La mente es como un paracaidas: sólo funciona si se abre"
            </p>
            <div className="flex flex-wrap gap-4">
              <img src="" alt="AE" />
              <p className="text-black text-sm">Albert Einstein</p>
            </div>
          </div>
          <div className="w-96 bg-yellow-400 p-2">
            <p className="text-black font-semibold text-base">
              "Intenta aprender algo sobre todo y todo sobre algo"
            </p>
            <div className="flex flex-wrap gap-4">
              <img src="" alt="TH" />
              <p className="text-black text-sm">Thomas Huxley</p>
            </div>
          </div>
          <div className="w-96 bg-yellow-400 p-2">
            <p className="text-black font-semibold text-base">
              "Ningún viento es favorable para el que no sabe donde va."
            </p>
            <div className="flex flex-wrap gap-4">
              <img src="" alt="S" />
              <p className="text-black text-sm">Seneca</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
