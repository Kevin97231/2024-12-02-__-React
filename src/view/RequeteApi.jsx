import { ExempleRequetes } from "../components/ExempleRequetes";

export const RequeteApi = () => {
  return (
    <section>
      <h1 className="pt-20">Les requêtes HTTP</h1>
      <h2>Rappel</h2>
      <p>
        <a href="https://developer.mozilla.org/fr/docs/Web/HTTP/Methods"></a>
      </p>
      <strong>En résumé: </strong>
      <ul>
        <li>
          <strong>GET: </strong> sert à récupérer des données
        </li>
        <li>
          <strong>POST: </strong> Utilisé avec un 'body', très souvent du json
          (ou xml sur d'anciennes appli.) Par exemple: le 'post' sera très
          utilisé pour des 'create', en envoyant le nouvel objet à créer dan le
          corp de la requete
        </li>
        <li>
          <strong>PUT: </strong> Même logique que le post, à la différence que
          le type 'PUT' est utilisé pour mettre à jour une ressource existante
        </li>
        <li>
          <strong>DELETE: </strong> Utilisé pour supprimer une ressource
        </li>
      </ul>

      <h2>les requêtes avec la bibliothèque Axios</h2>
      <a className="underline" href="https://axios-http.com/fr/docs/example">
        documentation axios
      </a>
      <h2>Adresses de notre json server: </h2>
      <ul>
        <li>
          <strong>GET: </strong> http://localhost:3001/products
        </li>
        <li>
          <strong>POST: </strong> http://localhost:3001/products
        </li>
        <li>
          <strong>PUT: </strong> http://localhost:3001/products/id
        </li>
        <li>
          <strong>DELETE: </strong> http://localhost:3001/products/id
        </li>
      </ul>
      <ExempleRequetes />
    </section>
  );
};
