import React from "react";

function SupprimerLivres({ onSupprimerTout }) {
  return (
    <div>
      <button onClick={onSupprimerTout}>
        Supprimer
      </button>
      <hr />
    </div>
  );
}

export default SupprimerLivres;
