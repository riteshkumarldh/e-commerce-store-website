// Link
import { Link } from "react-router-dom";
// images
import home1 from "../assets/img/header/home-img-1.jpg";
import home2 from "../assets/img/header/home-img-2.jpg";
import home3 from "../assets/img/header/home-img-3.jpg";
import home4 from "../assets/img/header/home-img-4.jpg";

export default function HomeHeaderGrid() {
  return (
    <section className="container mx-auto px-5 mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-2 lg:grid-cols-4 lg:grid-rows-2 lg:px-10">
      <Link to={"/products/furnitures"} className="span-row-col group">
        <figure className="aspect-[4/5] md:aspect-[1/1] relative ">
          <img src={home1} alt="home1" className="h-full w-full object-cover" />
          <h3 className="absolute z-20 left-0 px-4 bottom-5 text-white text-3xl font-semibold">
            Live Comfotable
          </h3>
          <div className="absolute z-10 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] group-hover:bg-[rgba(0,0,0,0.5)] transition-all duration-300"></div>
        </figure>
      </Link>
      <Link to={"/products/skincare"} className="span-row group">
        <figure className="aspect-[4/5] md:aspect-[1/1] lg:aspect-[1/2.03] relative">
          <img src={home2} alt="home1" className="h-full w-full object-cover" />
          <h3 className="absolute z-20 left-0 px-4 bottom-5 text-white text-3xl font-semibold">
            HW Skincare
          </h3>
          <div className="absolute z-10 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] group-hover:bg-[rgba(0,0,0,0.5)] transition-all duration-300"></div>
        </figure>
      </Link>
      <Link to={"/products/kitchen"} className="group">
        <figure className="aspect-[4/5] md:aspect-[1/1] relative">
          <img src={home3} alt="home1" className="h-full w-full object-cover" />
          <h3 className="absolute z-20 left-0 px-4 bottom-5 text-white text-3xl font-semibold">
            Kitchen & Dining
          </h3>
          <div className="absolute z-10 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] group-hover:bg-[rgba(0,0,0,0.5)] transition-all duration-300"></div>
        </figure>
      </Link>
      <Link to={"/products/electronics"} className="group">
        <figure className="aspect-[4/5] md:aspect-[1/1] relative">
          <img src={home4} alt="home1" className="h-full w-full object-cover" />
          <h3 className="absolute z-20 left-0 px-4 bottom-5 text-white text-3xl font-semibold">
            Home Electronics
          </h3>
          <div className="absolute z-10 top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.3)] group-hover:bg-[rgba(0,0,0,0.5)] transition-all duration-300"></div>
        </figure>
      </Link>
    </section>
  );
}
