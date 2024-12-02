import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./view/JsxTheorie";
import { Navbar } from "./components/Navbar";
import { HookUseState } from "./view/HookUseState";

function App() {
  return (
    <section>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<JsxTheorie />} />
          <Route path="/use-state" element={<HookUseState />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
