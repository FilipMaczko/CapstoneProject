import React from 'react';
import BookingForm from './BookingForm';
import { render, screen } from '@testing-library/react';


test('all labels are rendered', () => {
    render(<BookingForm aviableHours={{ hours: ['17:00', '18:00', '19:00'] }} />);
    expect(screen.getByText('Full Name')).toBeInTheDocument();
    expect(screen.getByText('Phone number')).toBeInTheDocument();
    expect(screen.getByText('Reservation time')).toBeInTheDocument();
    expect(screen.getByText('Reservation date')).toBeInTheDocument();
    expect(screen.getByText('Number of guests')).toBeInTheDocument();
  });