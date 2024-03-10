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
                Welcome to Little Lemon, where tradition meets innovation in the heart of Mediterranean cuisine. 
                Nestled in a cozy corner of the town, Little Lemon is a charming family-owned restaurant that takes pride in offering authentic dishes with a contemporary flair.
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