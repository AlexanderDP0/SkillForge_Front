import React, { useEffect, useState } from "react";

import { AUTH_KEY } from "../../utils/constants/Storage.Constants";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMenuSignup, setshowMenuSignup] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const imageUrl = sessionStorage.getItem("avatar") || "/default-avatar.png";

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "sp" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

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

  const toggleMenuSignup = () => {
    setshowMenuSignup(!showMenuSignup);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="dark:bg-yellow-100 p-6">
      <div className="container-screen flex justify-between items-center px-2">
        <div className="text-yellow-300 font-bold text-4xl italic">
          SkillForge
        </div>
        <div className="hidden md:flex space-x-4">
          <button
            onClick={() => handleNavigation("/")}
            className="text-black hover:text-gray-200 py-2 text-lg font-bold"
          >
            Home
          </button>
          <button className="text-black hover:text-gray-200 py-2 text-lg font-bold">
            About
          </button>
          {!isLoggedIn ? (
            <>
              <button
                onClick={() => handleNavigation("/login")}
                className="text-black font-bold py-2 px-4 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-lg text-center bg-yellow-300 dark:hover:bg-yellow-500 dark:focus:ring-primary-800"
              >
                Login
              </button>
              <button
                onClick={() => handleNavigation("/register")}
                className="text-black font-bold py-2 px-4 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-lg text-center bg-yellow-300 dark:hover:bg-yellow-500 hover:text-black dark:focus:ring-primary-800"
              >
                Register
              </button>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="text-black font-bold py-2 px-4 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-lg text-center bg-yellow-300 dark:hover:bg-yellow-500 dark:focus:ring-primary-800"
            >
              Logout
            </button>
          )}
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none px-1 py-1"></button>
        </div>
      </div>
    </nav>
  );
}
