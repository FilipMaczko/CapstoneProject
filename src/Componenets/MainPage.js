import './MainPage.css';
import Testimonials from './Testimonials.js';
import About from './About.js'
import HeroSection from './HeroSection.js'
import Specials from './Specials.js'


function MainPage() {
    return (
      <main>
        <HeroSection/>
        <Specials/>
        <Testimonials/>
        <About/>
      </main>
    );
  }

  export default MainPage;