import React, { useState, useEffect } from 'react';
import './BookingForm.css'

const BookingForm = (props) => {
  const hourOptions = props.aviableHours.hours.map( x => <option id={x} key={x}>{x}</option>);

  const [formData, setFormData] = useState({
      fullName: '',
      phoneNumber: '',
      reservationTime: '17:00',
      reservationDate: new Date().toISOString().split('T')[0],
      guestsCount: 1
    });

    const [formErrors, setFormErrors] = useState({
      nameError: '',
      phoneError: '',
      dateError: ''
    });

    const [fildTouched, setFildTouched] = useState({
      fullName: false,
      phoneNumber: false
    });

    const [formCanBeSubmitted, setFormCanBeSubmitted] = useState(false);

    useEffect(() => {
      setFormCanBeSubmitted( 
      formData.fullName.length>0
      && formData.phoneNumber.length>0
      && formErrors.dateError.length===0
      && formErrors.nameError.length===0
      && formErrors.phoneError.length===0);
    }, [formData, formErrors]);


    const handleChange = (e) => {
      const { name, value } = e.target;
      if(name==='reservationDate'){
        props.aviableHoursDispatch({type: "Date changed", date: {value}});
      }
      setFormData({
        ...formData,
        [name]: value
      });
      validateData(e);
    };

    const handleBlur = (e) =>{
      const { name } = e.target;
      setFildTouched({
        ...fildTouched,
        [name]: true
      });
    }

    const validateData = (e) => 
    {
      const { name, value } = e.target;
      if(name==='fullName'){
        if(!value.includes(" "))
        {
          setFormErrors({
            ...formErrors,
            nameError: `Please enter your full name (first name and last name). First name must be separated from last name by a space.`
          });
        }
        else if(value.length<3)
        {
          setFormErrors({
            ...formErrors,
            nameError: `Entry is too short. Please enter you first name and last name separated by a space.`
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
        if(value === '123456789')
        {
          setFormErrors({
            ...formErrors,
            phoneError: `This is our phone number. Please enter yours.`
          });
        }
        else if(value.length < 9)
        {
          setFormErrors({
            ...formErrors,
            phoneError: `Phone number too short. Phone number must contain at least 9 digits.`
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
      if(formCanBeSubmitted){
        props.submitForm(formData);
        console.log(formData);
      }
    };
  
    return (
      <section>
      <form onSubmit={handleSubmit}>
        <div className='formControl'>
          <label htmlFor="fullName" aria-label="Your full name">Full Name</label>
          <input
            className={formErrors.nameError.length>0 && fildTouched.fullName ? 'errorBox' : ''}
            id="fullName"
            name="fullName"
            minLength="3"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className= {fildTouched.fullName ?"errorMessage" : "hidden"}>{formErrors.nameError}</p>
        </div>
  
        <div className='formControl'>
          <label htmlFor="phoneNumber" aria-label="Your phone number">Phone number</label>
          <input
            className={formErrors.phoneError.length>0 && fildTouched.phoneNumber ? 'errorBox' : ''}
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            minLength="9"
            value={formData.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className={fildTouched.phoneNumber ?"errorMessage" : "hidden"}>{formErrors.phoneError}</p>
        </div>
  
        <div className='formControl'>
          <label htmlFor="reservationTime" aria-label="Time of the reservation">Reservation time</label>
          <select id="reservationTime" name="reservationTime" value={formData.reservationTime} onChange={handleChange} onBlur={handleBlur} required>
            {hourOptions}
          </select>
          <p className="errorMessage"></p>
        </div>
  
        <div className='formControl'>
          <label htmlFor="reservationDate" aria-label="Date of the reservation">Reservation date</label>
          <input
            className={formErrors.dateError.length>0 ? 'errorBox' : ''}
            placeholder={new Date().toISOString().split('T')[0]}
            type="date"
            id="reservationDate"
            name="reservationDate"
            value={formData.reservationDate}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          <p className="errorMessage">{formErrors.dateError}</p>
        </div>
  
        <div className='formControl'>
          <label htmlFor="guestsCount" aria-label="How many seats at the table">Number of guests</label>
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guestsCount"
            name="guestsCount"
            value={formData.guestsCount}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="errorMessage"></p>
        </div>

        <div className= 'buttonHolder'>
          <button className={formCanBeSubmitted?'':'disabledButton'} disabled= {!formCanBeSubmitted} type="submit" aria-label="Table reservation submit button - On click will submit the form"> 
            {"Reserve a table"}
          </button>
          <p className= "paragraphText">The form will be submitted after you click this button. Please double-check if everything is correct as there will be no way to reverse it. </p>
        </div>
      </form>
      </section>
    );
};

export default BookingForm;