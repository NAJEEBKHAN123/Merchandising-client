// src/components/PageHeader.jsx
import React from "react";

const PageHeader = ({ title, subtitle, bgImage }) => {
  return (
    <section
      className="relative h-64 lg:h-80 flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold uppercase">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-lg max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
