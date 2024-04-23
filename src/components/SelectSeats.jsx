import React, { useContext, useState } from "react";
import { seats } from "../data";
import "../styles/Seats.css";
import SeatsInput from "./SeatsInput";
import BookingContect from "../context/creatcontext";

const SelectSeats = () => {
  const context = useContext(BookingContect);
  const [seat, changeSeats] = useState([]);

  const { noOfSeat, changeNoOfSeats } = context;

  return (
    <>
      <div className="SS_wrapper">
        <h1 className="SS_heading">Select Seats</h1>
        <div className="SS_main_container">
          {seats.map((el, index) => {
            return (
              <SeatsInput
                seat={seat}
                key={index}
                index={index}
                changeSeats={changeSeats}
                noOfSeat={noOfSeat}
                text={el ?? ""}
                changeNoOfSeats={changeNoOfSeats}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SelectSeats;
