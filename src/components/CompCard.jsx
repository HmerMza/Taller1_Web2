const CompCard = ({ animales, count }) => {
  return (
    <>
      {animales.map((animal) => (
        <div
          className="card"
          key={animal.id}
          style={{
            backgroundImage: ` linear-gradient(to bottom, transparent, black), url(${animal.image})`,
          }}
        >
          <div className="card__header"></div>
          <div className="card__body">
            <h3>{animal.name}</h3>
            <h4>{`Contador: ${count}`}</h4>
            <p>{animal.descripcion}</p>
            <button className="myButton">
              <a href={animal.image}>Mas Info</a>
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CompCard;
