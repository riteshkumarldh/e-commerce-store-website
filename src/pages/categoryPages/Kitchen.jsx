import Category from "../../components/Category";
import FilteredProducts from "../../components/FilteredProducts";

export default function Kitchen() {
  return (
    <>
      <Category category={"kitchen"} />
      <section className="container mx-auto px-5 mb-28">
        <FilteredProducts category={"kitchen"} />
      </section>
    </>
  );
}
