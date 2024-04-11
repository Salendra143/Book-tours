import React from "react";
import Card from "./Card";

const Cards = ({ userinfo, removeCard }) => {
  return (
    <div className="w-full flex flex-wrap">
      {userinfo.map((card) => (
        <Card {...card} key={card.id} removeCard={removeCard} />
      ))}
    </div>
  );
};

export default Cards;
