import "./App.css";

import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Categories from "./pages/Categories";

function App() {
  return (
    <div>
      <Routes>
        {/* private routes */}

        {/* public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
