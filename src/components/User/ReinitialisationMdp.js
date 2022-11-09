import React, {useState} from "react";
import { Link } from "react-router-dom";
import monkeyOops from "../../images/monkey-oops.gif";

const ReinitialisationMdp = () => {

  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true)
    alert("OK !");
  };

  return (
    // -------------------------------------------------------------------------------------------------------- DIV SUR TOUTE LONGUEUR ECRAN

    <div className="min-h-screen p-[5vw]">
      {/* ------------------------------------------------------------------------------------------------------- DIV BOX REINITIALISATION MDP */}

      <div className="rounded-[0.5vw] bg-white w-[25vw] pt-[1.5vw] m-auto">
        {/* ------------------------------------------------------------------------------------------------------- AFFICHAGE IMAGE SINGE */}

        <div className="pb-[1vw]">
          <img src={monkeyOops} alt="monkeyOops" className="w-[5vw] m-auto" />
        </div>
        {/* ------------------------------------------------------------------------------------------------------- TEXTE REINITIALISATION MDP */}

        <p className="text-[0.9vw] text-center">Pas de chance ...</p>
        <p className="text-[0.7vw] text-center">
          Mais ici, vous pourrez récupérer votre mot de passe 😇
        </p>
        <form action="" onSubmit={handleClick}>
        <div className="mt-[1.5vw] grid grid-rows-2 place-items-center">
          <p className="text-center">Entrez l'email du compte associé</p>

          {/* ------------------------------------------------------------------------------------------------------- INPUT POUR REINITIALISATION MDP */}

          <input type="text" id="email" className="rounded-full w-[15vw]" />
        </div>
        <div className="mt-[1.5vw] pb-[1.5vw] text-center">
          {/* ------------------------------------------------------------------------------------------------------- BOUTON REINITIALISATION MDP */}

          <button className="h-[2vw] w-[7vw] rounded-full bg-orange-600 hover:opacity-90 hover:underline ">
            Réinitialiser
          </button>
        </div>
        </form>
        <div className="text-[0.6vw] w-[9vw] text-right pt-[0.2vw] pb-[1vw] hover:text-blue-600 hover:underline">
          <Link to="/connexion">Retour à la connexion</Link>
        </div>

        {/* ------------------------------------------------------------------------------------------------------- DIV CACHÉ A AFFICHER AU CLIC SUR BOUTON */}

        <div className={isClicked ? "mt-[15vw] bg-green-400" : "mt-[1vw] bg-green-400 hidden"}>
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
