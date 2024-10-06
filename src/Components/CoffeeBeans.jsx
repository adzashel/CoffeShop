import { useState } from "react";
import Beans from "../data/CoffeeBeans.json";
import BeansItems from "./BeansItems";


const CoffeeBeans = () => {
  const [ beans , setBeans ] = useState(Beans);
  return (
    <div className="coffee-bean">
    { beans.map(bean => {
        return(
           <BeansItems { ...bean }/>
        )
    })}
    </div>
  );
};

export default CoffeeBeans;
