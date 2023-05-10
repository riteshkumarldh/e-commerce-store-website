import { createContext, useContext, useState } from "react";

//  creating context
const CartContext = createContext(null);

// context Provider
const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const provide = {
    cartOpen,
    setCartOpen,
  };

  return (
    <CartContext.Provider value={provide}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
