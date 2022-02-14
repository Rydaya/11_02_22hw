import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Header';
import MainContent from './MainContent/MainContent';
import Footer from './Footer/Footer';
import './index.css';


const Add = () => {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

ReactDOM.render(
  <Add />,
  document.getElementById('root')
);


