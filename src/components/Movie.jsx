import React, { useContext } from "react";
import { moviesList } from "../data";
import RadioButton from "./RadioButton";
import "../styles/Movie.css";
import BookingContect from "../context/creatcontext";

function Movie() {
  const context = useContext(BookingContect);
  const { movie, changeMovie } = context;
  //  console.log( context.movie,"from movie");

  function handleChangeMovie(value) {
    // console.log(value)
    changeMovie(value);

    //setting movie in localstorage
    window.localStorage.setItem("movie", value);
  }
  return (
    <div className="div">
      <h1 className="SM_heading">Select a Movie</h1>
      <div className="SM_main_container">
        {moviesList.map((el, index) => {
          return (
            <RadioButton
              text={el}
              changeSelection={handleChangeMovie}
              data={movie}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Movie;
