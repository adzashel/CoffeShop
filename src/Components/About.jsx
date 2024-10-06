import BgCoffee from "../assets/img/p.jpg";
import coms from "../assets/img/Coms.jpg";
import premium from "../assets/img/premium.jpg";
import prodctDesign from "../assets/img/productDesign.jpg";
import goodquality from "../assets/img/layers-removebg-preview.png";
import AboutImage from "./AboutImage";
import AboutBody from "./AboutBody";

const About = () => {
  const advantages = [
    {
      title: "High Quality Coffee Beans",
      description:
        "Our coffee beans are carefully selected from the best farmers in each region, ensuring a consistent taste and quality.",
      image: premium,
    },
    {
      title: "Affordable Prices",
      description:
        "Our prices are competitive, making it easy for you to buy coffee at home or work.",
      image: goodquality,
    },
    {
      title: "Best Product Design",
      description: "Our products are designed to be flexible and elegant.",
      image: prodctDesign,
    },
    {
      title: "Active Communcation",
      description:
        "Join our community of coffee enthusiasts, share your experiences, and learn from others.",
      image: coms,
    },
  ];
  return (
    <div className="about" id="about">
      <AboutImage bg={BgCoffee} />
      <AboutBody advantages={advantages} />
    </div>
  );
};

export default About;
