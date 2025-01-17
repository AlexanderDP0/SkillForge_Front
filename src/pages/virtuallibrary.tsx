import { Link } from "react-router-dom";
import React from "react";
import a from "../assets/a.png";

const VirtualLibrary: React.FC = () => {
  return (
    <div className="flex flex-row p-5">
      <aside className="w-1/5 pr-5 bg-white shadow-lg rounded-md">
        <h2 className="text-lg font-bold text-center py-3 border-b">Índice</h2>
        <ul className="list-none p-3">
          {[
            { title: "Introducción a React", link: "https://react.dev/learn" },
            {
              title: "Componentes",
              link: "https://react.dev/reference/rsc/server-components#noun-labs-1201738-(2)",
            },
            {
              title: "JSX",
              link: "/https://react.dev/learn/writing-markup-with-jsx",
            },
            {
              title: "Props y State",
              link: "https://react.dev/reference/react/Component#static-getderivedstatefromprops",
            },
            { title: "Hooks", link: "https://react.dev/reference/react/hooks" },
            {
              title: "Ciclo de vida",
              link: "https://react.dev/learn/lifecycle-of-reactive-effects",
            },
            {
              title: "Renderización condicional",
              link: "https://react.dev/learn/conditional-rendering",
            },
            {
              title: "Listas y claves",
              link: "https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key",
            },
            {
              title: "useContext",
              link: "https://react.dev/reference/react/useContext",
            },
            {
              title: "Portales",
              link: "https://react.dev/reference/react-dom/createPortal",
            },
            {
              title: "Error Boundaries",
              link: "https://react.dev/reference/react/useTransition#displaying-an-error-to-users-with-error-boundary",
            },
            {
              title: "React Router",
              link: "https://react.dev/learn/start-a-new-react-project#nextjs-app-router",
            },
            {
              title: "Optimización de rendimiento",
              link: "https://react.dev/reference/react/hooks#performance-hooks",
            },
            {
              title: "React y TypeScript",
              link: "https://react.dev/learn/typescript",
            },
            {
              title: "React en producción",
              link: "https://react.dev/learn/start-a-new-react-project#production-grade-react-frameworks",
            },
          ].map((item, index) => (
            <li
              key={index}
              className="mb-3 flex items-center p-2 rounded cursor-pointer hover:bg-yellow-100 transition"
            >
              <Link to={item.link} className="flex items-center w-full">
                <div className="mr-2 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <img src={a} alt={`Ícono de ${item.title}`} />
                </div>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      <div className="w-4/5">
        <section className="mb-10">
          <h1 className="text-2xl font-bold">React Documentation</h1>
          <h2 className="text-yellow-500">What is React?</h2>
          <p className="text-yellow-500 mb-5">
            React is a JavaScript library for building user interfaces. It lets
            you compose complex UIs from small and isolated pieces of code
            called “components.”
          </p>
          <p>
            - React makes it painless to create interactive UIs. <br />- Design
            simple views for each state in your application, and React will
            efficiently update and render just the right components when your
            data changes.
          </p>
          <p>
            - React was originally created by Facebook and is maintained as an
            open-source project. <br />- It uses a virtual DOM for better
            performance when updating the UI.
          </p>
        </section>

        <section className="mb-10">
          <h1 className="text-2xl font-bold">Key Concepts</h1>
          <h2 className="text-yellow-500">Components</h2>
          <p className="text-yellow-500 mb-5">
            Components are the building blocks of a React application’s UI.
            These components split the UI into independent, reusable pieces that
            can be processed separately.
          </p>
          <p>
            - Functional components are JavaScript functions that return JSX.{" "}
            <br />- Class components extend the React.Component class and
            include additional features like state.
          </p>
          <h2 className="text-yellow-500 mt-5">State and Props</h2>
          <p className="text-yellow-500 mb-5">
            State and props are essential to managing data in React
            applications.
          </p>
          <p>
            - **State**: An object that holds data that can change over the
            lifecycle of a component. <br />- **Props**: Short for properties,
            these are read-only inputs passed to components to configure their
            behavior.
          </p>
        </section>

        <section>
          <h1 className="text-2xl font-bold">React Ecosystem</h1>
          <h2 className="text-yellow-500">Hooks</h2>
          <p className="text-yellow-500 mb-5">
            Hooks are functions that let you "hook into" React state and
            lifecycle features in functional components.
          </p>
          <p>
            - Common hooks include **useState** for state management and
            **useEffect** for managing side effects. <br />- Custom hooks allow
            developers to extract reusable logic from components.
          </p>
          <h2 className="text-yellow-500 mt-5">React Router</h2>
          <p className="text-yellow-500 mb-5">
            React Router is a library for routing in React applications.
          </p>
          <p>
            - It allows dynamic navigation, URL parameters, and nested routes.{" "}
            <br />- It helps create single-page applications with multiple
            views.
          </p>
          <h2 className="text-yellow-500 mt-5">React Developer Tools</h2>
          <p>
            - A browser extension that provides a debugging interface for React
            applications. <br />- It helps inspect component hierarchy, props,
            and state in real-time.
          </p>
        </section>
      </div>
    </div>
  );
};

export default VirtualLibrary;
