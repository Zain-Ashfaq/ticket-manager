const TrackerTiles = (props) => {
  const { namesArray } = props;
  console.log(namesArray, 1);

  const cardList = namesArray.map((names) => <p>{names.name}</p>);

  return <div>{cardList}</div>;
};

export default TrackerTiles;
