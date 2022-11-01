import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Connexion from "./components/User/Connexion";
import Accueil from "./pages/Accueil";
import Inscription from "./components/User/Inscription";
import Footer from "./components/Footer/Footer";
import ReinitialisationMdp from "./components/User/ReinitialisationMdp";
import ReinitialisationMdpMail from "./components/User/ReinitialisationMdpMail";

function App() {
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
          <Route
            path="/reinitialisation-mdp-mail"
            element={<ReinitialisationMdpMail />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
