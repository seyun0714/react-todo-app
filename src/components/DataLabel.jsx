import React from "react";

export default function DataLabel({ date }) {
  const convertDateToString = (dateObject) => {
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();

    return `${year}.${month}.${day}`;
  };
  const dateLabel = convertDateToString(date);
  return <span>{dateLabel}</span>;
}
