import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Connexion from "./components/User/Connexion";
import Accueil from "./pages/Accueil";
import Inscription from "./components/User/Inscription";
import Footer from "./components/Footer/Footer";
import ReinitialisationMdp from "./components/User/ReinitialisationMdp";
import ReinitialisationMdpMail from "./components/User/ReinitialisationMdpMail";
import Deconnexion from "./components/User/Deconnexion";
import Recherche from "./components/Annonces/Recherche";
import Produit from "./components/Annonces/Produit";
import Annonces from "./components/Annonces/Annonces";
import EditionCreationAnnonce from "./components/Annonces/EditionCreationAnnonce";
import ListeAnnonces from "./components/Annonces/ListeAnnonces";
import MonProfil from "./components/Profil/MonProfil";
import ProfilPublic from "./components/Profil/ProfilPublic";
import { setAuthToken } from "./utils/setAuthToken";

function App() {
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  /* console.log(token); */

  return (
    <div>
      <BrowserRouter>
        {/* ------------------------------------------------------------------------------- COMPONENTS > NAVBAR > NAVBAR */}
        <Navbar />
        <Routes>
          {/* ------------------------------------------------------------------------------- PAGES > ACCUEIL */}
          <Route path="/" element={<Accueil />} />
          {/* ------------------------------------------------------------------------------- COMPONENTS > USER > CONNEXION */}
          <Route path="/connexion" element={<Connexion />} />
          {/* ------------------------------------------------------------------------------- COMPONENTS > USER > INSCRIPTION */}
          <Route path="/inscription" element={<Inscription />} />
          {/* ------------------------------------------------------------------------------- COMPONENTS > USER > REINITIALISATIONMDP */}
          <Route
            path="/reinitialisation-mdp"
            element={<ReinitialisationMdp />}
          />
          {/* ------------------------------------------------------------------------------- COMPONENTS > USER > REINITIALISATIONMDPMAIL */}
          <Route
            path="/reinitialisation-mdp-mail"
            element={<ReinitialisationMdpMail />}
          />
          {/* ------------------------------------------------------------------------------- COMPONENTS > ANNONCES > RECHERCHE */}
          <Route path="/recherche" element={<Recherche />} />
          {/* ------------------------------------------------------------------------------- COMPONENTS > ANNONCES > ANNONCES */}
          <Route path="/annonces" element={<Annonces />} />
          {/* ------------------------------------------------------------------------------- COMPONENTS > ANNONCES > PRODUIT */}
          <Route path="/produit/:id" element={<Produit />} />
          {/* ------------------------------------------------------------------------------- COMPONENTS > ANNONCES > EDITIONCREATIONANNONCE */}
          <Route
            path="/edition-creation-annonce"
            element={<EditionCreationAnnonce />}
          />
          {/* ------------------------------------------------------------------------------- COMPONENTS > ANNONCES > LISTEANNONCES */}
          <Route path="/liste-annonces" element={<ListeAnnonces />} />
          {/* ------------------------------------------------------------------------------- COMPONENTS > ANNONCES > MONPROFIL */}
          <Route path="/mon-profil" element={<MonProfil />} />
          {/* ------------------------------------------------------------------------------- COMPONENTS > ANNONCES > PROFILPUBLIC */}
          <Route path="/profil-public/:id" element={<ProfilPublic />} />
          <Route path="/deconnexion" element={<Deconnexion />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;