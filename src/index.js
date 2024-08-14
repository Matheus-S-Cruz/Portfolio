import React from 'react';
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Ppe from './Ppe';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

//const root = ReactDOM.createRoot(document.getElementById('root'));
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


reportWebVitals();
