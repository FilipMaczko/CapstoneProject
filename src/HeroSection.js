import Food from './images/restauranfood.jpg';
import './HeroSection.css';

function HeroSection() {
    return (
        <section className='highlightedSection'>
            <div className='heroSectionColumn'>
                <h1 className='displayTitle'>Little Lemon</h1>
                <h2 className='subTitle'>Chicago</h2>
                <p className='paragraphText'>
                    Lorem ipsum ...
                </p>
                <button>Reserve a table</button>
            </div>

            <div className='heroSectionColumn'>
                <img className='heroImage' src ={Food} alt='restaurant food'/>
            </div>
        </section>
    );
  }

  export default HeroSection;