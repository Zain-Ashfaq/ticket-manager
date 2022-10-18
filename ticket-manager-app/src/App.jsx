import "";
import teams from "./data/team";
import TrackerTiles from "./components/TrackerTile";

const nameOnly = teams.name;
console.log("this is name only", nameOnly);

const App = () => {
  // console.log(teams[0].name);

  return (
    <main>
      <h1 className="main__header">Ticket Tracker</h1>
      <div>
        <TrackerTiles namesArray={teams} />;
      </div>
    </main>
  );
};

export default App;
