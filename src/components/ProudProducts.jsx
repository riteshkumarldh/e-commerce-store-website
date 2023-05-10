import { Link } from "react-router-dom";
import { products } from "../assets/data/ProductsData";

export default function ProudProducts() {
  return (
    <section className="container mx-auto px-5 py-20">
      <h2 className="text-2xl font-bold mb-8">Products we are proud of</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.slice(0, 8).map((product) => (
          <Link
            to={`product/${product.id}`}
            key={product.id}
            className="border-[4px] border-gray-300 flex flex-col items-center justify-center hover:border-gray-800 transition-all duration-300"
          >
            <figure className="aspect-square">
              <img
                src={product.img}
                alt={product.description}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="self-start p-2">
              <p className="text-lg font-normal">{product.description}</p>
              <span className="text-lg font-bold">${product.price}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
