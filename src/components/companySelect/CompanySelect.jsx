"use client";
import React from "react";
import { useState } from "react";

export default function CompanySelect() {
  const [company, switchCompany] = useState(false);

  return (
    <div className="flex items-center justify-center gap-3 md:gap-5 w-full h-auto">
      <button className="border text-white scale-75 md:scale-100 font-medium bg-gray-600 rounded-full p-3 border-black">
        Green Energy Solutions
      </button>
      <button className="border text-white  scale-75 md:scale-100 font-medium bg-gray-600 rounded-full p-3 border-black">
        Tech Innovators Inc.
      </button>
    </div>
  );
}