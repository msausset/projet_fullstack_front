import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/LogoSite-noBG.png";
import paiement from "../images/paiement.png";
import assurance from "../images/assurance.png";
import plateforme from "../images/plateforme.png";
import first from "../images/first.png";
import maxime from "../images/maxime.png";
import sadio from "../images/sadio.png";
import savio from "../images/savio.png";
import cynthia from "../images/cynthia.png";
import viverk from "../images/viverk.png";

const Accueil = () => {
  return (
    <div>
      {/* ------------------------------------------------------------------------------------------------ DIV CENTRÉ SUR TOUTE LA HAUTEUR OPACITE 95 BG BLANC */}

      <div className="w-[60vw] min-h-screen m-auto shadow-2xl bg-white opacity-95">
        {/* ------------------------------------------------------------------------------------------------ MESSAGE BIENVENUE */}

        <p className="text-[2.5vw] text-center pt-[1.5vw] mb-[0.2vw] font-bold">Bienvenue !</p>

        {/* ------------------------------------------------------------------------------------------------ DEBUT PAGE ACCUEIL */}

        <div className="text-[1.5vw] m-auto w-[40vw] text-center underline">
          <p>Qui sommes-nous ?</p>
        </div>

        {/* ------------------------------------------------------------------------------------------------ PRESENTATION ENTREPRISE  */}

        <div className="text-[0.9vw] text-justify m-auto w-[40vw] mt-[1.5vw]">
          Depuis 10 ans, nous sommes spécialisés dans la mise en relation et
          l'accompagnement entre particuliers pour la vente de leurs biens !
          Pour garantir la sécurité de tous, nous proposons une assurance.
        </div>

        {/* ------------------------------------------------------------------------------------------------ GRILLE 2 COLONNES */}

        <div className="m-auto w-[40vw] mt-10 grid grid-cols-2 grid-rows-2 items-center">
          {/* ------------------------------------------------------------------------------------------------ LOGO ENTREPRISE */}

          <div>
            <img alt="logo" className="w-[10vw]" src={logo} />
          </div>

          {/* ------------------------------------------------------------------------------------------------ POURQUOI METTRE ANNONCE CHEZ NOUS */}

          <div>
            <p className="text-[0.8vw] font-bold">
              Pourquoi poster votre annonce chez nous ?
            </p>
          </div>

          {/* ------------------------------------------------------------------------------------------------ ICONE PAIEMENT */}

          <div>
            <div className="pb-[1vw] mr-[1.5vw]">
              <img alt="paiement" className="w-[2vw] ml-auto" src={paiement} />
            </div>

            {/* ------------------------------------------------------------------------------------------------ ICONE ASSURANCE */}

            <div className="pb-[1vw] mr-[1.5vw]">
              <img
                alt="assurance"
                className="w-[2vw] ml-auto"
                src={assurance}
              />
            </div>

            {/* ------------------------------------------------------------------------------------------------ ICONE PLATEFORME */}

            <div className="pb-[1vw] mr-[1.5vw]">
              <img
                alt="plateforme"
                className="w-[2vw] ml-auto"
                src={plateforme}
              />
            </div>

            {/* ------------------------------------------------------------------------------------------------ ICONE MEDAILLE */}

            <div className="pb-[1vw] mr-[1.5vw]">
              <img alt="first" className="w-[2vw] ml-auto" src={first} />
            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------------ 1ERE RAISON */}

          <div>
            <div className="pb-[1.5vw]">
              <p>Payez en toute tranquilité</p>
            </div>

            {/* ------------------------------------------------------------------------------------------------ 2EME RAISON */}

            <div className="pb-[1.5vw]">
              <p>Une assurance contre le vol</p>
            </div>

            {/* ------------------------------------------------------------------------------------------------ 3EME RAISON */}

            <div className="pb-[1.5vw]">
              <p>Une plateforme professionnelle</p>
            </div>

            {/* ------------------------------------------------------------------------------------------------ 4EME RAISON */}

            <div className="pb-[1.5vw] ">
              <p>Parce que nous sommes les meilleurs ! 😎</p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------------ PRESENTATION EQUIPE */}

        <div className="mt-[1.5vw]">
          <p className="text-center text-[1.5vw] font-bold underline">
            Notre équipe
          </p>
        </div>

        {/* ------------------------------------------------------------------------------------------------ GRILLE 2 COLONNES SUR 3 LIGNES */}

        <div className="w-[30vw] grid grid-rows-3 grid-flow-col gap-[1vw] m-auto mt-[3vw]">
          {/* ------------------------------------------------------------------------------------------------ 2 LIGNES POUR L'ANIMOJI SADIO  */}

          <div className="row-span-2">
            <img src={sadio} alt="" className="w-[15vw] m-auto" />
          </div>

          {/* ------------------------------------------------------------------------------------------------ PRENOM SADIO */}

          <div className="text-center text-[1.3vw] font-bold">Sadio</div>

          {/* ------------------------------------------------------------------------------------------------ 2 LIGNES POUR L'ANIMOJI SAVIO */}

          <div className="row-span-2">
            <img src={savio} alt="" className="w-[15vw] m-auto" />
          </div>

          {/* ------------------------------------------------------------------------------------------------ PRENOM SAVIO */}

          <div className="text-center text-[1.3vw] font-bold">Savio</div>
        </div>

        {/* ------------------------------------------------------------------------------------------------ FIN GRILLE PREMIERE PARTIE */}
        {/* ------------------------------------------------------------------------------------------------ GRILLE SUR 3 LIGNES ET 3 COLONNES */}

        <div className="w-[30vw] grid grid-rows-3 grid-flow-col gap-[1vw] m-auto mt-[3vw]">
          {/* ------------------------------------------------------------------------------------------------ 2 LIGNES POUR L'ANIMOJI VIVERK  */}

          <div className="row-span-2">
            <img src={viverk} alt="" className="w-[10vw] m-auto" />
          </div>

          {/* ------------------------------------------------------------------------------------------------ PRENOM VIVERK */}

          <div className="text-center text-[1.3vw] font-bold">Viverk</div>

          {/* ------------------------------------------------------------------------------------------------ 2 LIGNES POUR L'ANIMOJI CYNTHIA */}

          <div className="row-span-2">
            <img src={cynthia} alt="" className="w-[8vw] m-auto" />
          </div>

          {/* ------------------------------------------------------------------------------------------------ PRENOM CYNTHIA */}

          <div className="text-center text-[1.3vw] font-bold">Cynthia</div>

          {/* ------------------------------------------------------------------------------------------------ 2 LIGNES POUR L'ANIMOJI MAXIME */}

          <div className="row-span-2">
            <img src={maxime} alt="" className="w-[9vw] m-auto" />
          </div>

          {/* ------------------------------------------------------------------------------------------------ PRENOM MAXIME */}

          <div className="text-center text-[1.3vw] font-bold">Maxime</div>
        </div>

        {/* ------------------------------------------------------------------------------------------------ BORDURE POINTILLÉ */}

        <div className="border-b-[0.2vw] border-slate-300 border-dashed"></div>

        {/* ------------------------------------------------------------------------------------------------ DECOUVREZ ANNONCES */}

        <div className="text-center mt-[3.5vw] text-[1.2vw] font-bold">
          Découvrez nos annonces
        </div>

        {/* ------------------------------------------------------------------------------------------------ BOUTON DÉCOUVRIR */}

        <div className="mt-[3.5vw] pb-[3.5vw] text-center">
          <button className="h-[3vw] w-[15vw] rounded-full bg-red-400 hover:opacity-90 ">
            <Link to="/annonces">Je découvre</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
