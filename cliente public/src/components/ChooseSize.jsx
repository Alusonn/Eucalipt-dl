export const ChooseSize = ({ handleChange }) => {
  const talles = ["S", "M", "L", "XL"];

  return (
    <>
      <div className="sizeTitle">Elegir Talle:</div>

      {talles.map((talle) => (
        <div className="form-check">
          <input
          key={Math.random()}
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
    </>
  );
};
