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
            navigate('/mon-profil/mes-annonces')
        })
    }

    return (
        <div className="w-[75%] bg-white m-auto my-5 p-5">
            <AnnonceForm action="Ajouter" onFormSubmit={createAnnonce} />
        </div>
    )
}