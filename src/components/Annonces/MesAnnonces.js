import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { request } from "../../utils/Request";

/** 
 *  Composant <tr> du tableau qui liste
 *  toutes les annonces de l'utilisateur
 *  connecté.
 */
import AnnonceRow from "../Annonces/AnnonceRow";

import './Annonces.css';

export default function MesAnnonces() {
  const [ annonces, setAnnonces ] = useState([])

  const navigate = useNavigate()

  /** 
   *  Récupération des annonces de l'utilisateur connecté
   *  grâce au request.get() depuis {{ url }}/admin_offer/my
   *  et à son token.
   */
  useEffect(() => {

    try {
      request.get('/admin_offer/my').then(res => setAnnonces(res.data))
    } catch(err) {
      console.error(err.message)
    }
    
  }, [])

  /**
   * Suppression de l'annonce d'un utilisateur
   * @param {int} id 
   */
  const handleDelete = id => {
    try {
      request.delete('/admin_offer/' + id).then(res => {
        alert('Annonce supprimée')
        navigate('/mon-profil/mes-annonces')
      })
    } catch(err) {
      console.error(err.message)
    }
  }

  return (
    <div>
      <div className="w-[75%] bg-white m-auto my-5 p-5">
        <div className="grid">
          <h1 className="text-[2em] font-bold place-self-center">Mes annonces</h1>
          <Link to='/mon-profil/creer-une-annonce' className="btn px-5 py-1 rounded-3xl text-sm place-self-center">Créer une annonce</Link>
        </div>
        
        <table className="table-fixed w-full mt-5">
          <thead>
            <tr>
              <th>Image</th>
              <th>Catégorie</th>
              <th>Titre</th>
              <th>Description</th>
              <th>Prix</th>
              <th>Statut</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              annonces.length ? annonces.map(annonce => (
                <AnnonceRow key={annonce.id} annonce={annonce} deleteAnnonce={handleDelete} />
              )) : '<tr></tr>'
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
