import React from 'react';
import zarefesImg from '../images/zaferes.png';
import bikeImg from '../images/bike.png';
import weddingImg from '../images/wedding.png';
import redStar from '../images/star.png';

export default function Cards() {
  return (
    <div className="cards">
      <div className="zaferes">
        <img src={zarefesImg} alt="" className="img" />
        <img src={redStar} alt="" className="star" />
        <button className="boxzaferes">SOLD OUT</button>
        <span>5.0</span>
        <span className="grey">(6) • </span>
        <span className="grey">USA</span>
        <p>Life Lessons with Kate Zaferes</p>
        <p>
          <span className="bold">From $136</span> / person
        </p>
      </div>
      <div className="wedding">
        <img src={weddingImg} alt="" className="img" />
        <img src={redStar} alt="" className="star" />
        <button className="boxwedding">ONLINE</button>
        <span>5.0</span>
        <span className="grey">(30) • </span>
        <span className="grey">USA</span>
        <p>Learn wedding photography</p>
        <p>
          <span className="bold">From $125</span> / person
        </p>
      </div>
      <div className="bike">
        <img src={bikeImg} alt="" className="img" />
        <img src={redStar} alt="" className="star" />
        <span>4.8</span>
        <span className="grey">(2) • </span>
        <span className="grey">USA</span>
        <p>Group Mountain Biking</p>
        <p>
          <span className="bold">From $50</span> / person
        </p>
      </div>
    </div>
  );
}
