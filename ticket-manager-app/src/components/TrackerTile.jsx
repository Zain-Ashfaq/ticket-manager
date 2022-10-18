const TrackerTiles = (props) => {
  // id
  // name
  //role
  const { namesArray } = props;

  const cardList = namesArray.map((names) => (
    <>
      <p>{names.name}</p>
      <p>{names.role}</p>
      <p>{names.id}</p>
    </>
  ));

  return <div>{cardList}</div>;
};

export default TrackerTiles;
