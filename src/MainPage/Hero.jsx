import { useState } from "react";
import "../index.css";

function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="bg-[#C5C7CB] flex justify-center items-center relative py-8">
      <div
        className="relative flex justify-center items-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          className="h-96 w-[500px] object-cover"
          src={isHovered ? "UGLY.gif" : "UGLY.png"}
          alt="Hugly hero"
        />
        {/* Overlay div */}
        <div className="absolute w-[70%] mx-auto bg-[#E6E6E6] bg-opacity-75 p-4 md:p-6 text-center">
          <h2 className="text-[#040914] text-3xl font-bold palanquin uppercase">
            Elevate Your <br />
            <span>Wardrobe</span>
          </h2>
          <p className="text-[#1B1B63] text-2xl montserrat mt-4">
            Discover high-quality fashion pieces for any occasion.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
