import { Link } from "react-router-dom";
import { products } from "../assets/data/ProductsData";

export default function ProductSlider() {
  return (
    <section className="container mx-auto px-5 pb-20">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">
        Trending Products
      </h2>
      <div className="flex gap-5 pb-5 custom-overflow-scroll">
        {products.map((product) => {
          return (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="border-[3px] border-neutral-200 hover:border-neutral-600"
            >
              <figure className="w-[200px]">
                <img
                  src={product.img}
                  alt={product.description}
                  className="h-full w-full object-cover"
                />
              </figure>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
