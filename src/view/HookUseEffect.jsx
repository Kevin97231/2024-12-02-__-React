import { useEffect } from "react";
import { useState } from "react";

export const HookUseEffect = () => {
  const [count, setCount] = useState(0);

  //   const modifyTitle = () => {
  //     setCount((prev) => prev + 1);
  //     document.title = `count : ${count}`;
  //   };

  useEffect(() => {
    console.log("composant monté");

    return () => console.log("return du useEffect");
  }, []);

  useEffect(() => {
    console.log("Effet secondaire déclenché");
    document.title = `count : ${count}`;
  }, [count]);

  return (
    <section>
      <h1>Le hook useEffect()</h1>
      <ul>
        Le hook useEffect() est utilisé:
        <li>Pour gérer des effets secondaires</li>
        <li>
          Pour effectuer des opérations après le rendu du composant (comme des
          appels à des API), gestions d'abonnements etc ...)
        </li>
        <p>
          Très souvent, on utilise le useEffect() en conjonction avec le hook
          useState().
        </p>
      </ul>
      {/* <button className="btn" onClick={modifyTitle}>
        +
      </button> */}
      <button className="btn" onClick={() => setCount((prev) => prev + 1)}>
        +
      </button>
      {count}
    </section>
  );
};
