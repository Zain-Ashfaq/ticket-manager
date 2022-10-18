import teams from "./data/team";
import TrackerTiles from "./components/TrackerTile";

const nameOnly = teams.name;
console.log("this is name only", nameOnly);

const App = () => {
  // console.log(teams[0].name);
  let tempArr = [];

  for (let arr in teams) {
    console.log(teams[arr].name);
    tempArr.push(teams[arr].name);
  }

  return (
    <div>
      <TrackerTiles namesArray={teams} />;
    </div>
  );

  // <>
  //

  // </>
};

export default App;
