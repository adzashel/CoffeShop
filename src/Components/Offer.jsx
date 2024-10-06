import SpecialProduct from "./SpecialProduct";

const Offer = () => {
  return (
    <div id="special-offer">
      <div className="offer-header">
        <h1>Weekend <span className="offer-span">Special Products</span></h1>
        <h3>Check out our special product that you can get with 25% off</h3>
      </div>
      <SpecialProduct/>
    </div>
  );
};

export default Offer;
