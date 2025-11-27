"use client";
import React from "react";
import useSteperStore from "../lib/store";
// import { Class } from "zod/v4/core/util.cjs";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

export default function ApplicantInfo() {

  const applicantInfoSchema=z.object({
    
        company_name: z.string().min(1, "company name is required"),
        company_province: z.string().min(1, "state is required"),
        company_country: z.string().min(1, "country is required"),
        company_address: z.string().min(1, "comments required"),
        factory_country: z.string().min(1, "factory country is required"),
        factory_province: z.string().min(1, "Factory state is required."),
        factory_city: z.string().min(1, "Factory city is required."),
        factory_address: z.string().min(1, "Factory comments are required."),
        office_managing_director_name: z.string().min(1, "office managing director  Name is required."),
        // registered_with_chamber  that have false 
        registered_with_chamber:z.boolean(),
        member_of_association:z.boolean(),

      //member_of_association also as false 
        factory_telephone: z.string().min(1, "Please enter a valid telephone number."),
        contact_person_name: z.string().min(1, "Contact Person Name is required."),
        contact_person_phone: z.string().min(1, "Contact Person Phone is required."),
        office_telephone: z.string().min(1, "Contact Person Telephone is required."),
        contact_person_email: z.string().min(1, "Contact Person Email is required."),
        contact_person_telephone: z.string().min(1, "Contact prson Telephone is required."),
        sales_network_regions:z.array(z.string()).min(1, "Please select at least 1 of the Sale Network.")
  });

  type applicantInfoData = z.infer<typeof applicantInfoSchema>;
  const {control , register , handleSubmit, formState:{errors}} = useForm<applicantInfoData>({
    resolver:zodResolver(applicantInfoSchema)
  })




  const prevStep = useSteperStore((s) => s.prevStep);
  const nextStep = useSteperStore((s) => s.nexStep);
  return (
    <div className="mt-2 bg-white rounded-[8px] text-black sm:px-[30px] px-4 pt-[25px] !text-sm pb-[52px]">
      <label htmlFor="">
        {" "}
        <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        className="text-black w-full h-9 border rounded p-2 border-zinc-300"
      />

      <form action="">
        <div className="p-2 w-full">
          <div className="shadow-md border rounded-xl border-zinc-300  p-5 mb-5">
            <h2 className="text-xl mb-6">1. Applicant Information</h2>
            <h3 className="text-lg mb-4">Company Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
              <div className="flex flex-col">
                <label htmlFor="">
                  a. Name of Company/Firm<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="text-black w-full h-9 border rounded p-2 border-zinc-300"
                />
              </div>
              <div className="w-full">
                <label htmlFor="">
                  Country<span className="text-red-500">*</span>
                </label>
                {/* here is for a country  */}
              </div>
              <div className="w-full">
                <label htmlFor="">
                  {" "}
                  State/Province<span className="text-red-500">*</span>
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="">
                  City<span className="text-red-500">*</span>
                </label>
                {/* here is a city  */}
              </div>
            </div>
            <div className="w-full mt-[1.25rem]">
              <label htmlFor="">
                {" "}
                b. Address<span className="text-red-500">*</span>
              </label>
              {/* <input type="text"  className="text-black w-full h-9 border rounded p-2 border-zinc-300" /> */}
              <textarea className="mt-2 w-full h-24 border rounded p-2 text-black border-zinc-300"></textarea>
            </div>
          </div>
          <div className="shadow-md border rounded-xl border-zinc-300 p-5 mb-5">
            <h3 className="text-xl mb-4">Factory Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
              <div className="w-full">
                <label htmlFor="">
                  Country<span className="text-red-500">*</span>
                </label>
                {/* here is for a country  */}
              </div>
              <div className="w-full">
                <label htmlFor="">
                  {" "}
                  State/Province<span className="text-red-500">*</span>
                </label>
              </div>
              <div className="w-full">
                <label htmlFor="">
                  City<span className="text-red-500">*</span>
                </label>
                {/* here is a city  */}
              </div>
            </div>
            <div className="w-full mt-[1.25rem]">
              <label htmlFor="">
                c. Factory/Firm Address<span className="text-red-500">*</span>
              </label>
              {/* <input type="text"  className="text-black w-full h-9 border rounded p-2 border-zinc-300" /> */}
              <textarea className="mt-2 w-full h-24 border rounded p-2 text-black border-zinc-300"></textarea>
            </div>
            <h1 className="mt-[1.25rem] text-[15px] mb-[0.45rem]">
              d. Telephone:
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
              <div className="w-full">
                <label htmlFor="">
                  Factory:<span className="text-red-500">*</span>
                </label>
                {/* this is for a relephone */}
              </div>
              <div className="w-full">
                <label htmlFor="">
                  Office:<span className="text-red-500">*</span>
                </label>
                {/* this is for a relephone */}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center mt-[1.25rem]">
              <div className="flex flex-col">
                <label htmlFor="">
                  e. Name of Company Managing Director/Director of the
                  factory/firm <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="text-black w-full h-9 border rounded p-2 border-zinc-300"
                />
              </div>
            </div>
          </div>
          <div className="shadow-md border rounded-xl border-zinc-300 p-5 mb-5">
            <h3 className="text-xl mb-4">Person Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
              <div className="flex flex-col">
                <label htmlFor="">
                  {" "}
                  Name of Contact Person<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300"
                />
              </div>
              <div className="w-full">
                <label htmlFor="">
                  Phone #<span className="text-red-500">*</span>
                </label>
                {/* this is for a relephone */}
              </div>
              <div className="w-full">
                <label htmlFor="">
                  Mobile #<span className="text-red-500">*</span>
                </label>
                {/* this is for a relephone */}
              </div>
              <div className="flex flex-col">
                <label htmlFor="">
                  E-mail<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="text-black w-full h-9 border rounded p-2 border-zinc-300"
                />
              </div>
            </div>
          </div>
          <div className="shadow-md border rounded-xl border-zinc-300 p-5 mb-5">
            <p className="mb-4">
              2. Whether the firm/factory is registered with the local Chamber
              of Commerce and Industry? If YES then fill the following;
            </p>
            <div className="flex gap-5 mb-5">
              <div className="flex items-center gap-2">
                <input type="radio" />
                <label>Yes</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" />
                <label>No</label>
              </div>
            </div>
          </div>
          <div className="shadow-md border rounded-xl border-zinc-300 p-5 mb-5">
            <p className="mb-4">3. Whether a member of any Association</p>
            <div className="flex gap-5 mb-5">
              <div className="flex items-center gap-2">
                <input type="radio" />
                <label>Yes</label>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" />
                <label>No</label>
              </div>
            </div>
            <div className="shadow-md border rounded-xl border-zinc-300 p-5">
              <h3 className="mb-4">
                4. Whether you have sales/distributors/retailers network for the
                specific product? (Tick the applicable box)
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 cursor-pointer">
                  <div
                    className="w-5 h-5 border-2 !text-sm rounded flex items-center justify-center 
                        border--300
                      "
                  ></div>
                  <label htmlFor="" className="text-sm">
                    Throughout Pakistan
                  </label>
                </div>
                <div className="flex items-center gap-3 cursor-pointer">
                  <div
                    className="w-5 h-5 border-2 !text-sm rounded flex items-center justify-center 
                        border--300
                      "
                  ></div>
                  <label htmlFor="" className="text-sm">
                    Azad Jammu & Kashmir
                  </label>
                </div>
                <div className="flex items-center gap-3 cursor-pointer">
                  <div
                    className="w-5 h-5 border-2 !text-sm rounded flex items-center justify-center 
                        border--300
                      "
                  ></div>
                  <label htmlFor="" className="text-sm">
                    Balochistan
                  </label>
                </div>
                <div className="flex items-center gap-3 cursor-pointer">
                  <div
                    className="w-5 h-5 border-2 !text-sm rounded flex items-center justify-center 
                        border--300
                      "
                  ></div>
                  <label htmlFor="" className="text-sm">
                    Gilgit Baltistan
                  </label>
                </div>
                <div className="flex items-center gap-3 cursor-pointer">
                  <div
                    className="w-5 h-5 border-2 !text-sm rounded flex items-center justify-center 
                        border--300
                      "
                  ></div>
                  <label htmlFor="" className="text-sm">
                    Khyber Pakhtun Khwa
                  </label>
                </div>
                <div className="flex items-center gap-3 cursor-pointer">
                  <div
                    className="w-5 h-5 border-2 !text-sm rounded flex items-center justify-center 
                        border--300
                      "
                  ></div>
                  <label htmlFor="" className="text-sm">
                    Punjab
                  </label>
                </div>
                <div className="flex items-center gap-3 cursor-pointer">
                  <div
                    className="w-5 h-5 border-2 !text-sm rounded flex items-center justify-center 
                        border--300
                      "
                  ></div>
                  <label htmlFor="" className="text-sm">
                    Sindh
                  </label>
                </div>
              </div>
            </div>
          </div>
           <div className="flex sm:flex-row flex-col gap-4 justify-center mt-10 w-full pb-5">
                        <div className="sm:w-[150px] h-10 border text-center border-orange-500 rounded-md text-xl font-semibold flex items-center justify-center text-orange-500 cursor-pointer"  onClick={prevStep}>
                            Previous
                        </div>
                        <div className="sm:w-[150px] h-10 text-center border text-white rounded-md bg-orange-500 text-xl font-semibold flex items-center justify-center cursor-pointer">
                            Save
                        </div>
                        <button className="sm:w-[150px] h-10 text-center border text-white rounded-md bg-orange-500 text-xl font-semibold flex items-center justify-center cursor-pointer" onClick={nextStep}>Next</button>
                    </div>
        </div>
      </form>
    </div>
  );
}
