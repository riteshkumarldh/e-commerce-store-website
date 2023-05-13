import { useEffect, useState } from "react";

// react-router-don
import { useParams } from "react-router-dom";
import { products } from "../assets/data/ProductsData";

// components
import ProductImgGallery from "./ProductImgGallery";
import ProductDetails from "./ProductDetails";
import ExtraProductDetails from "./ExtraProductDetails";
import ProductSlider from "./ProductSlider";

export default function SingleProduct() {
  const param = useParams();
  const [singleProduct, setSingleProduct] = useState([]);

  useEffect(() => {
    const arr = [...products];
    const filtered = arr.filter((item) => {
      return item.id == param.id;
    });
    setSingleProduct(filtered);
  }, [param]);

  return (
    <section className="container mx-auto px-5">
      {singleProduct.length > 0 ? (
        <>
          <h2 className="text-center capitalize text-3xl font-black my-5">
            {singleProduct[0].description}
          </h2>
          <div className="grid lg:grid-cols-2">
            <ProductImgGallery singleProduct={singleProduct} />
            <ProductDetails singleProduct={singleProduct} />
          </div>
          <ExtraProductDetails singleProduct={singleProduct} />
          <ProductSlider />
        </>
      ) : (
        <h1>loading...</h1>
      )}
    </section>
  );
}
