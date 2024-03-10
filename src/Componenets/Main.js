import MainPage from './MainPage.js'
import BookingPage from './BookingPage.js';
import { Routes, Route} from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking.js"


function Main() {
  return (
    <Routes> 
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/booking" element={<BookingPage/>}></Route>
        <Route path="/booking-confirmed" element={<ConfirmedBooking/>}></Route>
    </Routes>
  );
}

export default Main;