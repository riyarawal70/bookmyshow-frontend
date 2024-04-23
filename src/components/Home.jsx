import React, { useContext } from "react";
import Movie from "./Movie";
import TimeSlot from "./TimeSlot";
import LastBooking from "./LastBooking";
import SelectSeats from "./SelectSeats";
import "../styles/Home.css";

import toast, { Toaster } from "react-hot-toast";
import BookingContect from "../context/creatcontext";

function Home() {
  const context = useContext(BookingContect);
  //  console.log(context);
  const { movie, time, noOfSeat, handlePostBooking } = context;

  //check whether any seat has a negative value
  const checkNegativeSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) < 0) {
        return true;
      }
    }

    return false;
  };

  //check whether all seats have input 0
  const checkZeroSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) > 0) {
        return false;
      }
    }
    return true;
  };

  // //validating the user selection and then making post request to save the booking details
  const handleBookNow = () => {
    if (!movie) {
      toast.error("Please select  a movie!", {
        style: {
          border: "1px solid black",
          fontSize: "20px",
        },
      });
    } else if (!time) {
      toast.error("Please select a time slot!", {
        style: {
          border: "1px solid black",
          fontSize: "20px",
        },
      });
    } else if (
      checkNegativeSeatsValidity(noOfSeat) ||
      checkZeroSeatsValidity(noOfSeat)
    ) {
      toast.error(" Please Enter Valid Seats!", {
        style: {
          border: "1px solid black",
          fontSize: "20px",
        },
      });
    } else {
      //validation successfull
      handlePostBooking();
      toast.success(`Booking successfull for ${movie}`, {});
    }
  };

  return (
    <>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #000000",
            padding: "16px",
            color: "#713200",
            fontSize: "19px",
          },
        }}
      />
      <div className="container">
        <div className="selection_container">
          <div className="wrapper">
            <div>
              <Movie />
            </div>
            <div>
              <LastBooking />
            </div>
          </div>
          <div className="time_seats_container">
            <TimeSlot />
            <SelectSeats />
            <button
              onClick={() => {
                handleBookNow();
              }}
              className="BN-btn "
              data-testid="Button"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
