import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card">
      <Link to={`/product/${props.id}`}>
        <img className="image" src={props.images} alt="" />
      </Link>
      <p>{props.title}</p>
      <div className="card-prices">
        <div className="price"> $ {props.price}</div>
      </div>
    </div>
  );
};

export default Card;
