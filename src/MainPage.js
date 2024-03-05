import Food from './images/restauranfood.jpg';
import './MainPage.css';
import Testimonials from './Testimonials.js';
import About from './About.js'
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

        <Testimonials/>

        <About/>
      </main>
    );
  }

  export default MainPage;