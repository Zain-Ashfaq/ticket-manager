import "./TrackerTile.scss";

const TrackerTiles = (props) => {
  // id
  // name
  //role
  const { namesArray } = props;

  const cardList = namesArray.map((names) => (
    <div className="individual-card">
      <p>{names.name}</p>
      <p>{names.role}</p>
      <p>{names.id}</p>
    </div>
  ));

  return <div className="test">{cardList}</div>;
};

export default TrackerTiles;
