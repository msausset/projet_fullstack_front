import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import monkeyAnnonces from "../../images/monkey-annonces.gif";
import { request } from "../../utils/Request";

import image_not_found from '../../images/image-not-found.png';

const Annonces = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    request
      .get("http://127.0.0.1:3333/search?key=&category=&status_id=2")
      .then((response) => setDatas(response.data));
  }, []);

  /**
   * Affichage de l'image du produit
   * @param {string} file_name 
   * @returns L'image du produit ou une image par défaut
   */
  const getProductPicture = file_name => {
    if(file_name !== '' && file_name !== undefined && file_name !== null) {
        return <img src={'http://localhost:3333/uploads/' + encodeURI(file_name)} alt='Produit' className="h-[10vw] mx-auto" />
    } else {
        return <img src={image_not_found} alt='Produit' className="h-[10vw] mx-auto" />
    }
  }

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
          <span>Vous allez trouver votre bonheur, c'est sûr !</span>
        </div>
        {/* ------------------------------------------------------------------------------------------ GRILLE SUR 3 COLONNES */}
        {/* ------------------------------------------------------------------------------------------ AFFICHERA 3 RESULTATS PAR LIGNES */}

        <div className="mr-[2vw] ml-[2vw] pt-[1.5vw] grid grid-cols-3 gap-[0.2vw] ">
          {/* ------------------------------------------------------------------------------------------ DIV GLOBALE RESULTAT */}

          {datas.map((post) => {
            if (post.status_id === 2) {
              const idProduit = post.id;
              return (
                <div
                  className="mb-10 border border-black border-2 rounded-xl bg-slate-200"
                  key={post.id}
                >
                  {/* ------------------------------------------------------------------------------------------ DIV PHOTO */}

                  <div className="h-[10vw] m-1 text-center">
                    {/*<img src={mustang} className="w-full h-[10vw]" alt="mustang" />*/}
                      { getProductPicture(post.product_picture) }
                  </div>

                  {/* ------------------------------------------------------------------------------------------ DIV TITRE */}

                  <div className=" m-1 text-center underline font-bold">
                    {/*<span>Mustang Shelby GT500 - 1967</span>*/}
                    {post.title}
                  </div>
                  {/* ------------------------------------------------------------------------------------------ DIV PRIX */}

                  <div className=" m-1 text-center ">
                    {/*<span>25.999€</span>*/}
                    {post.price}
                  </div>
                  {/* ------------------------------------------------------------------------------------------ DIV BOUTON VOIR L'ANNONCE */}

                  <div className="m-1 text-center ">
                    <button className="my-2 h-[2vw] w-2/3 rounded-full bg-pink-400 hover:opacity-90 hover:underline">
                      <Link
                        to={`a/${post.id}`}
                      >
                        Voir l'annonce
                      </Link>
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Annonces;
