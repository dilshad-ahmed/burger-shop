import React from "react";
import BurgerImg from "../../assets/burger/burger5.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <>
      <div className="min-h-[550px]">
        <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="flip-up">
                <img
                  src={BurgerImg}
                  alt="biryani img"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold"
                >
                  Lorem, ipsum dolor.
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-5"
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Eaque reiciendis inventore iste ratione ex alias quis magni at
                  optio
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Beatae ab sed, exercitationem minima aliquid eligendi
                  distinctio? Fugit repudiandae numquam hic quo recusandae.
                  Excepturi totam ad nam velit quasi quidem aspernatur.
                </p>
                <div className="flex gap-6">
                  <div data-aos="fade-up">
                    <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100" />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="200">
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100" />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="400">
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100" />
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="500">
                  <button className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-4 rounded-full shadow-xl hover:shadow-md">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
