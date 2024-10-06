import { useState } from "react";
import InstantCoffee from "../data/InstantCoffee.json";
import InstantCoffeeItems from "./InstantCoffeeItems";

const Coffee = () => {
  const [ instantCoffee, setInstantCoffee ] = useState(InstantCoffee);
  return (
    <div className="coffee-bean">
      {instantCoffee &&
        instantCoffee.map((coffee) => {
          return (
            <InstantCoffeeItems {...coffee}/>
          );
        })}
    </div>
  );
};

export default Coffee;
