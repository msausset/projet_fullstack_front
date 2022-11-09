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
            <span className="text-[1.1vw] underline">Contacter cet utilisateur</span>
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

              <div className="m-[0.15vw] text-center">
                <button className="my-[0.2vw] h-[2vw] w-[11.5vw] rounded-full bg-pink-400 hover:opacity-90 hover:underline">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPublic;
