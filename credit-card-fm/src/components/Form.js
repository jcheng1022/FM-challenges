import React from "react";

export default function Form() {
  return (
    <div className="formContainer">
      <div className="innerFormContainer">
        <form>
          <div className="inputRow">
            <p className="inputLabel"> CARDHOLDER NAME</p>
            <input
              className="inputField"
              type="text"
              placeholder="e.g. Jane Appleseed"
            />
          </div>
          <div className="inputRow">
            <p className="inputLabel">CARD NUMBER</p>
            <input
              className="inputField"
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
            />
          </div>
          <div className="detailRow">
            <div className="detailSection">
              <p className="inputLabel"> EXP. DATE (MM/YY)</p>
              <div className="expDetail">
                <input
                  className="expInputField"
                  type="number"
                  min="1"
                  max="12"
                  placeholder="MM"
                />
                <input
                  className="expInputField"
                  type="number"
                  min="1"
                  max="2022"
                  placeholder="YY"
                />
              </div>
            </div>
            <div className="detailSection">
              <p className="inputLabel"> CVC</p>
              <input
                className="inputField"
                type="number"
                placeholder="e.g. 123"
              />
            </div>
          </div>
          <div className="btnContainer">
            <input className="confirmBtn" type="submit" value="Confirm" />
          </div>
        </form>
      </div>
    </div>
  );
}
