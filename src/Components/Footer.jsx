import React from "react";
import Logo from "../assets/images/logo/SunriseCrest.png";
import BGVideo from "../assets/videos/car drive scene.mp4";

const Footer = () => {
  return (
    <>
      <div
        className="mt-[6rem] sm:mt-[8rem] lg:mt-[12rem] pb-[4rem] sm:pb-[6rem] lg:pb-[10rem] w-full relative overflow-hidden"
        style={{ transition: 'background-color 0.4s ease' }}
      >
        {/* Background video */}
        <div className="w-full h-full absolute inset-0 z-[-2]">
          <video
            src={BGVideo}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          />
        </div>

        {/* Shadow overlays */}
        <div className="upperShadow" />
        <div className="leftShadow" />
        <div className="rightShadow" />
        <div className="bottomShadow" />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row flex-wrap items-start md:items-center justify-between gap-8 px-6 sm:px-10 pt-10">

          {/* Logo block */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <img
              src={Logo}
              className="logo-themed w-[180px] sm:w-[220px] lg:w-[260px] h-auto object-contain"
              alt="Sunrise Crest"
            />
            <p className="text-base sm:text-lg tracking-wide" style={{ color: 'var(--text-primary)' }}>
              Sunrise Crest
            </p>
          </div>

          {/* Nav links + Contact */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-12">
            {/* Nav links */}
            <div className="flex gap-6 items-start">
              <p className="text-[1.4rem] sm:text-[1.8rem]" style={{ color: 'var(--text-muted)' }}>01 - </p>
              <ul className="flex flex-col mt-1 gap-2 text-[0.95rem] sm:text-[1rem]">
                {['Home', 'About', 'Products', 'Contact', 'Get a quote'].map((item) => (
                  <a key={item} href="" className="cool-link">{item}</a>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="flex gap-6">
              <p className="text-[1.4rem] sm:text-[1.8rem]" style={{ color: 'var(--text-muted)' }}>02 - </p>
              <div className="flex flex-col gap-2">
                <p className="text-[1.4rem] sm:text-[1.8rem] lg:text-[2rem]" style={{ color: 'var(--text-primary)' }}>Contact Details</p>
                <p className="text-sm sm:text-base mt-1 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Al Aweer Central Fruit &amp; <br />
                  Vegetable Market, Ras Al Khor, <br />
                  Dubai, UAE
                </p>
                <a href="tel:+917016302635" className="text-sm sm:text-base mt-1 cool-link" style={{ color: 'var(--text-secondary)' }}>
                  +91 7016302635
                </a>
                <a href="mailto:poorvang.shukls@gmail.com" className="text-sm sm:text-base mt-1 cool-link" style={{ color: 'var(--text-secondary)' }}>
                  poorvang.shukls@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-col sm:flex-row justify-between gap-2 w-full pt-4 pb-4 px-6 sm:px-10"
        style={{ borderTop: '1px solid var(--border)' }}
      >
        <div className="uppercase text-[0.65rem] sm:text-[0.7rem] tracking-widest" style={{ color: 'var(--text-muted)' }}>
          © 2024 Sunrise Crest, All rights reserved
        </div>
        <a href="" className="uppercase text-[0.65rem] sm:text-[0.7rem] tracking-widest cool-link" style={{ color: 'var(--text-muted)' }}>
          Privacy Policy
        </a>
      </div>
    </>
  );
};

export default Footer;
