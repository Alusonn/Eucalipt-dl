export const ChooseSize = ({ handleChange }) => {
  const talles = ["S", "M", "L", "XL",];

  return (
    <>
      <div className="sizeTitle">Elegir Talle:</div>

      {talles.map((talle) => (
        <div className="form-check">
          <input
            onChange={handleChange}
            className="form-check-input"
            type="radio"
            value={talle}
            name={talle}
            id={`example${talle}`}
          />
          <span className="checkmark" htmlFor={`example${talle}`}>{talle}</span>
        </div>
      ))}
      <div className="form-check">
          <input
            onChange={handleChange}
            className="form-check-input"
            type="radio"
            value={null}
            name="all"
            id={`exampleAll`}
          />
          <span className="checkmark" htmlFor={`exampleAll`}>All</span>
        </div>
    </>
  );
};
