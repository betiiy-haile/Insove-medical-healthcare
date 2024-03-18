import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Appointment from "./components/Appointment";
import Testimonial from "./components/Testimonial";
import Teams from "./components/Teams";
import Faq from "./components/Faq";
import Departments from "./components/Departments";
import BLog from "./components/BLog";
import Brands from "./components/Brands";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />   
      <Hero />    
      <Stats />   
      <Services />   
      <Appointment />
      <Testimonial />
      {/* to be done */}
      <Teams />
      <Faq />
      <Departments />
      <BLog />
      <Brands />
      <Newsletter />
      <Footer />
    </div>
  )
}
