import React from "react";
import { Link } from "react-router-dom";
import monkeyProduit from "../../images/monkey-produit.gif";
import mustang from "../../images/mustang-shelby-exemple.jpg";

const Produit = () => {
  return (
    <div>
      <div className="w-[60vw] min-h-screen pb-[1vw] m-auto shadow-2xl bg-white opacity-95">
        <div className="pt-[1.5vw]">
          <img
            src={monkeyProduit}
            alt="monkeyProduit"
            className="w-[10vw] m-auto"
          />
        </div>
        <div className="text-center text-[0.8vw] mt-[1vw]">
          <span className="">
            Allez-vous craquer pour cette magnifique annonce ?
          </span>
        </div>
        {/* ------------------------------------------------------------------------------------------ AFFICHAGE PRODUIT CLIQUÉ */}

        <div className="mr-[2vw] ml-[2vw] pt-[1.5vw]">
          {/* ------------------------------------------------------------------------------------------ DIV GLOBALE PRODUIT */}

          <div className="rounded-[0.3vw] mb-[1.5vw] border border-black border-[0.15vw] bg-slate-200">
            {/* ------------------------------------------------------------------------------------------ DIV PHOTO */}

            <div className="h-[30vw] m-[0.1vw] text-center">
              <img src={mustang} className="w-full h-[30vw]" alt="mustang" />
            </div>

            {/* ------------------------------------------------------------------------------------------ DIV TITRE */}

            <div className="text-4xl h-[3vw] m-[0.1vw] text-center">
              <span>Mustang Shelby GT500 - 1967</span>
            </div>

            {/* ------------------------------------------------------------------------------------------ DIV DESCRIPTION */}

            <div className="rounded-[0.5vw] w-[40vw] m-auto text-center bg-slate-300">
              <p className="text-justify p-[1vw]">
                Horum adventum praedocti speculationibus fidis rectores militum
                tessera data sollemni armatos omnes celeri eduxere procursu et
                agiliter praeterito Calycadni fluminis ponte, cuius undarum
                magnitudo murorum adluit turres, in speciem locavere pugnandi.
                neque tamen exiluit quisquam nec permissus est congredi.
                formidabatur enim flagrans vesania manus et superior numero et
                ruitura sine respectu salutis in ferrum. Iamque lituis cladium
                concrepantibus internarum non celate ut antea turbidum saeviebat
                ingenium a veri consideratione detortum et nullo inpositorum vel
                conpositorum fidem sollemniter inquirente nec discernente a
                societate noxiorum insontes velut exturbatum e iudiciis fas omne
                discessit, et causarum legitima silente defensione carnifex
                rapinarum sequester et obductio capitum et bonorum ubique
                multatio versabatur per orientales provincias, quas recensere
                puto nunc oportunum absque Mesopotamia digesta, cum bella
                Parthica dicerentur, et Aegypto, quam necessario aliud reieci ad
                tempus. Nec sane haec sola pernicies orientem diversis cladibus
                adfligebat. Namque et Isauri, quibus est usitatum saepe pacari
                saepeque inopinis excursibus cuncta miscere, ex latrociniis
                occultis et raris, alente inpunitate adulescentem in peius
                audaciam ad bella gravia proruperunt, diu quidem perduelles
                spiritus inrequietis motibus erigentes, hac tamen indignitate
                perciti vehementer, ut iactitabant, quod eorum capiti quidam
                consortes apud Iconium Pisidiae oppidum in amphitheatrali
                spectaculo feris praedatricibus obiecti sunt praeter morem.
              </p>
            </div>

            {/* ------------------------------------------------------------------------------------------ DIV PRIX */}

            <div className=" w-[20vw] m-auto pt-[1.5vw] my-[1vw] text-center">
              <span className="text-[2vw] bg-yellow-200">25.999€</span>
            </div>

            {/* ------------------------------------------------------------------------------------------ DIV NOM ANNONCEUR + LIEN */}

            <div className=" w-[20vw] m-auto pt-[1.5vw] my-[1vw] text-center">
              <span>
                Posté par :{" "}
                <Link
                  to="/profil-public/:id"
                  className="hover:text-blue-900 hover:underline"
                >
                  Maxime Sausset
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produit;
