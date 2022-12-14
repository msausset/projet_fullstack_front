import React, { useEffect, useState } from "react";
import monkeyMonProfil from "../../images/monkey-mon-profil.gif";
import { Link } from "react-router-dom";
import { request } from "../../utils/Request";

import image_not_found from '../../images/image-not-found.png';

const MonProfil = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [mail, setMail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [adresse, setAdresse] = useState("");
  const [ville, setVille] = useState("");
  const [codePostal, setCodepostal] = useState("");
  const [pays, setPays] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  
  // Récupère le fichier
  const [ profilePictureFile, setProfilePictureFile ] = useState('')

  // Récupère l'image du produit (retourne une balise <img>)
  const [ profilePicture, setProfilePicture ] = useState('')

  const [id, setId] = useState("");

  useEffect(() => {
    request.get("user/me").then((response) => {
      console.log(response.data);

      setNom(response.data.lastname);
      setPrenom(response.data.firstname);
      setMail(response.data.email);
      setTelephone(response.data.phone);
      setAdresse(response.data.address);
      setVille(response.data.city);
      setCodepostal(response.data.zip_code);
      setPays(response.data.country);

      if(response.data.profile_picture !== '' && response.data.profile_picture !== undefined && response.data.profile_picture !== null) {
        setProfilePictureFile(response.data.profile_picture)
        setProfilePicture(<img src={'http://localhost:3333/uploads/' + encodeURI(response.data.profile_picture)} alt='Photo de profil' className="w-[9vw] m-auto" />)
      } else {
        setProfilePicture(<img src={image_not_found} alt='Photo de profil' className="w-[9vw] m-auto" />)
      }

      setId(response.data.id);
    });
  }, [isClicked]);

  // FONCTION PERMETTANT DE CHANGER LE BOUTON ET LES CLASSES DES SPANS ET INPUTS

  const handleClick = (e) => {
    e.preventDefault();
    setIsClicked(true);
  };

  // FONCTION DE SOUMISSION DE FORMULAIRE

  const handleClickAgain = (e) => {

    var bodyFormData = new FormData();

    bodyFormData.append("firstname", prenom);
    bodyFormData.append("lastname", nom);
    bodyFormData.append("email", mail);
    bodyFormData.append("phone", telephone);
    bodyFormData.append("address", adresse);
    bodyFormData.append("zip_code", codePostal);
    bodyFormData.append("city", ville);
    bodyFormData.append("country", pays);
    bodyFormData.append('profile_picture', profilePictureFile)

    request
      .put("/user/" + id, bodyFormData, {
          headers: {
              'Content-Type' : 'multipart/form-data'
          }
      })
      .then((response) => {
        console.log("update response", response);
        // alert("modification validé");
      })
      .catch((err) => {
        console.log(err);
        alert("erreur de modification");
      });

    setIsClicked(false);
    console.log(prenom);
  };

  return (
    <div className=" p-[5vw] pt-[2vw] min-h-screen">
      {/* ---------------------------------------------------------------------------------------------------------- DIV   */}

      <div className="w-[40vw] m-auto h-[15vw] mb-[30vw]">
        {/* ---------------------------------------------------------------------------------------------------------- DIV INFORMATIONS UTILISATEUR */}

        <div className="w-full bg-white pb-[1.5vw] min-h-[20vw] m-auto text-center pt-[1.5vw] opacity-95">
          <div className="mb-10">
            <button className="border-solid border-[0.15vw] h-[4vw] text-[1.2vw] font-bold w-[15vw] rounded-full bg-teal-500 hover:opacity-90 hover:underline">
              <Link to="mes-annonces">Voir mes annonces</Link>
            </button>
          </div>
          <form action="" onSubmit={handleClickAgain}>
            <div className="h-[10vw] rounded-full border border-[0.3vw] border-black w-[10vw] m-auto">
              {/* ---------------------------------------------------------------------------------------------------------- DIV IMAGE PHOTO DE PROFIL ENTOURÉ BORDER */}
              { profilePicture }
            </div>
            <div className="pt-[1vw]">
              <label
                htmlFor="photoId"
                className={
                  isClicked
                    ? "w-full text-[0.7vw] text-slate-500 py-[0.4vw] px-[0.8vw] rounded-full border-0 text-[0.7vw] font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100"
                    : "w-full text-[0.7vw] text-slate-500 py-[0.4vw] px-[0.8vw] rounded-full border-0 text-[0.7vw] font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100 hidden"
                }
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
                onChange={e => setProfilePictureFile(e.target.files[0])}
              />
            </div>

            {/* ---------------------------------------------------------------------------------------------------------- DIV INFORMATIONS GENERALES */}

            <div className="mt-[1vw] border border-[0.15vw] border-black rounded-full w-[15vw] m-auto">
              <span className="text-[0.9vw]">Informations générales</span>
            </div>

            {/* ---------------------------------------------------------------------------------------------------------- DIV NOM */}

            <div className="mt-[1vw] w-[30vw] m-auto h-[2vw] flex border border-0 border-b border-t">
              <div className="m-auto basis-[15vw]">
                <span>Nom</span>
              </div>
              <div className="m-auto basis-[15vw]">
                {/* ---------------------------------------------------------------------------- INPUT HIDDEN A AFFICHER LORS DU CLIC SUR BOUTON "MODIFIER" */}
                <input
                  type="text"
                  className={
                    isClicked
                      ? "border border-[0.1vw] h-[1.5vw] rounded-full text-center focus:bg-slate-200 focus:border-black"
                      : "border border-[0.1vw] h-[1.5vw] rounded-full text-center focus:bg-slate-200 hidden"
                  }
                  onChange={(e) => setNom(e.target.value)}
                  defaultValue={nom}
                />
                <span name="spanHidden" className={isClicked ? "hidden" : ""}>
                  {nom}
                </span>
              </div>
            </div>

            {/* ---------------------------------------------------------------------------------------------------------- DIV PRÉNOM */}

            <div className="w-[30vw] m-auto h-[2vw] flex border border-0 border-b">
              <div className="m-auto basis-[15vw]">
                <span>Prénom</span>
              </div>
              <div className="m-auto basis-[15vw]">
                {/* ----------------------------------------------------------------------------- INPUT HIDDEN A AFFICHER LORS DU CLIC SUR BOUTON "MODIFIER" */}
                <input
                  type="text"
                  className={
                    isClicked
                      ? "border border-[0.1vw] h-[1.5vw] rounded-full text-center focus:bg-slate-200 focus:border-black"
                      : "border border-[0.1vw] h-[1.5vw] rounded-full text-center focus:bg-slate-200 hidden"
                  }
                  onChange={(e) => setPrenom(e.target.value)}
                  defaultValue={prenom}
                />
                <span name="spanHidden" className={isClicked ? "hidden" : ""}>
                  {prenom}
                </span>
              </div>
            </div>

            {/* ---------------------------------------------------------------------------------------------------------- DIV COORDONNÉES */}

            <div className="mt-[1vw] border border-[0.15vw] border-black rounded-full w-[15vw] m-auto">
              <span className="text-[0.9vw]">Coordonnées</span>
            </div>

            {/* ---------------------------------------------------------------------------------------------------------- DIV MAIL */}

            <div className="mt-[1vw] w-[30vw] m-auto h-[2vw] flex border border-0 border-b border-t">
              <div className="m-auto basis-[15vw]">
                <span>Mail</span>
              </div>
              <div className="m-auto basis-[15vw]">
                {/* ---------------------------------------------------------------------------------- INPUT HIDDEN A AFFICHER LORS DU CLIC SUR BOUTON "MODIFIER" */}
                <input
                  type="text"
                  className={
                    isClicked
                      ? "border border-[0.1vw] h-[1.5vw] rounded-full text-center focus:bg-slate-200 focus:border-black"
                      : "border border-[0.1vw] h-[1.5vw] rounded-full text-center focus:bg-slate-200 hidden"
                  }
                  onChange={(e) => setMail(e.target.value)}
                  defaultValue={mail}
                />
                <span name="spanHidden" className={isClicked ? "hidden" : ""}>
                  {mail}
                </span>
              </div>
            </div>

            {/* ---------------------------------------------------------------------------------------------------------- DIV TÉLÉPHONE */}

            <div className="w-[30vw] m-auto h-[2vw] flex border border-0 border-b">
              <div className="m-auto basis-[15vw]">
                <span>Téléphone</span>
              </div>
              <div className="m-auto basis-[15vw]">
                {/* ------------------------------------------------------------------------------------ INPUT HIDDEN A AFFICHER LORS DU CLIC SUR BOUTON "MODIFIER" */}
                <input
                  type="text"
                  className={
                    isClicked
                      ? "border border-[0.1vw] h-[1.5vw] rounded-full text-center focus:bg-slate-200 focus:border-black"
                      : "border border-[0.1vw] h-[1.5vw] rounded-full text-center focus:bg-slate-200 hidden"
                  }
                  onChange={(e) => setTelephone(e.target.value)}
                  defaultValue={telephone}
                />
                <span name="spanHidden" className={isClicked ? "hidden" : ""}>
                  {telephone}
                </span>
              </div>
            </div>

            {/* ---------------------------------------------------------------------------------------------------------- DIV ADRESSE */}

            <div className="w-[30vw] m-auto h-[2vw] flex border border-0 border-b">
              <div className="m-auto basis-[15vw]">
                <span>Adresse</span>
              </div>
              <div className="m-auto basis-[15vw]">
                {/* ----------------------------------------------------------------------------------------------------------- INPUT HIDDEN A AFFICHER LORS DU CLIC SUR BOUTON "MODIFIER" */}
                <input
                  type="text"
                  className={
                    isClicked
                      ? "border border-[0.1vw] h-[1.5vw] rounded-full text-center focus:bg-slate-200 focus:border-black"
                      : "border border-[0.1vw] h-[1.5vw] rounded-full text-center focus:bg-slate-200 hidden"
                  }
                  onChange={(e) => setAdresse(e.target.value)}
                  defaultValue={adresse}
                />
                <span name="spanHidden" className={isClicked ? "hidden" : ""}>
                  {adresse}
                </span>
              </div>
            </div>

            {/* ---------------------------------------------------------------------------------------------------------- DIV CODE POSTAL */}

            <div className="w-[30vw] m-auto h-[2vw] flex border border-0 border-b">
              <div className="m-auto basis-[15vw]">
                <span>Code postal</span>
              </div>
              <div className="m-auto basis-[15vw]">
                {/* ------------------------------------------------------------------------------------- INPUT HIDDEN A AFFICHER LORS DU CLIC SUR BOUTON "MODIFIER" */}
                <input
                  type="text"
                  className={
                    isClicked
                      ? "border border-[0.1vw] h-[1.5vw] rounded-full text-center focus:bg-slate-200 focus:border-black"
                      : "border border-[0.1vw] h-[1.5vw] rounded-full text-center focus:bg-slate-200 hidden"
                  }
                  onChange={(e) => setCodepostal(e.target.value)}
                  defaultValue={codePostal}
                />
                <span name="spanHidden" className={isClicked ? "hidden" : ""}>
                  {codePostal}
                </span>
              </div>
            </div>

            {/* ---------------------------------------------------------------------------------------------------------- DIV VILLE */}

            <div className="w-[30vw] m-auto h-[2vw] flex border border-0 border-b">
              <div className="m-auto basis-[15vw]">
                <span>Ville</span>
              </div>
              <div className="m-auto basis-[15vw]">
                {/* -------------------------------------------------------------------------------- INPUT HIDDEN A AFFICHER LORS DU CLIC SUR BOUTON "MODIFIER" */}
                <input
                  type="text"
                  className={
                    isClicked
                      ? "border border-[0.1vw] h-[1.5vw] rounded-full text-center focus:bg-slate-200 focus:border-black"
                      : "border border-[0.1vw] h-[1.5vw] rounded-full text-center focus:bg-slate-200 hidden"
                  }
                  onChange={(e) => setVille(e.target.value)}
                  defaultValue={ville}
                />
                <span name="spanHidden" className={isClicked ? "hidden" : ""}>
                  {ville}
                </span>
              </div>
            </div>

            {/* ---------------------------------------------------------------------------------------------------------- DIV PAYS */}

            <div className="w-[30vw] m-auto h-[2vw] flex border border-0 border-b">
              <div className="m-auto basis-[15vw]">
                <span>Pays</span>
              </div>
              <div className="m-auto basis-[15vw]">
                {/* ---------------------------------------------------------------------------------- INPUT HIDDEN A AFFICHER LORS DU CLIC SUR BOUTON "MODIFIER" */}
                <input
                  type="text"
                  className={
                    isClicked
                      ? "border border-[0.1vw] h-[1.5vw] rounded-full text-center focus:bg-slate-200 focus:border-black"
                      : "border border-[0.1vw] h-[1.5vw] rounded-full text-center focus:bg-slate-200 hidden"
                  }
                  onChange={(e) => setPays(e.target.value)}
                  defaultValue={pays}
                />
                <span name="spanHidden" className={isClicked ? "hidden" : ""}>
                  {pays}
                </span>
              </div>
            </div>

            {/* ---------------------------------------------------------------------------------------------------------- DIV BOUTON */}

            <div className="mt-10">
              {/* ---------------------------------------------------------------------------------------------------------- BOUTON MODIFIER INFORMATIONS */}

              <button
                className={
                  isClicked
                    ? "border-solid h-[2vw] w-1/3 rounded-full bg-yellow-400 hover:underline hover:opacity-90 hidden"
                    : "border-solid h-[2vw] w-1/3 rounded-full bg-yellow-400 hover:underline hover:opacity-90"
                }
                onClick={handleClick}
              >
                Modifier
              </button>
              <input
                type="submit"
                value="Valider modifications"
                className={
                  isClicked
                    ? "border-solid h-[2vw] w-1/3 rounded-full bg-yellow-400 hover:underline hover:opacity-90"
                    : "border-solid h-[2vw] w-1/3 rounded-full bg-yellow-400 hover:underline hover:opacity-90 hidden"
                }
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MonProfil;
