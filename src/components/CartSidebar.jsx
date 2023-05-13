// icon
import { RxCross2 } from "react-icons/rx";
// components
import EmptyCart from "./EmptyCart";
import CartDetails from "./CartDetails";
import { useCart } from "../context/cartContext";

export default function CartSidebar() {
  const { cartOpen, setCartOpen, cart } = useCart();

  return (
    <>
      <aside
        className={`fixed z-[100] ${
          cartOpen ? "right-0" : "right-[-512px]"
        } transition-all duration-300 top-0 max-w-lg w-full h-screen bg-white`}
      >
        <div className="p-6 flex justify-between items-center">
          <h2 className="text-lg sm:text-xl font-black">
            Your shopping cart ({cart.length})
          </h2>
          <RxCross2
            size={25}
            className="cursor-pointer"
            onClick={() => setCartOpen((prev) => !prev)}
          />
        </div>
        {cart.length < 1 ? <EmptyCart /> : <CartDetails />}
      </aside>
      {/* overlay */}
      <div
        onClick={() => setCartOpen((prev) => !prev)}
        className={`${
          cartOpen ? "block" : "hidden"
        } fixed z-10 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)]`}
      ></div>
    </>
  );
}
