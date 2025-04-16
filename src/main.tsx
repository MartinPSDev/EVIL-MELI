import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Test the Netlify function
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
