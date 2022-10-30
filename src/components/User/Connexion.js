import React from "react";

const Connexion = () => {
  return (
    <div className="p-[5vw]">
      <div className="rounded-md bg-white w-1/3 min-h-[20vw] object-center m-auto shadow-2xl text-center pt-10">
        <p className="text-lg">Bienvenue !</p>
        <p className="text-sm">
          Connectez-vous pour accéder à toutes les fonctionnalités.
        </p>
        <div className="grid grid-cols-2 grid-rows-2 pt-10">
          <div>
          <div>
            <label htmlFor="email" className="border-dashed">Email</label>
            </div>
            <div>
            <input type="text" id="email" className="rounded-full"/>
            </div>
          </div>
          <div>
            <label htmlFor="email">Mot de passe</label>
            <input type="text" />
          </div>
          <div>
            <label htmlFor="email">Confirmer le mot de passe</label>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connexion;
