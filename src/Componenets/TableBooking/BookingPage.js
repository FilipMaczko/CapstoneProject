import React from 'react';
import BookingForm from './BookingForm.js';
import BookingHeader from './BookingHeader.js';
import useFetchAPI from '../../CustomHooks/useFetchApi.js'; 

const BookingPage = (props) => {
  const [aviableHours, dispatch] = useFetchAPI();

  return (
    <main>
        <BookingHeader/>
        <BookingForm aviableHours= {aviableHours} aviableHoursDispatch= {dispatch} submitForm = {props.submitForm}/>
    </main>
  );
};

export default BookingPage;