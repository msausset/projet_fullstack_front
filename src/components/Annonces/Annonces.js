import React from "react";
import { Link } from "react-router-dom";
import monkeyAnnonces from "../../images/monkey-annonces.gif";
import mustang from "../../images/mustang-shelby-exemple.jpg";

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

          <div className="mb-10 border border-black border-2 rounded-xl bg-slate-200">
            {/* ------------------------------------------------------------------------------------------ DIV PHOTO */}

            <div className="h-[10vw] m-1 text-center">
              <img src={mustang} className="w-full h-[10vw]" alt="mustang" />
            </div>

            {/* ------------------------------------------------------------------------------------------ DIV TITRE */}

            <div className=" m-1 text-center underline font-bold">
              <span>Mustang Shelby GT500 - 1967</span>
            </div>
            {/* ------------------------------------------------------------------------------------------ DIV PRIX */}

            <div className=" m-1 text-center ">
              <span>25.999€</span>
            </div>
            {/* ------------------------------------------------------------------------------------------ DIV BOUTON VOIR L'ANNONCE */}

            <div className="m-1 text-center ">
            <button className="my-2 h-[2vw] w-2/3 rounded-full bg-pink-400 hover:opacity-90 hover:underline">
                <Link to="/produit/:id">Voir l'annonce</Link>
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
            <div className="border border-black border-2 m-1 text-center bg-yellow-600">
              <span>Prix ici</span>
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
            <div className="border border-black border-2 m-1 text-center bg-yellow-600">
              <span>Prix ici</span>
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
            <div className="border border-black border-2 m-1 text-center bg-yellow-600">
              <span>Prix ici</span>
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
