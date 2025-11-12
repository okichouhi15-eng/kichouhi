import React from "react";

function ListeLivres({ livres, onSupprimer }) {
  return (
    <div>
      <h2>Liste des Livres</h2>
      <ul>
        {livres.map((livre, index) => (
          <li key={index}>
            <img src={livre.photo} alt={livre.Titre} width="80" />
            <p><b>Titre:</b> {livre.Titre}</p>
            <p><b>Auteur:</b> {livre.Auteur}</p>
            <p><b>Nb pages:</b> {livre.nbpages}</p>
            <button onClick={() => onSupprimer(index)}>Supprimer</button>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListeLivres;
