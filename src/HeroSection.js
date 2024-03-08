import Food from './images/restauranfood.jpg';
import './HeroSection.css';
import { Link } from "react-router-dom";

function HeroSection() {
    return (
        <section className='highlightedSection'>
            <div className='heroSectionColumn'>
                <h1 className='displayTitle'>Little Lemon</h1>
                <h2 className='subTitle'>Chicago</h2>
                <p className='paragraphText'>
                    We are family owned Mediterranean restaurant, focused on tradicional dishes served with a modern twist.
                </p>
                <Link to='/booking'>
                    <button>Reserve a table</button>
                </Link>
            </div>

            <div className='heroSectionColumn'>
                <img className='heroImage' src ={Food} alt='restaurant food'/>
            </div>
        </section>
    );
  }

  export default HeroSection;