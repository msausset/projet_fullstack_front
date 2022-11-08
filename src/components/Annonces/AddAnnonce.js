import { useNavigate } from "react-router-dom";
import AnnonceForm from "./AnnonceForm";

import { request } from '../../utils/Request';

export default function AddAnnonce() {

    const navigate = useNavigate()

    // Traitement du formulaire
    function createAnnonce(annonce) {
        console.log(annonce)
        request.post('/admin_offer/', annonce).then(response => {
            console.log('create response ', response)
            navigate('/liste-annonces')
        })
    }

    return (
        <div className="container my-5">
            <h1>Créer une nouvelle annonce</h1>
            <AnnonceForm action="Ajouter" onFormSubmit={createAnnonce} />
        </div>
    )
}