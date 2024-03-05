import Food from './images/restauranfood.jpg';
import './MainPage.css';
import Testimonial from './Testimonial';
import About from './About.css'
import Card from './Card';


function MainPage() {
    return (
      <main>
        <section>
            <h1>Little Lenom</h1>
            <h2>Chicago</h2>
            <p>
                Lorem ipsum ...
            </p>
            <button>Reserve a table</button>
            <img src ={Food} alt='restaurant food'/>
        </section>

        <section>
            <h1>Specials</h1>
            <button>Online Menu</button>
            <Card/>
            <Card/>
            <Card/>
        </section>

        <section>
            <h1>Testimonials</h1>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
            <Testimonial/>
        </section>

        <About/>
      </main>
    );
  }

  export default MainPage;