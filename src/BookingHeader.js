import Restaurant from './images/restaurant.jpg';
import './BookingHeader.css';

function BookingHeader() {
    return (
        <section className='highlightedSection'>
            <div className='bookingHeaderColumn'>
                <h1 className='displayTitle'>Reserve a table</h1>
                <p className='paragraphText'>
                Welcome to Little Lemon, where tradition meets innovation in the heart of Mediterranean cuisine. 
                We can wait to serve you our delicous food. Reserve a table by filling the form below.
                </p>
            </div>

            <div className='bookingHeaderColumn'>
                <img className='resImage' src ={Restaurant} alt='restaurant food'/>
            </div>
        </section>
    );
  }

  export default BookingHeader;