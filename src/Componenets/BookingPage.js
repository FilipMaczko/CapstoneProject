import BookingForm from './BookingForm.js';
import BookingHeader from './BookingHeader.js';
import { useReducer } from 'react';

function updateTimes(state, action) {
    if (action.type=== "Date changed") {
      return {hours: state.hours.concat(action.value)};
    }
    throw Error('Unknown action.');
  }

function initializeTimes() {
      return ["17:00", "18:00", "19:00", "20:00"];
  }

const BookingPage = (props) => {
  const [aviableHours, dispatch] = useReducer(updateTimes, initializeTimes);

  return (
    <main>
        <BookingHeader/>
        <BookingForm aviableHours= {aviableHours} aviableHoursDispatch= {dispatch}/>
    </main>
  );
};

export default BookingPage;