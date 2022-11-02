import React, { useState } from "react";
import monkeyMonProfil from "../../images/monkey-mon-profil.gif";
import plus from "../../images/Plus.png";
import horloge from "../../images/horloge.png";
import { Link } from "react-router-dom";

const MonProfil = () => {
  const [nom, setNom] = useState("NOM ICI");
  const [prenom, setPrenom] = useState("PRÉNOM ICI");
  const [mail, setMail] = useState("MAIL ICI");
  const [telephone, setTelephone] = useState("TÉLÉPHONE ICI");
  const [adresse, setAdresse] = useState("ADRESSE ICI");
  const [ville, setVille] = useState("VILLE ICI");
  const [codePostal, setCodepostal] = useState("CODE POSTAL ICI");
  const [pays, setPays] = useState("PAYS ICI");
  const [isClicked, setIsClicked] = useState(false);

  // FONCTION PERMETTANT DE CHANGER LE BOUTON ET LES CLASSES DES SPANS ET INPUTS 

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
  };

  // FONCTION DE SOUMISSION DE FORMULAIRE

  const handleClickAgain = (e) => {
    e.preventDefault();
    setIsClicked(false);
  };

  return (
    <div className=" p-[5vw] min-h-screen">
      {/* ---------------------------------------------------------------------------------------------------------- DIV FLEX POUR MENU ET INFORMATIONS UTILISATEUR  */}

      <div className="flex w-[60vw] m-auto h-[15vw] mb-[25vw]">
        {/* ---------------------------------------------------------------------------------------------------------- DIV DROITE FLEXBOX */}

        <div className="bg-white w-[25vw] rounded-l-md opacity-95 pt-20">
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

        <div className="w-full rounded-r-md rounded-b-md bg-white pb-10 min-h-[20vw] m-auto text-center pt-10 opacity-95">
          <div className="h-[10vw] rounded-full border border-4 border-black w-[10vw] m-auto">
            {/* ---------------------------------------------------------------------------------------------------------- DIV IMAGE PHOTO DE PROFIL ENTOURÉ BORDER */}
            <img
              src={monkeyMonProfil}
              alt="monkeyMonProfil"
              className="w-[9vw] m-auto"
            />
          </div>

          <form action="" onSubmit={handleClickAgain}>

          {/* ---------------------------------------------------------------------------------------------------------- DIV INFORMATIONS GENERALES */}

          <div className="mt-5 border border-2 border-black rounded-full w-[15vw] m-auto">
            <span className="text-lg">Informations générales</span>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV NOM */}

          <div className="mt-5 w-3/4 m-auto h-[2vw] flex border border-0 border-b border-t">
            <div className="m-auto basis-1/2">
              <span>Nom</span>
            </div>
            <div className="m-auto basis-1/2">
              {/* ---------------------------------------------------------------------------- INPUT HIDDEN A AFFICHER LORS DU CLIC SUR BOUTON "MODIFIER" */}
              <input
                
                type="text"
                className={
                  isClicked
                    ? "border border-1 h-[1.5vw] rounded-full text-center focus:bg-slate-200 focus:border-black"
                    : "border border-1 h-[1.5vw] rounded-full text-center focus:bg-slate-200 hidden"
                }
                onChange={(e) => setNom(e.target.value)}
                value={nom}
              />
              <span name="spanHidden" className={isClicked ? "hidden" : ""}>
                {nom}
              </span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV PRÉNOM */}

          <div className="w-3/4 m-auto h-[2vw] flex border border-0 border-b">
            <div className="m-auto basis-1/2">
              <span>Prénom</span>
            </div>
            <div className="m-auto basis-1/2">
              {/* ----------------------------------------------------------------------------- INPUT HIDDEN A AFFICHER LORS DU CLIC SUR BOUTON "MODIFIER" */}
              <input
                
                type="text"
                className={
                  isClicked
                    ? "border border-1 h-[1.5vw] rounded-full text-center focus:bg-slate-200 focus:border-black"
                    : "border border-1 h-[1.5vw] rounded-full text-center focus:bg-slate-200 hidden"
                }
                onChange={(e) => setPrenom(e.target.value)}
                value={prenom}
              />
              <span name="spanHidden" className={isClicked ? "hidden" : ""}>
                {prenom}
              </span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV COORDONNÉES */}

          <div className="mt-5 border border-2 border-black rounded-full w-[15vw] m-auto">
            <span className="text-lg">Coordonnées</span>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV MAIL */}

          <div className="mt-5 w-3/4 m-auto h-[2vw] flex border border-0 border-b border-t">
            <div className="m-auto basis-1/2">
              <span>Mail</span>
            </div>
            <div className="m-auto basis-1/2">
              {/* ---------------------------------------------------------------------------------- INPUT HIDDEN A AFFICHER LORS DU CLIC SUR BOUTON "MODIFIER" */}
              <input
                
                type="text"
                className={
                  isClicked
                    ? "border border-1 h-[1.5vw] rounded-full text-center focus:bg-slate-200 focus:border-black"
                    : "border border-1 h-[1.5vw] rounded-full text-center focus:bg-slate-200 hidden"
                }
                onChange={(e) => setMail(e.target.value)}
                value={mail}
              />
              <span name="spanHidden" className={isClicked ? "hidden" : ""}>
                {mail}
              </span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV TÉLÉPHONE */}

          <div className="w-3/4 m-auto h-[2vw] flex border border-0 border-b">
            <div className="m-auto basis-1/2">
              <span>Téléphone</span>
            </div>
            <div className="m-auto basis-1/2">
              {/* ------------------------------------------------------------------------------------ INPUT HIDDEN A AFFICHER LORS DU CLIC SUR BOUTON "MODIFIER" */}
              <input
                
                type="text"
                className={
                  isClicked
                    ? "border border-1 h-[1.5vw] rounded-full text-center focus:bg-slate-200 focus:border-black"
                    : "border border-1 h-[1.5vw] rounded-full text-center focus:bg-slate-200 hidden"
                }
                onChange={(e) => setTelephone(e.target.value)}
                value={telephone}
              />
              <span name="spanHidden" className={isClicked ? "hidden" : ""}>
                {telephone}
              </span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV ADRESSE */}

          <div className="w-3/4 m-auto h-[2vw] flex border border-0 border-b">
            <div className="m-auto basis-1/2">
              <span>Adresse</span>
            </div>
            <div className="m-auto basis-1/2">
              {/* ----------------------------------------------------------------------------------------------------------- INPUT HIDDEN A AFFICHER LORS DU CLIC SUR BOUTON "MODIFIER" */}
              <input
                
                type="text"
                className={
                  isClicked
                    ? "border border-1 h-[1.5vw] rounded-full text-center focus:bg-slate-200 focus:border-black"
                    : "border border-1 h-[1.5vw] rounded-full text-center focus:bg-slate-200 hidden"
                }
                onChange={(e) => setAdresse(e.target.value)}
                value={adresse}
              />
              <span name="spanHidden" className={isClicked ? "hidden" : ""}>
                {adresse}
              </span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV CODE POSTAL */}

          <div className="w-3/4 m-auto h-[2vw] flex border border-0 border-b">
            <div className="m-auto basis-1/2">
              <span>Code postal</span>
            </div>
            <div className="m-auto basis-1/2">
              {/* ------------------------------------------------------------------------------------- INPUT HIDDEN A AFFICHER LORS DU CLIC SUR BOUTON "MODIFIER" */}
              <input
                
                type="text"
                className={
                  isClicked
                    ? "border border-1 h-[1.5vw] rounded-full text-center focus:bg-slate-200 focus:border-black"
                    : "border border-1 h-[1.5vw] rounded-full text-center focus:bg-slate-200 hidden"
                }
                onChange={(e) => setCodepostal(e.target.value)}
                value={codePostal}
              />
              <span name="spanHidden" className={isClicked ? "hidden" : ""}>
                {codePostal}
              </span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV VILLE */}

          <div className="w-3/4 m-auto h-[2vw] flex border border-0 border-b">
            <div className="m-auto basis-1/2">
              <span>Ville</span>
            </div>
            <div className="m-auto basis-1/2">
              {/* -------------------------------------------------------------------------------- INPUT HIDDEN A AFFICHER LORS DU CLIC SUR BOUTON "MODIFIER" */}
              <input
                
                type="text"
                className={
                  isClicked
                    ? "border border-1 h-[1.5vw] rounded-full text-center focus:bg-slate-200 focus:border-black"
                    : "border border-1 h-[1.5vw] rounded-full text-center focus:bg-slate-200 hidden"
                }
                onChange={(e) => setVille(e.target.value)}
                value={ville}
              />
              <span name="spanHidden" className={isClicked ? "hidden" : ""}>
                {ville}
              </span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV PAYS */}

          <div className="w-3/4 m-auto h-[2vw] flex border border-0 border-b">
            <div className="m-auto basis-1/2">
              <span>Pays</span>
            </div>
            <div className="m-auto basis-1/2">
              {/* ---------------------------------------------------------------------------------- INPUT HIDDEN A AFFICHER LORS DU CLIC SUR BOUTON "MODIFIER" */}
              <input
                
                type="text"
                className={
                  isClicked
                    ? "border border-1 h-[1.5vw] rounded-full text-center focus:bg-slate-200 focus:border-black"
                    : "border border-1 h-[1.5vw] rounded-full text-center focus:bg-slate-200 hidden"
                }
                onChange={(e) => setPays(e.target.value)}
                value={pays}
              />
              <span name="spanHidden" className={isClicked ? "hidden" : ""}>
                {pays}
              </span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV BOUTON */}

          <div className="mt-10">
            {/* ---------------------------------------------------------------------------------------------------------- BOUTON MODIFIER INFORMATIONS */}
                
                <button className={
                isClicked
                  ? "border-solid h-[2vw] w-1/3 rounded-full bg-yellow-400 hover:underline hover:opacity-90 hidden"
                  : "border-solid h-[2vw] w-1/3 rounded-full bg-yellow-400 hover:underline hover:opacity-90"
              } onClick={handleClick}>Modifier</button>
                <input type="submit" value="Valider modifications" className={
                isClicked
                  ? "border-solid h-[2vw] w-1/3 rounded-full bg-yellow-400 hover:underline hover:opacity-90"
                  : "border-solid h-[2vw] w-1/3 rounded-full bg-yellow-400 hover:underline hover:opacity-90 hidden"
              }/>
           
            {/* <button
            type="submit"
              className={
                isClicked
                  ? "border-solid h-[2vw] w-1/3 rounded-full bg-yellow-400 hover:underline hover:opacity-90 hidden"
                  : "border-solid h-[2vw] w-1/3 rounded-full bg-yellow-400 hover:underline hover:opacity-90"
              }
             
            >
              Modifier
            </button>
            <button
            type="submit"
              className={
                isClicked
                  ? "border-solid h-[2vw] w-1/3 rounded-full bg-yellow-400 hover:underline hover:opacity-90"
                  : "border-solid h-[2vw] w-1/3 rounded-full bg-yellow-400 hover:underline hover:opacity-90 hidden"
              }
              
            >
              Valider modifications
            </button> */}
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MonProfil;
