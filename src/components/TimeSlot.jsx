import { slots } from "../data";
import RadioButton from "./RadioButton";
import "../styles/TimeSlot.css";

import { useContext } from "react";

import BookingContect from "../context/creatcontext";
function TimeSlot() {
  const context = useContext(BookingContect);
  const { time, changeTime } = context;

  const handleChangeTimeOnSubmit = (value) => {
    changeTime(value);
    // console.log(value);
    //setting slot in localstorage
    window.localStorage.setItem("slot", value);
  };
  return (
    <>
      <div className="Slot_container">
        <h1 className="TS_heading">Select a Time </h1>
        <div className="TS_main_container">
          {slots.map((el, index) => {
            return (
              <RadioButton
                text={el}
                changeSelection={handleChangeTimeOnSubmit}
                data={time}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TimeSlot;
