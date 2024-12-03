import { useState } from "react";
import { Consigne } from "../components/Consigne";
import { ProductsTable } from "../components/ProductsTable";

export const Exercice = () => {
  const products = [
    { category: "Fruits", price: "$1", number: 0, name: "Banana" },
    { category: "Fruits", price: "$1", number: 2, name: "Mango" },
    { category: "Fruits", price: "$2", number: 0, name: "Pineapple" },
    { category: "Vegetables", price: "$2", number: 4, name: "Broccoli" },
    { category: "Vegetables", price: "$4", number: 0, name: "Carrot" },
    { category: "Vegetables", price: "$1", number: 6, name: "Zucchini" },
  ];

  const [checked, SetChecked] = useState(true);
  const [search, setSearch] = useState("Banana");

  const fruits = products.filter((product) => product.category === "Fruits");
  const vegetables = products.filter(
    (product) => product.category === "Vegetables"
  );

  return (
    <>
      <h1>Exercice</h1>
      <Consigne />
      <div className="p-5 m-5 border">
        <input
          type="checkbox"
          value={checked}
          onChange={(e) => SetChecked(e.target.checked)}
        />
        <label htmlFor="Chercher:">CHERCHER : </label>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input-bordered"
        />
        <ProductsTable
          data={fruits}
          afficherHorsStock={checked}
          userSearch={search}
        />
        <ProductsTable
          data={vegetables}
          afficherHorsStock={checked}
          userSearch={search}
        />
      </div>
    </>
  );
};
