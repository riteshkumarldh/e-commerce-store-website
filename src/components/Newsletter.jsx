export default function Newsletter() {
  return (
    <section className=" bg-neutral-900 py-20 flex items-center justify-center">
      <div className="text-center container mx-auto px-4">
        <h2 className="font-bold text-zinc-100 text-3xl mb-5">Newsletter</h2>
        <form className="flex items-center gap-2 w-full md:w-1/3 mx-auto">
          <input
            className="h-10 w-full px-3 border-none outline-none"
            type="email"
            placeholder="your@email.com"
          />
          <button type="submit" className="bg-slate-200 h-10 px-2 outline-none">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
