const CompContador = ({ count, setCount }) => {
  const incrementar = () => {
    setCount(count + 1);
  };

  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("El Contador esta en Cero");
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="container__Card__Buttons">
        <div>
          <h3>{`Contador : ${count}`}</h3>
        </div>
        <div className="container__Buttons__accion">
          <button onClick={incrementar} className="myButton">
            Incrementar
          </button>
          <button onClick={decrementar} className="myButton">
            Decrementar
          </button>
          <button onClick={reset} className="myButton">
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default CompContador;
