import React from "react";
import monkeyProduit from "../../images/monkey-produit.gif";


const Produit = () => {
  return (
    <div>
      <div className="w-[60vw] min-h-screen m-auto shadow-2xl bg-white opacity-95">

      <div className="pt-10">
          <img
            src={monkeyProduit}
            alt="monkeyProduit"
            className="w-[10vw] m-auto"
          />
        </div>
        <div className="text-center text-md mt-5">
            <span className="">
                Allez-vous craquer pour cette magnifique annonce ?
            </span>
        </div>
        {/* ------------------------------------------------------------------------------------------ AFFICHAGE PRODUIT CLIQUÉ */}

        <div className="mr-[2vw] ml-[2vw] pt-10">
          {/* ------------------------------------------------------------------------------------------ DIV GLOBALE PRODUIT */}

          <div className="mb-10 border border-black border-2">
            {/* ------------------------------------------------------------------------------------------ DIV PHOTO */}

            <div className="h-[10vw] m-1 border border-black border-2 text-center bg-red-600">
              <span>Photo ici</span>
            </div>

            {/* ------------------------------------------------------------------------------------------ DIV TITRE */}

            <div className="border border-black border-2 m-1 text-center bg-blue-600">
              <span>Titre ici</span>
            </div>

            {/* ------------------------------------------------------------------------------------------ DIV DESCRIPTION */}

            <div className="border border-black border-2 m-1 text-center bg-green-600">
              <span>Description ici</span>
            </div>

            {/* ------------------------------------------------------------------------------------------ DIV NOM ANNONCEUR + LIEN */}

            <div className="border border-black border-2 m-1 text-center bg-yellow-600">
              <span>Nom annonceur + lien vers page profil</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produit;
