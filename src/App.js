import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Service from "./Components/Services/Service";
import Experience from "./Components/Experience/Experience";
import Work from "./Components/Works/Work";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import './App.css'
import Swiper from "swiper";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Service/>
      <Experience/>
      <Portfolio/>
      <Work/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}


export default App;