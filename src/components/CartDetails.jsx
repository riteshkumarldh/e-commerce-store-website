import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

// icons
import { RxCross2 } from "react-icons/rx";

export default function CartDetails() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    deleteProductFromCart,
    subTotal,
    setCartOpen,
  } = useCart();
  return (
    <div className="flex flex-col justify-between h-screen overflow-scroll pb-52">
      <div className="flex flex-col gap-2">
        {cart?.map((item) => (
          <div key={item.id} className="flex border border-gray-500 mx-5">
            <figure className="h-36 w-36 grid place-items-center p-2">
              <img
                src={item.img}
                alt={item.description}
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="bg-neutral-200 w-full py-5 flex flex-col justify-between">
              <div className="flex justify-between items-center px-2">
                <h2 className="text-xl font-medium">{item.description}</h2>
                <h2 className="text-xl font-medium">
                  ${(+item.quantity * +item.price).toFixed(2)}
                </h2>
              </div>
              <div className="flex justify-between items-center px-2 flex-wrap">
                <div className="flex ">
                  <button
                    className="bg-black text-white font-bold px-4 py-2 text-xl"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <h2 className="w-10 grid place-items-center bg-white font-semibold border-black border-2">
                    {item.quantity}
                  </h2>
                  <button
                    className="bg-black text-white font-bold px-4 py-2 text-xl"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
                <RxCross2
                  onClick={() => deleteProductFromCart(item.id)}
                  size={20}
                  className="cursor-pointer hover:bg-slate-200 transition-all "
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* fixed subtotal */}
      <div className="absolute left-0 bg-white bottom-0 w-full flex items-center gap-2 justify-between px-5 py-5 border-t-[3px] border-black border-dashed">
        <div className="flex gap-2 flex-col">
          <h2 className="text-2xl sm:text-3xl font-bold ">Subtotal</h2>
          <h2 className="text-2xl sm:text-3xl font-bold ">${subTotal}</h2>
        </div>
        <Link
          className="px-4 py-2 sm:px-6 sm:py-3 sm:text-xl text-lg bg-transparent text-black font-semibold border-2 border-black hover:bg-black hover:text-white transition-all duration-200"
          to="/checkout"
          onClick={() => setCartOpen(false)}
        >
          Go to Checkout
        </Link>
      </div>
    </div>
  );
}
