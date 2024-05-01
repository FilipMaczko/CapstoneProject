import MainPage from '../LandingPage/MainPage.js'
import BookingPage from '../TableBooking/BookingPage.js';
import { Routes, Route} from "react-router-dom";
import ConfirmedBooking from "../TableBooking/ConfirmedBooking.js"
import { submitAPI } from '../../MockApi/Api.js';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';


function Main() {
  const navigate = useNavigate();
  const [submitedFormData, setSubmitedFormData] = useState({
    fullName: '',
    phoneNumber: '',
    reservationTime: '17:00',
    reservationDate: new Date().toISOString().split('T')[0],
    guestsCount: 1
  });

  const submitForm =       
  (formData) => {
  if(submitAPI(formData)){
    setSubmitedFormData(formData);
    navigate('/booking-confirmed');
  }};

  return (
    <Routes> 
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/booking" element={<BookingPage submitForm = {submitForm}/>}></Route>
        <Route path="/booking-confirmed" element={<ConfirmedBooking formData= {submitedFormData}/>}></Route>
    </Routes>
  );
}

export default Main;