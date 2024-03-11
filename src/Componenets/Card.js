import './Card.css';

function Card(props) {
  return (
    <article className = "card">
    <img src = {props.foto} alt = {props.dishName}/>
    <div className= 'cardContent'>
      <div className= 'cardHeader'>
        <h1 className='cardTitle'>{props.dishName}</h1>
        <span className='highlighText'>${props.price}</span>
      </div>
    <p className = 'paragraphText'>{props.description} </p>
    <h2 className = 'highlighText'>Order a delivery</h2>
    </div>
    </article>
  );
}

export default Card;