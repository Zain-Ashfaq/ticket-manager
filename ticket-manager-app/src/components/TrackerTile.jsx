import "./TrackerTile.scss";
import { useState } from "react";

const TrackerTiles = (props) => {
  // id
  // name
  // role
  const { teamsArray } = props;
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    console.log("yes");
    setCounter(counter + 1);
  };
  const subtractCounter = () => {
    console.log("yes");

    counter <= 0 ? setCounter(counter - 0) : setCounter(counter - 1);
  };

  const employee = teamsArray.map((key) => (
    <div className="individual-card">
      <p>{key.id}</p>
      <p>{key.name}</p>
      <p>{key.role}</p>
      <p>{counter}</p>
      <button onClick={addCounter}>Add</button>
      <button onClick={subtractCounter}>Subtract</button>
    </div>
  ));

  return <div className="test">{employee}</div>;
};

export default TrackerTiles;
