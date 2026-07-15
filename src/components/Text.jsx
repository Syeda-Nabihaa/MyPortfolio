import React from "react";

export function DescriptionText({ description }) {
  return (
    <div>
      <p className="text-gray-400 leading-7">{description}</p>
    </div>
  );
}

export function SectionHeading({ FirstLine, SecondLine }) {
  return (
    <div className="text-center ">
      <span className="text-cyan-400 font-semibold tracking-[0.3em] uppercase">
        {FirstLine}
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
        {SecondLine}
      </h2>
    </div>
  );
}
