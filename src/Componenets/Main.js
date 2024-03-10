import MainPage from './MainPage.js'
import BookingPage from './BookingPage.js';
import { Routes, Route} from "react-router-dom";


function Main() {
  return (
    <Routes> 
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/booking" element={<BookingPage/>}></Route>
    </Routes>
  );
}

export default Main;