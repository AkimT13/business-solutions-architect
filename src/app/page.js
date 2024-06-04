'use client'
import Image from "next/image";
import CompanySelect from "../components/companySelect/CompanySelect";
import Input from "@/components/Input/Input";

export default function Home() {
  return (
    <main className="flex h-screen flex-col w-full items-center p-3 md:p-24 bg-gradient-to-r from-slate-500 to-slate-800 gap-3">
      <p className=" text-center  text-wrap text-md md:text-6xl text-blue-300 font-bold">Business Solutions Architect</p>
      <CompanySelect/>
      
      <Input/>
    </main>
  );
}
