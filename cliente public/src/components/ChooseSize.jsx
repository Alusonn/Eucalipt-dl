export const ChooseSize = ({ handleChange }) => {
  const talles = ["S", "M", "L", "XL"];

  return (
    <>
      <div className="sizeTitle">Elegir Talle:</div>

      <div className="form-check">
        <input
          key={Math.random()}
          onChange={handleChange}
          className="form-check-input"
          type="checkbox"
          value='XL'
          name='XL'
          id={`example$'XL'`}
        />
        <span className="checkmark" htmlFor={`example$'XL'`}>
          'XL'
        </span>
      </div>
      <div className="form-check">
        <input
          key={Math.random()}
          onChange={handleChange}
          className="form-check-input"
          type="checkbox"
          value='L'
          name='L'
          id={`example$'L'`}
        />
        <span className="checkmark" htmlFor={`example$'L'`}>
          'L'
        </span>
      </div>
      <div className="form-check">
        <input
          key={Math.random()}
          onChange={handleChange}
          className="form-check-input"
          type="checkbox"
          value='S'
          name='S'
          id={`example$'S'`}
        />
        <span className="checkmark" htmlFor={`example$'S'`}>
          'S'
        </span>
      </div>
    </>
  );
};
