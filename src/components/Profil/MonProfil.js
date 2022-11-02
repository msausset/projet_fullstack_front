import React from "react";
import monkeyMonProfil from "../../images/monkey-mon-profil.gif";
import plus from "../../images/Plus.png";
import horloge from "../../images/horloge.png";
import { Link } from "react-router-dom";

const MonProfil = () => {
  return (
    <div className=" p-[5vw] min-h-screen">
      {/* ---------------------------------------------------------------------------------------------------------- DIV FLEX POUR MENU ET INFORMATIONS UTILISATEUR  */}

      <div className="flex w-[60vw] m-auto h-[15vw] mb-[25vw]">
        {/* ---------------------------------------------------------------------------------------------------------- DIV DROITE FLEXBOX */}

        <div className="bg-white w-[25vw] rounded-md opacity-95 pt-20">
          <div className="text-2xl pb-10 flex place-items-center">
            {/* ---------------------------------------------------------------------------------------------------------- SOUS MENU MES ANNONCES */}

            <div className="ml-5">
              <img src={horloge} className="w-[1.8vw]" alt="" />
            </div>
            <div className="ml-5">
              <Link to="/liste-annonces" className="hover:underline">
                Mes annonces
              </Link>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- SOUS MENU CREATION EDITION ANNONCE */}

          <div className="text-2xl pb-10 flex place-items-center">
            <div className="ml-5">
              <img src={plus} className="w-[2vw]" alt="" />
            </div>
            <div className="ml-5">
              <Link to="/edition-creation-annonce" className="hover:underline">
                Créer une annonce
              </Link>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------------------------------------------------- DIV GAUCHE FLEXBOX */}

        <div className="rounded-md w-full bg-white pb-10 min-h-[20vw] m-auto text-center pt-10 opacity-95">
          <div className="h-[10vw] rounded-full border border-4 border-black w-[10vw] m-auto">
            {/* ---------------------------------------------------------------------------------------------------------- DIV IMAGE PHOTO DE PROFIL ENTOURÉ BORDER */}
            <img
              src={monkeyMonProfil}
              alt="monkeyMonProfil"
              className="w-[9vw] m-auto"
            />
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV INFORMATIONS GENERALES */}

          <div className="mt-5 border border-2 border-black rounded-full w-[15vw] m-auto">
            <span className="text-lg">Informations générales</span>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV NOM */}

          <div className="mt-5 w-3/4 m-auto h-[2vw] flex border border-0 border-b border-t">
            <div className="m-auto">
              <span>Nom</span>
            </div>
            <div className="m-auto">
              <span>NOM ICI</span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV PRÉNOM */}

          <div className="w-3/4 m-auto h-[2vw] flex border border-0 border-b">
            <div className="m-auto">
              <span>Prénom</span>
            </div>
            <div className="m-auto">
              <span>PRÉNOM ICI</span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV COORDONNÉES */}

          <div className="mt-5 border border-2 border-black rounded-full w-[15vw] m-auto">
            <span className="text-lg">Coordonnées</span>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV MAIL */}

          <div className="mt-5 w-3/4 m-auto h-[2vw] flex border border-0 border-b border-t">
            <div className="m-auto">
              <span>Mail</span>
            </div>
            <div className="m-auto">
              <span>MAIL ICI</span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV TÉLÉPHONE */}

          <div className="w-3/4 m-auto h-[2vw] flex border border-0 border-b">
            <div className="m-auto">
              <span>Téléphone</span>
            </div>
            <div className="m-auto">
              <span>TÉLÉPHONE ICI</span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV ADRESSE */}

          <div className="w-3/4 m-auto h-[2vw] flex border border-0 border-b">
            <div className="m-auto">
              <span>Adresse</span>
            </div>
            <div className="m-auto">
              <span>ADRESSE ICI</span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV CODE POSTAL */}

          <div className="w-3/4 m-auto h-[2vw] flex border border-0 border-b">
            <div className="m-auto">
              <span>Code postal</span>
            </div>
            <div className="m-auto">
              <span>CODE POSTAL ICI</span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV VILLE */}

          <div className="w-3/4 m-auto h-[2vw] flex border border-0 border-b">
            <div className="m-auto">
              <span>Ville</span>
            </div>
            <div className="m-auto">
              <span>VILLE ICI</span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV PAYS */}

          <div className="w-3/4 m-auto h-[2vw] flex border border-0 border-b">
            <div className="m-auto">
              <span>Pays</span>
            </div>
            <div className="m-auto">
              <span>PAYS ICI</span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV BOUTON */}

          <div className="mt-10">
            {/* ---------------------------------------------------------------------------------------------------------- BOUTON MODIFIER INFORMATIONS */}
            <button className="border-solid h-[2vw] w-1/3 rounded-full bg-yellow-400 hover:underline hover:opacity-90">
              Modifier
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonProfil;
