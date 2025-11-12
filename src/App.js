import React, { useState } from "react";
import ListeLivres from "./ListeLivres";
import AjouterLivre from "./AjouterLivre";
import RechercheLivre from "./RechercheLivre";
import Menu from "./menu";
import "./App.css"
import photo1 from "./photo1.jpg";  
import photo2 from "./photo2.jpg";
import photo3 from "./photo3.jpg";
import photo4 from "./photo4.jpg";

function App() {
  const [livres, setLivres] = useState([
    { Titre: "Robotique", nbpages: "196", Auteur: "SABBAI", photo: photo1 },
    { Titre: "Réseaux", nbpages: "59", Auteur: "Tanger", photo: photo2 },
    { Titre: "Dév Informatique", nbpages: "88", Auteur: "MEKOUAR", photo: photo3 },
    { Titre: "Informatique", nbpages: "125", Auteur: "HASSOUNI", photo: photo4 },
  ]);

  const [currentPage, setCurrentPage] = useState("liste");
 
  const ajouterLivre = (livre) => {
    setLivres([...livres, livre]);
  };

  const supprimerLivre = (index) => {
    const nvListe = livres.filter((_, i) => i !== index);
    setLivres(nvListe);
  };

  return (
    <div>
      <h1>Gestion Bibliothèque</h1>
      
      <Menu currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      {currentPage === "liste" && (<ListeLivres livres={livres} onSupprimer={supprimerLivre} />)}

      {currentPage === "ajouter" && <AjouterLivre onAjouter={ajouterLivre} />}

      {currentPage === "recherche" && <RechercheLivre livres={livres} />}
    </div>
  );
}

export default App;


