import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { request } from "../../utils/Request";

import image_not_found from '../../images/image-not-found.png';

export default function AnnonceRow({ annonce, deleteAnnonce }) {
    const [ categories, setCategories ] = useState([])

    /** 
     *  Récupération des catégories des annonces
     *  grâce au request.get() depuis {{ url }}/offers-categories.
     */
    useEffect(() => {

        try {
            request.get('/offers-categories').then(res => setCategories(res.data))
        } catch(err) {
            console.error(err.message)
        }

    }, [])

    /**
     * Affichage de l'image du produit
     * @param {string} file_name 
     * @returns L'image du produit ou une image par défaut
     */
    const getProductPicture = file_name => {
        if(file_name !== '' && file_name !== undefined && file_name !== null) {
            return <img src={'http://localhost:3333/uploads/' + encodeURI(file_name)} alt='Produit' />
        } else {
            return <img src={image_not_found} alt='Produit' />
        }
    }

    /**
     * Récupération du libellé de la catégorie
     * @param {string} machine_name 
     * @returns Le libellé de la catégorie ou 'Non renseignée'
     */
    const getCategoryLabel = machine_name => {
        const category = categories.filter(cat => cat.machine_name === machine_name)[0]

        return category ? category.label : 'Non renseignée'
    }

    return(
        <tr>
            <td>{ getProductPicture(annonce.product_picture) }</td>
            <td className="px-2 text-sm">{ getCategoryLabel(annonce.category) }</td>
            <td className="px-2 text-sm">{ annonce.title }</td>
            <td className="px-2 text-sm">{ annonce.description }</td>
            <td className="px-2 text-sm">{ String(parseFloat(annonce.price).toFixed(2)) + '€' }</td>
            <td className="px-2 text-sm">{ annonce.status.label }</td>
            <td className="px-2 text-center">
                <Link to={'/mon-profil/modifier-une-annonce/' + annonce.id}>
                    <span className="material-symbols-rounded mr-5 edit" title="Modifier l'annonce">edit</span>
                </Link>
                <span className="material-symbols-rounded delete" title="Supprimer l'annonce" onClick={ () => deleteAnnonce(annonce.id) }>delete</span>
            </td>
        </tr>
    )

}