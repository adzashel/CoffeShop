import { useState } from "react";
import Philosophies from "../data/PhilosophyCoffee.json";
import SpecialCoffeeItems from "./SpecialCoffeeItems";
import Page from "./Page";

const SpecialCoffee = () => {
  const [ coffees , setCoffee ] = useState(Philosophies);
  const [ currentPage , setCurrentPage ] = useState(1);
  const [itemsPerPage] = useState(6);
  // Pagination Logict
  const lastPostIndex = currentPage * itemsPerPage;   // 
  const firstPostIndex = lastPostIndex - itemsPerPage;   // 
  const currentPageItems =  coffees.slice(firstPostIndex, lastPostIndex);

  // Loop for Pagination
  const page = [];
  const active = currentPage; 
  const totalCoffee = coffees.length;
  for (let i = 1; i <= Math.ceil(totalCoffee / itemsPerPage); i++) {
    page.push(i);
  }
  return (
    <>
    <div className="special-items">
      {currentPageItems &&
        currentPageItems.map(( coffee, i) => {
          return (
            <>
               <SpecialCoffeeItems index={ i } {...coffee}/>
            </>
          );
        })}
        <br />
    </div>
     <Page pages={ page } setCurrentPage={ setCurrentPage } active={ active }/>
     </>
    
  );
};

export default SpecialCoffee;
