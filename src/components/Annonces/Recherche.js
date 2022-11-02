import React from "react";
import { Link } from "react-router-dom";
import monkeyRecherche from "../../images/monkey-recherche.gif";

const Recherche = () => {
  return (
    <div>
      {/* ------------------------------------------------------------------------------------------ DIV HAUTEUR ECRAN OPACITE 95 */}

      <div className="w-[60vw] min-h-screen m-auto shadow-2xl bg-white opacity-95">
        {/* ------------------------------------------------------------------------------------------ IMAGE SINGE */}

        <div className="pt-10">
          <img
            src={monkeyRecherche}
            alt="monkeyRecherche"
            className="w-[10vw] m-auto"
          />
        </div>

        {/* ------------------------------------------------------------------------------------------ GRILLE 8 COLONNES  */}

        <div className=" mr-[2vw] ml-[2vw] m-auto mt-10 relative grid grid-cols-8">
          {/* ------------------------------------------------------------------------------------------ BARRE DE RECHERCHE SUR 7 COLONNES */}

          <div className="col-span-7">
            {/* ------------------------------------------------------------------------------------------ SVG ICONE LOUPE DANS BARRE DE RECHERCHE */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            {/* ---------------------------------------------------------------------------------------------------------------- INPUT RECHERCHE PAR TEXTE */}

            <input
              type="text"
              placeholder="Commencer une recherche ..."
              className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-full outline-none bg-gray-200 focus:bg-white focus:border-indigo-600"
            />
          </div>
          <div>
            {/* ------------------------------------------------------------------------------------------ SELECT RECHERCHE PAR CATEGORIE */}

            <select
              className="w-[7vw] py-3 pr-4 text-gray-500 border rounded-full outline-none bg-gray-200 focus:bg-white focus:border-indigo-600"
              name="categorie"
              id="categorie"
            >
              {/* ------------------------------------------------------------------------------------------ REMPLACER LES EXEMPLES PAR LES CATEGORIES DANS LA BDD */}
              {/* ------------------------------------------------------------------------------------------ MAPPER CATEGORIE BDD ET AFFICHER OPTION  */}

              <option value="exemple">Exemple</option>
              <option value="voiture">Voitures</option>
              <option value="chaussure">Chaussures</option>
              <option value="pantalon">Pantalons</option>
            </select>
          </div>
        </div>

        {/* ------------------------------------------------------------------------------------------ BOUTON RECHERCHER */}

        <div className="text-center mt-[3vw]">
          <button className="h-[4vw] w-[10vw] rounded-full bg-green-400 hover:opacity-90 hover:underline">
            Rechercher
          </button>
        </div>
        {/* ------------------------------------------------------------------------------------------ AFFICHAGE RESULTAT SI IL Y EN A  */}
        {/* ------------------------------------------------------------------------------------------ GRILLE SUR 3 COLONNES */}
        {/* ------------------------------------------------------------------------------------------ AFFICHERA 3 RESULTATS PAR LIGNES */}

        <div className="mr-[2vw] ml-[2vw] mt-10 grid grid-cols-3 gap-2">
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
          {/* -------------------------------------------- MAPPER RESULTAT ET AFFICHER DANS LA DIV PRESENTE AU DESSUS OU ALORS SIMPLEMENT AFFICHER LE COMPONENT "ANNONCES" */}
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

export default Recherche;
