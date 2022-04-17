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

  const handleSelect = (value) => {
    setGroups(value);
  };
  const resolveValue = () => {
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
          <div className={`${style.feedback} ${style["bottom-margin"]}`}>
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
          <div>
            <h3 className={style["bottom-margin"]}>Here's how you rated</h3>
            <div>
              {groups.map((group) => {
                return (
                  <div key={group.name} className={style["bottom-margin"]}>
                    <h3 className={`${style["primary-text"]}`}>{group.name}</h3>
                    {group.criteria.map((criterion) => {
                      return (
                        <div className={style["single-rating-result"]}>
                          <h4>{criterion.name}</h4>
                          <div className={style.filler}></div>
                          <h4 className={`${style["primary-text"]}`}>
                            {criterion.rating || "n/a"}
                          </h4>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
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
