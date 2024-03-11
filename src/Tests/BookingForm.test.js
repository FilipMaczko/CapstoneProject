import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import Jest-Dom matchers
import BookingForm from '../Componenets/BookingForm';
import '@testing-library/jest-dom';

test('all labels are rendered', () => {
  render(<BookingForm aviableHours= {{hours: ["17:00","18:00","19:00","20:00"]}} aviableHoursDispatch= {(e,a)=>{}} submitForm = {(d)=>true}/>);
  expect(screen.getByText('Full Name')).toBeInTheDocument();
  expect(screen.getByText('Phone number')).toBeInTheDocument();
  expect(screen.getByText('Reservation time')).toBeInTheDocument();
  expect(screen.getByText('Reservation date')).toBeInTheDocument();
  expect(screen.getByText('Number of guests')).toBeInTheDocument();
});

test('name filed have minLength value', () => {
  render(<BookingForm aviableHours= {{hours: ["17:00","18:00","19:00","20:00"]}} aviableHoursDispatch= {(e,a)=>{}} submitForm = {(d)=>true}/>);
  const numberElement = screen.getByLabelText('Full Name');
  expect(numberElement).toHaveAttribute('minLength', '3');
});

test('phone filed have minLength value', () => {
  render(<BookingForm aviableHours= {{hours: ["17:00","18:00","19:00","20:00"]}} aviableHoursDispatch= {(e,a)=>{}} submitForm = {(d)=>true}/>);
  const numberElement = screen.getByLabelText('Phone number');
  expect(numberElement).toHaveAttribute('minLength', '9');
});

test('time field is required', () => {
  render(<BookingForm aviableHours= {{hours: ["17:00","18:00","19:00","20:00"]}} aviableHoursDispatch= {(e,a)=>{}} submitForm = {(d)=>true}/>);
  const numberElement = screen.getByLabelText('Reservation time');
  expect(numberElement).toHaveAttribute('required');
});

test('date field is required', () => {
  render(<BookingForm aviableHours= {{hours: ["17:00","18:00","19:00","20:00"]}} aviableHoursDispatch= {(e,a)=>{}} submitForm = {(d)=>true}/>);
  const numberElement = screen.getByLabelText('Reservation date');
  expect(numberElement).toHaveAttribute('required');
});

test('number field have maax and min value', () => {
  render(<BookingForm aviableHours= {{hours: ["17:00","18:00","19:00","20:00"]}} aviableHoursDispatch= {(e,a)=>{}} submitForm = {(d)=>true}/>);
  const numberElement = screen.getByLabelText('Number of guests');
  expect(numberElement).toHaveAttribute('min', '1');
  expect(numberElement).toHaveAttribute('max', '10');
});

test('error when date from the past is choosen', () => {
  render(<BookingForm aviableHours= {{hours: ["17:00","18:00","19:00","20:00"]}} aviableHoursDispatch= {(e,a)=>{}} submitForm = {(d)=>true}/>);
  const dateElement = screen.getByLabelText('Reservation date');
  fireEvent.change(dateElement, {target: {value: "1998-03-14"}});
  expect(screen.getByText('You can not select 1998-03-14. This date is in the past.')).toBeInTheDocument();
});

test('no error when date is not from the past', () => {
  render(<BookingForm aviableHours= {{hours: ["17:00","18:00","19:00","20:00"]}} aviableHoursDispatch= {(e,a)=>{}} submitForm = {(d)=>true}/>);
  const dateElement = screen.getByLabelText('Reservation date');
  fireEvent.change(dateElement, {target: {value: "3333-03-14"}});
  expect(screen.queryByText('You can not select 3333-03-14. This date is in the past.')).toBeNull();
});

test('error when full name does not contain space', () => {
  render(<BookingForm aviableHours= {{hours: ["17:00","18:00","19:00","20:00"]}} aviableHoursDispatch= {(e,a)=>{}} submitForm = {(d)=>true}/>);
  const nameElement = screen.getByLabelText('Full Name');
  fireEvent.change(nameElement, {target: {value: "John"}});
  expect(screen.getByText('Please enter your full name (first name and last name). First name must be separated from last name by a space.')).toBeInTheDocument();
});

test('no error when full name does contain a space', () => {
  render(<BookingForm aviableHours= {{hours: ["17:00","18:00","19:00","20:00"]}} aviableHoursDispatch= {(e,a)=>{}} submitForm = {(d)=>true}/>);
  const nameElement = screen.getByLabelText('Full Name');
  fireEvent.change(nameElement, {target: {value: "John Black"}});
  expect(screen.queryByText('Please enter your full name (first name and last name). First name must be separated from last name by a space.')).toBeNull();
});

test('error when full name is too short', () => {
  render(<BookingForm aviableHours= {{hours: ["17:00","18:00","19:00","20:00"]}} aviableHoursDispatch= {(e,a)=>{}} submitForm = {(d)=>true}/>);
  const nameElement = screen.getByLabelText('Full Name');
  fireEvent.change(nameElement, {target: {value: "J "}});
  expect(screen.getByText('Entry is too short. Please enter you first name and last name separated by a space.')).toBeInTheDocument();
});

test('no error when full name is long enought', () => {
  render(<BookingForm aviableHours= {{hours: ["17:00","18:00","19:00","20:00"]}} aviableHoursDispatch= {(e,a)=>{}} submitForm = {(d)=>true}/>);
  const nameElement = screen.getByLabelText('Full Name');
  fireEvent.change(nameElement, {target: {value: "John Black"}});
  expect(screen.queryByText('Entry is too short. Please enter you first name and last name separated by a space.')).toBeNull();
});

test('error when phone numebr is too short', () => {
  render(<BookingForm aviableHours= {{hours: ["17:00","18:00","19:00","20:00"]}} aviableHoursDispatch= {(e,a)=>{}} submitForm = {(d)=>true}/>);
  const phoneElement = screen.getByLabelText('Phone number');
  fireEvent.change(phoneElement, {target: {value: "9876543"}});
  expect(screen.getByText('Phone number too short. Phone number must contain at least 9 digits.')).toBeInTheDocument();
});

test('no error when phone number is long enought', () => {
  render(<BookingForm aviableHours= {{hours: ["17:00","18:00","19:00","20:00"]}} aviableHoursDispatch= {(e,a)=>{}} submitForm = {(d)=>true}/>);
  const phoneElement = screen.getByLabelText('Phone number');
  fireEvent.change(phoneElement, {target: {value: "987654321"}});
  expect(screen.queryByText('Phone number too short. Phone number must contain at least 9 digits.')).toBeNull();
});

test('error when user entered little lemons number', () => {
  render(<BookingForm aviableHours= {{hours: ["17:00","18:00","19:00","20:00"]}} aviableHoursDispatch= {(e,a)=>{}} submitForm = {(d)=>true}/>);
  const phoneElement = screen.getByLabelText('Phone number');
  fireEvent.change(phoneElement, {target: {value: "123456789"}});
  expect(screen.getByText('This is our phone number. Please enter yours.')).toBeInTheDocument();
});

test('no error when user entered thier number', () => {
  render(<BookingForm aviableHours= {{hours: ["17:00","18:00","19:00","20:00"]}} aviableHoursDispatch= {(e,a)=>{}} submitForm = {(d)=>true}/>);
  const phoneElement = screen.getByLabelText('Phone number');
  fireEvent.change(phoneElement, {target: {value: "987654321"}});
  expect(screen.queryByText('This is our phone number. Please enter yours.')).toBeNull();
});

test('submit button is disabled if fields are not field', () => {
  render(<BookingForm aviableHours= {{hours: ["17:00","18:00","19:00","20:00"]}} aviableHoursDispatch= {(e,a)=>{}} submitForm = {(d)=>true}/>);
  const submitButton = screen.getByText('Reserve a table');
  expect(submitButton).toBeDisabled();
});

test('submit button is disabled if fields are field with invalid data', () => {
  render(<BookingForm aviableHours= {{hours: ["17:00","18:00","19:00","20:00"]}} aviableHoursDispatch= {(e,a)=>{}} submitForm = {(d)=>true}/>);
  const numberElement = screen.getByLabelText('Phone number');
  fireEvent.change(numberElement, {target: {value: "12"}});
  const nameElement = screen.getByLabelText('Full Name');
  fireEvent.change(nameElement, {target: {value: "John Black"}});
  const submitButton = screen.getByText('Reserve a table');
  expect(submitButton).toBeDisabled();
});

test('submit button is enabled if fields are field with valid data', () => {
  render(<BookingForm aviableHours= {{hours: ["17:00","18:00","19:00","20:00"]}} aviableHoursDispatch= {(e,a)=>{}} submitForm = {(d)=>true}/>);
  const numberElement = screen.getByLabelText('Phone number');
  fireEvent.change(numberElement, {target: {value: "987654321"}});
  const nameElement = screen.getByLabelText('Full Name');
  fireEvent.change(nameElement, {target: {value: "John Black"}});
  const submitButton = screen.getByText('Reserve a table');
  expect(submitButton).toBeEnabled();
});