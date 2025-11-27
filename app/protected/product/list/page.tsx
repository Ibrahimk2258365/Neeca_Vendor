import { ProducList } from "../../../../component/productList";
import HomeHeader from "../../../../component/homeHeader";
export default function ProducListPage(){
    
    return(
       <div>
         <HomeHeader/>
      <div className="mt-4">
           <ProducList/>
      </div>
      
       </div>
    )
}