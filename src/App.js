import "./App.css";
import ProductCarousel from "./components/Cards";
import { Footer } from "./components/Footer";
import Header from "./components/Header";
import { Slider } from "./components/Slider";
import { fetchProducts } from "./helper/axiosHelper";

function App() {
  return (
    <div>
      <Header />

      <Slider />
      <ProductCarousel />

      <Footer />
    </div>
  );
}

export default App;
