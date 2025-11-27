"use client"
import React from "react"
import useSteperStore from "../lib/store"
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

export default function ModelInfo(){
    const modelInfoSchema = z.object({
        //   model_info_id:z.string().min(1,"company is required"),
          manufacturer_name:z.string().min(1,"company is required"),//
          country_of_manufacture:z.string().min(1,"company is required"),//
          brand_name:z.string().min(1,"company is required"),//
          first_manufactured_year:z.number().min(1,"manufacturing year  is required"),//
          model_number:z.string().min(1,"company is required"),//
          replaces_other_model:z.boolean().refine((val) => val === true, {
    message: "This field is required",
  }),//
          date_marked:z.boolean().refine((val) => val === true, {
    message: "This field is required",
  }),//
          website_url:z.string().min(1,"company is required"),//
          phase_type:z.string().min(1,"company is required"),//
          rated_power_output:z.number().min(1,"powe output is required"),//
          rated_voltage:z.number().min(1,"voltage is required"),//
          rated_frequency:z.number().min(1,"rated frequency is required"),//
          number_of_poles:z.number().min(1,"poles is required"),//
          rated_speed:z.number().min(1,"raed speed is required"),//
          motor_duty:z.string().min(1,"company is required"),//
          mounting_code:z.string().min(1,"company is required"),//
          frame_code:z.string().min(1,"company is required"),//
          enclosure_rating:z.string().min(1,"company is required"),//
          motor_design:z.string().min(1,"company is required"),//
          motor_insulation:z.string().min(1,"company is required"),//
          state_model:z.string().min(1,"company is required"),//
          date_format:z.string().min(1,"company is required"),//
    })

      type modelInfoData = z.infer<typeof modelInfoSchema>;

      
         const {control , register , handleSubmit, formState:{errors}} = useForm<modelInfoData>({
          resolver:zodResolver(modelInfoSchema)
        })


    const prevStep= useSteperStore((s)=>s.prevStep)
    const nextStep=useSteperStore((s)=>s.nexStep)
    return (
        <div>
            <div className="mt-2 bg-white rounded-[8px] text-black sm:px-[30px] px-4 pt-[25px] !text-sm pb-[52px]">
                <form action="" className="mt-5 p-2 w-full">
                    <div className="shadow-md border rounded-xl border-zinc-300 p-5 mb-5">
                        <h3 className="text-base sm:text-xl mb-4">5. Detailed information of the product for which labelling is required:</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
                            <div className="flex flex-col">
                                <label htmlFor="">a. Manufacturers Name <span className="text-red-500">*</span></label>
                                <input type="text" className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300"/>
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <label>b. Country of Manufacture:<span className="text-red-500">*</span></label>
{/* here is a country selector */}

                            </div>
                            <div className="w-full">
                                <label >c. Brand Name:<span className="text-red-500">*</span></label>
                                <input type="text" className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300"/>
                            </div>

                        </div>
                    </div>
                    <div className="shadow-md border rounded-xl border-zinc-300 p-5 mb-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
                            <div className="w-full">
                                <label htmlFor="">d. Year Model(s) First Manufactured or Imported:   <span className="text-red-500">*</span></label>
                                <input type="text" className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300" />
                            </div>
                            <div className="w-full flex flex-col">
                                <label htmlFor="">e. Model Number(s):<span className="text-red-500">*</span>
                                <span className="text-[11px] pt-2">(If registering a family of models, list all model names and numbers covered by this application)</span></label>
                                <input type="text" className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300" />
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md border rounded-xl border-zinc-300 p-5 mb-5">
                        <p className="mb-4">f. Does this Model or Family Replace or Supplement Another Registered Model with the Same Specifications?</p>
                        <div className="flex gap-5 mb-5">
                            <div className="flex items-center gap-2">
                                <input type="radio"  />
                                <label>Yes</label>
                            </div>
                             <div className="flex items-center gap-2">
                                <input type="radio"  />
                                <label>No</label>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md border rounded-xl border-zinc-300 p-5 mb-5">
                        <p className="mb-4">g. Is the Date of Manufacture Permanently Marked on the Rating Plate in a Non-Encrypted Format?</p>
                        <div className="flex gap-5 mb-5">
                            <div className="flex items-center gap-2">
                                <input type="radio"  />
                                <label>Yes</label>
                            </div>
                             <div className="flex items-center gap-2">
                                <input type="radio"  />
                                <label>No</label>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-5">
                            <div className="flex flex-col">
                                <label>Provide Details on How to Determine the Date of Manufacture (from Serial Number or Other Permanent Markings): <span className="text-red-500">*</span></label>
                                <input type="text" className="mt-2 text-black w-full md:w-[35vw] h-9 border rounded p-2 border-zinc-300" />
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md border rounded-xl border-zinc-300 p-5 mb-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
                                <div className="w-full"> 
                                    <label>h. Website Address for Further Details: <span className="text-red-500">*</span></label>
                                    <input type="text" className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300" />
                                   
                                </div>
                                <div className="w-full"> 
                                    <label htmlFor="">i. Single or Three-Phase:<span className="text-red-500">*</span></label>
                                    <input type="text" className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300" />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="">j. Rated Power Output (kW):</label>
                                    <span className="text-red-500">*</span> 
                                    <input type="text" className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300" />
                                    </div>
                                <div className="w-full">
                                    <label htmlFor="">k. Rated Voltage (V):<span className="text-red-500">*</span></label>
                                    <input type="text" className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300" />
                                     </div>
                                <div className="w-full">
                                    <label>l. Rated Input Frequency (Hz):<span className="text-red-500">*</span></label>
                                    <input type="text" className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300" />


                                     </div>
                                <div className="w-full"> 
                                    <label htmlFor="">
                                        m. Number of Poles:
                                        <span className="text-red-500">*</span>
                                        <input type="text" className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300"/>
                                    </label>
                        
                                </div>
                                <div className="w-full"> 
                                    <label htmlFor="">n. Rated Speed (rpm): <span className="text-red-500">*</span></label>
                                    <input type="text"  className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300"/>
                                </div>
                                 <div className="w-full"> 
                                    <label htmlFor=""> o. Motor Duty Rating:<span className="text-red-500">*</span></label>
                                    <input type="text"  className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300"/>
                                </div>
                                 <div className="w-full"> 
                                    <label htmlFor=""> p. Mounting Code of IEC 60034-7:<span className="text-red-500">*</span></label>
                                    <input type="text"  className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300"/>
                                </div>
                                <div className="w-full"> 
                                    <label htmlFor=""> q. Frame Code of IEC 60072:<span className="text-red-500">*</span></label>
                                    <input type="text"  className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300"/>
                                </div>
                                <div className="w-full"> 
                                    <label htmlFor="">r. Enclosure Protection Rating to IEC 60034-5 (IP Code): <span className="text-red-500">*</span></label>
                                    <input type="text"  className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300"/>
                                </div>
                               <div className="w-full"> 
                                    <label htmlFor=""> s. Motor Design (TEFC, ODP, Other):<span className="text-red-500">*</span></label>
                                    <input type="text"  className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300"/>
                                </div>
                        </div>
                    </div>
                    <div className="shadow-md border rounded-xl border-zinc-300 p-5 mb-5">
                        <p className="mb-4 mt-4">t. Motor Winding Insulation to IEC 60034-1?</p>
                        
                        <div className="flex gap-5 mb-5">
                              <div className="flex items-center gap-2">
                                <input type="radio"  />
                                <label>Yes</label>
                            </div>
                             <div className="flex items-center gap-2">
                                <input type="radio"  />
                                <label>No</label>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-md border rounded-xl border-zinc-300 p-5 mb-5">
                        <p className="mb-4 mt-4">8. Estimated production per annum of product/appliance of Model for which the application is submitted? <span className="text-red-500">*</span></p>
                        <input type="text"  className="mt-2 text-black w-full h-9 border rounded p-2 border-zinc-300"/>
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
                </form>

            </div>


       

             
        </div>
    )
}
