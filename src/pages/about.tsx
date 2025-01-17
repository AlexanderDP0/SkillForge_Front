import cursos from "../assets/laptop.png";
import js from "../assets/js.png";
import logo from "../assets/logo.jpg";
import material from "../assets/material.png";
import nodejs from "../assets/nodejs.png";
import react from "../assets/react.png";

export default function About() {
  return (
    <div className="px-10 py-5 flex flex-col divide-gray-900 divide-y">
      <h1 className="text-black font-bold text-6xl pt-5 italic">
        Acerca de nosotros
      </h1>
      <div>
        <p className="pt-10 w-2/3 text-2xl font-light ">
          <b className="font-bold text-yellow-400">SkillForge</b> - Forjando
          habilidades tecnologicas para un mercado competitivo
        </p>
        <img src={logo} alt="Logo" className="m-10 w-1/2 mx-auto rounded-lg" />
      </div>
      <div className="flex justify-center flex-wrap gap-4 py-10">
        <p className="text-justify pt-10 w-2/3 text-2xl font-light mx-auto m-10">
          SkillForge es una herramienta de aprendizaje dirigida principalmente
          para alumnos de la Universidad Autonoma de Aguascalientes, que estén
          cursando carreras que incluyan materias de programacion o más
          especificamente a estudiantes de la carrera de ingenieria en sistemas
          computacionales.
          <br />
          Esta plataforma incluye cursos didacticos para el aprendizaje, mejora
          o practica de algunas herramientas de programacion, tanto en el lado
          del Front-End como en el Back-End.
          <br />
          Tambien contamos con material de apoyo para el aprendizaje de cada
          tema, como lo pueden ser nuestra biblioteca virtual, acceso a foros y
          enlaces a videos de refuerzo de cada tema de las lecciones
          establecidas en cada curso.
          <br />
          Los cursos estan compuestos de varias lecciones, incluyendo teoria
          basica de cada tema y ejercicos practicos para una mejor comprension y
          aprendizaje de la informacion abarcada en cada leccion.
        </p>
      </div>
      <div>
        <div className="py-10">
          <div className="flex justify-center flex-wrap py-10">
            <div className="w-1/2">
              <img src={cursos} className="w-11/12 mx-auto" alt="img1" />
            </div>
            <div className="w-1/2">
              <img src={material} className="w-11/12 mx-auto" alt="img2" />
            </div>
          </div>
        </div>
        <p className="text-justify mx-auto pt-10 w-2/3 text-2xl font-light m-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
          delectus ipsam quaerat officia iusto blanditiis soluta ipsa. Atque,
          sapiente. Exercitationem quis iure sapiente neque cupiditate
          blanditiis alias? Impedit, adipisci a? Sed maiores, minus quas beatae
          eaque, ab aut repudiandae in voluptate, sit atque excepturi! Labore,
          reiciendis! Asperiores, incidunt nam! Ullam quod, nobis adipisci
          deleniti voluptate commodi consequatur? Fuga, facere debitis?
          Voluptates eligendi tempora velit voluptatibus ratione ab, rem vitae!
          Facilis maxime, earum dicta reiciendis expedita cumque! Facere,
          dignissimos veniam fuga esse libero vitae cumque dolore suscipit
          veritatis nulla voluptate beatae? Autem provident quae voluptates
          asperiores iste tempora voluptatum ducimus, ea fugiat sequi dolore
          esse. Nostrum sint porro repellendus perferendis a iste? Dolore, rem
          a. Esse et nesciunt quisquam earum veniam. Et eaque maxime nemo
          architecto, aut commodi doloribus cumque labore voluptates, ratione
          autem non similique at eligendi, excepturi minus expedita repellendus
          optio adipisci error. Cumque corporis voluptatum nulla pariatur nemo.
        </p>
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
                  hacer páginas web interactivas. Es una de las tres tecnologías
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
      </div>
    </div>
  );
}
