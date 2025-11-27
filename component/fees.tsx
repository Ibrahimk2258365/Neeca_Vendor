"use client"

import React from "react"
import useSteperStore from "../lib/store"

export default function Fees(){
    const prevStep= useSteperStore((s)=>s.prevStep);
    const nextStep= useSteperStore((s)=>s.nexStep);

    return(
        <div className="mt-2 bg-white rounded-[8px] text-black sm:px-[30px] px-4 pt-[25px] !text-sm pb-[52px]">
           <form action="">
            <div className="flex flex-col gap-5">
                <h1>7. Specify the information about deposited non-refundable Fees payable to NEECA*</h1>
                <div className="shadow-md px-5 pt-2 pb-5 rounded-md">
                    <div className="flex items-center jus mb-4">
                        <div className="w-6 h-6 border-2 rounded flex items-center justify-center cursor-pointer border-gray-300"></div>
                        <label htmlFor="" className="ml-3">Company Registration Fee</label>
                        
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
                                <div className="mb-4">
                                    <label className="">Product Price</label>
                                    <input type="text" className="mt-1 p-2 border text-gray-600 border-gray-300 rounded-md w-full h-9" disabled  />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="">Pay Order No:</label>
                                    <input type="text"  placeholder="Write no. as printed on payment instrument" className="mt-1 p-2 border rounded-md w-full h-9 border-gray-300"/>

                                </div>
                                <div className="mb-4">
                                    <label htmlFor="">Date</label>
                                                                    <input type="date" className="mt-1 p-2 border rounded-md w-full h-9 border-gray-300" />

                                </div>
                        </div>
                        <div className="mt-10">
                    <p>Upload Demand Draft / Pay Order Evidence (PDF, JPG, PNG Only)</p>
                    <div className="w-full border h-[300px] flex flex-col items-center justify-center undefined flex justify-center items-center cursor-pointer flex-col border max-w-[350px] overflow-hidden h-[150px]">
                        <input id="fileInputcompanyFile" className="hidden" accept="application/pdf,image/png,image/jpeg,image/jpg" type="file" name="companyFile"/>
                        <div className="flex flex-col items-center justify-center w-full">
                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="inbox" width="50px" height="50px" fill="#f76300" aria-hidden="true">
                                <path d="M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"></path>
                            </svg>
                            <p className="text-sm font-light mt-2 text-sm font-light">Drag & Drop file here</p>
                            <label htmlFor=""> <p className="mt-[10px] mb-4 text-[#F66300] font-medium border-[1px] border-b-primary border-t-0 border-x-0 mt-[10px] mb-4 text-[#362921] font-medium cursor-pointer border-[1px] border-b-primary border-t-0 border-x-0">
                                Browse File
                                </p>
                                </label>
                        </div>

                    </div>

                </div>
                </div>
                <div className="shadow-md px-5 pt-2 pb-5 rounded-md">
                    <div className="flex items-center jus mb-4">
                        <div className="w-6 h-6 border-2 rounded flex items-center justify-center cursor-pointer border-gray-300"></div>
                        <label htmlFor="" className="ml-3">Model Registration Fee</label>
                        
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
                                <div className="mb-4">
                                    <label className="">Product Price</label>
                                    <input type="text" className="mt-1 p-2 border text-gray-600 border-gray-300 rounded-md w-full h-9" disabled  />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="">Pay Order No:</label>
                                    <input type="text"  placeholder="Write no. as printed on payment instrument" className="mt-1 p-2 border rounded-md w-full h-9 border-gray-300"/>

                                </div>
                                <div className="mb-4">
                                    <label htmlFor="">Date</label>
                                                                    <input type="date" className="mt-1 p-2 border rounded-md w-full h-9 border-gray-300" />

                                </div>
                        </div>
                        <div className="mt-10">
                    <p>Upload Demand Draft / Pay Order Evidence (PDF, JPG, PNG Only)</p>
                    <div className="w-full border h-[300px] flex flex-col items-center justify-center undefined flex justify-center items-center cursor-pointer flex-col border max-w-[350px] overflow-hidden h-[150px]">
                        <input id="fileInputcompanyFile" className="hidden" accept="application/pdf,image/png,image/jpeg,image/jpg" type="file" name="companyFile"/>
                        <div className="flex flex-col items-center justify-center w-full">
                            <svg viewBox="0 0 1024 1024" focusable="false" data-icon="inbox" width="50px" height="50px" fill="#f76300" aria-hidden="true">
                                <path d="M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"></path>
                            </svg>
                            <p className="text-sm font-light mt-2 text-sm font-light">Drag & Drop file here</p>
                            <label htmlFor=""> <p className="mt-[10px] mb-4 text-[#F66300] font-medium border-[1px] border-b-primary border-t-0 border-x-0 mt-[10px] mb-4 text-[#362921] font-medium cursor-pointer border-[1px] border-b-primary border-t-0 border-x-0">
                                Browse File
                                </p>
                                </label>
                        </div>
                    </div>

                </div>
                </div>
                    <div className="flex sm:flex-row flex-col gap-4 justify-center mt-10 w-full pb-5">
        <div
          className="sm:w-[150px] h-10 border text-center border-orange-500 rounded-md text-xl font-semibold flex items-center justify-center text-orange-500 cursor-pointer"
          onClick={prevStep}
        >
          Previous
        </div>
        <div className="sm:w-[150px] h-10 text-center border text-white rounded-md bg-orange-500 text-xl font-semibold flex items-center justify-center cursor-pointer">
          Save
        </div>
        <button
          className="sm:w-[150px] h-10 text-center border text-white rounded-md bg-orange-500 text-xl font-semibold flex items-center justify-center cursor-pointer"
          onClick={nextStep}
        >
          Next
        </button>
      </div>
            </div>
           </form>
        </div>
    )
}