import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HashRouter>
   <App />
  </HashRouter>
   

);

