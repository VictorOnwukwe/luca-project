import Rater from "../Rater";
import style from "./index.module.scss";

const GroupRating = (props) => {
  const { groups, onSelect } = props;
  const handleSelect = (value, groupIndex, criterionIndex) => {
    if (onSelect) {
      const arr = groups.slice();
      const group = arr[groupIndex];
      const criteriaArr = group.criteria.slice();
      const criterion = criteriaArr[criterionIndex];
      criterion.rating = value;
      onSelect(arr);
    }
  };
  return (
    <div className={`${style["rating-group"]} ${props.className}`}>
      {groups.map((group, index) => {
        return (
          <div className={style.group} key={group.name}>
            <h2>{group.name}</h2>
            <div>
              {group.criteria.map((criterion, index2) => {
                return (
                  <div className={style.criterion} key={criterion.name}>
                    <div>{criterion.description}</div>
                    <Rater
                      value={criterion.rating}
                      onSelect={(val) => {
                        handleSelect(val, index, index2);
                      }}
                      maxValue={5}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default GroupRating;
