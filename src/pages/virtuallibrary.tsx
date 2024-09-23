import React from "react";

const VirtualLibrary: React.FC = () => {
  return (
    <div className="flex flex-row p-5">
      <aside className="w-1/5 pr-5">
        <ul className="list-none p-0">
          {Array.from({ length: 15 }).map((_, index) => (
            <li
              key={index}
              className="mb-2 flex items-center p-2 rounded cursor-pointer hover:bg-yellow-100 transition"
              onClick={() => alert(`Clicked on item ${index + 1}`)} // Acción de click
            >
              <div className="mr-2 w-2.5 h-2.5 bg-yellow-300 rounded-full"></div>
              <span>List Item {index + 1}</span>
            </li>
          ))}
        </ul>
      </aside>

      <div className="w-4/5">
        <section className="mb-10">
          <h1 className="text-2xl font-bold">Titulo del documento</h1>
          <h2 className="text-yellow-500">
            Subheading for description or instructions
          </h2>
          <p className="text-yellow-500 mb-5">
            Body text for your whole article or post. We’ll put in some lorem
            ipsum to show how a filled-out page might look:
          </p>
          <p>
            Excepteur officia etsenim magna, minim veniam anim aute carefully
            curated. <br />
            Lorem Ipsum text...
          </p>
        </section>

        <section>
          <h1 className="text-2xl font-bold">Titulo</h1>
          <h2 className="text-yellow-500">
            Subheading for description or instructions
          </h2>
          <p className="text-yellow-500 mb-5">
            Body text for your whole article or post. We’ll put in some lorem
            ipsum to show how a filled-out page might look:
          </p>
          <p>
            Excepteur officia etsenim magna, minim veniam anim aute carefully
            curated. <br />
            Lorem Ipsum text...
          </p>
        </section>
      </div>
    </div>
  );
};

export default VirtualLibrary;
