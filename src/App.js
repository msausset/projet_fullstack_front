import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Connexion from "./components/User/Connexion";
import Accueil from "./pages/Accueil";
import Inscription from "./components/User/Inscription";
import Footer from "./components/Footer/Footer";
import ReinitialisationMdp from "./components/User/ReinitialisationMdp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/reinitialisation-mdp" element={<ReinitialisationMdp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
