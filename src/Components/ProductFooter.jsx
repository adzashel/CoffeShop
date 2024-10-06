import sackOfCoffee from "../assets/img/sackcoffee.png"
const ProductFooter = () => {
  return (
    <div className="products-footer">
      <div className="footer-banner">
        <h1>Check Out Our Special Coffee Beans</h1>
        <div className="about-btn">
            <a href="#product">Explore Our Products</a>
          </div>
      </div>
      <div className="footer-image">
        <img src={sackOfCoffee} alt="Coffee" />
      </div>
    </div>
  );
};

export default ProductFooter;
