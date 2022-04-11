import React from 'react';
import redStar from '../images/star.png';

export default function Cards(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = 'SOLD OUT';
  } else if (props.location === 'Online') {
    badgeText = 'ONLINE';
  }
  return (
    <div className="cards">
      {badgeText && <div className="badge">{badgeText}</div>}
      <img src={props.img} alt="" className="img" />
      <div className="stats">
        <img src={redStar} alt="" className="star" />
        <span> {props.rating} </span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="title">{props.title}</p>
      <p className="price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
