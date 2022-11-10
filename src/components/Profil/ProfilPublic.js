import React, { useState, useEffect } from "react";
import monkeyMonProfil from "../../images/monkey-mon-profil.gif";
import mustang from "../../images/mustang-shelby-exemple.jpg";
import { Link, useParams } from "react-router-dom";
import image_not_found from "../../images/image-not-found.png";
import { request } from "../../utils/Request";

const ProfilPublic = () => {
  const [annonces, setAnnonces] = useState([]);

  const { id } = useParams();

  const handleClick = (e) => {
    e.preventDefault();
    alert("OK !");
  };

  useEffect(() => {
    const getUserAnnonces = async () => {
      try {
        await request
          .get(`/offer/user/${id}`)
          .then((res) => setAnnonces(res.data));
      } catch (err) {
        console.error(err.message);
      }
    };

    getUserAnnonces();
  }, []);

  /**
   * Affichage de l'image du produit
   * @param {string} file_name
   * @returns L'image du produit ou une image par défaut
   */
  const getProductPicture = (file_name) => {
    if (file_name !== "" && file_name !== undefined && file_name !== null) {
      return (
        <img
        className="w-full h-[10vw]"
          src={"http://localhost:3333/uploads/" + encodeURI(file_name)}
          alt="Produit"
        />
      );
    } else {
      return (
        <img className="w-full h-[10vw]" src={image_not_found} alt="Produit" />
      );
    }
  };

  return (
    <div>
      <div className="w-[40vw] m-auto min-h-screen">
        <div className="bg-white pb-[1.5vw] min-h-[20vw] m-auto text-center pt-[1.5vw] opacity-95">
          {/* ---------------------------------------------------------------------------------------------------------- DIV IMAGE PHOTO DE PROFIL ENTOURÉ BORDER */}

          <div className="h-[10vw] rounded-full border border-[0.3vw] border-black w-[10vw] m-auto">
            <img
              src={monkeyMonProfil}
              alt="monkeyMonProfil"
              className="w-[9vw] m-auto"
            />
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV NOM */}

          <div className="mt-[1vw] w-[30vw] m-auto h-[2vw] flex border border-0 border-b border-t">
            <div className="m-auto basis-[15vw]">
              <span>Nom</span>
            </div>
            <div className="m-auto basis-[15vw]">
              <span>Sausset</span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV PRENOM */}

          <div className="w-[30vw] m-auto h-[2vw] flex border border-0 border-b ">
            <div className="m-auto basis-[15vw]">
              <span>Prénom</span>
            </div>
            <div className="m-auto basis-[15vw]">
              <span>Maxime</span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV PAYS */}

          <div className="w-[30vw] m-auto h-[2vw] flex border border-0 border-b ">
            <div className="m-auto basis-[15vw]">
              <span>Pays</span>
            </div>
            <div className="m-auto basis-[15vw]">
              <span>France</span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV CONTACT */}

          <div className="mt-[1vw]">
            <span className="text-[1.1vw] underline">
              Contacter cet utilisateur
            </span>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DEBUT FORMULAIRE CONTACT */}

          <form action="" onSubmit={handleClick}>
            {/* ---------------------------------------------------------------------------------------------------------- GRILLE 2 LIGNES */}

            <div className="grid grid-rows-2 ">
              {/* ------------------------------------------------------------------------------------------------------- DIV EMAIL */}

              <div className="col-span-2 w-[20vw] m-auto">
                <div>
                  <label htmlFor="email">Email</label>
                </div>
                <div>
                  <input
                    type="email"
                    id="email"
                    className="rounded-full w-[15vw]"
                  />
                </div>
              </div>

              {/* --------------------------------------------------------------------------------------------------------- DIV TEXTAREA MESSAGE */}

              <div className="col-span-2">
                <div>
                  <label htmlFor="email">Message</label>
                </div>
                <div>
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="5"
                    className="rounded-md w-[30vw]"
                  />
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------------------------------------------------------- INPUT BOUTON SUBMIT  */}

            <div className="mb-[1.5vw] col-span-2 mt-[1.5vw]">
              <input
                type="submit"
                className="border-solid border-[0.15vw] h-[2vw] w-[13vw] rounded-full bg-blue-400 hover:opacity-90 hover:underline"
                value="Envoyer"
              />
            </div>
          </form>

          {/* ---------------------------------------------------------------------------------------------------------- DIV ANNONCES UTILISATEUR */}

          <div className="text-[1.1vw] underline">
            Toutes les annonces de cet utilisateur
          </div>

          <div className="mr-[2vw] ml-[2vw] pt-[1.5vw] grid grid-cols-2 gap-[0.4vw] ">
            {/* ------------------------------------------------------------------------------------------ DIV GLOBALE RESULTAT */}

            {annonces.map((annonce) => {
              return (
                <div key={annonce.id} className="mb-[1.5vw] border border-black border-[0.15vw] rounded-[0.5vw] bg-slate-200">
                  {/* ------------------------------------------------------------------------------------------ DIV PHOTO */}

                  <div className="h-[10vw] m-[0.15vw] text-center">
                    {getProductPicture(annonce.product_picture)}
                  </div>

                  {/* ------------------------------------------------------------------------------------------ DIV TITRE */}

                  <div className="m-[0.15vw] text-center underline font-bold">
                    <span>
                      {/* Mustang Shelby GT500 - 1967 */}
                      {annonce.title}
                    </span>
                  </div>

                  {/* ------------------------------------------------------------------------------------------ DIV PRIX */}

                  <div className="m-[0.15vw] text-center ">
                    <span>
                      {/* 25.999€ */}
                      {annonce.price}€
                      </span>
                  </div>

                  {/* ------------------------------------------------------------------------------------------ DIV BOUTON VOIR L'ANNONCE */}

                  <div className="m-[0.15vw] text-center">
                    <button className="my-[0.2vw] h-[2vw] w-[11.5vw] rounded-full bg-pink-400 hover:opacity-90 hover:underline">
                      <Link to={`/annonces/a/${annonce.id}`}>Voir l'annonce</Link>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPublic;
