import style from "./index.module.scss";

const Rater = (props) => {
  const { value, onSelect, maxValue } = props;
  const handleSelect = (figure) => {
    if (onSelect) {
      onSelect(figure);
    }
  };
  const generateFigures = () => {
    const arr = [];
    for (let i = 1; i <= maxValue; i++) {
      arr.push(i);
    }
    return arr;
  };
  return (
    <div className={style.rater}>
      {generateFigures().map((figure) => {
        return (
          <button
            className={`${style.figure} ${value == figure ? style.active : ""}`}
            key={figure}
            onClick={() => handleSelect(figure)}
          >
            {figure}
          </button>
        );
      })}
      <button
        className={`${style.figure} ${value == 0 ? style.active : ""} ${
          style["no-value"]
        }`}
        onClick={() => handleSelect(0)}
      >
        n/a
      </button>
    </div>
  );
};

export default Rater;
