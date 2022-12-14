import React from "react";

const ReinitialisationMdpMail = () => {
  return (
    // -------------------------------------------------------------------------------------------------------- DIV SUR TOUTE LONGUEUR ECRAN

    <div className="min-h-screen p-[5vw]">
      {/* ------------------------------------------------------------------------------------------------------- DIV BOX REINITIALISATION MDP */}

      <div className="rounded-[0.5vw] bg-white w-[25vw] pt-[1.5vw] m-auto">
        {/* ------------------------------------------------------------------------------------------------------- TEXTE REINITIALISATION MDP */}

        <p className="text-[0.9vw] text-center">Une dernière étape ...</p>
        <p className="text-[0.7vw] text-center">
          Essayez de ne pas l'oublier cette fois-ci, ça vous évitera tout ces
          désagréments 👀
        </p>
        <div className="mt-[1.5vw] grid grid-rows-4 place-items-center">
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
        <div className="mt-[1.5vw] pb-[1.5vw] text-center">
          {/* ------------------------------------------------------------------------------------------------------- BOUTON REINITIALISATION MDP */}

          <button className="h-[2vw] w-[7vw] rounded-full bg-orange-600 hover:opacity-90 ">
            Réinitialiser
          </button>
        </div>

        {/* ------------------------------------------------------------------------------------------------------- DIV CACHÉ A AFFICHER AU CLIC SUR BOUTON */}

        <div className="mt-[1vw] bg-green-400 hidden">
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
