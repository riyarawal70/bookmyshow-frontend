import React, { useEffect, useState } from "react";
import "../styles/LastBooking.css";
import Loader from "./Loader";
import { seats } from "../data";
import { useContext } from "react";
import BookingContect from "../context/creatcontext";
function LastBooking() {
  const [lastBooking, setLastBooking] = useState("");
  const [loader, setLoader] = useState(false);
  const context = useContext(BookingContect);
  const { lastBookingDatas } = context;

  const getLastRecord = async () => {
    try {
      setLoader(true); // Sending a request for getting LastBooking
      const res = await fetch(
        `https://backend-booking-hamf.onrender.com/api/booking`,
        {
          method: "GET",
        }
      );
      const data = await res.json();
      // console.log(data.data);
      setLastBooking(data.data);

      setLoader(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLastRecord(); //every time last booking data change it will update lastBooking
  }, [lastBookingDatas]);

  // console.log(lastBooking.movie)

  return (
    <div className="last_booking_details_container_main">
      <h2 className="last_booking_details_header">Last Booking Details</h2>
      {loader ? (
        <Loader />
      ) : lastBooking ? (
        <div>
          <p className="movie">
            Movie:<span className="h2">{lastBooking?.movie}</span>
          </p>
          <p className="slot">
            Slot: <span className="h2">{lastBooking?.slot}</span>
          </p>

          <div className="seats_container">
            <p className="seats_header">Seats:</p>
            <ul className="seats">
              {seats.map((seat, index) => {
                return (
                  <li className="seat_value" key={index}>
                    {seat}:{" "}
                    {Number(lastBooking ? lastBooking?.seats[seat] : "")}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ) : (
        <div className="no">
          {" "}
          <p className="no_previous_booking_msg">No Booking Found !!</p>
        </div>
      )}
    </div>
  );
}

export default LastBooking;
