import Category from "../../components/Category";
import FilteredProducts from "../../components/FilteredProducts";

export default function Lamps() {
  return (
    <>
      <Category category={"lamps"} />
      <section className="container mx-auto px-5 mb-28">
        <FilteredProducts category={"lamp"} />
      </section>
    </>
  );
}
