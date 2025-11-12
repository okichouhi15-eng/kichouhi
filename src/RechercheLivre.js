import React, { useState } from "react";

function RechercheLivre({ livres }) {
  const [search, setSearch] = useState("");

  const livresFiltres = livres.filter((livre) =>
    livre.Titre.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Recherche d’un Livre par Titre</h2>
      <input
        type="text"
        placeholder="Chercher un livre..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {livresFiltres.map((livre, index) => (
          <li key={index}>
            <a>{livre.Titre}</a><br />
            <a>{livre.Auteur}</a><br />
            <a>{livre.nbpages}</a><br />
             <img src={livre.photo} alt={livre.Titre} width="80" />
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default RechercheLivre;
