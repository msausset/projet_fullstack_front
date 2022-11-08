import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function AnnonceForm({ annonce = {}, action, onFormSubmit }) {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ price, setPrice ] = useState(0)
    const [ category, setCategory ] = useState('')
    const [ statusId, setStatusId ] = useState(0)
    const [ productPicture, setProductPicture ] = useState('')

    useEffect(() => {

        setTitle(annonce.title)
        setDescription(annonce.description)
        setPrice(annonce.price)
        setCategory(annonce.category)
        setStatusId(annonce.status_id)
        setProductPicture(annonce.product_picture)

    }, [ annonce ])

    const handleFormSubmit = (e) => {
        e.preventDefault()

        onFormSubmit({ title, description, price, category, statusId, productPicture })
    }

    return (
        <form onSubmit={handleFormSubmit} className='w-25 mx-auto my-4'>
            <div>
                <div className="col-sm d-flex flex-column align-items-start mb-3">
                    <label htmlFor="todo" className="fw-light">Libellé de la tâche</label>
                    <input type="text" id="todo" className='w-100 ps-2' />
                </div>
            </div>
            <div>
                <div className="col-sm d-flex flex-column align-items-start mb-3">
                    <label htmlFor="priority" className="fw-light">Priorité</label>

                    <select id="priority" className='w-100 ps-1 py-1'>
                        <option value='HIGH'>HIGH</option>
                        <option value='MEDIUM'>MEDIUM</option>
                        <option value='LOW'>LOW</option>
                    </select>
                </div>
            </div>
            <div>
                <div className="col-sm d-flex flex-column align-items-start mb-3">
                    <label htmlFor="category" className="fw-light">Catégorie</label>

                    <select id="category" className='w-100 ps-1 py-1'>
                        <option value='LEARNING'>LEARNING</option>
                        <option value='HOME'>HOME</option>
                        <option value='WORK'>WORK</option>
                    </select>
                </div>
            </div>
            <div>
                <div className="col-sm d-flex flex-column align-items-start mb-4">
                    <label htmlFor="status" className="fw-light">Statut</label>

                    <select id="status" className='w-100 ps-1 py-1'>
                        <option value='TO DO'>TO DO</option>
                        <option value='IN PROGRESS'>IN PROGRESS</option>
                        <option value='DONE'>DONE</option>
                    </select>
                </div>
            </div>
            <div>
                <div className="d-flex justify-content-around">
                    <Link to='/taches' className="btn btn-primary">Retour</Link>
                    <button className="btn btn-success">{action}</button>
                </div>
            </div>
        </form>
    )

}