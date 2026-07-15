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

/* ─── Professional SVG Icons ──────────────────────────── */
const SunIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

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

  const iconFill = isDark ? "rgb(255,255,255,0.88)" : "rgb(13,13,13,0.88)";

  return (
    <>
      {/* ── TOPBAR ── */}
      <div
        className="fixed flex nav w-full justify-between px-4 sm:px-8 lg:px-10 pt-4 pb-4 border-b z-[100]"
        role="navigation"
        aria-label="Main navigation"
        style={{
          borderBottomColor: 'var(--navbar-border)',
          transition: 'background-color 0.4s ease, border-color 0.4s ease',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          className="logo w-[160px] sm:w-[200px] lg:w-[220px] h-auto flex items-center link"
          aria-label="Sunrise Crest - Home"
        >
          <img
            src={TransLogo}
            className="logo-themed w-full h-auto max-h-[70px] object-contain"
            alt="Sunrise Crest Logo"
          />
        </Link>

        <div className="flex items-center gap-4 sm:gap-6" style={{ color: 'var(--text-secondary)' }}>
          <div className="hidden sm:block text-xs tracking-widest" style={{ color: 'var(--text-muted)' }}>
            EST-2022
          </div>

          <div>
            <a className="menu link" onClick={openMenu}>
              <div className="icon">
                <div className="main">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"
                    preserveAspectRatio="xMidYMid meet"
                    style={{ width: "18px", height: "18px", transform: "translate3d(0px, 0px, 0px)" }}>
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
                    style={{ width: "18px", height: "18px", transform: "translate3d(0px, 0px, 0px)" }}>
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
                            d=" M-8.00100040435791,1.0010000467300415 C-8.00100040435791,1.0010000467300415 0.9990000128746033,1.0010000467300415 0.9990000128746033,1.0010000467300415 C0.9990000128746033,1.0010000467300415 0.9990000128746033,-1.0010000467300415 0.9990000128746033,-1.0010000467300415 C0.9990000128746033,-1.0010000467300415 -8.00100040435791,-1.0010000467300415 -8.00100040435791,-1.0010000467300415 C-8.00100040435791,-1.0010000467300415 -8.00100040435791,1.0010000467300415 -8.00100040435791,1.0010000467300415z M3.999000072479248,-0.9990000128746033 M3.999000072479248,1.0010000467300415 C3.999000072479248,1.0010000467300415 8.00100040435791,1.0010000467300415 8.00100040435791,1.0010000467300415 C8.00100040435791,1.0010000467300415 8.00100040435791,-1.0010000467300415 8.00100040435791,-1.0010000467300415 C8.00100040435791,-1.0010000467300015 3.999000072479248,-1.0010000467300415 3.999000072479248,-1.0010000467300415 C3.999000072479248,-1.0010000467300415 3.999000072479248,1.0010000467300415 3.999000072479248,1.0010000467300415z" />
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
        className="menu-panel fixed hidden menu-panel-wrapper w-screen h-screen z-[101] overflow-hidden"
        style={{ flexDirection: 'row' }}
      >
        {/* LEFT — navigation links */}
        <div
          className="menu-panel-left left flex flex-col w-1/2 h-full"
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
              <div className="overflow-hidden text-[0.9rem] sm:text-[1.1rem] ms-[1.5rem] sm:ms-[2rem] relative z-[2]" style={{ color: 'var(--menu-link-number)' }}>
                <p className="text">{num} - </p>
              </div>
              <div className="overflow-hidden mt-2 sm:mt-4 text-[1.6rem] sm:text-[2rem] lg:text-[2.4rem] relative z-[2]" style={{ color: 'var(--menu-link-text)' }}>
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
          className="menu-panel-right right w-1/2 h-full flex relative"
          style={{ backgroundColor: 'var(--menu-right-bg)', transition: 'background-color 0.4s ease' }}
        >
          {/* Close button */}
          <div
            className="close-menu absolute overflow-hidden flex gap-[0.75rem] items-center cursor-pointer top-6 right-6 sm:top-10 sm:right-10"
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
              <p className="text text-sm sm:text-base" style={{ color: 'rgba(255,255,255,0.88)' }}>close</p>
            </div>
          </div>

          {/* Main right content */}
          <div className="w-full h-full mb-6 pt-5 flex flex-col items-center justify-between overflow-y-auto">

            {/* Logo — always white on dark bg */}
            <div className="w-[180px] sm:w-[220px] lg:w-[260px] h-auto hidden sm:flex justify-center items-center mt-16 sm:mt-4">
              <img src={TransLogo} className="logo-on-dark w-full h-auto object-contain" alt="Sunrise Crest" />
            </div>

            {/* ── THEME TOGGLE ── */}
            <div className="flex flex-col items-center gap-2 mt-4">
              <div className="theme-toggle-container">
                {/* Sun icon */}
                <SunIcon className={`theme-toggle-icon ${!isDark ? 'theme-toggle-icon--active' : 'theme-toggle-icon--inactive'}`} />

                {/* Toggle */}
                <label className="theme-toggle-switch" title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
                  <input
                    type="checkbox"
                    checked={!isDark}
                    onChange={toggleTheme}
                    aria-label="Toggle theme"
                  />
                  <div className="theme-toggle-track" />
                  <div className="theme-toggle-thumb" />
                </label>

                {/* Moon icon */}
                <MoonIcon className={`theme-toggle-icon ${isDark ? 'theme-toggle-icon--active' : 'theme-toggle-icon--inactive'}`} />
              </div>
              <span className="theme-toggle-label">{isDark ? 'Dark Mode' : 'Light Mode'}</span>
            </div>

            {/* Contact details */}
            <div
              style={{ color: 'rgba(255,255,255,0.88)', '--cool-link-color': '#fff', '--cool-link-underline': 'rgba(255,255,255,0.5)' }}
              className="px-3 sm:px-2 w-full flex flex-col sm:flex-row gap-8 sm:gap-[3rem] lg:gap-[5rem] justify-center mt-4"
            >
              <div className="flex flex-col gap-5 sm:gap-8">
                <div className="overflow-hidden">
                  <p className="text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] text uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>Email</p>
                  <p className="cool-link text text-sm sm:text-base">poorvang.shukls@gmail.com</p>
                </div>
                <div className="overflow-hidden">
                  <p className="text text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>Phone</p>
                  <p className="text cool-link text-sm sm:text-base">+91 7016302635</p>
                </div>
                <div className="overflow-hidden">
                  <p className="text text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Social</p>
                  <div className="flex flex-col">
                    <a href="" className="overflow-hidden"><p className="cool-link text text-sm sm:text-base">Instagram</p></a>
                    <a href="" className="overflow-hidden"><p className="cool-link text text-sm sm:text-base">Facebook</p></a>
                    <a href="" className="overflow-hidden"><p className="cool-link text text-sm sm:text-base">Twitter</p></a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 sm:gap-8">
                <div className="overflow-hidden">
                  <p className="text text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>Office</p>
                  <p className="text cool-link text-sm sm:text-base">1-1-2 Oshiage, Sumida City, <br /> 131-0045, Tokyo, Japan</p>
                </div>
                <div className="overflow-hidden">
                  <p className="text text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>Appointment</p>
                  <p className="text cool-link text-sm sm:text-base">+91 7016302635</p>
                </div>
                <div className="overflow-hidden">
                  <p className="text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] text uppercase mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>Legal</p>
                  <div className="flex flex-col">
                    <a href="" className="overflow-hidden"><p className="cool-link text text-sm sm:text-base">Terms and Condition</p></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div
              className="flex justify-between w-full pt-2 pb-2 items-center text-[0.7rem] sm:text-[0.8rem] relative mt-4"
              style={{ color: 'rgba(255,255,255,0.88)', '--cool-link-color': '#fff', '--cool-link-underline': 'rgba(255,255,255,0.5)' }}
            >
              <div className="w-full h-[1px] line absolute top-0" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} />
              <p className="ms-6 sm:ms-10">© 2024 Sunrise Crest, All rights reserved</p>
              <a href=""><p className="me-6 sm:me-10 cool-link">Privacy policy</p></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
