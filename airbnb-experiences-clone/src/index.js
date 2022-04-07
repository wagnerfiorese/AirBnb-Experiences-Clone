import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style.css';
import App from './App';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';

ReactDOM.render(
  <div>
    <App />
    <Navbar />
    <Hero />
    <Cards />
  </div>,
  document.getElementById('root')
);
