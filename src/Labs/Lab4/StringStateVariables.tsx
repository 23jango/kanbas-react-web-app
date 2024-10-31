import React, { useState } from "react";
export default function StringStateVariables() {
  const [firstName, setFirstName] = useState("John"); //declare a string useState variable
  return (
    <div>
      <h2>String State Variables</h2>
      <p>{firstName}</p>
      <input
        className="form-control"
        defaultValue={firstName}
        onChange={(e) => setFirstName(e.target.value)} />
        {/* on change invokes a change to the P above, using the input */}
      <hr /></div>);
}
