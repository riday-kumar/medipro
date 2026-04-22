import React from "react";
import { FaArrowAltCircleRight, FaPlayCircle } from "react-icons/fa";
import Width from "../../../components/FixedWidth/Width";
import dots from "./../../../assets/white-dots-img.png";
import doctorOne from "./../../../assets/hero-img-1.jpg";
import doctorTwo from "./../../../assets/hero-img-2.jpg";
import halfShape from "../../../assets/half-shape.png";
import halfCircle from "../../../assets/half-circle-img.png";

const Hero = () => {
  return (
    <div
      className="bg-primary py-20 bg-no-repeat"
      style={{
        backgroundImage: `url(${halfShape}),url(${halfCircle})`,
        backgroundPosition: "left bottom, right bottom",
      }}
    >
      <Width>
        <div className="flex max-xl:flex-col max-xl:gap-20 justify-center items-center">
          {/* left side */}
          <div className=" flex-1">
            <div className="space-y-5 lg:w-[70%]">
              <p className="tet-[18px] tracking-[5px] text-left uppercase text-white font-normal">
                We Take Care Of Your Health
              </p>
              <h1 className="font-semibold text-4xl md:text-5xl leading-14 text-secondary capitalize">
                We are Providing Best & Affordable Health Care
              </h1>
              <p className="text-[#ffffff80] [word-spacing:5px] text-justify">
                Our is to deliver the highest quality healthcare services. We
                believe that everyone deserves access to excellent medical care
                without compromising on quality.
              </p>
              <div>
                <button className="btn btn-sm btn-outline border-secondary border-2 rounded-2xl text-secondary text-[18px]">
                  Read More <FaArrowAltCircleRight className="text-secondary" />
                </button>
                <button className="btn btn-sm border-0 bg-transparent shadow-none text-white text-[18px]">
                  Watch <FaPlayCircle className="text-white" />
                </button>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="w-full xl:flex-1 flex justify-center items-center relative">
            <img className="absolute" src={dots} alt="" />
            <img
              className="rounded-full max-sm:h-50 mt-30 z-10"
              src={doctorOne}
              alt=""
            />
            <img
              className="rounded-full max-sm:h-50 ml-10 z-10"
              src={doctorTwo}
              alt=""
            />
          </div>
        </div>
      </Width>
    </div>
  );
};

export default Hero;
