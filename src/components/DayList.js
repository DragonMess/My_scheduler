import React from "react";
import DayListItem from "components/DayListItem";

export default function DayList(props) {
  console.log(props);
  const { days, setDay } = props;

  const daysList = days.map(dayData => {
    return <DayListItem
      name={dayData.name}
      spots={dayData.spots}
      selected={dayData.name === props.dayData}
      setDay={props.setDay}
    />;
  });

  return (
    <ul>
     {daysList}
    </ul>
  );
}
