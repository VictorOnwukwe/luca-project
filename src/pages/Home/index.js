import GroupRating from "../../components/GroupRating";
import style from "./index.module.scss";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { evaluateRating, clearRating } from "../../store/actions/rating";

const generateGroups = () => {
  return ["Planning", "Delivering", "Lorem"].map((group) => ({
    name: group,
    criteria: ["communication", "speed", "efficiency"].map((criteria) => ({
      name: criteria,
      ...{
        rating: 0,
        description:
          "Sets clear and realistic goals, working with others to ensure understanding and agreement *",
      },
    })),
  }));
};
const HomePage = (props) => {
  const [groups, setGroups] = useState(generateGroups());

  const handleSelect = (value, groupIndex, criterionIndex) => {
    const arr = groups.slice();
    const group = arr[groupIndex];
    const criteriaArr = group.criteria.slice();
    const criterion = criteriaArr[criterionIndex];
    criterion.rating = value;
    setGroups(arr);
  };
  const resolveValue = () => {
    console.log("here");
    props.evaluateRating(groups);
  };
  return (
    <div className={style.home}>
      {!props.result ? (
        <div>
          <h4 className={style["bottom-margin"]}>COMPANY NAME</h4>
          <h1>Feedback for Aglieglie Brazof</h1>
          <p>
            Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem
            Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum
            dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem
            Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem
            Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum
            dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem
            Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem
            Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum
            dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem Lorem Ipsum dolorem.
          </p>
          <p className={style["bottom-margin"]}>
            Thank you for your contribution to this very important process.
          </p>
          <GroupRating
            groups={groups}
            onSelect={handleSelect}
            className={style["bottom-margin"]}
          />

          <div className={style.feedback}>
            <button onClick={resolveValue}>Send Feedback</button>
          </div>
        </div>
      ) : (
        <div>
          <div className={style.feedback}>
            <button
              onClick={() => {
                props.clearRating();
              }}
            >
              Back
            </button>
          </div>
          <h1>
            The user has an avaerage rating of{" "}
            <span className={style["primary-text"]}>{props.result}</span>
          </h1>
        </div>
      )}
    </div>
  );
};

export default connect(
  (state) => ({
    app: state.app,
    result: state.rating.result,
  }),
  { evaluateRating, clearRating }
)(HomePage);
