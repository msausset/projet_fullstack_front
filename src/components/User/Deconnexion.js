import {useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Deconnexion = () => {
  const navigate = useNavigate();

  useEffect(() => {
    alert('Déconnexion réussie !')
    navigate("/");
  }, [navigate]);

};

export default Deconnexion;
