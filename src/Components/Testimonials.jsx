import React from "react";

export const Testimonials = ({ photo, name, job, info }) => {
  return (
    <div className="border-4 border-amber-500 px-6 py-4 w-[400px] flex flex-none items-center gap-4">
      <img className="w-28 h-28 rounded-full" src={photo} />
      <div className="text-[16px]">
        <p className="font-semibold">{name}</p>
        <p className="font-semibold">{job}</p>
        <p className="mt-2">{info}</p>
      </div>
    </div>
  );
};

export default Testimonials;
