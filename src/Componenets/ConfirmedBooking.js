import Restaurant from '../images/restaurant.jpg';
import './BookingHeader.css';

function BookingHeader() {
    return (
        <section>
            <div className='bookingHeaderColumn'>
                <h1 className='displayTitle'>Your resservation was sucessfull.</h1>
                <p className='paragraphText'>
                An sms with confirmation was sent to your phone. We will send another one day before your reservation.
                </p>
            </div>

            <div className='bookingHeaderColumn'>
                <img className='resImage' src ={Restaurant} alt='restaurant food'/>
            </div>
        </section>
    );
  }

  export default BookingHeader;