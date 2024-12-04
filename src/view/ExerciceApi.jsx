import { useState } from "react";
import { ConsigneApi } from "../components/ConsigneApi";
import { ProductTable } from "../components/ExerciceApi/ProductTable";
import { useAxios } from "../hooks/useAxios";
import { useEffect } from "react";
import { FormProduct } from "../components/FormProduct";

export const ExerciceApi = () => {
  const { get, remove, put, post } = useAxios();

  const [products, setProducts] = useState([]);

  const [displayAddForm, setDisplayAddForm] = useState(false);

  useEffect(() => {
    get().then((response) => setProducts(response));
  }, []);

  const deleteroduct = (product) => {
    remove(product.id).then((response) =>
      setProducts((prevProducts) =>
        prevProducts.filter((productFilter) => response.id !== productFilter.id)
      )
    );
  };

  const updateProduct = (id, data) => {
    put(id, data).then((response) =>
      setProducts((prevProducts) =>
        prevProducts.map((productMap) =>
          productMap.id === response.id ? { ...response } : productMap
        )
      )
    );
  };

  const addProduct = (product) => {
    post(product).then((response) =>
      setProducts((prevProducts) => [...prevProducts, response])
    );
    setDisplayAddForm(false);
  };

  return (
    <section>
      <h1>Exercice API</h1>
      <ConsigneApi />
      <ProductTable
        products={products}
        remove={deleteroduct}
        updateProduct={updateProduct}
      />
      <button onClick={() => setDisplayAddForm(true)}>Ajouter</button>
      {displayAddForm && <FormProduct submitMethod={addProduct} />}
    </section>
  );
};
