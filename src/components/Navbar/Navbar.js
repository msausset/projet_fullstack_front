import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/LogoSite.png";
import accueil from "../../images/Accueil.png";
import boite from "../../images/Boite.png";
import deconnexion from "../../images/Deconnexion.png";
import compte from "../../images/CompteConnexion.png";
import connexion from "../../images/CompteConnexion.png";
import plus from "../../images/Plus.png";
import loupe from "../../images/loupe.png";

const Navbar = () => {
  const token = localStorage.getItem("token");

  return (
    // ----------------------------------------------------------------------------------------- NAVBAR

    <nav className="text-center bg-white drop-shadow-lg h-30">
      <div className="flex m-auto place-items-center place-content-center w-2/3">
        {/* ---------------------------------------------------------------------------------------- LOGO NAVBAR */}

        <img alt="logo" className="w-[7vw]" src={logo} />

        {/* ---------------------------------------------------------------------------------------- ONGLET ACCUEIL */}

        <Link
          to="/"
          className="grow border-solid border-l-2 hover:border-slate-400"
        >
          <div className="flex-wrap hover:underline hover:mt-5">
            <div className="-mt-5">
              <img
                alt="accueil"
                className="w-[2vw] h-[2vw] inline"
                src={accueil}
              />
            </div>
            <div className="mt-5">
              <p className="text-[1vw]">Accueil</p>
            </div>
          </div>
        </Link>

        {/* ---------------------------------------------------------------------------------------- ONGLET ANNONCES */}

        <Link
          to="/annonces"
          className="grow border-solid border-l-2 hover:border-slate-400"
        >
          <div className="flex-wrap hover:underline hover:mt-5">
            <div className="-mt-5">
              <img
                alt="annonce"
                className="w-[2vw] h-[2vw] inline"
                src={boite}
              />
            </div>
            <div className="mt-5">
              <p className="text-[1vw]">Annonces</p>
            </div>
          </div>
        </Link>

        {/* ---------------------------------------------------------------------------------------- ONGLET RECHERCHE */}

        <Link
          to="/recherche"
          className="grow border-solid border-l-2 hover:border-slate-400"
        >
          <div className="flex-wrap hover:underline hover:mt-5">
            <div className="-mt-5">
              <img
                alt="annonce"
                className="w-[1.6vw] h-[1.6vw] inline"
                src={loupe}
              />
            </div>
            <div className="mt-5">
              <p className="text-[1vw]">Recherche</p>
            </div>
          </div>
        </Link>

        {token ? (
          <>
            <Link
              to="/deconnexion"
              className="grow border-solid border-l-[0.15vw] hover:border-slate-400"
            >
              <div className="flex-wrap hover:underline hover:mt-[1vw]">
                <div className="-mt-[1vw]">
                  <img
                    alt="deconnexion"
                    className="w-[2vw] h-[2vw] inline"
                    src={deconnexion}
                  />
                </div>
                <div className="mt-[1vw]">
                  <p className="text-[1vw]">D??connexion</p>
                </div>
              </div>
            </Link>

            <Link
              to="/mon-profil"
              className="grow border-solid border-l-[0.15vw] hover:border-slate-400"
            >
              <div className="flex-wrap hover:underline hover:mt-[1vw]">
                <div className="-mt-[1vw]">
                  <img
                    alt="compte"
                    className="w-[2vw] h-[2vw] inline"
                    src={compte}
                  />
                </div>
                <div className="mt-[1vw]">
                  <p className="text-[1vw]">Mon compte</p>
                </div>
              </div>
            </Link>
          </>
        ) : (
          <Link
            to="/connexion"
            className="grow border-solid border-l-[0.15vw] hover:border-slate-400"
          >
            <div className="flex-wrap hover:underline hover:mt-[1vw]">
              <div className="-mt-[1vw]">
                <img
                  alt="connexion"
                  className="w-[2vw] h-[2vw] inline"
                  src={connexion}
                />
              </div>
              <div className="mt-[1vw]">
                <p className="text-[1vw]">Connexion</p>
              </div>
            </div>
        </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;