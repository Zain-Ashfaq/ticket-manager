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
        <p>{teamsArray.id}</p>
        <p>{teamsArray.name}</p>
        <p>{teamsArray.role}</p>
        <p>{counter}</p>
        <div className="test"></div>
        <button onClick={addCounter}>Add</button>
        <button onClick={subtractCounter}>Subtract</button>
      </div>
    </>
  );
};

export default TrackerTiles;
