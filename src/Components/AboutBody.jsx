const AboutBody = ({ advantages }) => {
  return (
    <div className="about-body">
      <h1>
        We care about the quality of our <span>products</span>
      </h1>
      <p className="body-para">
        Drinking Coffee is a global activity that connects people to different
        cultures and traditions. Phi Coffee strives to create a high-quality,
        locally sourced coffee experience.
      </p>
      <div className="advantage">
        {advantages.map((advantage, i) => {
          return (
            <div className="advantage-item" key={i}>
              <img src={advantage.image} alt="" />
              <div className="advantage-info">
                <h3>{advantage.title}</h3>
                <p>{advantage.description}</p>
              </div>
            </div>
          );
        })}
        <div className="about-btn">
          <a href="#special-offer">Explore Our Special Offer</a>
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
