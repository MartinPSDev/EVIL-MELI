import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Test the Netlify function después de renderizar la app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mover la prueba de la función después del render
setTimeout(() => {
  fetch('/.netlify/functions/log', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message: 'Test from main.tsx',
      timestamp: new Date().toISOString()
    })
  })
  .then(response => response.json())
  .then(data => console.log('Function response:', data))
  .catch(error => console.error('Error:', error));
}, 1000);
