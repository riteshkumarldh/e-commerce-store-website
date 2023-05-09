// images
import { Link } from "react-router-dom";
import home1 from "../assets/img/header/home-img-1.jpg";
import home2 from "../assets/img/header/home-img-2.jpg";
import home3 from "../assets/img/header/home-img-3.jpg";
import home4 from "../assets/img/header/home-img-4.jpg";

const gridCards = [
  {
    id: 1,
    path: "/",
    image: home1,
    text: "Live Comfotable",
  },
  {
    id: 2,
    path: "/",
    image: home2,
    text: "HW Skincare",
  },
  {
    id: 3,
    path: "/",
    image: home3,
    text: "Kitchen & Dining",
  },
  {
    id: 4,
    path: "/",
    image: home4,
    text: "Home Electronics",
  },
];

export default function HomeHeaderGrid() {
  return (
    <section>
      {gridCards.map((card) => {
        return <Link key={card.id}>hello</Link>;
      })}
    </section>
  );
}
