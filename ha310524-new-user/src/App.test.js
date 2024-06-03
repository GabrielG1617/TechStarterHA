import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('adds a new user and displays it in the list', () => {
  render(<App />);

  // Găsește câmpurile de introducere și butonul
  const nameInput = screen.getByPlaceholderText('Enter name');
  const emailInput = screen.getByPlaceholderText('Enter email');
  const submitButton = screen.getByText('Submit');

  // Simulează introducerea datelor în câmpuri
  userEvent.type(nameInput, 'John Doe');
  userEvent.type(emailInput, 'john@example.com');

  // Simulează clic pe butonul de trimitere
  userEvent.click(submitButton);

  // Verifică dacă datele noi sunt afișate în tabel
  const nameCell = screen.getByText('John Doe');
  const emailCell = screen.getByText('john@example.com');

  expect(nameCell).toBeInTheDocument();
  expect(emailCell).toBeInTheDocument();
});


