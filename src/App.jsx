import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./view/JsxTheorie";
import { Navbar } from "./components/Navbar";
import { HookUseState } from "./view/HookUseState";
import { Flux } from "./view/Flux";
import { Formulaire } from "./view/Formulaire";
import { Exercice } from "./view/Exercice";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<JsxTheorie />} />
          <Route path="/use-state" element={<HookUseState />} />
          <Route path="/flux" element={<Flux />} />
          <Route path="/formulaire" element={<Formulaire />} />
          <Route path="/exercice" element={<Exercice />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
