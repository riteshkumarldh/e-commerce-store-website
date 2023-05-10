import Category from "../../components/Category";
import FilteredProducts from "../../components/FilteredProducts";

export default function Furnitures() {
  return (
    <>
      <Category category={"Furniture"} />
      <section className="container mx-auto px-5 mb-28">
        <FilteredProducts category={"furniture"} />
      </section>
    </>
  );
}
