import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      <div className="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
        {/* Card 1 */}
        <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          {/* Image */}
          <img
            className="h-40 object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
          <div className="p-2">
            {/* Heading */}
            <h2 className="font-bold text-lg mb-2">Asignaturas</h2>
            {/* Description */}
            <p className="text-sm text-gray-600">
              Simple Yet Beautiful Card Design with Tailwind CSS. Subscribe to
              our Youtube channel for more ...
            </p>
          </div>
          {/* CTA */}
          <div className="m-2">
            <Link to='/FileDropzone'
              role="button"
              href="#"
              className="text-white bg-purple-600 px-3 py-1 rounded-md hover:bg-purple-700"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          {/* Image */}
          <img
            className="h-40 object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
          <div className="p-2">
            {/* Heading */}
            <h2 className="font-bold text-lg mb-2">Maestros</h2>
            {/* Description */}
            <p className="text-sm text-gray-600">
              Simple Yet Beautiful Card Design with Tailwind CSS. Subscribe to
              our Youtube channel for more ...
            </p>
          </div>
          {/* CTA */}
          <div className="m-2">
            <Link to='#'
              role="button"
              href="#"
              className="text-white bg-sky-500 px-3 py-1 rounded-md hover:bg-purple-700"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          {/* Image */}
          <img
            className="h-40 object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
          <div className="p-2">
            {/* Heading */}
            <h2 className="font-bold text-lg mb-2">Alumnos</h2>
            {/* Description */}
            <p className="text-sm text-gray-600">
              Simple Yet Beautiful Card Design with Tailwind CSS. Subscribe to
              our Youtube channel for more ...
            </p>
          </div>
          {/* CTA */}
          <div className="m-2">
            <Link to='#'
              role="button"
              href="#"
              className="text-white bg-green-500 px-3 py-1 rounded-md hover:bg-purple-700"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          {/* Image */}
          <img
            className="h-40 object-cover rounded-xl"
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt=""
          />
          <div className="p-2">
            {/* Heading */}
            <h2 className="font-bold text-lg mb-2">Concetrado</h2>
            {/* Description */}
            <p className="text-sm text-gray-600">
              Simple Yet Beautiful Card Design with Tailwind CSS. Subscribe to
              our Youtube channel for more ...
            </p>
          </div>
          {/* CTA */}
          <div className="m-2">
            <Link to='#'
              role="button"
              href="#"
              className="text-white bg-yellow-500 px-3 py-1 rounded-md hover:bg-purple-700"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
