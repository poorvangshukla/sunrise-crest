import React from 'react';

const Banner = () => {
  const content = ['Exports Across the world', 'Safe and Secure', 'Seamless Supply solution '];

  // Create double content for seamless scrolling
  const repeatedContent = [...content, ...content, ...content, ...content];

  return (
    <div
      className="marquee-wrapper overflow-hidden group mb-6 sm:mb-10"
    >
      <div className="relative flex w-full">
        <div className="wrapper animate-marquee group-hover:animation-pause flex items-center whitespace-nowrap py-4 sm:py-5">
          {repeatedContent.map((item, index) => (
            <React.Fragment key={index}>
              <span
                className="marquee-text uppercase text-base sm:text-[1.3rem] lg:text-[1.5rem] mx-6 sm:mx-10 lg:mx-12 transition-colors duration-400"
                style={{ color: 'var(--text-secondary)' }}
              >{item}</span>
              <span className="mx-6 sm:mx-10 lg:mx-12" style={{ color: 'var(--text-muted)' }}>-</span>
            </React.Fragment>
          ))}
        </div>

        {/* Duplicate for seamless loop */}
        <div className="wrapper2 absolute top-0 flex items-center whitespace-nowrap animate-marquee2 group-hover:animation-pause py-4 sm:py-5">
          {repeatedContent.map((item, index) => (
            <React.Fragment key={`duplicate-${index}`}>
              <span
                className="marquee-text uppercase text-base sm:text-[1.3rem] lg:text-[1.5rem] mx-6 sm:mx-10 lg:mx-12 transition-colors duration-400"
                style={{ color: 'var(--text-secondary)' }}
              >{item}</span>
              <span className="mx-6 sm:mx-10 lg:mx-12" style={{ color: 'var(--text-muted)' }}>-</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;