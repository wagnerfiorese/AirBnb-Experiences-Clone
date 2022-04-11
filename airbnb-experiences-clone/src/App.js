import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import data from './data';
//import zarefesImg from './images/zaferes.png';
//import bikeImg from './images/bike.png';
//import weddingImg from './images/wedding.png';

export default function App() {
  const cards = data.map((item) => {
    return <Cards key={item.id} {...item} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
