import { useState } from "react";

export const HookUseState = () => {
  console.log("Render recalculé");

  const [count, setCount] = useState(10);
  const [user, setUser] = useState({ name: "John", age: "35" });

  let count2 = 0;

  const increment = () => {
    // setCount(count + 1);
    setCount((prevValue) => prevValue + 1);
    console.log(count);
  };

  const incrementCount2 = () => {
    count2 += 1;
    console.log(count2);
  };

  return (
    <>
      <h1>Le hook useState()</h1>
      <div className="p-5 m-5 border">
        <p>{count}</p>
        <button onClick={increment}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
      <div className="p-5 m-5 border">
        <p>{count2}</p>
        <button onClick={incrementCount2}>+</button>
      </div>
      <div className="p-5 m-5 border">
        <p>{user.name}</p>
        <p>{user.age}</p>
        <button
          onClick={() =>
            setUser((prevValue) => {
              return { ...prevValue, name: "Toto" };
            })
          }
        >
          Changer le prénom
        </button>
      </div>
    </>
  );
};
