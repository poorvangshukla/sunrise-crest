import React from "react";
import Img1 from "../assets/images/AboutCompany/company.jpg";
import Img2 from "../assets/images/AboutCompany/light bulb.jpg";
import Img3 from "../assets/images/AboutCompany/tall buliding.jpg";

const AboutCompany = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 grid-rows-5 w-[100vw] h-auto sm:h-[100vh] gap-2 p-2 mb-10">
      {/* About Section */}
      <div
        className="row-span-3 col-span-1 sm:col-span-2 lg:col-span-5 relative pt-5 sm:pt-10 px-4 sm:px-10 shadow-md shadow-black transition-colors duration-400"
        style={{ backgroundColor: 'var(--bg-secondary)' }}
      >
        <p className="text-[1.5rem] sm:text-[1.8rem] uppercase transition-colors duration-400" style={{ color: 'var(--text-primary)' }}>
          About the company
        </p>

        <p className="text-[0.9rem] sm:text-[1rem] mt-4 sm:mt-10 transition-colors duration-400" style={{ color: 'var(--text-secondary)' }}>
          Welcome to{" "}
          <span className="font-semibold text-[1rem] sm:text-[1.1rem]">
            Sunrise Crest
          </span>
          , a premier global import-export trading company dedicated to
          connecting markets and businesses worldwide. Since our inception, we
          have focused on simplifying international trade through reliable,
          seamless, and transparent services that empower businesses to reach
          new heights.
        </p>

        <p className="text-[0.9rem] sm:text-[1rem] mt-4 sm:mt-5 transition-colors duration-400" style={{ color: 'var(--text-secondary)' }}>
          Our experienced team is committed to transparent communication, timely
          deliveries, and strict adherence to international standards, ensuring
          a hassle-free experience for every client. With a focus on fostering
          long-term partnerships, we prioritize customer satisfaction and
          efficiency at each stage of the trade process. Whether you're looking
          to source quality goods or distribute your products globally, Sunrise Crest
          is your trusted partner in international trade.
        </p>
      </div>

      {/* Image 1 */}
      <div className="row-span-2 col-span-1 lg:col-span-2 overflow-hidden relative shadow-md shadow-black group">
        <img
          src={Img2}
          alt="light bulb"
          className="group-hover:scale-110 group-hover:cursor-pointer transition-transform duration-1000 w-full h-full object-cover"
        />
        <div className="upperShadow"></div>
      </div>

      {/* Image 2 */}
      <div className="row-span-3 col-span-1 lg:col-span-2 overflow-hidden relative shadow-md shadow-black group">
        <img
          src={Img3}
          alt="tall building"
          className="group-hover:scale-110 group-hover:cursor-pointer transition-transform duration-1000 w-full h-full object-cover"
        />
        <div className="upperShadow"></div>
        <div className="leftShadow"></div>
      </div>

      {/* Image 3 */}
      <div className="row-span-2 col-span-1 lg:col-span-5 overflow-hidden relative shadow-md shadow-black group">
        <img
          src={Img1}
          alt="company building"
          className="group-hover:scale-110 group-hover:cursor-pointer transition-transform duration-1000 w-full h-full object-cover"
        />
        <div className="upperShadow"></div>
      </div>
    </div>
  );
};

export default AboutCompany;
