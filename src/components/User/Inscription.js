import React, { useState } from "react";
import monkeyInscription from "../../images/monkey-inscription.gif";
import axios from "axios";

const Inscription = () => {
  const [isClicked, setIsClicked] = useState(false);

  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [adresse, setAdresse] = useState("");
  const [cp, setCp] = useState("");
  const [ville, setVille] = useState("");
  const [pays, setPays] = useState("");
  const [mdp, setMdp] = useState("");
  const [photoProfil, setPhotoProfil] = useState("");
  const [photoId, setPhotoId] = useState("");

  const changeHandler = (event) => {
    setPhotoProfil(event.target.files[0]);
    setPhotoId(event.target.files[0]);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    console.log(prenom, nom, email, tel, adresse, cp, ville, pays, mdp);

    var bodyFormData = new FormData();

    bodyFormData.append("firstname", prenom);
    bodyFormData.append("lastname", nom);
    bodyFormData.append("email", email);
    bodyFormData.append("phone", tel);
    bodyFormData.append("address", adresse);
    bodyFormData.append("zip_code", cp);
    bodyFormData.append("city", ville);
    bodyFormData.append("country", pays);
    bodyFormData.append("password", mdp);
    bodyFormData.append("identifical_file", photoProfil);
    bodyFormData.append("profile_picture", photoId);

    axios
      .post("http://127.0.0.1:3333/registration", bodyFormData)
      .then((response) => {
        setIsClicked(true);
        alert("inscription validé !");

        //redirect user to home page
        const timer = setTimeout(() => {
          window.location.href = "/connexion";
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
        alert("erreur d'inscription");
      });
  };

  return (
    <div className="p-[5vw] min-h-screen">
      {/* ------------------------------------------------------------------------------------------------------ DIV ARRONDIE OPACITE 95 OMBRE PORTEE */}

      <div className="rounded-[0.5vw] bg-white w-[40vw] min-h-[20vw] m-auto shadow-2xl text-center pt-[1.5vw] opacity-95">
        {/* ------------------------------------------------------------------------------------------------------- AFFICHAGE IMAGE SINGE */}

        <div className="pb-[1vw]">
          <img
            src={monkeyInscription}
            alt="monkeyInscription"
            className="w-[5vw] m-auto"
          />
        </div>
        <p className="text-[0.9vw]">Bienvenue !</p>
        <p className="text-[0.7vw]">
          Inscrivez-vous pour avoir accès à toutes les fonctionnalités.
        </p>

        {/* ------------------------------------------------------------------------------------------------------ FORMULAIRE INSCRIPTION */}

        <form action="" onSubmit={handleClick}>
          {/* ------------------------------------------------------------------------------------------------------ GRILLE INSCRIPTION 6 LIGNES / 2 COLS */}
          <div className="grid grid-cols-2 grid-rows-2 pt-[1.5vw]">
            {/* ------------------------------------------------------------------------------------------------------ INPUT PRENOM MARGE BOTTOM 10 */}
            <div className="mb-[1.5vw]">
              <div>
                <label htmlFor="prenom">Prénom</label>
              </div>
              <div>
                <input
                  type="text"
                  id="prenom"
                  className="rounded-full w-[13vw]"
                  onChange={(e) => setPrenom(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------------ INPUT NOM MARGE BOTTOM 10 */}

            <div className="mb-[1.5vw]">
              <div>
                <label htmlFor="nom">Nom</label>
              </div>
              <div>
                <input
                  type="text"
                  id="nom"
                  className="rounded-full w-[13vw]"
                  onChange={(e) => setNom(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------------ INPUT EMAIL MARGE BOTTOM 10 */}

            <div className="mb-[1.5vw]">
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  className="rounded-full w-[13vw]"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------------ INPUT TELEPHONE MARGE BOTTOM 10 */}

            <div className="mb-[1.5vw]">
              <div>
                <label htmlFor="tel">Téléphone</label>
              </div>
              <div>
                <input
                  type="text"
                  id="tel"
                  className="rounded-full w-[13vw]"
                  onChange={(e) => setTel(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------------ INPUT ADRESSE MARGE BOTTOM 10 */}

            <div className="mb-[1.5vw]">
              <div>
                <label htmlFor="adresse">Adresse</label>
              </div>
              <div>
                <input
                  type="text"
                  id="adresse"
                  className="rounded-full w-[13vw]"
                  onChange={(e) => setAdresse(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------------ INPUT CODE POSTAL MARGE BOTTOM 10 */}

            <div className="mb-[1.5vw]">
              <div>
                <label htmlFor="cp">Code postal</label>
              </div>
              <div>
                <input
                  type="text"
                  id="cp"
                  className="rounded-full w-[13vw]"
                  onChange={(e) => setCp(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------------ INPUT VILLE MARGE BOTTOM 10 */}

            <div className="mb-[1.5vw]">
              <div>
                <label htmlFor="ville">Ville</label>
              </div>
              <div>
                <input
                  type="text"
                  id="ville"
                  className="rounded-full w-[13vw]"
                  onChange={(e) => setVille(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------------ INPUT PAYS MARGE BOTTOM 10 */}

            <div className="mb-[1.5vw]">
              <div>
                <label htmlFor="pays">Pays</label>
              </div>
              <div>
                <input
                  type="text"
                  id="pays"
                  className="rounded-full w-[13vw]"
                  onChange={(e) => setPays(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------------ INPUT MOT DE PASSE MARGE BOTTOM 10 */}

            <div className="mb-[1.5vw]">
              <div>
                <label htmlFor="mdp">Mot de passe</label>
              </div>
              <div>
                <input
                  type="password"
                  id="mdp"
                  className="rounded-full w-[13vw]"
                  onChange={(e) => setMdp(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------------ INPUT PHOTO DE PROFIL MARGE BOTTOM 10 */}

            <div className="mb-[1.5vw]">
              <div className="mb-[1vw]">
                <label htmlFor="photoProfil">
                  Choisissez une photo de profil
                </label>
              </div>
              <div>
                <label
                  htmlFor="photoProfil"
                  className="w-full text-[0.8vw] text-slate-500 py-[0.5vw] px-[0.6vw] rounded-full border-0 text-[0.8vw] font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100"
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
                  onChange={changeHandler}
                />
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------------ INPUT PHOTO IDENTITE MARGE BOTTOM 10 */}

            <div className="mb-[1.5vw]">
              <div className="mb-[1vw]">
                <label htmlFor="photoIdentite">
                  Choisissez une photo d'identité
                </label>
              </div>
              <div>
                <label
                  htmlFor="photoId"
                  className="w-full text-[0.8vw] text-slate-500 py-[0.5vw] px-[0.6vw] rounded-full border-0 text-[0.8vw] font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100"
                >
                  Sélectionner un fichier
                </label>
              </div>
              <div>
                <input
                  
                  type="file"
                  id="photoId"
                  accept=".pdf, .png, .jpg"
                  className="hidden"
                  onChange={changeHandler}
                />
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------------ INPUT SUBMIT S'INSCRIRE MARGE BOTTOM 10 */}

            <div className="mb-[1.5vw] col-span-2">
              <input
                type="submit"
                value="S'inscrire"
                className="border-solid border-[0.15vw] h-[2vw] w-[13vw] rounded-full bg-green-600 hover:opacity-90 hover:border-green-600 hover:underline"
              />
            </div>
          </div>
        </form>
        <div
          className={
            isClicked ? "mt-[1vw] bg-green-400" : "mt-[1vw] bg-green-400 hidden"
          }
        >
          <p className="text-center">Votre compte a bien été créé.</p>
        </div>
      </div>
    </div>
  );
};

export default Inscription;
