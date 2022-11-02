import React from "react";
import monkeyEdition from "../../images/monkey-edition.gif";

const EditionCreationAnnonce = () => {
  const handleClick = (e) => {
    e.preventDefault();
    alert("Annonce modifiée !");
  };
  const handleClick2 = (e) => {
    e.preventDefault();
    alert("Annonce ajoutée !");
  };

  return (
    <div className="p-[5vw] min-h-screen">
      {/* ------------------------------------------------------------------------------------------------------ DIV ARRONDIE OPACITE 95 OMBRE PORTEE */}

      <div className="rounded-md bg-white w-[40vw] min-h-[20vw] object-center m-auto shadow-2xl text-center pt-10 opacity-95">
        {/* --------------------------------------------------------------------------------------------------------------------------- IMAGE SINGE */}

        <div>
          <img
            src={monkeyEdition}
            alt="monkeyEdition"
            className="w-[10vw] m-auto"
          />
        </div>

        {/* --------------------------------------------------------------------------------------------------------------------------- DIV TEXTE  */}

        <div className="mt-5 w-[25vw] m-auto">
          <span>
            Voulez-vous mettre à jour ou créer une annonce ? <br /> A vous de
            choisir 😏
          </span>
        </div>

        {/* --------------------------------------------------------------------------------------------------------------------------- DEBUT FORMULAIRE  */}

        <form action="" onSubmit={handleClick}>
          {/* ------------------------------------------------------------------------------------------------------ GRILLE INSCRIPTION 2 LIGNES / 3 COLS */}

          <div className="grid grid-cols-3 grid-rows-2">
            {/* ------------------------------------------------------------------------------------------------------ INPUT TITRE */}

            <div className="place-self-center">
              <div>
                <label htmlFor="titre">Titre</label>
              </div>
              <div>
                <input type="text" id="titre" className="rounded-full w-2/3" />
              </div>
            </div>

            {/* --------------------------------------------------------------------------------------------------------------------------- INPUT PRIX  */}

            <div className="place-self-center">
              <div>
                <label htmlFor="prix">Prix</label>
              </div>
              <div>
                <input type="number" id="prix" className="rounded-full w-2/3" />
              </div>
            </div>

            {/* --------------------------------------------------------------------------------------------------------------------------- SELECT STATUT  */}

            <div className="place-self-center">
              <div>
                <label htmlFor="prix">Statut</label>
              </div>

              <div>
                <select
                  className="w-[7vw] py-3 pr-4 text-gray-500 border rounded-full outline-none bg-gray-200 focus:bg-white focus:border-indigo-600"
                  name="statut"
                  id="statut"
                >
                  {/* ------------------------------------------------------------------------------------------ REMPLACER LES EXEMPLES PAR LES STATUT DANS LA BDD */}
                  {/* ------------------------------------------------------------------------------------------ MAPPER STATUT BDD ET AFFICHER OPTION  */}

                  <option value="">-</option>
                  <option value="ptu">Pas très urgent</option>
                  <option value="u">Urgent</option>
                  <option value="tu">Très urgent</option>
                </select>
              </div>
            </div>

            {/* --------------------------------------------------------------------------------------------------------------------------- TEXTAREA DESCRIPTION SUR 2 COLONNES   */}

            <div className="mb-10 col-span-2">
              <div>
                <label htmlFor="prenom">Description</label>
              </div>
              <div>
                <textarea
                  name="description"
                  id=""
                  cols="30"
                  rows="5"
                  className="rounded-md w-3/4"
                />
              </div>
            </div>

            {/* --------------------------------------------------------------------------------------------------------------------------- INPUT FILE HIDDEN POUR PHOTO  */}

            <div className="mb-10">
              <div className="mb-2">
                <label htmlFor="photoProfil">Choisissez une photo</label>
              </div>
              <div>
                <label
                  htmlFor="photoProfil"
                  className="w-full text-sm text-slate-500 mr-4 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100"
                >
                  Sélectionner un fichier
                </label>
              </div>
              <div>
                <input
                  type="file"
                  id="photoProfil"
                  accept=".pdf, .png, .jpg"
                  className="hidden"
                />
              </div>
            </div>
          </div>

          {/* --------------------------------------------------------------------------------------------------------------------------- DIV FLEX  */}

          <div className="flex">
            {/* --------------------------------------------------------------------------------------------------------------------------- INPUT BOUTON MISE A JOUR   */}

            <div className="mb-10 grow">
              <input
                onClick={handleClick}
                type="submit"
                className="border-solid border-2 h-[2vw] text-[1vw] font-bold w-2/3 rounded-full bg-red-500 hover:opacity-90 hover:underline"
                value="Mettre à jour"
              />

              {/* --------------------------------------------------------------------------------------------------------------------------- INPUT BOUTON CREATION ANNONCE ONCLICK DIFFERENT DE MISE A JOUR   */}
            </div>
            <div className="mb-10 grow">
              <input
                onClick={handleClick2}
                type="submit"
                className="border-solid border-2 h-[2vw] text-[1vw] font-bold w-2/3 rounded-full bg-yellow-500 hover:opacity-90 hover:underline"
                value="Créer l'annonce"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditionCreationAnnonce;
