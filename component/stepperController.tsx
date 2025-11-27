'use client'


import React, { useState } from "react"
import Agreement from "./agreement";
import ApplicantInfo from "./applicationInfo";
import ModelInfo from "./modelInfo";
import TestReport from "./testReport";
import Document from "./document";
import Fees from "./fees";
import useSteperStore from "../lib/store";

const Steps=[
    Agreement,
    ApplicantInfo,
    ModelInfo,
    Document,
    TestReport,
    Fees
]

export default function StepperController(){

const currentStep = useSteperStore((state)=> state.currentStep)
    
const StepComponent= Steps[currentStep - 1]

    return (
        <div>
          <StepComponent/>
        </div>
    )
}