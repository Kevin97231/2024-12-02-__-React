import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./view/JsxTheorie";
import { Navbar } from "./components/Navbar";
import { HookUseState } from "./view/HookUseState";
import { Flux } from "./view/Flux";
import { Formulaire } from "./view/Formulaire";
import { Exercice } from "./view/Exercice";
import { HookUseEffect } from "./view/HookUseEffect";
import { RequeteApi } from "./view/RequeteApi";

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
          <Route path="/use-effect" element={<HookUseEffect />} />
          <Route path="/requete" element={<RequeteApi />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
