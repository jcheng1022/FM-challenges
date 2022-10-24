import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";

export default function FrontCard() {
  const { cardNumber, cardName, expDate } = useContext(CardContext);
  return (
    <div className="cardFront">
      <div className="cardIcons">
        <div className="filledCircle"></div>
        <div className="emptyCircle"></div>
      </div>

      <div className="frontCardDetails">
        <div>
          <div className="cardNumber">
            <p className="numberDetail"> {cardNumber}</p>
          </div>
          <div className="cardInfo">
            <div className="ownerName"> {cardName}</div>
            <div className="expDate"> {expDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
