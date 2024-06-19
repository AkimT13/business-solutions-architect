"use client";
import React from "react";
import { useState } from "react";

export default function CompanySelect() {
  const [company, switchCompany] = useState(false);

  return (
    <div className="flex items-center justify-center gap-3 md:gap-5 w-full h-40 bg-black  ">
      <button className=" text-white scale-75 text-sm md:scale-100 font-medium bg-gray-600 rounded-full p-3 border-black">
        Green Energy Company
      </button>
      <button className=" text-white text-sm scale-75 md:scale-100 font-medium bg-gray-600 rounded-full p-3 border-black">
        Tech Innovators Inc.
      </button>
    </div>
  );
}
