import React, { useState } from "react";

function AjouterLivre({ onAjouter }) {
  const [titre, setTitre] = useState("");
  const [auteur, setAuteur] = useState("");
  const [nbpages, setNbpages] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nouveauLivre = { Titre: titre, Auteur: auteur, nbpages, photo };
    onAjouter(nouveauLivre); 
    setTitre("");
    setAuteur("");
    setNbpages("");
    setPhoto("");
  };

  return (
    <div>
      <h2> Ajouter un Livre</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Auteur"
          value={auteur}
          onChange={(e) => setAuteur(e.target.value)}
        />
        <input
          type="number"
          placeholder="Nb Pages"
          value={nbpages}
          onChange={(e) => setNbpages(e.target.value)}
        />
        <input
          type="fille"
          placeholder="Photo"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
      <hr />
    </div>
  );
}

export default AjouterLivre;
