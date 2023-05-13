import { createContext, useContext, useEffect, useState } from "react";

//  creating context
const CartContext = createContext(null);

// context Provider
const CartProvider = ({ children }) => {
  // detecting whether cart panel open or not
  const [cartOpen, setCartOpen] = useState(false);
  // toast related
  const [toast, setToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastAction, setToastAction] = useState("");
  // holding our added cart
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );

  // saving in localstorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // add to cart
  const addToCart = (product, qty, id) => {
    // searching product we want to add in cart already in cart or not if exist then return the index otherwise return -1
    const existingIndex = cart.findIndex((item) => item.id === id);

    // if product already in cart then we increase quantity if not then add in cart
    if (existingIndex >= 0) {
      const cartArr = [...cart];
      cartArr[existingIndex].quantity += qty;
      setCart([...cartArr]);
      setToast(true);
      setToastMessage("Item already in cart Quantity increased");
      setToastAction("success");
    } else {
      setCart((prev) => [...prev, { ...product, quantity: qty }]);
      setToast(true);
      setToastMessage("New Item Added in cart");
      setToastAction("success");
    }

    setTimeout(() => {
      setToast(false);
      setToastMessage("");
    }, 1000);
  };

  // updating increasing cart quantity
  const increaseQuantity = (id) => {
    // increasing the quantity
    const existingIndex = cart.findIndex((item) => item.id === id);
    if (existingIndex >= 0) {
      const cartArr = [...cart];
      cartArr[existingIndex].quantity += 1;
      setCart([...cartArr]);
      setToast(true);
      setToastMessage("Quantity increased");
      setToastAction("success");
    }

    setTimeout(() => {
      setToast(false);
      setToastMessage("");
    }, 1000);
  };

  // updating decreasing cart quantity
  const decreaseQuantity = (id) => {
    // decreasing the quantity
    const existingIndex = cart.findIndex((item) => item.id === id);
    if (cart[existingIndex].quantity === 1) return;
    if (existingIndex >= 0) {
      const cartArr = [...cart];
      cartArr[existingIndex].quantity -= 1;
      setCart([...cartArr]);
      setToast(true);
      setToastMessage("Quantity decreased");
      setToastAction("success");
    }

    setTimeout(() => {
      setToast(false);
      setToastMessage("");
    }, 1000);
  };

  const deleteProductFromCart = (id) => {
    // returning the new array of cart after removing the selected product
    setCart((prev) =>
      prev.filter((item) => {
        return item.id !== id;
      })
    );

    setToast(true);
    setToastMessage("Product Removed");
    setToastAction("danger");

    setTimeout(() => {
      setToast(false);
      setToastMessage("");
    }, 1000);
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
    toast,
    toastMessage,
    toastAction,
  };

  return (
    <CartContext.Provider value={provide}>{children}</CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

export default CartProvider;
