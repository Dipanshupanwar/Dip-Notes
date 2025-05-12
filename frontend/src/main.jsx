import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // ✅ this is important
import App from './App';


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter> {/* ✅ Wrap the App in BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
