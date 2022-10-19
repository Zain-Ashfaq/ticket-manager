import "./App-testing.scss";
import teams from "./data/team";
import TrackerTiles from "./components/TrackerTile";

const nameOnly = teams.name;
console.log("this is name only", nameOnly);

const App = () => {
  const employeeJSX = teams.map((employee) => (
    <TrackerTiles teamsArray={employee} />
  ));

  return (
    <main>
      <h1 className="main__header">Ticket Tracker</h1>
      <div className="main__tiles-container">{employeeJSX}</div>
    </main>
  );
};

export default App;
