import Category from "../../components/Category";
import FilteredProducts from "../../components/FilteredProducts";

export default function Electronics() {
  return (
    <>
      <Category category={"electronics"} />
      <section className="container mx-auto px-5 mb-28">
        <FilteredProducts category={"electronic"} />
      </section>
    </>
  );
}
