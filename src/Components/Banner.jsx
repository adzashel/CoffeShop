import Cofee from "../assets/img/cupofcoffee.png";

const Banner = () => {

  const achievements = [
    {
      title: "Our Products",
      total: "+20",
    },
    {
      title: "Products Sold",
      total: "+500",
    },
  ]
  return (
    <>
      <div className="banner">
      <div className="banner-brand">
        <h1>PHI COFFEE</h1>
        <h2>Welcome to Our Coffee Shop!</h2>
        <p>Discover the best coffee at the best price.</p>
        <button className="cta">
          <a href="#product">
            {" "}
            <span>See Our Products</span>
          </a>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
        <div className="achievement-info">
          { achievements.map(achievement => {
            return (
              <div key={achievement.title} className="achievement">
                <h2>{achievement.title}</h2>
                <p className="total">{achievement.total}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="banner-image">
        <img src={Cofee} alt="Coffee Shop" />
      </div>
    </div>
    <div className="banner-end"> </div>
    </>
    
  );
};

export default Banner;
