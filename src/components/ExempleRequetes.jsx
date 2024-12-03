import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";

export const ExempleRequetes = () => {
  const url = "http://localhost:3001/products";

  const [products, setProducts] = useState([]);

  const formRef = useRef(null);

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

  const addProduct = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    console.log(formData);

    const newProduct = {
      category: formData.get("category"),
      name: formData.get("name"),
      price: formData.get("price"),
      number: formData.get("number"),
    };

    axios
      .post(url, newProduct)
      .then((response) => setProducts((prev) => [...prev, response.data]))
      .finally(() => {
        // formRef.current.reset();
        myForm.reset();
      });
  };

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
        <form onSubmit={addProduct} ref={formRef} id="myForm">
          <div className="grid grid-cols-4 mb-5 gap-5">
            <input
              type="text"
              placeholder="Nom du produit"
              name="name"
              className="flex"
            />
            <input
              type="number"
              placeholder="Prix"
              name="price"
              className="flex"
            />
            <input
              type="number"
              placeholder="Quantité"
              name="number"
              className="flex"
            />
            <input
              type="text"
              placeholder="Catégorie"
              name="category"
              className="flex"
            />
          </div>
          <button type="submit" className="btn">
            Ajouter
          </button>
        </form>
      </section>
    </>
  );
};
