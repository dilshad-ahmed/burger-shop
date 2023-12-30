import React from "react";

const HeaderTitle = ({ title, subtitle, description }) => {
  return (
    <>
      <div className="text-center mb-20 max-w-[400px] mx-auto">
        <p
          data-aos="fade-up"
          className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary "
        >
          {subtitle}
        </p>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-3xl font-bold"
        >
          {title}
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-xs text-gray-400"
        >
          {description}
        </p>
      </div>
    </>
  );
};

export default HeaderTitle;
