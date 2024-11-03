import "../index.css";
function Content() {
  return (
    <section className="pt-12">
      <div className="flex flex-col items-center gap-5 montserrat">
        <div className="text-xl text-[#1B1B1B] text-center max-md:px-3">
          <h2>UGLY FASHION Fashion: Where Style Meets Comfort</h2>
        </div>
        <div className="text-[#5E5E5E] text-center max-md:px-3.5">
          <p>
            Experience fashion like never before with our comfortable and trendy
            clothing line. Shop now and <br className="max-md:hidden" />
            enjoy free shipping on all orders!
          </p>
        </div>
        <div>
          <button className="bg-[#040914] hover:bg-black text-[#C5C4CD] palanquin font-semibold py-3.5 px-7 rounded-3xl">
            Find out more
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 mt-24">
        <button className="bg-[#040914] hover:bg-black text-[#C5C4CD] palanquin font-semibold rounded-3xl py-3.5 md:px-80 px-36">
          Button
        </button>
        <button className="bg-[#040914] hover:bg-black text-[#C5C4CD] palanquin font-semibold rounded-3xl py-3.5 md:px-80 px-36">
          Button
        </button>
        <button className="bg-[#040914] hover:bg-black text-[#C5C4CD] palanquin font-semibold rounded-3xl py-3.5 md:px-80 px-36">
          Button
        </button>
        <button className="bg-[#040914] hover:bg-black text-[#C5C4CD] palanquin font-semibold rounded-3xl py-3.5 md:px-80 px-36">
          Button
        </button>
      </div>
    </section>
  );
}

export default Content;
