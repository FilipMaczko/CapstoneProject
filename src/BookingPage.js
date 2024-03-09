import BookingForm from './BookingForm.js';
import HeroSection from './HeroSection.js';


const BookingPage = (props) => {
  return (
      <main>
        <HeroSection/>
        <BookingForm aviableHours= {props.aviableHours}/>
    </main>
  );
};

export default BookingPage;