import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Approach from './components/Approach/Approach';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';
import Industries from './components/Industries/Industries';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import Blogs from './components/Blogs/Blog';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Technology from './components/Technology/Technology';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of animation
    });
  }, []);

  return (
    <>
  
    <div className="App">
      <Navbar />
      
      <Banner />
      <Approach />
      <About />
      <Services />
      <Industries />
      <Portfolio />
      <Testimonial />
      <Blogs />
      <Technology />
      <Contact />
      <Footer />

     
    </div>
    </>
  );
}

export default App;
