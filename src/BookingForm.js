import React, {useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import useSubmit from "./hooks/useSubmit";
import {useAlertContext} from "./context/alertContext";


const BookingForm = () => {
  return (
          <form>
              <div className= 'formControl'>
                <label htmlFor="firstName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                />
                <p className="errorMessage"></p>
              </div>

              <div className= 'formControl'>
                <label htmlFor="phoneNumber">Phone number</label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                />
                <p className="errorMessage"></p>
              </div>

              <div className= 'formControl'>
                <label htmlFor="reservationDate">Reservation date</label>
                <input
                  type= "datetime-local"
                  id="reservationDate"
                  name="reservationDate"
                />
                <p className="errorMessage"></p>
              </div>

              <div className= 'formControl'>
                <label htmlFor="guestsCount">Number of guests</label>
                <input
                  type= "number"
                  id="guestsCount"
                  name="guestsCount"
                />
                <p className="errorMessage"></p>
              </div>

              <div className= 'formControl'>
                <label htmlFor="smoker">Tabel for a smoker </label>
                <input
                  type= "checkbox"
                  id="smoker"
                  name="smoker"
                />
                <p className="errorMessage"></p>
              </div>

              <div className= 'formControl'>
                <label htmlFor="pets">Will you brint pets with you </label>
                <input
                  type= "checkbox"
                  id="pets"
                  name="pets"
                />
                <p className="errorMessage"></p>
              </div>

              <div className= 'formControl'>
                <label htmlFor="firstName">Notes</label>
                <textarea
                  id="notes"
                  name="notes"
                />
                <p className="errorMessage"></p>
              </div>
              <button type="submit">
                {"Submit"}
              </button>
          </form>
  );
};

export default BookingForm;