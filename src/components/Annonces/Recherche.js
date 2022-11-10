import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import monkeyRecherche from "../../images/monkey-recherche.gif";

const Recherche = () => {
  const [datas, setDatas] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
    fetch("http://127.0.0.1:3333/search?key=&category=OTHER_FURNITURE")
    .then((response) => response.json())
    .then((json) => setDatas(json));
  };

  useEffect(() => {
    setDatas([])
  }, [searchTerm]);

  return (
    <div>
      {/* ------------------------------------------------------------------------------------------ DIV HAUTEUR ECRAN OPACITE 95 */}

      <div className="w-[60vw] min-h-screen m-auto shadow-2xl bg-white opacity-95">
        {/* ------------------------------------------------------------------------------------------ IMAGE SINGE */}

        <div className="pt-[1.5vw]">
          <img
            src={monkeyRecherche}
            alt="monkeyRecherche"
            className="w-[10vw] m-auto"
          />
        </div>

        {/* ------------------------------------------------------------------------------------------ GRILLE 8 COLONNES  */}

        <div className=" mr-[2vw] ml-[2vw] m-auto mt-[1.5vw] relative grid grid-cols-8">
          {/* ------------------------------------------------------------------------------------------ BARRE DE RECHERCHE SUR 7 COLONNES */}

          <div className="col-span-7">
            {/* ------------------------------------------------------------------------------------------ SVG ICONE LOUPE DANS BARRE DE RECHERCHE */}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 h-[1.2vw] my-auto text-gray-400 left-[0.5vw]"
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
              placeholder="Rechercher ..."
              className="w-full disabled py-[0.5vw] pl-[2.5vw] pr-[0.5vw] text-gray-500 border rounded-full outline-none bg-gray-200 focus:bg-white focus:border-indigo-600"
              onChange={handleSearchTerm}
            />
          </div>
          <div>
            {/* ------------------------------------------------------------------------------------------ SELECT RECHERCHE PAR CATEGORIE */}

            <select
              className="w-[7vw] py-[0.5vw] text-gray-500 border rounded-full outline-none bg-gray-200 focus:bg-white focus:border-indigo-600"
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

        {/* ------------------------------------------------------------------------------------------ DIV GLOBALE RESULTAT */}
        <div className="mr-[2vw] ml-[2vw] mt-[1.5vw] grid grid-cols-3 gap-[0.2vw]">
          {handleSearchTerm
            ? datas &&
              datas
                .filter((val) => {
                  return val.title.includes(searchTerm);
                })
                .map((post) => {
                  return (
                    <div className="mb-[1.5vw] border border-black border-[0.15vw] rounded-[0.5vw]" key={post.id}>
                      <div
                        className="h-[10vw] m-[0.15vw] border border-black border-[0.15vw] text-center bg-red-600">
                        {post.product_picture}
                      </div>

                      <div
                        className="border border-black border-[0.15vw] m-[0.15vw] text-center bg-blue-600">
                        {post.title}
                      </div>

                      <div
                        className="border border-black border-[0.15vw] m-[0.15vw] text-center bg-green-600">
                        <button>
                          <Link to={"produit/:id" + post.id}>
                            Voir l'annonce
                          </Link>
                        </button>
                      </div>
                    </div>
                  );
                })
            : "Pas de résultat"}
        </div>
      </div>
    </div>
  );
};

export default Recherche;