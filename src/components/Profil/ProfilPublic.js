import React from "react";
import monkeyMonProfil from "../../images/monkey-mon-profil.gif";
import mustang from "../../images/mustang-shelby-exemple.jpg";
import { Link } from "react-router-dom";

const ProfilPublic = () => {
  const handleClick = (e) => {
    e.preventDefault();
    alert("OK !");
  };
  return (
    <div>
      <div className="w-[40vw] m-auto min-h-screen">
        <div className=" bg-white pb-10 min-h-[20vw] m-auto text-center pt-10 opacity-95">
          {/* ---------------------------------------------------------------------------------------------------------- DIV IMAGE PHOTO DE PROFIL ENTOURÉ BORDER */}

          <div className="h-[10vw] rounded-full border border-4 border-black w-[10vw] m-auto">
            <img
              src={monkeyMonProfil}
              alt="monkeyMonProfil"
              className="w-[9vw] m-auto"
            />
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV NOM */}

          <div className="mt-5 w-3/4 m-auto h-[2vw] flex border border-0 border-b border-t">
            <div className="m-auto basis-1/2">
              <span>Nom</span>
            </div>
            <div className="m-auto basis-1/2">
              <span>Sausset</span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV PRENOM */}

          <div className=" w-3/4 m-auto h-[2vw] flex border border-0 border-b ">
            <div className="m-auto basis-1/2">
              <span>Prénom</span>
            </div>
            <div className="m-auto basis-1/2">
              <span>Maxime</span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV PAYS */}

          <div className=" w-3/4 m-auto h-[2vw] flex border border-0 border-b ">
            <div className="m-auto basis-1/2">
              <span>Pays</span>
            </div>
            <div className="m-auto basis-1/2">
              <span>France</span>
            </div>
          </div>

          {/* ---------------------------------------------------------------------------------------------------------- DIV CONTACT */}

          <div className="mt-5">
            <span className="text-xl underline">Contacter cet utilisateur</span>
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
                    className="rounded-full w-3/4"
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
                    className="rounded-md w-3/4"
                  />
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------------------------------------------------------- INPUT BOUTON SUBMIT  */}

            <div className="mb-10 col-span-2 mt-10">
              <input
                type="submit"
                className="border-solid border-2 h-[2vw] w-1/3 rounded-full bg-blue-400 hover:opacity-90 hover:underline"
                value="Envoyer"
              />
            </div>
          </form>

          {/* ---------------------------------------------------------------------------------------------------------- DIV ANNONCES UTILISATEUR */}

          <div className="text-xl underline">
            Toutes les annonces de cet utilisateur
          </div>
          <div className="mr-[2vw] ml-[2vw] pt-10 grid grid-cols-2 gap-2 ">
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
    </div>
  );
};

export default ProfilPublic;
