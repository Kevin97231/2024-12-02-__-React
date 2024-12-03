import { useIncrement } from "../hooks/useIncrement";
import { useToggle } from "../hooks/useToggle";

export const HookPerso = () => {
  const [checked, toggleChecked] = useToggle(true);

  const { count, increment, decrement } = useIncrement({ min: 0 });

  const { get } = useAxios();

  return (
    <>
      <h1>Les hooks personnalisés</h1>
      <p className="pb-2">
        Plein de hooks téléchargeable ici:
        <strong>
          <a href="https://usehooks.com/"> https://usehooks.com/</a>
        </strong>
      </p>
      <div className="py-5">
        <h2>Cas de figure n°1</h2>
        <p>
          Dans une appli react, on peut souvent avoir besoin de faire varier une
          valeur entre vrai et faux (par exemple: pour afficher / masquer une
          valeur) Pour cela, on peut mettre en place un hook personnalisé.
        </p>

        <input type="checkbox" checked={checked} onChange={toggleChecked} />
        <p> {checked && "Je suis coché !"} </p>

        <h2>Cas de figure n°2</h2>
        <p>Je veux créer un hook pour gérer un compteur</p>
        <p>{count}</p>
        <button onClick={increment} className="btn">
          +
        </button>
        <button onClick={decrement} className="btn">
          -
        </button>
      </div>
    </>
  );
};
