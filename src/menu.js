import React from "react";

function Menu({ currentPage, setCurrentPage }) {
  return (
    <nav style={{ marginBottom: "20px" }}>
      <button onClick={() => setCurrentPage("liste")}> Liste Livres</button>
      <button onClick={() => setCurrentPage("ajouter")}> Ajouter Livre</button>
      <button onClick={() => setCurrentPage("recherche")}> Recherche</button>
    </nav>
  );
}

export default Menu;
