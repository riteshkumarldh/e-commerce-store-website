import { useState } from "react";
import { useCart } from "../context/cartContext";

export default function ProductDetails({ singleProduct }) {
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);

  const handleDecrement = () => {
    if (qty === 1) return;
    setQty((prev) => (prev -= 1));
  };

  return (
    <div className="bg-neutral-200 px-5 py-10 lg:flex lg:flex-col lg:justify-around">
      <p className="text-xl">{singleProduct[0].specs}</p>
      <div className="flex flex-col gap-4 items-center sm:flex-row sm:justify-between my-10">
        <h2 className="font-bold text-2xl">Quantity</h2>
        <div className="flex ">
          <button
            className="h-14 w-14  font-bold text-xl bg-white hover:bg-transparent text-black border-black border"
            onClick={handleDecrement}
          >
            -
          </button>
          <h2 className="w-14 h-14 grid font-bold place-content-center bg-transparent border border-black">
            {qty}
          </h2>
          <button
            className="w-14 h-14 font-bold text-xl bg-white hover:bg-transparent text-black border-black border"
            onClick={() => setQty((prev) => (prev += 1))}
          >
            +
          </button>
        </div>
        <h2 className="font-bold text-2xl">
          ${(qty * +singleProduct[0].price).toFixed(2)}
        </h2>
      </div>
      <div className="flex flex-col gap-5 sm:flex-row">
        <button
          onClick={() => addToCart(singleProduct[0], qty, singleProduct[0].id)}
          className="w-full py-3 px-6 bg-transparent border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-200 uppercase font-semibold text-lg"
        >
          add to cart
        </button>
        <button className="w-full py-3 px-6 bg-red-700 border-2 border-red-800 text-white hover:bg-transparent hover:text-red-800 transition-all duration-200 uppercase font-semibold text-lg">
          buy now
        </button>
      </div>
    </div>
  );
}
