import { Link } from "react-router-dom";

export default function Banner({ dir, title, desc, banner }) {
  return (
    <section className="container mx-auto mb-20 px-5">
      <div className={`flex ${dir}`}>
        <div className="flex flex-col gap-5 bg-gray-200 px-6 py-28 flex-1">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-base">{desc}</p>
          <Link
            to="/products"
            className="uppercase px-4 py-2 bg-black text-white font-bold rounded-sm w-max"
          >
            Shop now
          </Link>
        </div>
        <figure className="hidden sm:block aspect-auto flex-1">
          <img
            src={banner}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}
