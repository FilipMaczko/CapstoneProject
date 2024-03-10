import React, { useState } from 'react';
import './BookingForm.css'


const BookingForm = (props) => {
  const hourOptions = props.aviableHours.hours.map( x => <option id={x} key={x}>{x}</option>);
  
  const [formData, setFormData] = useState({
      fullName: '',
      phoneNumber: '',
      reservationTime: '17:00',
      reservationDate: '',
      guestsCount: 1
    });

    const [formErrors, setFormErrors] = useState({
      nameError: '',
      phoneError: '',
      dateError: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      if(name==='reservationDate'){
        console.log(`sent value: ${value}`);
        props.aviableHoursDispatch({type: "Date changed", date: {value}});
      }
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const validateData = (e) => 
    {
      const { name, value } = e.target;
      if(name==='fullName'){
        if(value.length < 3)
        {
          setFormErrors({
            ...formErrors,
            nameError: `Please enter your full name (first name and last name). It must contain at least 3 characters.`
          });
        }
        else{
          setFormErrors({
            ...formErrors,
            nameError: ``
          });
        }
      }
      else if(name==='phoneNumber'){
        if(value.length < 9)
        {
          setFormErrors({
            ...formErrors,
            phoneError: `Phone number must contain at least 9 digits.`
          });
        }
        else{
          setFormErrors({
            ...formErrors,
            phoneError: ``
          });
        }
      }
      else if(name==='reservationDate'){
        if(Date.parse(`${value}T23:59:59`)-Date.parse(new Date())<0)
        {
          setFormErrors({
            ...formErrors,
            dateError: `You can not select ${value}. This date is in the past.`
          });
        }
        else{
          setFormErrors({
            ...formErrors,
            dateError: ``
          });
        }
      }
    }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you can submit the form data
      console.log(formData);
    };
  
    return (
      <section>
      <form onSubmit={handleSubmit}>
        <div className='formControl'>
          <label htmlFor="fullName">Full Name</label>
          <input
            className={formErrors.nameError.length>0 ? 'errorBox' : ''}
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={validateData}
          />
          <p className="errorMessage">{formErrors.nameError}</p>
        </div>
  
        <div className='formControl'>
          <label htmlFor="phoneNumber">Phone number</label>
          <input
            className={formErrors.phoneError.length>0 ? 'errorBox' : ''}
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            onBlur={validateData}
          />
          <p className="errorMessage">{formErrors.phoneError}</p>
        </div>
  
        <div className='formControl'>
          <label htmlFor="reservationTime">Reservation time</label>
          <select id="reservationTime" name="reservationTime" value={formData.reservationTime} onChange={handleChange}>
            {hourOptions}
          </select>
          <p className="errorMessage"></p>
        </div>
  
        <div className='formControl'>
          <label htmlFor="reservationDate">Reservation date</label>
          <input
            className={formErrors.dateError.length>0 ? 'errorBox' : ''}
            type="date"
            id="reservationDate"
            name="reservationDate"
            value={formData.reservationDate}
            onChange={handleChange}
            onBlur={validateData}
          />
          <p className="errorMessage">{formErrors.dateError}</p>
        </div>
  
        <div className='formControl'>
          <label htmlFor="guestsCount">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guestsCount"
            name="guestsCount"
            value={formData.guestsCount}
            onChange={handleChange}
          />
          <p className="errorMessage"></p>
        </div>
        <div className= 'buttonHolder'>
          <button type="submit"> 
            {"Reserve a table"}
          </button>
        </div>
      </form>
      </section>
    );
};

export default BookingForm;