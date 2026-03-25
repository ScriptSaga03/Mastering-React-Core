export const MoodBoardItem = ({ color, image, description }) => {
  return (
    <div className="mood-board-item" style={{ backgroundColor: color }}>
      <img className="mood-board-image" src={image} alt={description} />
      <h3 className="mood-board-text">{description}</h3>
    </div>
  );
};

export const MoodBoard = () => {
  const items = [
    {
      id: 1,
      image: "https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
      description: "A beautiful forest pathway",
      color: "forestgreen"
    },
    {
      id: 2,
      image: "https://cdn.freecodecamp.org/curriculum/labs/pigeon.jpg",
      description: "City pigeons in flight",
      color: "skyblue"
    },
    {
      id: 3,
      image: "https://cdn.freecodecamp.org/curriculum/labs/ship.jpg",
      description: "Large ship at the harbor",
      color: "navy"
    }
  ];

  return (
    <div>
      <h1 className="mood-board-heading">Destination Mood Board</h1>
      
      <div className="mood-board">
        {items.map((item) => (
          <MoodBoardItem 
            key={item.id} 
            {...item}
          />
        ))}
      </div>
    </div>
  );
};
