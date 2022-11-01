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

        <p className="text-4xl text-center pt-10 mb-5 font-bold">Bienvenue !</p>

        {/* ------------------------------------------------------------------------------------------------ DEBUT PAGE ACCUEIL */}

        <div className="text-2xl m-auto w-[40vw] text-center underline">
          <p>Qui sommes-nous ?</p>
        </div>

        {/* ------------------------------------------------------------------------------------------------ PRESENTATION ENTREPRISE  */}

        <div className="text-lg text-justify m-auto w-[40vw] mt-10">
          Depuis 10 ans, nous sommes spécialisés dans la mise en relation et
          l'accompagnement entre particuliers pour la vente de leurs biens !
          Pour garantir la sécurité de tous, nous proposons une assurance.
        </div>

        {/* ------------------------------------------------------------------------------------------------ GRILLE 2 COLONNES */}

        <div className="text-md m-auto w-[40vw] mt-10 grid grid-cols-2 grid-rows-2 items-center">
          {/* ------------------------------------------------------------------------------------------------ LOGO ENTREPRISE */}

          <div>
            <img alt="logo" className="w-[10vw]" src={logo} />
          </div>

          {/* ------------------------------------------------------------------------------------------------ POURQUOI METTRE ANNONCE CHEZ NOUS */}

          <div>
            <p className="font-bold">
              Pourquoi poster votre annonce chez nous ?
            </p>
          </div>

          {/* ------------------------------------------------------------------------------------------------ ICONE PAIEMENT */}

          <div>
            <div className="pb-5 mr-10">
              <img alt="paiement" className="w-[2vw] ml-auto" src={paiement} />
            </div>

            {/* ------------------------------------------------------------------------------------------------ ICONE ASSURANCE */}

            <div className="pb-5 mr-10">
              <img
                alt="assurance"
                className="w-[2vw] ml-auto"
                src={assurance}
              />
            </div>

            {/* ------------------------------------------------------------------------------------------------ ICONE PLATEFORME */}

            <div className="pb-5 mr-10">
              <img
                alt="plateforme"
                className="w-[2vw] ml-auto"
                src={plateforme}
              />
            </div>

            {/* ------------------------------------------------------------------------------------------------ ICONE MEDAILLE */}

            <div className="pb-5 mr-10">
              <img alt="first" className="w-[2vw] ml-auto" src={first} />
            </div>
          </div>

          {/* ------------------------------------------------------------------------------------------------ 1ERE RAISON */}

          <div>
            <div className="pb-7">
              <p>Payez en toute tranquilité</p>
            </div>

            {/* ------------------------------------------------------------------------------------------------ 2EME RAISON */}

            <div className="pb-7">
              <p>Une assurance contre le vol</p>
            </div>

            {/* ------------------------------------------------------------------------------------------------ 3EME RAISON */}

            <div className="pb-7">
              <p>Une plateforme professionnelle</p>
            </div>

            {/* ------------------------------------------------------------------------------------------------ 4EME RAISON */}

            <div className="pb-7">
              <p>Parce que nous sommes les meilleurs ! 😎</p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------------ PRESENTATION EQUIPE */}

        <div className="mt-10">
          <p className="text-center text-2xl font-bold underline">
            Notre équipe
          </p>
        </div>

        {/* ------------------------------------------------------------------------------------------------ GRILLE 2 COLONNES SUR 3 LIGNES */}

        <div class="w-[30vw] grid grid-rows-3 grid-flow-col gap-4 m-auto mt-20">
          {/* ------------------------------------------------------------------------------------------------ 2 LIGNES POUR L'ANIMOJI SADIO  */}

          <div class="row-span-2">
            <img src={sadio} alt="" className="w-[8vw] m-auto" />
          </div>

          {/* ------------------------------------------------------------------------------------------------ PRENOM SADIO */}

          <div class="text-center text-2xl font-bold">Sadio</div>

          {/* ------------------------------------------------------------------------------------------------ 2 LIGNES POUR L'ANIMOJI SAVIO */}

          <div class="row-span-2">
            <img src={savio} alt="" className="w-[8vw] m-auto" />
          </div>

          {/* ------------------------------------------------------------------------------------------------ PRENOM SAVIO */}

          <div class="text-center text-2xl font-bold">Savio</div>
        </div>

        {/* ------------------------------------------------------------------------------------------------ FIN GRILLE PREMIERE PARTIE */}
        {/* ------------------------------------------------------------------------------------------------ GRILLE SUR 3 LIGNES ET 3 COLONNES */}

        <div class="w-[30vw] grid grid-rows-3 grid-flow-col gap-4 m-auto mt-20">
          {/* ------------------------------------------------------------------------------------------------ 2 LIGNES POUR L'ANIMOJI VIVERK  */}

          <div class="row-span-2">
            <img src={viverk} alt="" className="w-[10vw] m-auto" />
          </div>

          {/* ------------------------------------------------------------------------------------------------ PRENOM VIVERK */}

          <div class="text-center text-2xl font-bold">Viverk</div>

          {/* ------------------------------------------------------------------------------------------------ 2 LIGNES POUR L'ANIMOJI CYNTHIA */}

          <div class="row-span-2">
            <img src={cynthia} alt="" className="w-[8vw] m-auto" />
          </div>

          {/* ------------------------------------------------------------------------------------------------ PRENO CYNTHIA */}

          <div class="text-center text-2xl font-bold">Cynthia</div>

          {/* ------------------------------------------------------------------------------------------------ 2 LIGNES POUR L'ANIMOJI MAXIME */}

          <div class="row-span-2">
            <img src={maxime} alt="" className="w-[9vw] m-auto" />
          </div>

          {/* ------------------------------------------------------------------------------------------------ PRENOM MAXIME */}

          <div class="text-center text-2xl font-bold">Maxime</div>
        </div>

        {/* ------------------------------------------------------------------------------------------------ BORDURE POINTILLÉ */}

        <div className="border-b-2 border-slate-300 border-dashed"></div>

        {/* ------------------------------------------------------------------------------------------------ DECOUVREZ ANNONCES */}

        <div className="text-center mt-20 text-2xl font-bold">
          Découvrez nos annonces
        </div>

        {/* ------------------------------------------------------------------------------------------------ BOUTON DÉCOUVRIR */}

        <div className="mt-20 pb-20 text-center">
          <button className="h-[3vw] w-1/3 rounded-full bg-red-400 hover:opacity-90 ">
            <Link to="/annonces">Je découvre</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
