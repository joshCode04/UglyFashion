function Products() {
  return (
    <section className="flex flex-col gap-28">
      <div>
        <div className="mt-28">
          <div className="flex justify-center gap-9 items-center mb-14 max-sm:px-4">
            <div className="bg-black h-[1px] sm:w-80 min-[380px]:w-20 w-1"></div>
            <p className="uppercase text-2xl font-bold">{`Discover UGLY FASHIONS Story`}</p>
            <div className="bg-black h-[1px] sm:w-80 min-[380px]:w-20 w-1"></div>
          </div>
        </div>

        <div className="flex md:mx-[118px] max-md:flex-col mx-0">
          <div>
            <img src="/1.png" alt="one" className="mb-6" />
            <div className="text-center md:min-w-[339px] pl-10 flex flex-col gap-5">
              <h2 className="text-2xl">Our Passion</h2>
              <p className="text-[#5E5E5E]">
                UGLY FASHION , fashion is not just a business, its a passion. We
                are dedicated to bringing you the latest styles and trends that
                will make you feel confident and beautiful. We believe that
                fashion should be fun and accessible to everyone.
              </p>
            </div>
          </div>
          <div>
            <img src="/2.png" alt="two" />
            <div className="text-center min-w-[339px] pl-10 flex flex-col gap-5">
              <h2 className="text-2xl">Our History</h2>
              <p className="text-[#5E5E5E]">
                The name **Ugly Fashliky emerged as a playful rebellion against
                conventional beauty standards. It embraces the unconventional,
                celebrates individuality, and challenges the idea that clothing
                must always be traditionally attractive. Think of it as a bold
                statement: We are not here to blend in, we are here to stand out
                🌟👗.
              </p>
            </div>
          </div>
          <div>
            <img className="rounded-full" src="/3.png" alt="three" />
            <div className="text-center min-w-[339px] pl-10 flex flex-col gap-5">
              <h2 className="text-2xl">Our Philosophy</h2>
              <p className="text-[#5E5E5E]">
                Our philosophy is simple - we believe that fashion should be
                sustainable, ethical, and affordable. We are committed to using
                eco-friendly materials and supporting fair labour practises. We
                also believe that fashion should be accessible to everyone,
                which is why we offer a wide range of sizes at affordable
                prices.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap max-sm:w-60 justify-center gap-12 mx-28 max-sm:mx-20 max-[380px]:mx-14">
        <div className="flex justify-center overflow-hidden">
          <img
            src="/newproducts1.png"
            alt="images1"
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="flex justify-center overflow-hidden">
          <img
            src="/newproducts2.png"
            alt="images2"
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="flex justify-center overflow-hidden">
          <img
            src="/newproducts3.png"
            alt="images3"
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="flex justify-center overflow-hidden">
          <img
            src="/newproducts4.png"
            alt="images4"
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="flex justify-center overflow-hidden">
          <img
            src="/newproducts5.png"
            alt="images5"
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}

export default Products;
