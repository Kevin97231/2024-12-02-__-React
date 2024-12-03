import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const ExempleRequetes = () => {
  const url = "http://localhost:3001/products";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // const fetchProduct = () => {
    //   axios
    //     .get(url)
    //     .then((response) => {
    //       console.log(response);
    //       setProducts(response.data);
    //     })
    //     .catch((err) => console.error(err))
    //     .finally(() => console.log("Fetch product finished"));
    // };

    // fetchProduct();

    // A TESTER AVEC INTERNET EXPLORER
    const fetchProduct2 = async () => {
      try {
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        console.log("Fetch product2 finished");
      }
    };

    fetchProduct2();
  }, []);

  const addProduct = () => {};

  return (
    <>
      <section>
        <h2>Exemple:</h2>
        <div>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prix</th>
                <th>Quantité</th>
                <th>Catégorie</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.number}</td>
                  <td>{product.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      {/* Section formulaire */}
      <section>
        <form onSubmit={addProduct}>
          <div className="grid grid-cols-4 mb-5 gap-5">
            <input />
            <input />
            <input />
            <input />
          </div>
          <button type="submit" className="btn">
            Ajouter
          </button>
        </form>
      </section>
    </>
  );
};
