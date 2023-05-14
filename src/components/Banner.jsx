import { Link } from "react-router-dom";

export default function Banner({ dir, title, desc, banner }) {
  return (
    <section className="container mx-auto mb-20 px-5">
      <div className={`flex ${dir} justify-center`}>
        <div className="flex flex-col gap-5 bg-gray-200 px-6 py-28 flex-1">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-base">{desc}</p>
          <Link
            to="/products/all"
            className="uppercase px-4 py-2 bg-black text-white font-bold rounded-sm w-max hover:bg-transparent border-2 hover:text-black transition-all border-black "
          >
            Shop now
          </Link>
        </div>
        <figure className="hidden sm:block aspect-[2/1] flex-1">
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
