import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Header/Header';
import PageFirst from './Page/Page-first/Page-first.jsx';
import PageSecond from './Page/Page-second/Page-second.jsx';
import PageThird from './Page/Page-third/Page-third.jsx';
import Reviews from './Page/Reviews/Reviews.jsx';
import TermsOfPayment from './Page/TermsOfPayment/TermsOfPayment.jsx';
import Footer from './Page/Footer/Footer.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <PageFirst />
    <PageSecond />
    <PageThird />
    <Reviews />
    <TermsOfPayment />
    <Footer />
  </React.StrictMode>
);
reportWebVitals();
