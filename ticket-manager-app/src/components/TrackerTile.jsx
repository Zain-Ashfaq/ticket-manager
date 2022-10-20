import { useState } from "react";
import "./TrackerTile.scss";

import PlusButton from "../images/plus-icon-black-2.png";
import MinusButton from "../images/minus.png";

const TrackerTiles = ({ teamsArray }) => {
  // id
  // name
  // role

  const [counter, setCounter] = useState(0);
  // const [testString, setTestString] = useState("test");

  const addCounter = () => {
    setCounter(counter + 1);
    console.log("this is id", teamsArray.id, counter);
    // setTestString("changed");
  };
  const subtractCounter = () => {
    counter <= 0 ? setCounter(counter - 0) : setCounter(counter - 1);
  };

  return (
    <>
      <div className="individual-card">
        <p>ID: {teamsArray.id}</p>
        <p>Name: {teamsArray.name}</p>
        <p>Role: {teamsArray.role}</p>
        <div className="counter-container">
          <p>{counter}</p>
          {/* <p>{testString}</p> */}
          <div className="counter-container__div">
            <img
              className="counter-container__button"
              src={PlusButton}
              alt="plus button"
              onClick={addCounter}
            ></img>
            <img
              className="counter-container__button"
              src={MinusButton}
              alt="minus button"
              onClick={subtractCounter}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackerTiles;
