import "./Navbar.css";
import TransLogo from "../assets/images/logo/SunriseCrest.png";
import React, {
  useEffect,
  useRef,
} from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import './Menu.css'
import { useTheme } from "../context/ThemeContext";

const Navbar = ({ handleOpen }) => {
  const timelineRef = useRef(null);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });
    timelineRef.current = tl;

    tl.fromTo(
      ".menu-panel",
      { css: { display: "none" } },
      { css: { display: "flex" } }
    );

    tl.add([
      gsap.fromTo(
        ".left",
        { x: "-100%" },
        { x: "0%", duration: 1, ease: "power4.inOut" }
      ),
      gsap.fromTo(
        ".right",
        { x: "100%" },
        { x: "0%", duration: 1, ease: "power4.inOut" }
      ),
    ]);

    tl.fromTo(
      ".line",
      { width: "0" },
      { width: "100%", duration: 1, ease: "power3.out" },
      "<0.5"
    );

    tl.fromTo(
      " .text",
      { y: "-100%" },
      { y: "0%", duration: 1, ease: "power3.out" },
      "<"
    );

    tl.fromTo(
      ".right .text",
      { y: "-300%" },
      { y: "0%", duration: 1, ease: "power3.out" },
      "<"
    );
  }, []);

  const openMenu = () => {
    timelineRef.current.play();
  };
  const closeMenu = () => {
    timelineRef.current.reverse();
  };

  const iconFill = isDark ? "rgb(255,255,255,0.88)" : "rgb(15,16,17,0.88)";

  return (
    <>
      {/* ── TOPBAR ── */}
      <div
        className="fixed flex nav w-[100vw] justify-between ps-10 lg:pe-20 mobile:pe-5 pt-5 pb-5 border-[#3F4041] z-[100]"
        role="navigation"
        aria-label="Main navigation"
        style={{ transition: 'background-color 0.4s ease' }}
      >
        <Link to="/" className="logo w-[150px] sm:w-[180px] h-auto flex items-center link" aria-label="Sunrise Crest - Home">
          <img src={TransLogo} className="w-full h-auto max-h-[80px] object-contain" alt="Sunrise Crest Logo" />
        </Link>

        <div className="flex items-center" style={{ color: 'var(--text-secondary)' }}>
          <div>EST-2022</div>

          <div>
            <a className="menu link" onClick={openMenu}>
              <div className="icon">
                <div className="main">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
                    preserveAspectRatio="xMidYMid meet"
                    style={{ width: "17px", height: "17px", transform: "translate3d(0px, 0px, 0px)" }}>
                    <defs><clipPath id="__lottie_element_2"><rect width="16" height="16" x="0" y="0"></rect></clipPath></defs>
                    <g clipPath="url(#__lottie_element_2)">
                      <g transform="matrix(1,0,0,1,0.0000057220458984375,1.0000076293945312)" opacity="1" style={{ display: "block" }}>
                        <g opacity="1" transform="matrix(1,0,0,1,8,13)">
                          <path className="line3" fill={iconFill} fillOpacity="1"
                            d=" M-8,1 C-8,1 8,1 8,1 C8,1 8,-1 8,-1 C8,-1 -8,-1 -8,-1 C-8,-1 -8,1 -8,1z" />
                        </g>
                      </g>
                      <g transform="matrix(1,0,0,1,0,1.0000076293945312)" opacity="1" style={{ display: " block" }}>
                        <g opacity="1" transform="matrix(1,0,0,1,8,7)">
                          <path className="line2" fill={iconFill} fillOpacity="1"
                            d=" M-8,1.0010000467300415 C-8,1.0010000467300415 8,1.0010000467300415 8,1.0010000467300415 C8,1.0010000467300415 8,-1.0010000467300415 8,-1.0010000467300415 C8,-1.0010000467300415 -8,-1.0010000467300415 -8,-1.0010000467300415 C-8,-1.0010000467300415 -8,1.0010000467300415 -8,1.0010000467300415z" />
                        </g>
                      </g>
                      <g transform="matrix(1,0,0,1,0,1.0000061988830566)" opacity="1" style={{ display: " block" }}>
                        <g opacity="1" transform="matrix(1,0,0,1,8,1)">
                          <path className="line1" fill={iconFill} fillOpacity="1"
                            d=" M-8.00100040435791,1.0010000467300415 C-8.00100040435791,1.0010000467300415 0.9990000128746033,1.0010000467300415 0.9990000128746033,1.0010000467300415 C0.9990000128746033,1.0010000467300415 0.9990000128746033,-1.0010000467300415 0.9990000128746033,-1.0010000467300415 C0.9990000128746033,-1.0010000467300415 -8.00100040435791,-1.0010000467300415 -8.00100040435791,-1.0010000467300415 C-8.00100040435791,-1.0010000467300415 -8.00100040435791,1.0010000467300415 -8.00100040435791,1.0010000467300415z M3.999000072479248,-0.9990000128746033 M3.999000072479248,1.0010000467300415 C3.999000072479248,1.0010000467300415 8.00100040435791,1.0010000467300415 8.00100040435791,1.0010000467300415 C8.00100040435791,1.0010000467300415 8.00100040435791,-1.0010000467300415 8.00100040435791,-1.0010000467300415 C8.00100040435791,-1.0010000467300415 3.999000072479248,-1.0010000467300415 3.999000072479248,-1.0010000467300415 C3.999000072479248,-1.0010000467300415 3.999000072479248,1.0010000467300415 3.999000072479248,1.0010000467300415z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="overlay">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
                    preserveAspectRatio="xMidYMid meet"
                    style={{ width: "17px", height: "17px", transform: "translate3d(0px, 0px, 0px)" }}>
                    <defs><clipPath id="__lottie_element_2b"><rect width="16" height="16" x="0" y="0"></rect></clipPath></defs>
                    <g clipPath="url(#__lottie_element_2b)">
                      <g transform="matrix(1,0,0,1,0.0000057220458984375,1.0000076293945312)" opacity="1" style={{ display: "block" }}>
                        <g opacity="1" transform="matrix(1,0,0,1,8,13)">
                          <path className="line3" fill={iconFill} fillOpacity="1"
                            d=" M-8,1 C-8,1 8,1 8,1 C8,1 8,-1 8,-1 C8,-1 -8,-1 -8,-1 C-8,-1 -8,1 -8,1z" />
                        </g>
                      </g>
                      <g transform="matrix(1,0,0,1,0,1.0000076293945312)" opacity="1" style={{ display: " block" }}>
                        <g opacity="1" transform="matrix(1,0,0,1,8,7)">
                          <path className="line2" fill={iconFill} fillOpacity="1"
                            d=" M-8,1.0010000467300415 C-8,1.0010000467300415 8,1.0010000467300415 8,1.0010000467300415 C8,1.0010000467300415 8,-1.0010000467300415 8,-1.0010000467300415 C8,-1.0010000467300415 -8,-1.0010000467300415 -8,-1.0010000467300415 C-8,-1.0010000467300415 -8,1.0010000467300415 -8,1.0010000467300415z" />
                        </g>
                      </g>
                      <g transform="matrix(1,0,0,1,0,1.0000061988830566)" opacity="1" style={{ display: " block" }}>
                        <g opacity="1" transform="matrix(1,0,0,1,8,1)">
                          <path className="line1" fill={iconFill} fillOpacity="1"
                            d=" M-8.00100040435791,1.0010000467300415 C-8.00100040435791,1.0010000467300415 0.9990000128746033,1.0010000467300415 0.9990000128746033,1.0010000467300415 C0.9990000128746033,1.0010000467300415 0.9990000128746033,-1.0010000467300415 0.9990000128746033,-1.0010000467300415 C0.9990000128746033,-1.0010000467300415 -8.00100040435791,-1.0010000467300415 -8.00100040435791,-1.0010000467300415 C-8.00100040435791,-1.0010000467300415 -8.00100040435791,1.0010000467300415 -8.00100040435791,1.0010000467300415z M3.999000072479248,-0.9990000128746033 M3.999000072479248,1.0010000467300415 C3.999000072479248,1.0010000467300415 8.00100040435791,1.0010000467300415 8.00100040435791,1.0010000467300415 C8.00100040435791,1.0010000467300415 8.00100040435791,-1.0010000467300415 8.00100040435791,-1.0010000467300415 C8.00100040435791,-1.0010000467300415 3.999000072479248,-1.0010000467300415 3.999000072479248,-1.0010000467300415 C3.999000072479248,-1.0010000467300415 3.999000072479248,1.0010000467300415 3.999000072479248,1.0010000467300415z" />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>
              </div>
              <h3>MENU</h3>
            </a>
          </div>
        </div>
      </div>

      {/* ── MENU PANEL ── */}
      <div
        className="menu-panel fixed hidden mobile:flex-col lg:flex-row sm:flex-col md:flex-row flex w-[100vw] h-[100vh] z-[101] overflow-hidden"
      >
        {/* LEFT — navigation links */}
        <div
          className="left flex flex-col w-[50%] h-full"
          style={{ backgroundColor: 'var(--menu-left-bg)', transition: 'background-color 0.4s ease' }}
        >
          {[
            { to: '/', num: '01', label: 'Home' },
            { to: '/about', num: '02', label: 'About' },
            { to: '/products', num: '03', label: 'Products' },
            { to: '/blogs', num: '04', label: 'Blogs' },
            { to: '/contact', num: '05', label: 'Contact' },
            { to: '/quote', num: '06', label: 'Get a Quote' },
          ].map(({ to, num, label }) => (
            <Link
              key={to}
              to={to}
              onClick={closeMenu}
              className="content uppercase group overflow-hidden relative"
              style={{ color: 'var(--menu-link-text)' }}
            >
              <div className="overflow-hidden text-[1.2rem] ms-[2rem] relative z-[2]" style={{ color: 'var(--menu-link-number)' }}>
                <p className="text">{num} - </p>
              </div>
              <div className="overflow-hidden mt-4 text-[2.4rem] relative z-[2]" style={{ color: 'var(--menu-link-text)' }}>
                <p className="text">{label}</p>
              </div>

              <div
                className="w-full h-full absolute z-[1] translate-y-[100%] transition-all group-hover:translate-y-0"
                style={{ backgroundColor: 'var(--menu-link-hover-bg)' }}
              />
              <div className="line absolute bottom-0 w-full h-[1px]" style={{ backgroundColor: 'var(--menu-line-color)' }} />
              <div
                className="absolute bottom-0 w-0 h-[2px] group-hover:w-full transition-all duration-[1000ms]"
                style={{ backgroundColor: 'var(--menu-link-underline)' }}
              />
            </Link>
          ))}
        </div>

        {/* RIGHT — contact info + toggle */}
        <div
          className="right w-[50%] h-full flex relative"
          style={{ backgroundColor: 'var(--menu-right-bg)', transition: 'background-color 0.4s ease' }}
        >
          {/* Close button */}
          <div
            className="close-menu absolute overflow-hidden flex gap-[1rem] items-center cursor-pointer top-10 right-10"
            onClick={closeMenu}
          >
            <div className="cross text">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
                preserveAspectRatio="xMidYMid meet"
                style={{ width: "100%", height: "100%", transform: "translate3d(0px, 0px, 0px)" }}>
                <defs><clipPath id="__lottie_close"><rect width="16" height="16" x="0" y="0"></rect></clipPath></defs>
                <g clipPath="url(#__lottie_close)">
                  <g style={{ display: " block" }}
                    transform="matrix(0.7071067690849304,0.7071067690849304,-0.7071067690849304,0.7071067690849304,11.535533905029297,-6.849236488342285)"
                    opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,8,13)">
                      <path fill="rgb(255,255,255, 0.88)" fillOpacity="1"
                        d=" M-8,1 C-8,1 8,1 8,1 C8,1 8,-1 8,-1 C8,-1 -8,-1 -8,-1 C-8,-1 -8,1 -8,1z" />
                    </g>
                  </g>
                  <g style={{ display: " block" }}
                    transform="matrix(0.7071067690849304,-0.7071067690849304,0.7071067690849304,0.7071067690849304,1.6370391845703125,12.951156616210938)"
                    opacity="1">
                    <g opacity="1" transform="matrix(1,0,0,1,8,1)">
                      <path fill="rgb(255,255,255, 0.88)" fillOpacity="1"
                        d=" M-8.00100040435791,1.0010000467300415 C-8.00100040435791,1.0010000467300415 0.9990000128746033,1.0010000467300415 0.9990000128746033,1.0010000467300415 C0.9990000128746033,1.0010000467300415 0.9990000128746033,-1.0010000467300415 0.9990000128746033,-1.0010000467300415 C0.9990000128746033,-1.0010000467300415 -8.00100040435791,-1.0010000467300415 -8.00100040435791,-1.0010000467300415 C-8.00100040435791,-1.0010000467300415 -8.00100040435791,1.0010000467300415 -8.00100040435791,1.0010000467300415z M3.999000072479248,-0.9990000128746033 M3.999000072479248,1.0010000467300415 C3.999000072479248,1.0010000467300415 8.00100040435791,1.0010000467300415 8.00100040435791,1.0010000467300415 C8.00100040435791,1.0010000467300415 8.00100040435791,-1.0010000467300415 8.00100040435791,-1.0010000467300415 C8.00100040435791,-1.0010000467300415 3.999000072479248,-1.0010000467300415 3.999000072479248,-1.0010000467300415 C3.999000072479248,-1.0010000467300415 3.999000072479248,1.0010000467300415 3.999000072479248,1.0010000467300415z" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="overflow-hidden">
              <p className="text" style={{ color: 'var(--text-secondary)' }}>close</p>
            </div>
          </div>

          {/* Main right content */}
          <div className="w-full h-full mb-10 pt-5 flex flex-col items-center justify-between">

            {/* Logo */}
            <div className="w-[250px] h-auto mobile:hidden sm:hidden lg:flex md:flex justify-center items-center">
              <img src={TransLogo} className="w-full h-auto object-contain" alt="Sunrise Crest" />
            </div>

            {/* ── THEME TOGGLE ── */}
            <div className="flex flex-col items-center gap-3 mt-4">
              <div className="theme-toggle-container">
                {/* Sun icon */}
                <span style={{ fontSize: '14px', color: isDark ? 'rgba(255,255,255,0.4)' : '#C9A84C', transition: 'color 0.3s' }}>☀️</span>

                {/* Toggle */}
                <label className="theme-toggle-switch" title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
                  <input
                    type="checkbox"
                    checked={!isDark}
                    onChange={toggleTheme}
                    aria-label="Toggle theme"
                  />
                  <div className="theme-toggle-track" />
                  <div className="theme-toggle-thumb">
                    {!isDark ? '☀' : '🌙'}
                  </div>
                </label>

                {/* Moon icon */}
                <span style={{ fontSize: '14px', color: isDark ? 'rgba(201,168,76,0.9)' : 'rgba(255,255,255,0.3)', transition: 'color 0.3s' }}>🌙</span>
              </div>
              <span className="theme-toggle-label">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
            </div>

            {/* Contact details */}
            <div style={{ color: 'rgba(255,255,255,0.88)', '--cool-link-color': '#fff', '--cool-link-underline': 'var(--accent)' }} className="ps-2 pe-2 w-full flex gap-[5rem] justify-center">
              <div className="flex flex-col gap-8">
                <div className="overflow-hidden">
                  <p className="text-[1.5rem] text uppercase" style={{ color: 'var(--menu-contact-title)' }}>Email</p>
                  <p className="cool-link text">poorvang.shukls@gmail.com</p>
                </div>
                <div className="overflow-hidden">
                  <p className="text text-[1.5rem] uppercase" style={{ color: 'var(--menu-contact-title)' }}>Phone</p>
                  <p className="text cool-link">+91 7016302635</p>
                </div>
                <div className="overflow-hidden">
                  <p className="text text-[1.5rem] uppercase mb-2" style={{ color: 'var(--menu-contact-title)' }}>Social</p>
                  <div className="flex flex-col">
                    <a href="" className="overflow-hidden"><p className="cool-link text">Instagram</p></a>
                    <a href="" className="overflow-hidden"><p className="cool-link text">Facebook</p></a>
                    <a href="" className="overflow-hidden"><p className="cool-link text">Twitter</p></a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <div className="overflow-hidden">
                  <p className="text text-[1.5rem] uppercase" style={{ color: 'var(--menu-contact-title)' }}>Office</p>
                  <p className="text cool-link">1-1-2 Oshiage, Sumida City, <br /> 131-0045, Tokyo, Japan</p>
                </div>
                <div className="overflow-hidden">
                  <p className="text text-[1.5rem] uppercase" style={{ color: 'var(--menu-contact-title)' }}>Appointment</p>
                  <p className="text cool-link">+91 7016302635</p>
                </div>
                <div className="overflow-hidden">
                  <p className="text-[1.5rem] text uppercase mb-2" style={{ color: 'var(--menu-contact-title)' }}>Legal</p>
                  <div className="flex flex-col">
                    <a href="" className="overflow-hidden"><p className="cool-link text">Terms and Condition</p></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div
              className="flex justify-between w-full pt-2 pb-2 items-center text-[0.8rem] relative"
              style={{ color: 'rgba(255,255,255,0.88)', '--cool-link-color': '#fff', '--cool-link-underline': 'var(--accent)' }}
            >
              <div className="w-full h-[1px] line absolute top-0" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} />
              <p className="ms-10">© 2024 Sunrise Crest, All rights reserved</p>
              <a href=""><p className="me-10 cool-link">Privacy policy</p></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
