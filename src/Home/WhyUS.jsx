import React from "react";

const data = [
  {
    title: "Reliability and Trust",
    content: "Our company has a strong reputation for delivering goods safely and on time, ensuring clients can rely on us to meet their supply chain needs consistently.",
  },
  {
    title: "Global Network",
    content: "With partnerships and contacts around the world, we offer seamless import-export services across continents, making international trade straightforward and efficient.",
  },
  {
    title: "Expertise in Compliance",
    content: "Our team is well-versed in global trade regulations and customs compliance, minimizing delays and ensuring smooth cross-border transactions.",
  },
  {
    title: "Customized Solutions",
    content: "We tailor our services to meet specific client needs, whether it's handling unique product types, managing special delivery requirements, or customizing logistics plans.",
  },
  {
    title: "Advanced Technology Integration",
    content: "Our operations are enhanced with technology for tracking, inventory management, and real-time communication, giving clients full visibility and control over their shipments.",
  },
  {
    title: "Competitive Pricing",
    content: "We provide high-quality services at competitive rates, offering cost-effective solutions without compromising on reliability or efficiency.",
  },
];

const WhyUS = () => {
  return (
    <div
      className="mt-[6rem] sm:mt-[8rem] lg:mt-[12rem] pb-10"
      style={{ backgroundColor: 'var(--bg-primary)', transition: 'background-color 0.4s ease' }}
    >
      <div className="flex w-full items-center flex-col gap-2 mb-8 sm:mb-12 px-4">
        <p
          className="uppercase text-[1.5rem] sm:text-[2rem] lg:text-[2.2rem] text-center"
          style={{ color: 'var(--text-secondary)' }}
        >
          Why Choose Us!
        </p>
        <p
          className="capitalize text-[1.1rem] sm:text-[1.3rem] lg:text-[1.5rem] text-center"
          style={{ color: 'var(--text-muted)' }}
        >
          Our Strengths
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 mx-4 sm:mx-8 lg:mx-10">
        {data.map((item, i) => (
          <div
            key={i}
            className="why-card card-auto-height p-5 sm:p-6"
            style={{ backgroundColor: 'var(--bg-card)', border: '1px solid transparent' }}
          >
            <p
              className="tracking-tight text-[1rem] sm:text-[1.1rem] lg:text-[1.2rem] mt-2 mb-3"
              style={{ color: 'var(--text-secondary)' }}
            >
              {item.title}
            </p>
            <p
              className="tracking-tight text-sm sm:text-[0.95rem] leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUS;
