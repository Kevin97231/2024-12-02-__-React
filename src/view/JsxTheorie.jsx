function JsxTheorie() {
  let text = "salut !";

  let title =
    "bonjour <strong>tout le monde !</strong> Bienvenue sur notre appli";

  let imgSrc = "../src/assets/react.svg";

  const style = { color: "white", background: "black" };

  let user = { name: "John", email: "john@gmail.com" };

  // let user = undefined;

  const display = () => {
    if (user) {
      return <p>{user.name}</p>;
    }
  };

  const handleClick = (e) => {
    console.log(e);
    alert("j'ai cliqué !");
  };

  const handleClick2 = (text) => {
    alert(text);
  };

  const fruits = ["banane", "pomme", "abricot", "poire"];

  let users = [
    { name: "John", email: "john@gmail.com" },
    { name: "Mahé", email: "Mahé@gmail.com" },
    { name: "Angel", email: "Angel@gmail.com" },
  ];

  return (
    <>
      <p id="myId" className="myClass">
        {title}
      </p>
      <div>
        <p>{text}</p>
      </div>

      <p dangerouslySetInnerHTML={{ __html: title }}></p>
      <img src={imgSrc} alt="" />

      <div style={style}> Mon text avec style ! </div>
      {display()}

      {user && <p>{user.name}</p>}
      {user ? <p>{user.name}</p> : <p>Pas d'utilisateur !</p>}

      <button onClick={handleClick}>Cliquez !</button>
      <button onClick={() => alert("j'ai encore cliqué !")}>Cliquez !</button>

      <button onClick={() => handleClick2("toto")}>Cliquez !</button>

      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      {/* <ul>
        {users.map((user) => (
          <li>
            nom: {user.name} | email: {user.email}
          </li>
        ))}
      </ul> */}

      <ul>
        {users.map((user) => {
          let props = [];
          for (let prop in user) {
            props.push(user[prop]);
          }
          return props.join(" ");
        })}
      </ul>

      <ul>
        {users.map((user, index) => (
          <ul key={index}>
            {Object.keys(user).map((prop, idx) => (
              <li key={idx}>{user[prop]}</li>
            ))}
          </ul>
        ))}
      </ul>

      <MonComposantEnfant
        text="Voici ton texte, mon enfant !"
        text2="2e texte"
      />

      <Title color="red" id="MyTitle" className="MyClass">
        Mon titre
      </Title>
    </>
  );
}

const MonComposantEnfant = ({ text, text2 }) => {
  return (
    <>
      <p>{text}</p>
      <p>{text2}</p>
    </>
  );
};

const Title = ({ children, color = "blue", ...props }) => {
  return (
    <h1 style={{ color: color }} {...props}>
      {children}
    </h1>
  );
};

export default JsxTheorie;
