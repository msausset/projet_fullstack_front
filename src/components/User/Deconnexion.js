import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Deconnexion = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    /* alert("Déconnexion réussie !"); */
    navigate("/");
    window.location.reload();
  }, [navigate]);
};

export default Deconnexion;
