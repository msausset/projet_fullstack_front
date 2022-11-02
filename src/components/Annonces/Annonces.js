import React from "react";
import { Link } from "react-router-dom";
import monkeyAnnonces from "../../images/monkey-annonces.gif";


const Annonces = () => {
  return (
    <div>
      <div className="w-[60vw] min-h-screen m-auto shadow-2xl bg-white opacity-95">

      <div className="pt-10">
          <img
            src={monkeyAnnonces}
            alt="monkeyAnnonces"
            className="w-[10vw] m-auto"
          />
        </div>
        <div className="text-center text-md mt-5">
            <span className="">
                Vous allez trouver votre bonheur, c'est sûr !
            </span>
        </div>
        {/* ------------------------------------------------------------------------------------------ GRILLE SUR 3 COLONNES */}
        {/* ------------------------------------------------------------------------------------------ AFFICHERA 3 RESULTATS PAR LIGNES */}

        <div className="mr-[2vw] ml-[2vw] pt-10 grid grid-cols-3 gap-2 ">
          {/* ------------------------------------------------------------------------------------------ DIV GLOBALE RESULTAT */}

          <div className="mb-10 border border-black border-2 rounded-xl">
            {/* ------------------------------------------------------------------------------------------ DIV PHOTO */}

            <div className="h-[10vw] m-1 border border-black border-2 text-center bg-red-600">
              <span>Photo ici</span>
            </div>

            {/* ------------------------------------------------------------------------------------------ DIV TITRE */}

            <div className="border border-black border-2 m-1 text-center bg-blue-600">
              <span>Titre ici</span>
            </div>
                        {/* ------------------------------------------------------------------------------------------ DIV BOUTON VOIR L'ANNONCE */}

            <div className="border border-black border-2 m-1 text-center bg-green-600">
              <button>
                <Link to="produit/:id">Bouton "Voir l'annonce"</Link>
              </button>
            </div>
          </div>

          {/* -------------------------------------------- J'AI MIS PLUSIEURS FOIS LA MEME CHOSE QUE JUSTE AU DESSUS  */}
          {/* -------------------------------------------- POUR MONTRER LE RESULTAT MAIS IL FAUDRA */}
          {/* -------------------------------------------- MAPPER ANNONCES ET AFFICHER DANS LA DIV PRESENTE AU DESSUS */}
          {/* -------------------------------------------- AU FINAL IL Y AURA UNE DIV, CE QU'IL Y A EN DESSOUS DE CE COMMENTAIRE EST DONC INUTILE (JUSTE POUR L'EXEMPLE)  */}

          <div className="mb-10 border border-black border-2 rounded-xl">
            <div className="h-[10vw] m-1 border border-black border-2 text-center bg-red-600">
              <span>Photo ici</span>
            </div>
            <div className="border border-black border-2 m-1 text-center bg-blue-600">
              <span>Titre ici</span>
            </div>
            <div className="border border-black border-2 m-1 text-center bg-green-600">
              <button>
                <Link to="produit/:id">Bouton "Voir l'annonce"</Link>
              </button>
            </div>
          </div>
          <div className="mb-10 border border-black border-2 rounded-xl">
            <div className="h-[10vw] m-1 border border-black border-2 text-center bg-red-600">
              <span>Photo ici</span>
            </div>
            <div className="border border-black border-2 m-1 text-center bg-blue-600">
              <span>Titre ici</span>
            </div>
            <div className="border border-black border-2 m-1 text-center bg-green-600">
              <button>
                <Link to="produit/:id">Bouton "Voir l'annonce"</Link>
              </button>
            </div>
          </div>
          <div className="mb-10 border border-black border-2 rounded-xl">
            <div className="h-[10vw] m-1 border border-black border-2 text-center bg-red-600">
              <span>Photo ici</span>
            </div>
            <div className="border border-black border-2 m-1 text-center bg-blue-600">
              <span>Titre ici</span>
            </div>
            <div className="border border-black border-2 m-1 text-center bg-green-600">
              <button>
                <Link to="produit/:id">Bouton "Voir l'annonce"</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Annonces;
