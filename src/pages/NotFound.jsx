import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container mx-auto px-5">
      <div className="flex h-screen flex-col gap-10 items-center justify-center">
        <h2 className="text-3xl font-semibold uppercase text-blue-900 text-center">
          This Page is currently not Available
        </h2>
        <Link
          to="/"
          className="px-6 py-3 bg-orange-600 text-orange-100 rounded-lg text-lg font-semibold"
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
}
