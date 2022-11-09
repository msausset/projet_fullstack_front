import React from "react";
import { Link } from "react-router-dom";
import monkeyAnnonces from "../../images/monkey-annonces.gif";
import mustang from "../../images/mustang-shelby-exemple.jpg";

const Annonces = () => {
  return (
    <div>
      <div className="w-[60vw] min-h-screen m-auto shadow-2xl bg-white opacity-95">
        <div className="pt-[1.5vw]">
          <img
            src={monkeyAnnonces}
            alt="monkeyAnnonces"
            className="w-[10vw] m-auto"
          />
        </div>
        <div className="text-center text-[0.8vw] mt-[1vw]">
          <span>
            Vous allez trouver votre bonheur, c'est sûr !
          </span>
        </div>
        {/* ------------------------------------------------------------------------------------------ GRILLE SUR 3 COLONNES */}
        {/* ------------------------------------------------------------------------------------------ AFFICHERA 3 RESULTATS PAR LIGNES */}

        <div className="mr-[2vw] ml-[2vw] pt-[1.5vw] grid grid-cols-3 gap-[0.2vw] ">
          {/* ------------------------------------------------------------------------------------------ DIV GLOBALE RESULTAT */}

          <div className="mb-[1.5vw] border border-black border-[0.15vw] rounded-[0.5vw] bg-slate-200">
            {/* ------------------------------------------------------------------------------------------ DIV PHOTO */}

            <div className="h-[10vw] m-[0.15vw] text-center">
              <img src={mustang} className="w-full h-[10vw]" alt="mustang" />
            </div>

            {/* ------------------------------------------------------------------------------------------ DIV TITRE */}

            <div className="m-[0.15vw] text-center underline font-bold">
              <span>Mustang Shelby GT500 - 1967</span>
            </div>
            {/* ------------------------------------------------------------------------------------------ DIV PRIX */}

            <div className="m-[0.15vw] text-center ">
              <span>25.999€</span>
            </div>
            {/* ------------------------------------------------------------------------------------------ DIV BOUTON VOIR L'ANNONCE */}

            <div className="m-[0.15vw] text-center ">
            <button className="my-[0.2vw] h-[2vw] w-[10vw] rounded-full bg-pink-400 hover:opacity-90 hover:underline">
                <Link to="/produit/:id">Voir l'annonce</Link>
              </button>
            </div>
          </div>

          {/* -------------------------------------------- J'AI MIS PLUSIEURS FOIS LA MEME CHOSE QUE JUSTE AU DESSUS  */}
          {/* -------------------------------------------- POUR MONTRER LE RESULTAT MAIS IL FAUDRA */}
          {/* -------------------------------------------- MAPPER ANNONCES ET AFFICHER DANS LA DIV PRESENTE AU DESSUS */}
          {/* -------------------------------------------- AU FINAL IL Y AURA UNE DIV, CE QU'IL Y A EN DESSOUS DE CE COMMENTAIRE EST DONC INUTILE (JUSTE POUR L'EXEMPLE)  */}

          <div className="mb-[1.5vw] border border-black border-[0.15vw] rounded-[0.5vw]">
            <div className="h-[10vw] m-[0.15vw] border border-black border-[0.15vw] text-center bg-red-600">
              <span>Photo ici</span>
            </div>
            <div className="border border-black border-[0.15vw] m-[0.15vw] text-center bg-blue-600">
              <span>Titre ici</span>
            </div>
            <div className="border border-black border-[0.15vw] m-[0.15vw] text-center bg-yellow-600">
              <span>Prix ici</span>
            </div>
            <div className="border border-black border-[0.15vw] m-[0.15vw] text-center bg-green-600">
              <button>
                <Link to="produit/:id">Bouton "Voir l'annonce"</Link>
              </button>
            </div>
          </div>
          <div className="mb-10 border border-black border-[0.15vw] rounded-xl">
            <div className="h-[10vw] m-[0.15vw] border border-black border-[0.15vw] text-center bg-red-600">
              <span>Photo ici</span>
            </div>
            <div className="border border-black border-[0.15vw] m-[0.15vw] text-center bg-blue-600">
              <span>Titre ici</span>
            </div>
            <div className="border border-black border-[0.15vw] m-[0.15vw] text-center bg-yellow-600">
              <span>Prix ici</span>
            </div>
            <div className="border border-black border-[0.15vw] m-[0.15vw] text-center bg-green-600">
              <button>
                <Link to="produit/:id">Bouton "Voir l'annonce"</Link>
              </button>
            </div>
          </div>
          <div className="mb-10 border border-black border-[0.15vw] rounded-xl">
            <div className="h-[10vw] m-[0.15vw] border border-black border-[0.15vw] text-center bg-red-600">
              <span>Photo ici</span>
            </div>
            <div className="border border-black border-[0.15vw] m-[0.15vw] text-center bg-blue-600">
              <span>Titre ici</span>
            </div>
            <div className="border border-black border-[0.15vw] m-[0.15vw] text-center bg-yellow-600">
              <span>Prix ici</span>
            </div>
            <div className="border border-black border-[0.15vw] m-[0.15vw] text-center bg-green-600">
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
