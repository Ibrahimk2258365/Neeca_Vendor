// import { count } from "console";
import {create } from "zustand";
interface steperState{
    currentStep:number;
    nexStep : ()=>void;
    prevStep:()=>void;
}

const useSteperStore = create<steperState>((set)=>({
    currentStep:1,
    nexStep:()=>set((state)=>({currentStep:Math.min(state.currentStep + 1,6)})),
    prevStep:()=>set((state)=>({currentStep:Math.max(state.currentStep - 1 ,1)}))

})) 
export default useSteperStore;