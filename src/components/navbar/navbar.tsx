import React, { useEffect, useState } from "react";

import { AUTH_KEY } from "../../utils/constants/Storage.Constants";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleNavigation = (path: string) => {
    window.location.pathname = path;
  };

  const checkLoginStatus = () => {
    const loginInfo = localStorage.getItem(AUTH_KEY);
    setIsLoggedIn(!!loginInfo);
  };

  useEffect(() => {
    checkLoginStatus();
    const handleStorageChange = () => {
      checkLoginStatus();
    };
    if (localStorage.getItem("rol") === null) {
      localStorage.setItem("rol", "Student");
    }
    window.addEventListener("sessionUpdated", handleStorageChange);
    return () => {
      window.removeEventListener("sessionUpdated", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem(AUTH_KEY);
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="dark:bg-yellow-100 p-5">
      <div className="container-screen flex justify-between items-center px-2">
        <div className="text-yellow-300 font-bold text-4xl italic">
          <button onClick={() => handleNavigation("/")}>SkillForge</button>
        </div>
        <div className="hidden md:flex space-x-4">
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => handleNavigation("/")}
                className="text-black  py-2 text-lg font-semibold hover:underline underline-offset-2"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("/about")}
                className="text-black  py-2 text-lg font-semibold hover:underline underline-offset-2"
              >
                About us
              </button>
              <button
                onClick={() => handleNavigation("/login")}
                className="text-black font-semibold py-2 px-4 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-lg text-center bg-yellow-300 dark:hover:bg-yellow-500 dark:focus:ring-primary-800"
              >
                Login
              </button>
              <button
                onClick={() => handleNavigation("/register")}
                className="text-black font-semibold py-2 px-4 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-lg text-center bg-yellow-300 dark:hover:bg-yellow-500 hover:text-black dark:focus:ring-primary-800"
              >
                Register
              </button>
            </>
          ) : (
            <div className="hidden md:flex space-x-4">
              <button
                onClick={() => handleNavigation("/")}
                className="text-black hover:decoration-2 hover:underline-offset-4 hover:underline hover:decoration-solid py-2 text-lg font-semibold"
              >
                Cursos
              </button>
              <button
                onClick={() => handleNavigation("virtuallibrary")}
                className="text-black hover:decoration-2 hover:underline-offset-4 hover:underline hover:decoration-solid py-2 text-lg font-semibold"
              >
                Biblioteca Virtual
              </button>
              <button
                onClick={() => handleNavigation("support")}
                className="text-black hover:decoration-2 hover:underline-offset-4 hover:underline hover:decoration-solid py-2 text-lg font-semibold"
              >
                Apoyo
              </button>
              <button onClick={toggleMenu} className="text-white">
                <FaBars className="w-6 h-6 text-black" />
              </button>
              {isOpen && (
                <div className="absolute right-5 w-48 mt-10 y-2 p-1 bg-yellow-200 rounded-lg shadow-lg ">
                  <ul className="space-y-2">
                    <li>
                      <button
                        onClick={handleLogout}
                        className="text-black w-full p-1 dark:hover:bg-yellow-500"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none px-1 py-1"></button>
        </div>
      </div>
    </nav>
  );
}
