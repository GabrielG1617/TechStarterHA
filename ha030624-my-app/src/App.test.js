// Importăm bibliotecile necesare
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

// Testăm componenta principală
test('adds a new entry to the list', () => {
  // Renderizăm componenta App
  render(<App />);

  // Găsim câmpurile de introducere și butonul
  const inputField = screen.getByPlaceholderText('Enter item');
  const submitButton = screen.getByRole('button', { name: /submit/i });

  // Introducem date în câmpul de introducere
  fireEvent.change(inputField, { target: { value: 'Test Entry' } });

  // Facem clic pe butonul de trimitere
  fireEvent.click(submitButton);

  // Verificăm dacă noua intrare apare în listă
  const newEntry = screen.getByText('Test Entry');
  expect(newEntry).toBeInTheDocument();
});
