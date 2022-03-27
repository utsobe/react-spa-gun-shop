import React from "react";
import "./Card.css";
import { BsFillCartFill } from 'react-icons/bs';

const Card = ({ gunData }) => {
  const { name, img, bullet, capacity, action, price } = gunData;
  return (
    <div className='card'>
      <div className="image-container">
        <img src={img} alt="" srcset="" />
      </div>
      <h1>{name}</h1>
      <p>Bullet Type: {bullet}</p>
      <p>Capacity: {capacity}</p>
      <p>Action: {action}</p>
      <div className="add-to-cart">
        <button>
          <BsFillCartFill className="icon"></BsFillCartFill>
        </button>
        <h1>$ {price}</h1>
      </div>
    </div>
  );
};

export default Card;
