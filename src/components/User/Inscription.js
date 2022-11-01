import React from "react";

const Inscription = () => {
  return (
    <div className="p-[5vw]">

      {/* ------------------------------------------------------------------------------------------------------ DIV ARRONDIE OPACITE 95 OMBRE PORTEE */}

      <div className="rounded-md bg-white w-[40vw] min-h-[20vw] object-center m-auto shadow-2xl text-center pt-10 opacity-95">
        <p className="text-lg">Bienvenue !</p>
        <p className="text-sm">
          Inscrivez-vous pour avoir accès à toutes les fonctionnalités.
        </p>

      {/* ------------------------------------------------------------------------------------------------------ GRILLE INSCRIPTION 6 LIGNES / 2 COLS */}

        <div className="grid grid-cols-2 grid-rows-2 pt-10">

      {/* ------------------------------------------------------------------------------------------------------ INPUT PRENOM MARGE BOTTOM 10 */}

          <div className="mb-10">
            <div>
              <label htmlFor="prenom">Prénom</label>
            </div>
            <div>
              <input type="text" id="prenom" className="rounded-full w-2/3" />
            </div>
          </div>

      {/* ------------------------------------------------------------------------------------------------------ INPUT NOM MARGE BOTTOM 10 */}

          <div className="mb-10">
            <div>
              <label htmlFor="nom">Nom</label>
            </div>
            <div>
              <input type="text" id="nom" className="rounded-full w-2/3" />
            </div>
          </div>

      {/* ------------------------------------------------------------------------------------------------------ INPUT EMAIL MARGE BOTTOM 10 */}

          <div className="mb-10">
            <div>
              <label htmlFor="email">Email</label>
            </div>
            <div>
              <input type="text" id="email" className="rounded-full w-2/3" />
            </div>
          </div>

      {/* ------------------------------------------------------------------------------------------------------ INPUT TELEPHONE MARGE BOTTOM 10 */}

          <div className="mb-10">
            <div>
              <label htmlFor="tel">Téléphone</label>
            </div>
            <div>
              <input type="text" id="tel" className="rounded-full w-2/3" />
            </div>
          </div>

      {/* ------------------------------------------------------------------------------------------------------ INPUT ADRESSE MARGE BOTTOM 10 */}

          <div className="mb-10">
            <div>
              <label htmlFor="adresse">Adresse</label>
            </div>
            <div>
              <input type="text" id="adresse" className="rounded-full w-2/3" />
            </div>
          </div>

      {/* ------------------------------------------------------------------------------------------------------ INPUT CODE POSTAL MARGE BOTTOM 10 */}

          <div className="mb-10">
            <div>
              <label htmlFor="cp">Code postal</label>
            </div>
            <div>
              <input type="text" id="cp" className="rounded-full w-2/3" />
            </div>
          </div>

      {/* ------------------------------------------------------------------------------------------------------ INPUT VILLE MARGE BOTTOM 10 */}

          <div className="mb-10">
            <div>
              <label htmlFor="ville">Ville</label>
            </div>
            <div>
              <input type="text" id="ville" className="rounded-full w-2/3" />
            </div>
          </div>

      {/* ------------------------------------------------------------------------------------------------------ INPUT PAYS MARGE BOTTOM 10 */}

          <div className="mb-10">
            <div>
              <label htmlFor="pays">Pays</label>
            </div>
            <div>
              <input type="text" id="pays" className="rounded-full w-2/3" />
            </div>
          </div>

      {/* ------------------------------------------------------------------------------------------------------ INPUT MOT DE PASSE MARGE BOTTOM 10 */}

          <div className="mb-10">
            <div>
              <label htmlFor="mdp">Mot de passe</label>
            </div>
            <div>
              <input type="text" id="mdp" className="rounded-full w-2/3" />
            </div>
          </div>

      {/* ------------------------------------------------------------------------------------------------------ INPUT CONFIMATION MOT DE PASSE MARGE BOTTOM 10 */}

          <div className="mb-10">
            <div>
              <label htmlFor="confirmerMdp">Confirmer mot de passe</label>
            </div>
            <div>
              <input
                type="text"
                id="confirmerMdp"
                className="rounded-full w-2/3"
              />
            </div>
          </div>

      {/* ------------------------------------------------------------------------------------------------------ INPUT PHOTO DE PROFIL MARGE BOTTOM 10 */}

          <div className="mb-10">
            <div className="mb-2">
            <label htmlFor="photoProfil">Choisissez une photo de profil</label>
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
            <input type="file" id="photoProfil" accept=".pdf, .png, .jpg" className="hidden" />
            </div>
          </div>

      {/* ------------------------------------------------------------------------------------------------------ INPUT PHOTO IDENTITE MARGE BOTTOM 10 */}

          <div className="mb-10">
            <div className="mb-2">
            <label htmlFor="photoIdentite">Choisissez une photo d'identité</label>
            </div>
            <div>
              <label
                htmlFor="photoId"
                className="w-full text-sm text-slate-500 mr-4 py-2 px-4 rounded-full border-0 text-sm font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100"
              >
                Sélectionner un fichier
              </label>
            </div>
            <div>
            <input type="file" id="photoId" accept=".pdf, .png, .jpg" className="hidden" />
            </div>
          </div>

      {/* ------------------------------------------------------------------------------------------------------ BOUTON S'INSCRIRE MARGE BOTTOM 10 */}

          <div className="mb-10 col-span-2">
            <button className="border-solid border-2 h-[2vw] w-1/3 rounded-full bg-green-600 hover:opacity-90 hover:border-green-600">
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
