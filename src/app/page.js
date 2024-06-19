'use client'
import Image from "next/image";
import CompanySelect from "../components/companySelect/CompanySelect";
import Textfield from "@/components/textfield/Textfield";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <main className="flex h-screen flex-col w-full  gap-3">
      <div>
        <Navbar/>
      </div>
      <div className="flex justify-center">
         <Textfield/>
      </div>
     
      
   
      
    
    </main>
  );
}
