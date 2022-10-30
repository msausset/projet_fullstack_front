import React from "react";

const Footer = () => {
  return (
    // ---------------------------------------------------------------------------------------- DIV BOTTOM VERTE

    <div className="bottom-0 left-0 right-0 h-20 bg-green-300 w-full shadow-2xl text-center">

      {/* ---------------------------------------------------------------------------------------- DIV 1/3 HAUTEUR POUR CENTRER TEXTE */}

      <div className="h-1/3"></div>

      {/* ---------------------------------------------------------------------------------------- DIV 1/3 HAUTEUR POUR CENTRER TEXTE */}

      <div className="h-1/3">© MonAnnonce - 2022</div>

    {/* ---------------------------------------------------------------------------------------- DIV 1/3 HAUTEUR POUR CENTRER TEXTE */}

      <div className="h-1/3"></div>
    </div>
  );
};

export default Footer;
