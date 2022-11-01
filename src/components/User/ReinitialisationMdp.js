import React from "react";

const ReinitialisationMdp = () => {
  return (
    // -------------------------------------------------------------------------------------------------------- DIV SUR TOUTE LONGUEUR ECRAN

    <div className="min-h-screen p-[5vw]">
      {/* ------------------------------------------------------------------------------------------------------- DIV BOX REINITIALISATION MDP */}

      <div className="rounded-md bg-white w-[25vw] pt-10 m-auto">
        {/* ------------------------------------------------------------------------------------------------------- TEXTE REINITIALISATION MDP */}

        <p className="text-lg text-center">Pas de chance ...</p>
        <p className="text-sm text-center">
          Mais ici, vous pourrez récupérer votre mot de passe 😇
        </p>
        <div className="mt-10 grid grid-rows-2 place-items-center">
          <p className="text-center">Entrez l'email du compte associé</p>

          {/* ------------------------------------------------------------------------------------------------------- INPUT POUR REINITIALISATION MDP */}

          <input type="text" id="email" className="rounded-full w-[15vw]" />
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

export default ReinitialisationMdp;
