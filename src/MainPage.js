import Food from './images/restauranfood.jpg';
import './MainPage.css';
import MarioAndAdrianA from './images/Mario and Adrian A.jpg';
import MarioAndAdrianB from './images/Mario and Adrian b.jpg';

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
        </section>

        <section>
            <h1>Testimonials</h1>
        </section>

        <section>
            <h1>Little Lenom</h1>
            <h2>Chicago</h2>
            <p>
                Lorem ipsum ...
            </p>
            <img src ={MarioAndAdrianA} alt='Mario and Adrian'/>
            <img src ={MarioAndAdrianB} alt='Mario and Adrian'/>
        </section>
      </main>
    );
  }

  export default MainPage;