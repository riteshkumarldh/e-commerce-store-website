import { useCart } from "../context/cartContext";

export default function ToastMessage() {
  const { toast, toastMessage, toastAction } = useCart();
  return (
    toast && (
      <div
        className={`fixed z-[1000] toast left-1/2 -translate-x-1/2 px-6 py-3 ${
          toastAction === "success" ? "bg-green-700" : "bg-red-700"
        } text-green-100 font-medium rounded`}
      >
        {/* <h2>{toastMessage}</h2> */}
        <h2>{toastMessage}</h2>
      </div>
    )
  );
}
