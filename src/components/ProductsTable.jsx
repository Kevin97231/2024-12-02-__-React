export const ProductsTable = ({ data, afficherHorsStock, userSearch }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
          <th>Quantité</th>
        </tr>
      </thead>
      <tbody>
        {data
          .filter(
            (product) =>
              (afficherHorsStock ? true : product.number > 0) &&
              product.name.toLowerCase().includes(userSearch.toLowerCase())
          )
          .map((product) => (
            <tr>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.number}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};
