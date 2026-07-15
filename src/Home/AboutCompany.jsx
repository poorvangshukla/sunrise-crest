import React from "react";
import Img1 from "../assets/images/AboutCompany/company.jpg";
import Img2 from "../assets/images/AboutCompany/light bulb.jpg";
import Img3 from "../assets/images/AboutCompany/tall buliding.jpg";

const AboutCompany = () => {
  return (
    <div className="w-full p-2 mb-6 sm:mb-10">
      {/* Mobile: simple stacked layout; tablet+: 7-col grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 lg:grid-rows-5 gap-2 w-full h-auto lg:h-[100vh]">
        {/* About text — top-left large block */}
        <div
          className="sm:col-span-2 lg:col-span-5 lg:row-span-3 relative pt-6 sm:pt-10 px-5 sm:px-10 shadow-md shadow-black transition-colors duration-400 min-h-[260px]"
          style={{ backgroundColor: 'var(--bg-secondary)' }}
        >
          <p
            className="text-[1.3rem] sm:text-[1.6rem] lg:text-[1.8rem] uppercase transition-colors duration-400"
            style={{ color: 'var(--text-primary)' }}
          >
            About the company
          </p>

          <p
            className="text-[0.88rem] sm:text-[0.95rem] lg:text-[1rem] mt-4 sm:mt-8 leading-relaxed transition-colors duration-400"
            style={{ color: 'var(--text-secondary)' }}
          >
            Welcome to{" "}
            <span className="font-semibold text-[0.95rem] sm:text-[1.05rem]">
              Sunrise Crest
            </span>
            , a premier global import-export trading company dedicated to
            connecting markets and businesses worldwide. Since our inception, we
            have focused on simplifying international trade through reliable,
            seamless, and transparent services that empower businesses to reach
            new heights.
          </p>

          <p
            className="text-[0.88rem] sm:text-[0.95rem] lg:text-[1rem] mt-4 leading-relaxed transition-colors duration-400"
            style={{ color: 'var(--text-secondary)' }}
          >
            Our experienced team is committed to transparent communication, timely
            deliveries, and strict adherence to international standards, ensuring
            a hassle-free experience for every client. With a focus on fostering
            long-term partnerships, we prioritize customer satisfaction and
            efficiency at each stage of the trade process.
          </p>
        </div>

        {/* Image 1 — top-right */}
        <div className="lg:col-span-2 lg:row-span-2 overflow-hidden relative shadow-md shadow-black group h-[220px] sm:h-full">
          <img
            src={Img2}
            alt="light bulb"
            className="group-hover:scale-110 group-hover:cursor-pointer transition-transform duration-1000 w-full h-full object-cover"
          />
          <div className="upperShadow"></div>
        </div>

        {/* Image 2 — right column bottom */}
        <div className="lg:col-span-2 lg:row-span-3 overflow-hidden relative shadow-md shadow-black group h-[260px] sm:h-full">
          <img
            src={Img3}
            alt="tall building"
            className="group-hover:scale-110 group-hover:cursor-pointer transition-transform duration-1000 w-full h-full object-cover"
          />
          <div className="upperShadow"></div>
          <div className="leftShadow"></div>
        </div>

        {/* Image 3 — bottom-left wide */}
        <div className="sm:col-span-2 lg:col-span-5 lg:row-span-2 overflow-hidden relative shadow-md shadow-black group h-[220px] sm:h-full">
          <img
            src={Img1}
            alt="company building"
            className="group-hover:scale-110 group-hover:cursor-pointer transition-transform duration-1000 w-full h-full object-cover"
          />
          <div className="upperShadow"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
