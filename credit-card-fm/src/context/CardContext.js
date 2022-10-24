import { useState, createContext } from "react";

export const CardContext = createContext();

function CardContextProvider(props) {
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardName, setCardName] = useState("Jane Appleseed");
  const [expDate, setExpDate] = useState("00/00");
  const [securityCode, setSecurityCode] = useState("000");
  const value = {
    cardNumber,
    setCardNumber,
    cardName,
    setCardName,
    expDate,
    setExpDate,
    securityCode,
    setSecurityCode,
  };
  return (
    <CardContext.Provider value={value}>{props.children}</CardContext.Provider>
  );
}

export default CardContextProvider;
