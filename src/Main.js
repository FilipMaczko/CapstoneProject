import MainPage from './MainPage.js'
import BookingPage from './BookingPage.js';
import { Routes, Route} from "react-router-dom";
import { useReducer } from 'react';

function updateTimes(state, action) {
    if (action.type.length > 0) {
        return [
            "17.00",
            "18.00",
            "19.00",
            "20.00"
        ]
    }
    throw Error('Unknown action.');
  }

function Main() {
    const [aviableHours, dispatch] = useReducer(updateTimes, {hours: ["17.00","18.00","19.00","20.00"]});

  return (
    <Routes> 
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/booking" element={<BookingPage aviableHours={aviableHours} />}></Route>
    </Routes>
  );
}

export default Main;