import { Link } from "react-router-dom";

const bottomLinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Products",
    path: "/products/all",
  },
  {
    id: 3,
    name: "About",
    path: "/about",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
];

export default function Footer() {
  return (
    <section className="bg-neutral-950 py-10 text-white">
      <div className="container mx-auto px-5 flex flex-wrap gap-5 items-center justify-center">
        {bottomLinks.map((link) => {
          return (
            <Link
              to={link.path}
              key={link.id}
              className="text-gray-400 transition-all hover:text-white"
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
