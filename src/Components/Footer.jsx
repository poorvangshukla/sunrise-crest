import React from "react";
import Logo from "../assets/images/logo/SunriseCrest.png";
import BGVideo from "../assets/videos/car drive scene.mp4";

const Footer = () => {
  return (
    <>
      <div
        className="mt-[12rem] lg:pb-[10rem] pb-[5rem] w-[100vw] relative pe-8"
        style={{ transition: 'background-color 0.4s ease' }}
      >
        {/* Background video */}
        <div className="w-full h-full absolute z-[-2]">
          <video
            src={BGVideo}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        </div>

        {/* Shadow overlays — use CSS var classes */}
        <div className="upperShadow" />
        <div className="leftShadow" />
        <div className="rightShadow" />
        <div className="bottomShadow" />

        <div className="flex flex-wrap items-center justify-between w-[100vw] relative">
          <div className="lg:w-[300px] md:w-[100vw] sm:w-[100vw] mobile:w-[100vw] flex items-center justify-center">
            <div className="w-[300px] h-[300px] ms-8 flex flex-wrap justify-center items-center flex-col relative z-2 mt-[1rem]">
              <div className="w-[100%] h-[70%] relative z-2 flex items-center justify-center">
                <img src={Logo} className="w-[120%] max-w-[250px] h-auto object-contain" alt="Sunrise Crest" />
              </div>
              <p className="text-[1.3rem] whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>
                Sunrise Crest
              </p>
            </div>
          </div>

          <div className="ms-10 me-10 flex flex-wrap gap-5 relative z-2">
            <p className="text-[1.8rem]" style={{ color: 'var(--text-muted)' }}>01 - </p>
            <div className="flex gap-5">
              <ul className="flex flex-col mt-2 gap-1 text-[1rem]">
                {['Home', 'About', 'Products', 'Contact', 'Get a quote'].map((item) => (
                  <a key={item} href="" className="cool-link">{item}</a>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex gap-6 relative z-2">
                <p className="text-[1.8rem]" style={{ color: 'var(--text-muted)' }}>02 - </p>
                <div className="flex flex-col">
                  <p className="text-[2rem]" style={{ color: 'var(--text-primary)' }}>Contact Details</p>
                  <p className="mt-3" style={{ color: 'var(--text-secondary)' }}>
                    Al Aweer Central Fruit & <br /> Vegetable Market, Ras Al Khor, <br />
                    Dubai, UAE
                  </p>
                  <a href="" className="mt-3" style={{ color: 'var(--text-secondary)' }}>
                    +91 9658743211
                  </a>
                  <a href="" className="mt-3" style={{ color: 'var(--text-secondary)' }}>
                    contact@SunriseCrest.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="flex justify-between w-[100vw] pt-4 pb-4 ps-10 pe-20"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="uppercase text-[0.7rem]" style={{ color: 'var(--text-muted)' }}>
          © 2024 Sunrise Crest, All rights reserved
        </div>
        <a href="" className="uppercase text-[0.7rem]" style={{ color: 'var(--text-muted)' }}>
          Privacy Policy
        </a>
      </div>
    </>
  );
};

export default Footer;
