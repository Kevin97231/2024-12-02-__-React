import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import JsxTheorie from "./view/JsxTheorie";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<JsxTheorie />} />
          <Route path="/products" element={<>Page product</>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
