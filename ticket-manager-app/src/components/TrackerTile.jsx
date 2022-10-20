import "./TrackerTile.scss";
import { useState } from "react";

const TrackerTiles = ({ teamsArray }) => {
  // id
  // name
  // role

  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1);
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
          <div className="test">
            <button className="counter-container__button" onClick={addCounter}>
              Add
            </button>
            <button
              className="counter-container__button"
              onClick={subtractCounter}
            >
              Subtract
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackerTiles;
