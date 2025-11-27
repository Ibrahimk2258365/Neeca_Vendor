"use client";

import React from "react";
import useSteperStore from "../lib/store";

export default function TestReport() {
  const prevStep = useSteperStore((s) => s.prevStep);
  const nextStep = useSteperStore((s) => s.nexStep);
  return (
    <div>
      <div className="mt-2 bg-white rounded-[8px] text-black sm:px-[30px] px-4 pt-[25px] !text-sm pb-[52px]">
        <form action="">
          <h1 className="text-center mb-2">
            {" "}
            9. The following documents should be attached with the application
          </h1>
          <h1 className="text-lg text-center font-semibold">
            c. Product Test Report
          </h1>
          <p className="text-sm text-center">
            Pdf, .png, .jpg Only (Maximum 50 MB)
          </p>
          <div className="w-full border h-[300px] flex flex-col items-center justify-center h-[100px] max-w-[500px] mx-auto undefined">
            <input
              id="fileInputuploadedFile"
              className="hidden"
              accept="application/pdf,image/png,image/jpeg,image/jpg"
              type="file"
              name="uploadedFile"
            />
            <div className="flex flex-col items-center justify-center w-full">
              <svg
                viewBox="0 0 1024 1024"
                focusable="false"
                data-icon="inbox"
                width="50px"
                height="50px"
                fill="#f76300"
                aria-hidden="true"
              >
                <path d="M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"></path>
              </svg>
              <p className="undefined mt-2 text-sm font-light">
                Drag & Drop file here
              </p>
            </div>
            <label htmlFor="">
              {" "}
              <p className="undefined mt-[10px] mb-4 text-[#362921] font-medium cursor-pointer border-[1px] border-b-primary border-t-0 border-x-0">
                Browse File
              </p>
            </label>
          </div>
          <div className="mt-5 px-5">
            <p>The test is uploaded from:</p>
            <div className="mt-4 flex gap-5 flex-col sm:flex-row sm:gap-10">
              <div className="flex">
                <div
                  className="w-6 h-6 border-2 rounded flex items-center justify-center 
        bg-orange-500 border-orange-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="white"
                    className="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <label htmlFor="" className="ml-3">
                  PNAC Accredited Lab
                </label>
              </div>
              <div className="flex">
                <div
                  className="w-6 h-6 border-2 rounded flex items-center justify-center 
        border-gray-300"
                ></div>
                <label htmlFor="" className="ml-3">NEECA Enlisted Lab</label>
              </div>
            </div>
            <div className="mt-5">
                <div className="w-full sm:w-80 css-b62m3t-container">
                    {/* select option system  */}

                </div>
            </div>
          </div>
        </form>
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
     
    </div>
  );
}
