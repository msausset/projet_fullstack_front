import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { request } from "../../utils/Request";

import image_not_found from '../../images/image-not-found.png';

export default function AnnonceForm({ annonce = {}, action, onFormSubmit }) {

    const [ categories, setCategories ] = useState([])

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ category, setCategory ] = useState('')
    const [ statusId, setStatusId ] = useState(2)
    const [ productPicture, setProductPicture ] = useState('')

    useEffect(() => {

        try {
            request.get('/offers-categories/').then(res => setCategories(res.data))
        } catch(err) {
            console.log(err.message)
        }
        
        if(annonce) {
            setTitle(annonce.title)
            setDescription(annonce.description)
            setPrice(annonce.price)
            setCategory(annonce.category)
            setStatusId(annonce.status_id ?? 2)
            setProductPicture(annonce.product_picture)
        }

    }, [ annonce ])

    const getCategoryOptions = () => {
        return categories.map(cat => {
            return(
                <option key={cat.machine_name} value={cat.machine_name}>{cat.label}</option>
            )
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()

        onFormSubmit({ 
            'title': title,
            'description': description,
            'price': price,
            'category': category,
            'status_id': statusId,
            'product_picture': productPicture
        })
    }

    return (
        <>
            <h1 className="text-[2em] font-bold text-center mb-10">{ action === 'Ajouter' ? 'Créer une nouvelle annonce' : 'Modifier une annonce' }</h1>
            <form onSubmit={handleFormSubmit} className='w-[50%] mx-auto'>
                <div className="flex flex-col my-10">
                    {
                        productPicture ? <img src={productPicture} alt='Product picture' /> : <img src={image_not_found} alt='Image not found' className="w-[200px] mx-auto" />
                    }

                    <input
                        type="file"
                        className="mt-5 mx-auto"
                        required={true}
                        onChange={e => setProductPicture(e.target.files[0])}
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
                        type="text"
                        id="price"
                        placeholder="ex : 35,95"
                        className="py-1"
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
                        id="status_id"
                        required={true}
                        value={statusId}
                        onChange={e => setStatusId(e.target.value)}
                    >
                        <option key='2' value='2'>Publié</option>
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