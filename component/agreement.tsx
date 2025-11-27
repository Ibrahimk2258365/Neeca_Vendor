"use client";
import React from "react";
import useSteperStore from "../lib/store";
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

export default function Agreement() {
  
  

  const agreementSchema=z.object({
    user_agreement:z.boolean().refine((val) => val === true, {
    message: "This field is required",
  })
  })
   type agreementData = z.infer<typeof agreementSchema>;


   const {control , register , handleSubmit, formState:{errors}} = useForm<agreementData>({
    resolver:zodResolver(agreementSchema)
  })
  
  const nextStep = useSteperStore((s) => s.nexStep);
  const prevStep = useSteperStore((s) => s.prevStep);

  return (
    <div className="mt-2 bg-white rounded-[8px] text-black sm:px-[30px] px-4 pt-[25px] !text-sm pb-[52px]">
      <div className="">
        <p className="w-full font-poppins font-normal sm:text-[20px] text-base leading-8 sm:leading-[44px]">
          6 <span className="text-[#FB0000] pt-[9px] text-[23px]">*</span>. Read
          and understand the National Energy Efficiency and Conservation
          (Pakistan Energy Labels for{" "}
          <span className="text-[#F76300] border p-[5px] border-b-[#F76300] border-t-[0px]">
            Refrigerators
          </span>{" "}
          ) regulations, 2023.Do you agree with the requirement, criteria, and
          conditions for grant of Pakistan Energy label given in these
          regulations?
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center  gap-2">
          <input className="w-5 h-5 !custom-radio" type="radio" />
          <label htmlFor="">Yes</label>
        </div>
        <div className="flex items-center  gap-2">
          <input className="w-5 h-5 !custom-radio " type="radio" />
          <label htmlFor="">No</label>
        </div>
      </div>
          {errors.user_agreement && (<div className="text-sm text-red-500">{errors.user_agreement.message}</div>)}
      <div className="flex sm:flex-row flex-col gap-4 justify-center mt-10 w-full pb-5">
         <button className="sm:w-[150px] h-10 border text-center border-orange-500 rounded-md text-xl font-semibold flex items-center justify-center text-orange-500 cursor-pointer" onClick={prevStep}>Prev</button>
         <button
          className="sm:w-[150px] h-10 text-center border text-white rounded-md bg-orange-500 text-xl font-semibold flex items-center justify-center cursor-pointer"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
    </div>
  );
}
