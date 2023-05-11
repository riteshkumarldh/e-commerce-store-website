import { createContext, useContext, useState } from "react";
import { products } from "../assets/data/ProductsData";

//  creating context
const CartContext = createContext(null);

// context Provider
const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([...products]);
  const provide = {
    cartOpen,
    setCartOpen,
    cart,
  };

  return (
    <CartContext.Provider value={provide}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
