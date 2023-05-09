import { Link } from "react-router-dom";

const bottomLinks = [
  {
    id: 1,
    name: "About",
    path: "/",
  },
  {
    id: 2,
    name: "Store Locator",
    path: "/",
  },
  {
    id: 3,
    name: "FAQs",
    path: "/",
  },
  {
    id: 4,
    name: "News",
    path: "/",
  },
  {
    id: 5,
    name: "Careers",
    path: "/",
  },
  {
    id: 6,
    name: "Contact Us",
    path: "/",
  },
];

export default function Footer() {
  return (
    <section className="bg-black py-10 text-white">
      <div className="container mx-auto px-5 flex flex-wrap gap-5 items-center justify-center">
        {bottomLinks.map((link) => {
          return (
            <Link to={link.path} key={link.id}>
              {link.name}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
