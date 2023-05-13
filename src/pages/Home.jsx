// components
import Banner from "../components/Banner";
import HomeHeaderGrid from "../components/HomeHeaderGrid";
import ProudProducts from "../components/ProudProducts";
import ProductSlider from "../components/ProductSlider";

// img
import banner1 from "../assets/img/banner/banner1.jpg";
import banner2 from "../assets/img/banner/banner2.jpg";

export default function Home() {
  return (
    <main>
      <HomeHeaderGrid />
      <ProudProducts />
      <Banner
        title="Creative harmonious living"
        desc="RAOUF Products are all made to standard sizes so that you can mix
            and match them freely."
        dir="flex-row"
        banner={banner1}
      />
      <ProductSlider />
      <Banner
        title="Comfortable & Elegante Living
        "
        desc="RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        dir="flex-row-reverse"
        banner={banner2}
      />
    </main>
  );
}
