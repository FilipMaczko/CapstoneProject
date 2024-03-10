import React from 'react';
import BookingPage from './BookingPage';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';


test('initial values are loaded corectly', () => {
    render(<BookingPage/>);
    const selectElement = screen.getByLabelText('Reservation time');
    const options = selectElement.querySelectorAll('option');
    expect(options).toHaveLength(4);
    expect(options[0].value).toBe("17.00");
    expect(options[1].value).toBe("18.00");
    expect(options[2].value).toBe("19.00");
    expect(options[3].value).toBe("20.00");
  });

test('values are updated after date was changed', () => {
    render(<BookingPage/>);
    const dateElement = screen.getByLabelText('Reservation date');
    fireEvent.change(dateElement, {target: {value: "2034-03-11"}});
    const selectElement = screen.getByLabelText('Reservation time');
    const options = selectElement.querySelectorAll('option');
    expect(options).toHaveLength(6);
    expect(options[4].value).toBe("22.00");
    expect(options[5].value).toBe("23.00");
  });