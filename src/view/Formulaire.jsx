import { useState } from "react";

export const Formulaire = () => {
  const [name, setName] = useState();

  function handleNameChanged(e) {
    setName(e.target.value);
  }

  return (
    <>
      <h1>Les formulaires</h1>
      <h2>Les champs contrôlés</h2>
      <p>
        En react, nous avons un concept que nous pouvons appeler les 'champs
        contrôlés'. En utilisant le <strong> 'onChange'</strong> d'une input et
        le hook useState() nous pouvons mettre à jour une variable à chaque
        changement de la valeur présente dans l'input
      </p>

      <div>
        <p>Bonjour, {name}</p>
        <input
          type="text"
          className="input-bordered"
          value={name}
          onChange={handleNameChanged}
        />
      </div>
    </>
  );
};
