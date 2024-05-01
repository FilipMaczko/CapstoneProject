import Restaurant from '../../images/restaurant.jpg';
import './BookingHeader.css';

function BookingHeader(props) {
    return (
        <section>
            <div className='bookingHeaderColumn'>
                <h1 className='displayTitle'>Your resservation was sucessfull.</h1>
                <p className='paragraphText'>
                Hi {props.formData.fullName}! <br/>
                We are glad to confirm your reservation for a table for {props.formData.guestsCount}. 
                We will see you {props.formData.reservationDate} at {props.formData.reservationTime}.
                An sms with confirmation was sent to your phone ({props.formData.phoneNumber}). We will send another one day before your reservation.<br/>
                If you have any problem with a reservation please call us.
                </p>
            </div>

            <div className='bookingHeaderColumn'>
                <img className='resImage' src ={Restaurant} alt='restaurant food'/>
            </div>
        </section>
    );
  }

  export default BookingHeader;