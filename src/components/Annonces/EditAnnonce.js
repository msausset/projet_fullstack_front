import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AnnonceForm from "./AnnonceForm";

import { request } from '../../utils/Request';

export default function EditAnnonce() {
    
    const { id } = useParams()
    const [ annonce, setAnnonce ] = useState()

    const navigate = useNavigate()

    useEffect(() => {

        const getAnnonce = async () => {
            try {
                await request.get('/admin_offer/' + id).then(res => setAnnonce(res.data))
            } catch(err) {
                console.log(err.message)
            }
        }

        getAnnonce()

    }, [])

    // Traitement du formulaire
    function updateAnnonce(annonce) {
        console.log(annonce)
        request.put('/admin_offer/' + id, annonce).then(response => {
            console.log('create response ', response)
            navigate('/mon-profil/mes-annonces')
        })
    }

    return (
        <div className="w-[75%] bg-white m-auto my-5 p-5">
            <AnnonceForm annonce={annonce} action="Modifier" onFormSubmit={updateAnnonce} />
        </div>
    )
}