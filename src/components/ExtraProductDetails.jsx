export default function ExtraProductDetails({ singleProduct }) {
  return (
    <div className="my-16 flex flex-col gap-5 sm:flex-row sm:justify-between">
      <div className="bg-neutral-200 px-6 py-6 w-full">
        <h2 className="font-bold text-2xl">Texture:</h2>
        <h3 className="text-xl font-normal">{singleProduct[0].texture}</h3>
      </div>
      <div className="bg-neutral-200 px-6 py-6 w-full">
        <h2 className="font-bold text-2xl">Weight:</h2>
        <h3 className="text-xl font-normal">{singleProduct[0].weight}</h3>
      </div>
      <div className="bg-neutral-200 px-6 py-6 w-full">
        <h2 className="font-bold text-2xl">Size:</h2>
        <h3 className="text-xl font-normal">{singleProduct[0].size}</h3>
      </div>
    </div>
  );
}
