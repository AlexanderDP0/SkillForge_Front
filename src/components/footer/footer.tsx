import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { Link, To, useNavigate } from "react-router-dom";
import React, { Component } from "react";

import path from "path";
import uaa from "../../assets/uaa.png";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation("footer");

  const handleNavigation = (path: string) => {
    window.location.pathname = path;
  };

  const openExternalLink = (url: string | URL | undefined) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const socials = [
    {
      component: <BsFacebook size={20} color="black" />,
      path: "https://facebook.com",
    },
    {
      component: <BsTwitter size={20} color="black" />,
      path: "https://twitter.com",
    },
    {
      component: <BsInstagram size={20} color="black" />,
      path: "https://instagram.com",
    },
    {
      component: <BsLinkedin size={20} color="black" />,
      path: "https://linkedin.com",
    },
  ];
  return (
    <footer className="dark:bg-yellow-100 p-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-2">
        <div className="mb-4 md:mb-0">
          <p className="pt-10 w-2/3 text-xl font-light py-2">
            <b className="font-bold text-yellow-400">SkillForge</b> - Forjando
            habilidades tecnologicas para un mercado competitivo
          </p>
          <div className="flex flex-col md:flex-row space-y-2 md:space-x-4">
            {socials.map((social) => (
              <button
                onClick={() => openExternalLink(social.path)}
                rel="noopener noreferrer"
              >
                {social.component}
              </button>
            ))}
          </div>
        </div>
        <div className="flex space-x-4 mb-4 md:mb-0">
          <div>
            <h1 className="text-base font-bold pb-2">
              Proyecto realizado por:
            </h1>
            <p className="text-sm">Durán Plascencia Alejandro</p>
            <p className="text-sm">Garcia Chavez Mario Azael</p>
            <p className="text-sm">Gasca Rivera Guillermo Irving</p>
            <p className="text-sm">Noriega Villalobos Andres</p>
            <p className="text-sm">Rosas Aguillar Ariadna Judith</p>
            <p className="text-sm">Saucedo Valtierra Jared David</p>
          </div>
          <div>
            <img src={uaa} alt="UAA"></img>
          </div>
        </div>
      </div>
      <div className="text-center text-black mt-4">
        © 2024 Classroom. All rights reserved.
      </div>
    </footer>
  );
}
