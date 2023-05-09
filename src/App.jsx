import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Newsletter />
      <Footer />
    </BrowserRouter>
  );
}
