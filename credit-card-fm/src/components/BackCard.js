import React, { useContext } from "react";
import { CardContext } from "../context/CardContext";
export default function BackCard() {
  const { securityCode } = useContext(CardContext);
  return (
    <div className="cardBack">
      <div className="securityCode"> {securityCode} </div>
    </div>
  );
}
