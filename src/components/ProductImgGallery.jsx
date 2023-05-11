import { useState } from "react";

export default function ProductImgGallery({ singleProduct }) {
  const [currentImg, setCurrentImg] = useState(singleProduct[0].img);
  return (
    <div className="flex flex-col gap-10 items-center justify-center mb-10">
      <figure className="w-[200px] h-[300px]">
        <img
          src={currentImg}
          alt={singleProduct[0].description}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex gap-2 items-center">
        <figure
          className="aspect-auto border-2 border-transparent hover:border-2 hover:border-gray-300 cursor-pointer"
          onClick={() => setCurrentImg(singleProduct[0].img)}
        >
          <img
            src={singleProduct[0].img}
            alt="img1"
            className="w-28 object-cover"
          />
        </figure>
        <figure
          className="aspect-auto border-2 border-transparent hover:border-2 hover:border-gray-300 cursor-pointer"
          onClick={() => setCurrentImg(singleProduct[0].otherImgs[0])}
        >
          <img
            src={singleProduct[0].otherImgs[0]}
            alt="img1"
            className="w-28 object-cover"
          />
        </figure>
        <figure
          className="aspect-auto border-2 border-transparent hover:border-2 hover:border-gray-300 cursor-pointer"
          onClick={() => setCurrentImg(singleProduct[0].otherImgs[1])}
        >
          <img
            src={singleProduct[0].otherImgs[1]}
            alt="img1"
            className="w-28 object-cover"
          />
        </figure>
      </div>
    </div>
  );
}
