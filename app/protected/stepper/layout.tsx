import StepperLayout from "../../../component/stepperLayout"
import StepperController from "../../../component/stepperController"
export default function StepperLayoutPage(){
    return (
        <div className="bg-[#F76300] min-h-dvh mx-auto max-w-[1365px] px-6  min-h-full pb-10  pt-9">
             <StepperLayout>
                <StepperController/>
        </StepperLayout>
        </div>
       
    )
}