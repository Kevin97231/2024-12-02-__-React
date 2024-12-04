import { useMemo, useState } from "react";

export const WithUseMemo = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const [inputValue, setInputValue] = useState("");

  //   const sum = numbers.reduce((total, element) => total + element);

  const sum = useMemo(() => {
    console.log("Calcul du use memo relancé");
    return numbers.reduce((total, element) => total + element);
  }, [numbers]);

  const addNumber = () => {
    setNumbers([...numbers, Math.random() * 10]);
  };

  return (
    <>
      <h2>Composant sans use Mémo</h2>
      <p>Somme: {sum}</p>
      <button className="btn m-5" onClick={addNumber}>
        Ajouter un nombre
      </button>
      <div>
        <input
          className="mx-5 input input-bordered"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {inputValue}
      </div>
    </>
  );
};
