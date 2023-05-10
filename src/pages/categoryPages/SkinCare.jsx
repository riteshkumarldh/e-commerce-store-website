import Category from "../../components/Category";
import FilteredProducts from "../../components/FilteredProducts";

export default function SkinCare() {
  return (
    <>
      <Category category={"Skin care"} />
      <section className="container mx-auto px-5 mb-28">
        <FilteredProducts category={"skin-care"} />
      </section>
    </>
  );
}
