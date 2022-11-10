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
import AddAnnonce from "./components/Annonces/AddAnnonce";
import EditAnnonce from "./components/Annonces/EditAnnonce";
import MesAnnonces from "./components/Annonces/MesAnnonces";
import MonProfil from "./components/Profil/MonProfil";
import ProfilPublic from "./components/Profil/ProfilPublic";
import { setAuthToken } from "./utils/setAuthToken";

function App() {
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/'>
            <Route index element={<Accueil />} />

            <Route path='inscription' element={<Inscription />} />

            <Route path='connexion' element={<Connexion />} />

            <Route path='deconnexion' element={<Deconnexion />} />

            <Route path='mot-de-passe'>
              <Route index element={<ReinitialisationMdp />} />
              <Route path='formulaire-de-reinitialisation' element={<ReinitialisationMdpMail />} />
            </Route>

            <Route path='users'>
              <Route path='u/:id' element={<ProfilPublic />} />
            </Route>

            <Route path='mon-profil'>
              <Route index element={<MonProfil />} />
              <Route path='mes-annonces' element={<MesAnnonces />} />
              <Route path='creer-une-annonce' element={<AddAnnonce />} />
              <Route path='modifier-une-annonce/:id' element={<EditAnnonce />} />
            </Route>

            <Route path='annonces'>
              <Route index element={<Annonces />} />
              <Route path='a/:id' element={<Produit />} />
            </Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;