import { useState } from "react";

export const Flux = () => {
  const data = [
    { id: 1, nom: "Produit 1", prix: 20.99, quantite: 5 },
    { id: 2, nom: "Produit 2", prix: 15.45, quantite: 10 },
    { id: 3, nom: "Produit 3", prix: 75.32, quantite: 58 },
    { id: 4, nom: "Produit 4", prix: 30.0, quantite: 25 },
    { id: 5, nom: "Produit 5", prix: 26.0, quantite: 16 },
  ];

  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h1>Les flux de données</h1>
      <h2>De parents vers Enfants</h2>
      <p>
        Pour faire passer les données d'un composant parent vers son composant
        enfant, nous devons utiliser les
        <strong>props</strong>
      </p>
      <div className="p-5 m-5 border">
        <ComposantEnfant data={data} />
      </div>
      <h2>De l'enfant vers le parent</h2>
      <p>
        En react, pour faire passer des données d'un composant enfant vers son
        parent, il est courant d'utiliser des fonctions de rappels (callbacks
        functions) passés en tant que props. On les utilise ensuite dans le
        composant enfant pour transmettre les données vers son parent
      </p>
      <CheckBoxEnfant checked={checked} onCheck={setChecked} />

      {checked ? "case cochée" : "case non cochée"}
    </div>
  );
};

const ComposantEnfant = ({ data }) => {
  return data.map((product) => (
    <div>
      <p>{product.nom}</p>
      <p>{product.prix}</p>
      <p>{product.quantite}</p>
    </div>
  ));
};

const CheckBoxEnfant = ({ checked, onCheck }) => {
  const handleClick = (e) => {
    onCheck(e.target.checked);
  };

  return <input type="checkbox" onChange={handleClick} checked={checked} />;
};
