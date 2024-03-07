import Foto from './images/greek salad.jpg';
import './Card.css';

function Card() {
  return (
    <div className = "card">
    <img src = {Foto} alt = 'Greek salad'/>
    <div className= 'cardContent'>
      <div className= 'cardHeader'>
        <h1 className='cardTitle'>Greek salad</h1>
        <span className='highlighText'>$12.99</span>
      </div>
    <p className = 'paragraphText'>The famous greek salad of the crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
    <h2 className = 'highlighText'>Order a delivery</h2>
    </div>
    </div>
  );
}

export default Card;