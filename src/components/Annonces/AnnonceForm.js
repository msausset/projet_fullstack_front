import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { request } from "../../utils/Request";

import image_not_found from '../../images/image-not-found.png';

export default function AnnonceForm({ annonce = {}, action, onFormSubmit }) {

    const [ categories, setCategories ] = useState([])

    const status = [
        {
            'id' : 1,
            'label' : 'Brouillon'
        },
        {
            'id' : 2,
            'label' : 'Publié'
        },
        {
            'id' : 3,
            'label' : 'Supprimé'
        }
    ]

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ price, setPrice ] = useState()
    const [ category, setCategory ] = useState('')
    const [ statusId, setStatusId ] = useState(2)

    // Récupère le fichier
    const [ productPictureFile, setProductPictureFile ] = useState('')

    // Récupère l'image du produit (retourne une balise <img>)
    const [ productPicture, setProductPicture ] = useState('')

    useEffect(() => {

        try {
            request.get('/offers-categories/').then(res => setCategories(res.data))
        } catch(err) {
            console.log(err.message)
        }
        
        // Si l'annonce a été passé en props,
        // c'est-à-dire si le formulaire est un
        // formulaire d'édition, on récupère
        // toutes les informations de l'annonce.
        if(Object.keys(annonce).length > 0) {
            setTitle(annonce.title)
            setDescription(annonce.description)
            setPrice(annonce.price)
            setCategory(annonce.category)
            setStatusId(annonce.status_id ?? 2)

            if(annonce.product_picture !== '' && annonce.product_picture !== undefined && annonce.product_picture !== null) {
                setProductPictureFile(annonce.product_picture)
                setProductPicture(<img src={'http://localhost:3333/uploads/' + encodeURI(annonce.product_picture)} alt='Produit' />)
            } else {
                setProductPicture(<img src={image_not_found} alt='Produit' />)
            }
        }

    }, [ annonce ])

    /**
     * Mise en forme des différentes catégories pour le <select>
     * @returns Une option pour chaque catégorie
     */
    const getCategoryOptions = () => {
        return categories.map(cat => {
            return(
                <option key={cat.machine_name} value={cat.machine_name}>{cat.label}</option>
            )
        })
    }
    
    /**
     * Mise en forme des différents statuts pour le <select>
     * @returns Une option pour chaque statut
     */
    const getStatusOptions = () => {
        return status.map(s => {
            return(
                <option key={s.id} value={s.id}>{s.label}</option>
            )
        })
    }

    /**
     * Récupération puis envoie des données du formulaire dans un objet
     * de type FormData.
     * @param {*} e 
     */
    const handleFormSubmit = (e) => {
        e.preventDefault()
        
        const bodyFormData = new FormData()

        bodyFormData.append('title', title)
        bodyFormData.append('description', description)
        bodyFormData.append('price', parseFloat(price).toFixed(2))
        bodyFormData.append('category', category)
        bodyFormData.append('status_id', statusId)
        bodyFormData.append('productPicture', productPictureFile)

        onFormSubmit(bodyFormData)
    }

    return (
        <>
            <h1 className="text-[2em] font-bold text-center mb-10">{ action === 'Ajouter' ? 'Créer une nouvelle annonce' : 'Modifier une annonce' }</h1>

            <form onSubmit={handleFormSubmit} className='w-[50%] mx-auto'>
                <div className="flex flex-col my-10">
                    { productPicture }

                    <input
                        type="file"
                        id="productPicture"
                        className="mt-5 mx-auto"
                        required={true}
                        onChange={e => setProductPictureFile(e.target.files[0])}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title">Titre <span className="font-bold text-red-600">*</span></label>
                    <input
                        type="text"
                        id="title"
                        placeholder="ex : Maison de poupée Barbie"
                        className="py-1"
                        required={true}
                        defaultValue={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="description">Description <span className="font-bold text-red-600">*</span></label>
                    <textarea
                        id="description"
                        placeholder="ex : Maison de poupée Barbie à deux étages en bon état. Livrée avec Barbie et Ken."
                        className="py-1"
                        required={true}
                        defaultValue={description}
                        onChange={e => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="price">Prix (€) <span className="font-bold text-red-600">*</span></label>
                    <input
                        type="number"
                        id="price"
                        placeholder="ex : 35"
                        className="py-1"
                        step="0.01"
                        required={true}
                        defaultValue={price}
                        onChange={e => setPrice(e.target.value)}
                    />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="category">Catégorie <span className="font-bold text-red-600">*</span></label>
                    <select
                        id="category"
                        required={true}
                        value={category}
                        onChange={e => setCategory(e.target.value)}
                    >
                        { getCategoryOptions() }
                    </select>
                </div>
                <div className="flex flex-col mb-12">
                    <label htmlFor="status_id">Statut de l'annonce <span className="font-bold text-red-600">*</span></label>
                    <select
                        id="statusId"
                        required={true}
                        value={statusId}
                        onChange={e => setStatusId(e.target.value)}
                    >
                        { getStatusOptions() }
                    </select>
                </div>
                <div className="flex flex-row justify-around mb-5">
                    <button className="btn px-5 py-1 rounded-3xl text-sm place-self-center">{action}</button>
                    <Link to='/mon-profil/mes-annonces' className="btn-cancel px-5 py-1 rounded-3xl text-sm place-self-center">Annuler</Link>
                </div>
            </form>
        </>
    )

}