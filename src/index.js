import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/header.css';
import './styles/categories.css';
import './styles/best-selling.css';
import './styles/hottest.css';
import './styles/deals.css';
import './styles/testimonials.css'
import './styles/footer.css';
import './styles/common.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
