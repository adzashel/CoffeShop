import ThermalCarafe from "../assets/img/thermalCarafe.png";
import PremiumPSD from "../assets/img/Premium.png";
import FrenchPress from "../assets/img/frenchPress.png";
import CoffeeMachine from "../assets/img/excelsa.png";
import machine from "../assets/img/coffeemachine-removebg-preview.png";
import electricEspressoMachine from "../assets/img/2c349e733eba9c491c88ac4c5ebe0efe-removebg-preview.png";
import "animate.css";
import { useState } from "react";
import AccessoriesItems from "./AccessoriesItems";

const Items = [
  {
    id: 1243553,
    name: "Olerd 34 Oz",
    price: "$10",
    priceBefore: "$40",
    image: ThermalCarafe,
  },
  {
    id: 12446353,
    name: "Premium Papper Cup",
    price: "$8",
    priceBefore: "$32",
    image: PremiumPSD,
  },
  {
    id: 1243553,
    name: "Espro French Press",
    price: "$15",
    priceBefore: "$60",
    image: FrenchPress,
  },
  {
    id: 1243552,
    name: "Excelsa Coffee Machine",
    price: "$18",
    priceBefore: "$65",
    image: CoffeeMachine,
  },
  {
    id: 1243554,
    name: "Excelsa Coffee Machine",
    price: "$15",
    priceBefore: "$55",
    image: machine,
  },
  {
    id: 1243554,
    name: "Electric Espresso Machine",
    price: "$34",
    priceBefore: "$75",
    image: electricEspressoMachine,
  },
];

const Accessories = () => {
  const [ accesories , setAccesories ] = useState(Items);
  return (
   <AccessoriesItems items={ accesories }/>
  );
};

export default Accessories;
