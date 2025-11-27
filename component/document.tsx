"use client";

import React from "react";
import useSteperStore from "../lib/store";

export default function Document() {
  const nextStep = useSteperStore((s) => s.nexStep);
  const prevStep = useSteperStore((s) => s.prevStep);

  return (
    <div className="mt-2 bg-white rounded-[8px] text-black sm:px-[30px] px-4 pt-[25px] !text-sm pb-[52px]">
      <h1 className="text-center">
        {" "}
        9.The following documents should be attached with the application
      </h1>
      <div className="p-4 flex gap-10 justify-center md:flex-row flex-col">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-xl font-semibold">a. Company Brochure</h1>
          <p>Pdf, .Doc Only (Maximum 100 MB)</p>
          <div className="flex justify-center items-center cursor-pointer flex-col border w-[300px] h-[150px] ">
            <input
              accept=".pdf,.doc,.docx"
              className="hidden"
              type="file"
            ></input>
            <svg
              viewBox="0 0 1024 1024"
              focusable="false"
              data-icon="inbox"
              width="50px"
              height="50px"
              fill="#f76300"
              aria-hidden="true"
            >
              <path d="M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 63.3-10.9 87.3-31.7 19.2-16.5 33.3-38.8 41.4-65.5h158.1V816H214.4V480.1z"></path>
            </svg>
            <span>Drag and drop, or browse</span>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-xl font-semibold">b.Product Brochure</h1>
          <p>Pdf, .Doc Only (Maximum 100 MB)</p>
          <div className="flex justify-center items-center cursor-pointer flex-col border w-[300px] h-[150px] ">
            <input
              accept=".pdf,.doc,.docx"
              className="hidden"
              type="file"
            ></input>
            <svg
              viewBox="0 0 1024 1024"
              focusable="false"
              data-icon="inbox"
              width="50px"
              height="50px"
              fill="#f76300"
              aria-hidden="true"
            >
              <path d="M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 63.3-10.9 87.3-31.7 19.2-16.5 33.3-38.8 41.4-65.5h158.1V816H214.4V480.1z"></path>
            </svg>
            <span>Drag and drop, or browse</span>
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
  );
}
