import "../index.css";
function ContactUs() {
  return (
    <section className="montserrat">
      <div className="mt-28">
        <div className="flex justify-center gap-9 items-center mb-14">
          <div className="bg-black h-[1px] sm:w-[450px] w-10"></div>
          <p className="uppercase text-2xl font-bold">{`Contact US`}</p>
          <div className="bg-black h-[1px] sm:w-[450px] w-10"></div>
        </div>
      </div>
      <div className="md:flex md:mx-20">
        <div className="w-full md:w-1/2 p-6 rounded-md">
          <h2 className="text-2xl text-gray-800 mb-2">Drop us a line!</h2>
          <p className="text[#787AB1] mb-4">Better yet, see us in person!</p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              rows="4"
              required
            />
            <button
              type="submit"
              className="hover:bg-black text-white py-4 rounded-full bg-[#040914] transition duration-200"
            >
              SEND
            </button>
          </form>
        </div>

        {/* Business Information Section */}
        <div className="w-full md:w-1/2 p-6 rounded-md">
          <h3 className="text-2xl text-gray-800 mb-5">
            Better yet, see us in person!
          </h3>
          <p className="mb-14 text-[#787AB1]">
            We love our customers, so feel free to visit during normal business
            hours.
          </p>
          <h3 className="text-2xl text-gray-800 mb-8">UGLY FASHION</h3>
          <div className="mt-4">
            <p className="text-gray-700 text-xl mb-5">Hours</p>
            <select className="mt-2 p-2 rounded-md text-[#787AB1]">
              <option>Today Closed</option>
              <option>Mon-Fri: 10AM - 8PM</option>
              <option>Sat: 10AM - 6PM</option>
              <option>Sun: Closed</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
