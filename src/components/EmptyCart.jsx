// img
import empltyCart from "../assets/img/cart/empty-cart.png";
// link
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <>
      {/* when cart empty */}
      <div className="flex flex-col justify-center items-center h-screen gap-2">
        <figure className="scale-90">
          <img src={empltyCart} alt="empty-cart" />
        </figure>
        <h3 className="text-2xl font-semibold capitalize ">
          Your cart is empty
        </h3>
        <Link
          className=" mt-5 px-3 py-1 bg-black text-white border-2 border-black hover:bg-transparent hover:text-black transition-all duration-200"
          to="/products/all"
        >
          Explore Products
        </Link>
      </div>
    </>
  );
}
