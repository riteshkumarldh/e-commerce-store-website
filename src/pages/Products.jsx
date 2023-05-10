// components
import Category from "../components/Category";
import FilteredProducts from "../components/FilteredProducts";

export default function Products() {
  return (
    <>
      <Category category={"All"} />
      <section className="container mx-auto px-5 mb-28">
        <FilteredProducts category={"all"} />
      </section>
    </>
  );
}
