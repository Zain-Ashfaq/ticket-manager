import "./TrackerTile.scss";
import { useState } from "react";

const TrackerTiles = ({ teamsArray }) => {
  // id
  // name
  // role

  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    console.log("yes");
    setCounter(counter + 1);
  };
  const subtractCounter = () => {
    console.log("yes");

    counter <= 0 ? setCounter(counter - 0) : setCounter(counter - 1);
  };

  return (
    <>
      <div className="individual-card">
        <p>ID: {teamsArray.id}</p>
        <p>Name: {teamsArray.name}</p>
        <p>Role: {teamsArray.role}</p>
        <div className="test">
          <p>{counter}</p>
          <button onClick={addCounter}>Add</button>
          <button onClick={subtractCounter}>Subtract</button>
        </div>
      </div>
    </>
  );
};

export default TrackerTiles;
