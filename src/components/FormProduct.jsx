import { useEffect } from "react";
import { useForm } from "react-hook-form";

export const FormProduct = ({ productToModify, submitMethod, closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    clearErrors,
  } = useForm();

  const onSubmit = (product) => {
    console.log(product);

    productToModify
      ? submitMethod(productToModify.id, product)
      : submitMethod(product);

    if (closeModal) {
      closeModal();
    }

    productToModify = undefined;
  };

  useEffect(() => {
    if (productToModify) {
      if (productToModify) {
        Object.keys(productToModify).forEach((key) => {
          clearErrors(key);
          setValue(key, productToModify[key]);
        });
      }
    }
  }, [productToModify]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <div>
          <span>Nom</span>
        </div>
        <input
          type="text"
          {...register("name", {
            required: "nom requis",
          })}
        />
      </label>
      {errors.name && <span>{errors.name.message}</span>}
      <label>
        <div>
          <span>Prix</span>
        </div>
        <input
          type="number"
          {...register("price", {
            required: "Attention ! champ requis",
            max: { value: 1000, message: "Valeur max -> 1000" },
            min: { value: 0, message: "Valeur max -> 0" },
          })}
        />
      </label>
      {errors.price && <span>{errors.price.message}</span>}

      <label>
        <div>
          <span>Quantité</span>
        </div>
        <input
          type="number"
          {...register("number", {
            required: "Attention ! champ requis",
            max: { value: 1000, message: "Valeur max -> 1000" },
            min: { value: 0, message: "Valeur max -> 0" },
          })}
        />
      </label>
      {errors.number && <span>{errors.number.message}</span>}

      <label>
        <div>
          <span>Catégorie</span>
        </div>
        <input
          type="text"
          {...register("category", {
            required: "Attention ! champ requis",
            maxLength: { value: 10, message: "10 caractères maximum !" },
          })}
        />
      </label>
      {errors.category && <span>{errors.category.message}</span>}

      <button type="submit">Soumettre</button>
    </form>
  );
};
