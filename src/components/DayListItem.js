import React from "react";
import classnames from "classnames/bind";
import "./DayListItem.scss";

export default function DayListItem(props) {
  const { name, spots, setDay, selected } = props;

  // create a string formatter that will take in the spots
  const formatSpots = spots => {
      let res;
    if (spots === 0){
       res = "no spots remaining";
    }
    if(spots === 1){
        res = "1 spot remaining";
    }
    if(spots === 2){
        res = "2 spots remaining";
    }
    return res;
  };

  const dayClass = classnames("li", {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  });

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{props.spots}</h3>I
      <h3 className="text-light">{formatSpots(props.spots)}</h3>
    </li>
  );
}
