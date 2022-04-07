import React from 'react';
import zarefesImg from '../images/zaferes.png';
import bikeImg from '../images/bike.png';
import weddingImg from '../images/wedding.png';

export default function Cards() {
  return (
    <div className="card">
      <img src={zarefesImg} alt="" className="zaferes" />
      <img src={bikeImg} alt="" className="bike" />
      <img src={weddingImg} alt="" className="wedding" />
    </div>
  );
}
