import { useSelector } from "react-redux";

export const ChooseSize = ({ handleChange }) => {
  const talles = ["S", "M", "L", "XL"];
  const { selectedSize } = useSelector(
    (state) => state.products
  );

  return (
    <>
      <div className="sizeTitle">Elegir Talle:</div>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic radio toggle button group"
      >
        <div>
          <input
            onChange={handleChange}
            className="btn-check"
            type="radio"
            value={null}
            name=""
            id={`exampleAll`}
          />
          <label className="btn btn-outline-secondary" htmlFor={`exampleAll`}>
            All
          </label>
        </div>
        {talles.map((talle) => (
          <div>
            <input
              onChange={handleChange}
              className="btn-check"
              type="radio"
              value={talle}
              name=""
              id={`example${talle}`}
             
            />
            <label
              className="btn btn-outline-secondary"
              htmlFor={`example${talle}`}
            >
              {talle}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};
