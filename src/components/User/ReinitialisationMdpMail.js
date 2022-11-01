import React from "react";

const ReinitialisationMdpMail = () => {
  return (
    // -------------------------------------------------------------------------------------------------------- DIV SUR TOUTE LONGUEUR ECRAN

    <div className="min-h-screen p-[5vw]">
      {/* ------------------------------------------------------------------------------------------------------- DIV BOX REINITIALISATION MDP */}

      <div className="rounded-md bg-white w-[25vw] pt-10 m-auto">
        {/* ------------------------------------------------------------------------------------------------------- TEXTE REINITIALISATION MDP */}

        <p className="text-lg text-center">Une dernière étape ...</p>
        <p className="text-sm text-center">
          Essayez de ne pas l'oublier cette fois-ci, ça vous évitera tout ces
          désagréments 👀
        </p>
        <div className="mt-10 grid grid-rows-4 place-items-center">
          <p className="text-center">Entrez un nouveau mot de passe</p>

          {/* ------------------------------------------------------------------------------------------------------- INPUT POUR NOUVEAU MDP */}

          <input type="text" id="nv-mdp" className="rounded-full w-[15vw]" />
          <p className="text-center">Confirmer le nouveau mot de passe</p>

          {/* ------------------------------------------------------------------------------------------------------- INPUT POUR CONFIMATION NOUVEAU MDP */}

          <input
            type="text"
            id="confirm-nv-mdp"
            className="rounded-full w-[15vw]"
          />
        </div>
        <div className="mt-10 pb-10 text-center">
          {/* ------------------------------------------------------------------------------------------------------- BOUTON REINITIALISATION MDP */}

          <button className="h-[2vw] w-[7vw] rounded-full bg-orange-600 hover:opacity-90 ">
            Réinitialiser
          </button>
        </div>

        {/* ------------------------------------------------------------------------------------------------------- DIV CACHÉ A AFFICHER AU CLIC SUR BOUTON */}

        <div className="mt-5 bg-green-400 hidden">
          <p className="text-center">
            Un email vous a été envoyé pour la réinitialisation de votre mot de
            passe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReinitialisationMdpMail;
