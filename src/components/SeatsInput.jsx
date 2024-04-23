import React, { useEffect, useRef, useState } from "react";
import "../styles/SeatsInput.css";

function SeatsInput({
  changeNoOfSeats,
  noOfSeat,
  changeSeats,
  seat,
  text,
  index,
}) {
  const [inputValue, setInputValue] = useState("");
  const textRef = useRef(text);

  useEffect(() => {
    // Update the input value whenever noOfSeat[text] changes
    setInputValue(noOfSeat?.[textRef.current] || "");
  }, [noOfSeat, textRef]);

  // this function will  handle the change in seat input and update the state and local storage
  const change_seats = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    // this will update the noOfSeat object with the new seat value
    changeNoOfSeats({ ...noOfSeat, [e.target.name]: Number(newValue) });
    // store the updated noOfSeat object in local storage
    window.localStorage.setItem(
      "seats",
      JSON.stringify({ ...noOfSeat, [e.target.name]: Number(newValue) })
    );
  };

  // help in the selection of seats
  const handleChecked = (text) => {
    // console.log(changeSeats,text,"...........")
    changeSeats(text);
    changeSeats("");
  };
  return (
    <div
      name={text}
      // set the class name based on whether the seat is selected or not
      className={`form-check-label seats ${
        seat === text ? "active" : "inactive"
      }`}
      id={`${index}text`}
      onClick={() => {
        handleChecked(text, index);
      }}
    >
      <span className={"text"}>{text}</span>

      <input
        type="number"
        className="seats-input"
        placeholder="0"
        name={text}
        min="0"
        id={`${index}input`}
        max="30"
        onChange={change_seats}
        value={inputValue}
      />
    </div>
  );
}

export default SeatsInput;
