import React, { useState } from 'react';


const BookingForm = () => {
  const [aviableHours, setAviableHours] = useState([
    "17.00",
    "18.00",
    "19.00",
    "20.00"
  ]);

  const hourOptions = aviableHours.map( x => <option>{x}</option>);
  
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
        if(Date.parse(value)-Date.parse(new Date())<0)
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
      <form onSubmit={handleSubmit}>
        <div className='formControl'>
          <label htmlFor="fullName">Full Name</label>
          <input
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
            type="datetime-local"
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
        <button type="submit">
          {"Submit"}
        </button>
      </form>
    );
};

export default BookingForm;