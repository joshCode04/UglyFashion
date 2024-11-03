import "../index.css";
function MenuList() {
  return (
    <section className="flex flex-col gap-8 montserrat">
      <div className="mt-28">
        <div className="flex justify-center gap-9 items-center mb-14">
          <div className="bg-black h-[1px] sm:w-[420px] w-7"></div>
          <p className="uppercase text-2xl font-bold">{`Menu / Price List `}</p>
          <div className="bg-black h-[1px] sm:w-[420px] w-7"></div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center gap-7">
        {/* First Category */}
        <div className="flex md:flex-row flex-col gap-4 md:gap-[420px]">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl">First Category</h3>
            <p className="text-[#787AB1]">
              Add a description about this category
            </p>
          </div>
          <div>
            <h3 className="text-2xl"></h3>
          </div>
        </div>

        {/* First Item */}
        <div className="flex md:flex-row flex-col gap-4 md:gap-[400px]">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl">First Item</h3>
            <p className="text-[#787AB1]">
              Add a description about this category
            </p>
          </div>
          <div>
            <h3 className="text-2xl">12</h3>
          </div>
        </div>

        {/* Second Item */}
        <div className="flex md:flex-row flex-col gap-4 md:gap-[400px]">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl">Second Item</h3>
            <p className="text-[#787AB1]">
              Add a description about this category
            </p>
          </div>
          <div>
            <h3 className="text-2xl">15</h3>
          </div>
        </div>

        {/* Third Item */}
        <div className="flex max-md:flex max-md:flex-col max-md:gap-4 gap-[400px]">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl">Third Item</h3>
            <p className="text-[#787AB1]">
              Add a description about this category
            </p>
          </div>
          <div>
            <h3 className="text-2xl">22</h3>
          </div>
        </div>
      </div>

      <div className="h-[1px] bg-[#787AB1] mb-7 max-w-[725px] mx-[23%]"></div>

      <div className="flex flex-col justify-between items-center gap-7">
        {/* First Category */}
        <div className="flex md:flex-row flex-col gap-4 md:gap-[420px]">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl">Second Category</h3>
            <p className="text-[#787AB1]">
              Add a description about this category
            </p>
          </div>
          <div>
            <h3 className="text-2xl"></h3>
          </div>
        </div>

        {/* First Item */}
        <div className="flex md:flex-row flex-col gap-4 md:gap-[400px]">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl">First Item</h3>
            <p className="text-[#787AB1]">
              Add a description about this category
            </p>
          </div>
          <div>
            <h3 className="text-2xl">12</h3>
          </div>
        </div>

        {/* Second Item */}
        <div className="flex md:flex-row flex-col gap-4 md:gap-[400px]">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl">Second Item</h3>
            <p className="text-[#787AB1]">
              Add a description about this category
            </p>
          </div>
          <div>
            <h3 className="text-2xl">15</h3>
          </div>
        </div>

        {/* Third Item */}
        <div className="flex max-md:flex max-md:flex-col max-md:gap-4 gap-[400px]">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl">Third Item</h3>
            <p className="text-[#787AB1]">
              Add a description about this category
            </p>
          </div>
          <div>
            <h3 className="text-2xl">22</h3>
          </div>
        </div>
      </div>

      <p className="text-xs text-[#787AB1] text-center">
        Add a footnote if this applies to your business
      </p>
    </section>
  );
}

export default MenuList;
