import { createContext, useContext, useEffect, useState } from "react";

//  creating context
const CartContext = createContext(null);

// context Provider
const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // add to cart
  const addToCart = (product, qty, id) => {
    const existingIndex = cart.findIndex((item) => item.id === id);

    if (existingIndex >= 0) {
      const cartArr = [...cart];
      cartArr[existingIndex].quantity += qty;
      setCart([...cartArr]);
    } else {
      setCart((prev) => [...prev, { ...product, quantity: qty }]);
    }
  };

  // updating increasing cart quantity
  const increaseQuantity = (id) => {
    const existingIndex = cart.findIndex((item) => item.id === id);
    if (existingIndex >= 0) {
      const cartArr = [...cart];
      cartArr[existingIndex].quantity += 1;
      setCart([...cartArr]);
    }
  };

  // updating decreasing cart quantity
  const decreaseQuantity = (id) => {
    const existingIndex = cart.findIndex((item) => item.id === id);
    if (cart[existingIndex].quantity === 1) return;
    if (existingIndex >= 0) {
      const cartArr = [...cart];
      cartArr[existingIndex].quantity -= 1;
      setCart([...cartArr]);
    }
  };

  const deleteProductFromCart = (id) => {
    setCart((prev) =>
      prev.filter((item) => {
        return item.id !== id;
      })
    );
  };

  // we provide these values
  const provide = {
    cartOpen,
    setCartOpen,
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    deleteProductFromCart,
  };

  return (
    <CartContext.Provider value={provide}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
