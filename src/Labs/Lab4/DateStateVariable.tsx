import React, { useState } from "react"; //import useState


export default function DateStateVariable() {

  const [startDate, setStartDate] = useState(new Date()); //date useState

  const dateObjectToHtmlDateString = (date: Date) => {
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? 0 : ""}${date.getMonth() + 1
      }-${date.getDate() + 1 < 10 ? 0 : ""}${date.getDate() + 1}`;
  }; //function to return the date in yyyy-mm-dd format for HTML picker

  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variables</h2>
      <h3>{JSON.stringify(startDate)}</h3>
      {/* display raw date object */}
      <h3>{dateObjectToHtmlDateString(startDate)}</h3>
      {/* display in YYYY-MM-DD format for input of type date */}
      <input
        className="form-control"
        type="date"
        defaultValue={dateObjectToHtmlDateString(startDate)}
        onChange={(e) => setStartDate(new Date(e.target.value))}
      //set HTML input type date
      // update when you change the date with
      // the date picker

      />
      <hr /></div>);
}