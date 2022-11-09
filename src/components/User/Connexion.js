import React, { useState } from "react";
import { Link } from "react-router-dom";
import monkeyHello from "../../images/monkey-hello.gif";
import axios from "axios";
import { setAuthToken } from "../../utils/setAuthToken";

const Connexion = () => {
  const [email, setEmail] = useState("");
  const [mdp, setMdp] = useState("");

  const handleClick = (e) => {
    e.preventDefault();

    const loginPayload = {
      email: email,
      password: mdp,
    };

    axios
      .post("http://127.0.0.1:3333/login", loginPayload)
      .then((response) => {
        //get token from response
        const token = response.data.token.token;

        //set JWT token to local
        localStorage.setItem("token", token);

        //set token to axios common header
        setAuthToken(token);

        //redirect user to home page
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
        alert("email ou mot de passe incorrect");
      });
  };

  return (
    <div className="p-[5vw] min-h-screen">
      <div className="rounded-[0.5vw] bg-white w-[30vw] min-h-[20vw]  m-auto shadow-2xl text-center pt-[1.5vw] opacity-95">
        {/* ------------------------------------------------------------------------------------------------------- AFFICHAGE IMAGE SINGE */}

        <div className="pb-[1vw]">
          <img src={monkeyHello} alt="monkeyHello" className="w-[5vw] m-auto" />
        </div>
        <p className="text-[0.9vw]">Bonjour !</p>
        <p className="text-[0.7vw]">
          Connectez-vous pour accéder à toutes les fonctionnalités.
        </p>
        {/* ------------------------------------------------------------------------------------------------------ FORMULAIRE CONNEXION   */}

        <form action="" onSubmit={handleClick}>
          {/* ------------------------------------------------------------------------------------------------------ GRILLE POUR LES INPUTS   */}

          <div className="grid grid-cols-2 grid-rows-2 pt-[1.5vw]">
            {/* ------------------------------------------------------------------------------------------------------- DIV EMAIL */}

            <div className="col-span-2 mb-[1.5vw]">
              <div>
                <label htmlFor="email">Email</label>
              </div>
              <div>

                <input
                  type="text"
                  id="email"
                  className="rounded-full w-[22vw]"
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>
            </div>

            {/* --------------------------------------------------------------------------------------------------------- DIV MDP */}

            <div className="col-span-2">
              <div>
                <label htmlFor="email">Mot de passe</label>
              </div>
              <div>

                <input
                  type="password"
                  id="mdp"
                  className="rounded-full w-[22vw]"
                  onChange={(e) => setMdp(e.target.value)}
                />

              </div>

              {/* --------------------------------------------------------------------------------- DIV FLEX POUR REINITIALISATION ET INSCRIPTION SUR LA MEME LIGNE */}

              <div className="flex">
                <div className="w-[4.5vw]"></div>
                <div className="text-[0.6vw] w-[9vw] text-right pt-[0.2vw] hover:text-blue-600">
                  <Link to="/reinitialisation-mdp" className="hover:underline">
                    Mot de passe oublié ?
                  </Link>
                </div>
                <div className="text-[0.6vw] text-right pt-[0.2vw] w-[18vw] ">
                  <span>
                    Pas encore inscrit ?
                    <Link
                      to="/inscription"
                      className="hover:text-blue-900 hover:underline"
                    >
                      Inscrivez-vous
                    </Link>
                  </span>
                </div>
                <div className="w-[5vw]"></div>
              </div>
            </div>

            {/* ------------------------------------------------------------------------------------------------------------------------- BOUTON CONNEXION */}

            <div className="mb-[1.5vw] col-span-2 mt-[1.5vw]">
              <button className="border-solid border-[0.15vw] h-[2vw] w-[10vw] rounded-full bg-blue-400 hover:opacity-90 hover:underline">
                Se connecter
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Connexion;
