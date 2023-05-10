// Link
import { Link } from "react-router-dom";
// icons
import { HiOutlineArrowUturnLeft } from "react-icons/hi2";

const categories = [
  {
    id: 1,
    text: "All",
    path: "/products/all",
  },
  {
    id: 2,
    text: "Furnitures",
    path: "/products/furnitures",
  },
  {
    id: 3,
    text: "Electronics",
    path: "/products/electronics",
  },
  {
    id: 4,
    text: "Lamps",
    path: "/products/lamp",
  },
  {
    id: 5,
    text: "Kitchen",
    path: "/products/kitchen",
  },
  {
    id: 6,
    text: "Chairs",
    path: "/products/chairs",
  },
  {
    id: 7,
    text: "Skin Care",
    path: "/products/skincare",
  },
];

export default function Category({ category }) {
  return (
    <section className="container mx-auto px-5 py-14">
      <Link to={"/"} className="flex items-center gap-1 w-max">
        <HiOutlineArrowUturnLeft size={20} className="text-blue-700" />
        <span className="text-blue-600 font-semibold">Home</span>
      </Link>
      <div>
        <h2 className="text-center font-bold text-3xl uppercase">{category}</h2>
        <div className="flex flex-wrap items-center gap-2 justify-center mt-10">
          {categories.map((cate) => {
            return (
              <Link
                to={cate.path}
                key={cate.id}
                className="text-gray-500 px-4 py-1 border-2 border-neutral-500 hover:border-neutral-800 hover:text-neutral-900 font-semibold"
              >
                {cate.text}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
