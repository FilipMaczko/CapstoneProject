import './Testimonial.css';

function Testimonial() {
    return (
      <div className = "testimonial">
      <h1 className="cardTitle">Rating</h1>
      <img src = 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt = 'persona'/>
      <h2 className='highlighText'>User name</h2>
      <p className= 'paragraphText'>Review text. </p>
      </div>
    );
  }
  
  export default Testimonial;