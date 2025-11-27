"use client";
import React from "react";
import useSteperStore from "../lib/store";
import Link from "next/link";

export default function StepperLayout({children}:{children:React.ReactNode}) {

    const current_step= useSteperStore((s)=>s.currentStep);
const steps = [
        { id: 1, label: "Agreement" },
        { id: 2, label: "Applicant Info" },
        { id: 3, label: "Model Info" },
        { id: 4, label: "Document" },
        { id: 5, label: "Test Report" },
        { id: 6, label: "Fees" },
    ];
    const currentStepData = steps.find((step) => step.id === current_step);

    return (
        <div>
            <div>
              
                <div className="flex justify-between items-center mt-5 ">
                    <Link href="/protected/product/list">
                        <button className="bg-[#FFE2CF] text-[12px] w-[80px] cursor-pointer h-[29px] rounded-[3px] text-[#F76300]">
                            Home
                        </button>
                    </Link>
                    <h1 className="font-poppins text-center text-white font-semibold md:text-[27px] text-[20px] leading-[27px]">
                        {currentStepData?.label || "Agreement"}
                    </h1>

                    <Link href="/public/login">
                        <button className="bg-[#FFE2CF] text-[12px] w-[80px] h-[29px] cursor-pointer rounded-[3px] text-[#F76300]">
                            Logout
                        </button>
                    </Link>
                </div>

                {/* Stepper */}
                <div className="bg-[#173B45] mt-10 py-5 px-20 rounded-[5px] overflow-x-auto whitespace-nowrap scrollbar-hidden">
                    <div className="flex justify-between">
                        {steps.map((step, index) => {
                         
                            const isClickable = step.id <= current_step;
                            const isActive = step.id === current_step;
                            const isCompleted = step.id < current_step;

                            return (
                                <div key={step.id} className="flex flex-col items-center">
                                    {/* Step Circle */}
                                    <div
                                        onClick={() => {
                                            if (isClickable) {
                                                // setCurrentStepC(step.id);
                                                console.log("Clicked step:", step.id);
                                            } else {
                                                console.log("Step not clickable:", step.id);
                                            }
                                        }}
                                        className={`w-[2em] h-[2em] flex items-center justify-center rounded-full border p-[15px] font-medium font-bold
                      ${isActive || isCompleted
                                                ? "bg-orange-500 border-orange-500 text-white"
                                                : "bg-[#d1d5db] text-white"}
                      ${isClickable ? "cursor-pointer" : "cursor-not-allowed "}
                    `}
                                    >
                                        {step.id}
                                    </div>

                                    {/* Label */}
                                    <p className="mt-4 text-white text-center">{step.label}</p>

                                    {/* Connector Line */}
                                    {index < steps.length - 1 && (
                                        <div className="border-t-2 border-white flex-1 mx-4 pb-6"></div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div>{children}</div>
        </div>
    );
}
