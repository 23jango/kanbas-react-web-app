import React, { useState } from "react"; //import useState - to keep track of changes for DOM

export default function BooleanStateVariables() {
  const [done, setDone] = useState(true); //initialize boolean useState variable
  return (
    <div id="wd-boolean-state-variables">
      <h2>Boolean State Variables</h2>
      <p>{done ? "Done" : "Not done"}</p>
      {/* check if not done then display done or not done */}
      <label className="form-control">
        <input type="checkbox" checked={done}
          onChange={() => setDone(!done)} /> Done
      </label>
      {done && <div className="alert alert-success"> Yay! you are done</div>}
      {/* if done is checked and variable reads true, then display this green message */}
      <hr /></div>);
}