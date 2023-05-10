import Category from "../../components/Category";
import FilteredProducts from "../../components/FilteredProducts";

export default function Chairs() {
  return (
    <>
      <Category category={"chairs"} />
      <section className="container mx-auto px-5 mb-28">
        <FilteredProducts category={"chair"} />
      </section>
    </>
  );
}
