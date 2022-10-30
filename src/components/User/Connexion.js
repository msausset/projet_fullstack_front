import React from "react";
import { Link } from "react-router-dom";

const Connexion = () => {
  return (
    <div className="p-[5vw] min-h-screen">
      <div className="rounded-md bg-white w-1/3 min-h-[20vw] object-center m-auto shadow-2xl text-center pt-10">
        <p className="text-lg">Bonjour !</p>
        <p className="text-sm">
          Connectez-vous pour accéder à toutes les fonctionnalités.
        </p>

       {/* ------------------------------------------------------------------------------------------------------ GRILLE POUR LES INPUTS   */}

        <div className="grid grid-cols-2 grid-rows-2 pt-10">

      {/* ------------------------------------------------------------------------------------------------------- DIV EMAIL */}

          <div className="col-span-2 mb-10">
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <input type="text" id="email" className="rounded-full w-3/4" />
            </div>
          </div>

        {/* --------------------------------------------------------------------------------------------------------- DIV MDP */}

          <div className="col-span-2">
            <div>
              <label htmlFor="email">Mot de passe</label>
            </div>
            <div>
              <input type="text" id="mdp" className="rounded-full w-3/4" />
            </div>

        {/* --------------------------------------------------------------------------------- DIV FLEX POUR REINITIALISATION ET INSCRIPTION SUR LA MEME LIGNE */}

            <div className="flex">
              <div className="w-[4.5vw]"></div>
            <div className="text-xs w-[9vw] text-right pt-2 hover:text-blue-600">
              <Link to="/reinitialisation-mdp">Mot de passe oublié ?</Link>
            </div>
            <div className="text-xs text-right pt-2 w-[18vw] ">
              <span>Pas encore inscrit ? <Link to="/inscription" className="hover:text-blue-900">Inscrivez-vous</Link></span>
            </div>
            <div className="w-[5vw]"></div>
            </div>
          </div>

        {/* ------------------------------------------------------------------------------------------------------------------------- BOUTON CONNEXION */}

          <div className="mb-10 col-span-2 mt-10">
            <button className="border-solid border-2 h-[2vw] w-1/3 rounded-full bg-blue-400 hover:opacity-90">
              Se connecter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
