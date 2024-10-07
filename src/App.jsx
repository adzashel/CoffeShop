import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import Products from './Components/Products';
import "./App.css";
import ProductFooter from './Components/ProductFooter';
import Offer from './Components/Offer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import MailchimpForm from './Components/MailchimpForm';
import About from './Components/About';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner />
      <Products/>
      <ProductFooter/>
      <About/>
      <Offer/>
      <MailchimpForm/>
      <Footer/>
    </div>
  )
}

export default App