import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProduct  from "@/pages/CreateProduct";
import Navbar from "@/components/Header";
import Product from "@/pages/Product";
import Home from "@/pages/Home"
// Import our custom CSS
// import './styles.scss'
// Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createproduct" element={<CreateProduct />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
