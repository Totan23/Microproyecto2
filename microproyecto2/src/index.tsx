import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');

const root = createRoot(container); // Ahora TypeScript sabe que container no es null
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

