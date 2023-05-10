// icon
import { RxCross2 } from "react-icons/rx";
// using context
import { useCart } from "../context/cartContext";

export default function CartSidebar() {
  const { cartOpen, setCartOpen } = useCart();
  return (
    <>
      <aside
        className={`fixed z-20 ${
          cartOpen ? "right-0" : "right-[-512px]"
        } transition-all duration-300 top-0 max-w-lg w-full h-screen bg-yellow-50`}
      >
        <div className="p-6 flex justify-between items-center">
          <h2 className="text-lg sm:text-xl font-black">
            Your shopping cart (0)
          </h2>
          <RxCross2
            size={25}
            className="cursor-pointer"
            onClick={() => setCartOpen((prev) => !prev)}
          />
        </div>
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