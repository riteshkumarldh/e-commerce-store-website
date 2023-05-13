import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Furnitures from "./pages/categoryPages/Furnitures";
import Electronics from "./pages/categoryPages/Electronics";
import Lamps from "./pages/categoryPages/Lamps";
import Kitchen from "./pages/categoryPages/Kitchen";
import Chairs from "./pages/categoryPages/Chairs";
import SkinCare from "./pages/categoryPages/SkinCare";
import NotFound from "./pages/NotFound";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import CartSidebar from "./components/CartSidebar";
import SingleProduct from "./components/SingleProduct";
import ToastMessage from "./components/ToastMessage";

export default function App() {
  return (
    <BrowserRouter>
      <ToastMessage />
      <Header />
      <CartSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/all" element={<Products />} />
        <Route path="/products/furnitures" element={<Furnitures />} />
        <Route path="/products/electronics" element={<Electronics />} />
        <Route path="/products/lamp" element={<Lamps />} />
        <Route path="/products/kitchen" element={<Kitchen />} />
        <Route path="/products/chairs" element={<Chairs />} />
        <Route path="/products/skincare" element={<SkinCare />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}
