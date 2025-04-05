import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router';
import { AuthProvider } from './components/auth/AuthProvider';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// Auth Provider thami Parent 
root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);

reportWebVitals();
