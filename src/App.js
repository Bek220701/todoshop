import { Route, Routes } from "react-router-dom";
import About from "./Product";
import "./App.css";
import Basket from "./Basket";
import Header from "./Header";
import Hero from "./Hero";

function App() {
  return (
    <div classNameNameName="App">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/product" element={<About />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </div>
  );
}

export default App;
