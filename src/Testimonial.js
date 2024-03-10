import './Testimonial.css';

function Testimonial(props) {
    return (
      <div className = "testimonial">
      <h1 className="cardTitle">Rating: {props.rating}/5</h1>
      <div className ='personaRaw'>
        <img src = {props.personaImg} alt = 'persona'/>
        <h2 className='highlighText'>{props.personaName}</h2>
      </div>
      <p className= 'paragraphText'>{props.review} </p>
      </div>
    );
  }
  
  export default Testimonial;