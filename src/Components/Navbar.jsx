import logo from "../assets/img/phi.png";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <a href="/">
        <img src={logo} alt="Logo" />
      </a>
      <h1>Phi Coffee</h1>
      <ul className="navbar-links">
        <a href="#about">
          {" "}
          <li>About</li>
        </a>
        <a href="#product">
          <li>Products</li>
        </a>
        <a href="#special-offer">
          {" "}
          <li>Special Offer</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
