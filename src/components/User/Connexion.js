import React from "react";

const Connexion = () => {
  return (
    <div className="p-[5vw]">
      <div className="rounded-md bg-white w-1/3 min-h-[20vw] object-center m-auto shadow-2xl text-center pt-10">
        <p className="text-lg">Bonjour !</p>
        <p className="text-sm">
          Connectez-vous pour accéder à toutes les fonctionnalités.
        </p>
        <div className="grid grid-cols-2 grid-rows-2 pt-10">
          <div className="col-span-2 mb-10">
            <div>
              <label htmlFor="email">
                Email
              </label>
            </div>
            <div>
              <input type="text" id="email" className="rounded-full w-3/4" />
            </div>
          </div>
          <div className="col-span-2">
            <div>
              <label htmlFor="email">Mot de passe</label>
            </div>
            <div>
              <input type="text" id="mdp" className="rounded-full w-3/4" />
            </div>
          <div className="text-xs">Mot de passe oublié</div>
          </div>
          <div className="mb-10 col-span-2">
            <button className="border-solid border-2 h-[2vw] w-1/3 rounded-full bg-blue-400 hover:opacity-90 hover:border-blue-400">Se connecter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
