import React from "react";
import { Link } from "react-router-dom";
import crayon from "../../images/crayon.png";
import poubelle from "../../images/poubelle.png";

const ListeAnnonces = () => {
  const handleClick = (e) => {
    e.preventDefault();
    alert("Supprimé !");
  };

  return (
    <div>
      {/* ------------------------------------------------------------------------------------------ DIV TOUTE LONGUEUR ECRAN */}
      <div className="text-center w-[40vw] min-h-screen m-auto shadow-2xl bg-white opacity-95">
        {/* ------------------------------------------------------------------------------------------ DIV MES ANNONCES*/}
        <div className="mb-10 pt-5 text-4xl text-center font-bold">
          Mes annonces
        </div>
        {/* ------------------------------------------------------------------------------------------ DIV FLEX 4 DIV  */}
        <div className="rounded-lg rounded-bl-none rounded-br-none flex text-center mx-5 h-16 border-slate-400 border-2 border-t-0 border-x-0 bg-green-200">
          {/* ------------------------------------------------------------------------------------------ DIV NOM TITRE */}

          <div className="w-2/6 shrink-0 grow-0 place-self-center">Titre</div>
          {/* ------------------------------------------------------------------------------------------ DIV NOM PRIX */}

          <div className="w-2/6 shrink-0 grow-0 place-self-center">Prix</div>
          {/* ------------------------------------------------------------------------------------------ DIV NOM MODIFIER */}
          <div className="w-1/6 shrink-0 grow-0 place-self-center">
            Modifier
          </div>
          {/* ------------------------------------------------------------------------------------------ DIV NOM SUPPRIMER */}
          <div className="w-1/6 shrink-0 grow-0 place-self-center">
            Supprimer
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------ 2EME DIV FLEX POUR LES RESUTATS -- SI LE RESULTAT N'EST PAS LE DERNIER ALORS IL N'Y PAS D'ARRONDI SUR LES BORDS */}
        <div className="flex text-center mx-5 h-24 border-slate-400 border-2 border-x-0 border-t-0 bg-slate-200">
          {/* ------------------------------------------------------------------------------------------ DIV TITRE */}
          <div className="w-2/6 shrink-0 grow place-self-center pl-4">
            Mustang Shelby GT-500 - 1967
          </div>
          {/* ------------------------------------------------------------------------------------------ DIV  PRIX */}
          <div className="w-2/6 shrink-0 grow place-self-center">25.999 €</div>
          {/* ------------------------------------------------------------------------------------------ DIV BOUTON MODIFIER */}
          <div className="w-1/6 shrink-0 grow place-self-center">
            <button>
              <Link to="/edition-creation-annonce">
                <img
                  src={crayon}
                  className="w-[2vw] h-[2vw] m-auto"
                  alt="crayon"
                />
              </Link>
            </button>
          </div>
          {/* ------------------------------------------------------------------------------------------ DIV BOUTON SUPPRIMER */}

          <div className="w-1/6 shrink-0 grow place-self-center">
            <button onClick={handleClick}>
              <img
                src={poubelle}
                className="w-[2vw] h-[2vw] m-auto"
                alt="crayon"
              />
            </button>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------------------ NE SERT A RIEN EN DESSOUS C'EST UN 2EME EXEMPLE */}
        {/* ------------------------------------------------------------------------------------------  */}
        {/* ------------------------------------------------------------------------------------------  */}
        {/* ------------------------------------------------------------------------------------------  */}
        {/* ------------------------------------------------------------------------------------------  */}
        {/* ------------------------------------------------------------------------------------------  */}
        {/* ------------------------------------------------------------------------------------------  */}
        <div className="rounded-lg rounded-tl-none rounded-tr-none flex text-center mx-5 h-24 border border-2 border-t-0 bg-slate-200">
          {/* ------------------------------------------------------------------------------------------ DIV PRIX */}
          <div className="w-2/6 shrink-0 grow place-self-center">Exemple</div>
          {/* ------------------------------------------------------------------------------------------ DIV  PRIX */}
          <div className="w-2/6 shrink-0 grow place-self-center">1 €</div>
          {/* ------------------------------------------------------------------------------------------ DIV BOUTON MODIFIER */}
          <div className="w-1/6 shrink-0 grow place-self-center">
            <button>
              <Link to="/edition-creation-annonce">
                <img
                  src={crayon}
                  className="w-[2vw] h-[2vw] m-auto"
                  alt="crayon"
                />
              </Link>
            </button>
          </div>
          {/* ------------------------------------------------------------------------------------------ DIV BOUTON SUPPRIMER */}

          <div className="w-1/6 shrink-0 grow place-self-center">
            <button onClick={handleClick}>
              <img
                src={poubelle}
                className="w-[2vw] h-[2vw] m-auto"
                alt="crayon"
              />
            </button>
          </div>
        </div>
        <div className="mt-10">
            <button className="m-auto h-[2vw] text-md font-bold w-[15vw] rounded-full bg-pink-500 hover:opacity-90 hover:underline">
              <Link to="/edition-creation-annonce">Créer une nouvelle annonce</Link>
            </button>
          </div>
      </div>
    </div>
  );
};

export default ListeAnnonces;
