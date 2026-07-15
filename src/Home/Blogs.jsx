import React from "react";
import Logo from "../assets/images/logo/SunriseCrest.png";
import Flight from "../assets/images/Blogs/dark flight night.jpg";
import company from '../assets/images/company.jpg';
import LocomotiveImage from "../Components/LocomotiveImage";

const Blogs = () => {
  return (
    <div
      className="flex flex-col lg:flex-row w-full px-6 sm:px-10 mt-[8rem] sm:mt-[12rem] lg:mt-[20rem] mb-[4rem] sm:mb-[6rem] lg:mb-[10rem] overflow-hidden gap-8 lg:gap-0"
      style={{ color: 'var(--text-primary)', transition: 'color 0.4s ease' }}
    >
      {/* Left — branding + headline */}
      <div className="flex lg:h-full lg:w-[25%] w-full pt-6 lg:pt-20 justify-between items-start lg:items-start flex-col gap-6 lg:gap-[2rem]">
        <div className="ms-0 sm:ms-2">
          <div className="w-[160px] sm:w-[200px] h-auto mb-3 sm:mb-4">
            <img
              src={Logo}
              className="logo-themed w-full h-auto object-contain"
              alt="Sunrise Crest"
            />
          </div>
          <p
            className="text-[1.2rem] sm:text-[1.5rem] transition-colors duration-400"
            style={{ color: 'var(--text-secondary)' }}
          >
            TRADITION
          </p>
        </div>
        <div
          className="text-[1.8rem] sm:text-[2rem] lg:text-[2.5rem] leading-snug transition-colors duration-400"
          style={{ color: 'var(--text-secondary)' }}
        >
          The World of Trade, One Story at a Time.
        </div>
      </div>

      {/* Center — hero image */}
      <div className="w-full lg:w-[45%] h-[280px] sm:h-[380px] lg:h-[95%]">
        <LocomotiveImage Image={Flight} />
      </div>

      {/* Right — description + second image */}
      <div className="flex flex-col justify-between items-start lg:items-end lg:pt-[10rem] pt-4 lg:w-[30%] w-full h-full px-0 sm:px-5 gap-6 lg:gap-0">
        <div
          className="transition-colors duration-400"
          style={{ color: 'var(--text-muted)' }}
        >
          <p className="mb-6 sm:mb-10 text-sm sm:text-base leading-relaxed">
            Explore our latest articles to navigate the complexities of
            international commerce and expand your business.
          </p>
          <a
            href=""
            className="rounded-sm pt-2 pb-2 pe-4 ps-4 text-sm sm:text-base transition-colors duration-400"
            style={{ backgroundColor: 'var(--bg-card)', color: 'var(--text-secondary)' }}
          >
            Blogs
          </a>
        </div>

        <div className="w-full sm:w-[310px] h-[200px] sm:h-[250px] mt-6 lg:mt-0">
          <LocomotiveImage Image={company} />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
