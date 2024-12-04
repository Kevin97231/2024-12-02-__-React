import { Fragment, useState } from "react";
import { Modal } from "../Modal";
import { FormProduct } from "../FormProduct";

export const ProductTable = ({ products = [], remove, updateProduct }) => {
  const [productToModify, setProductToModify] = useState({});

  let cles = [];
  if (products.length > 0) {
    // Attention!! pour que notre logique fonctionne il faut obligatoiremnt que
    // tous les produits aient la mm strucuture que le 1er produit de la liste
    cles = Object.keys(products[0]);
  }

  const handleUpdate = (product) => {
    setProductToModify(product);
    document.getElementById("my_modal").showModal();
  };

  const closeModal = () => {
    document.getElementById("my_modal").close();
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {cles.map((cle) => (
              <th key={cle}>{cle}</th>
            ))}
            <th>Modifier / supprimer</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Fragment key={product.id}>
              <tr>
                {cles.map((cle) => (
                  <td key={cle}>{product[cle]}</td>
                ))}
                <td>
                  <button
                    className="btn btn-error"
                    onClick={() => remove(product)}
                  >
                    Supprimer
                  </button>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleUpdate(product)}
                  >
                    Modifier
                  </button>
                </td>
              </tr>
            </Fragment>
          ))}
        </tbody>
      </table>
      <Modal
        content={
          <FormProduct
            updateProduct={updateProduct}
            productToModify={productToModify}
            closeModal={closeModal}
          />
        }
      />
    </div>
  );
};
