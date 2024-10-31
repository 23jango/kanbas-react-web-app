import React, { useState } from "react";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]); //array useState

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  //function to add to array
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
 //function to remove to array

  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button className="btn btn-primary" onClick={addElement}>Add Element</button>
      <ul>
        {/* map function to display w delete button */}
        {array.map((item, index) => (
          <li key={index}>
            {item}
            <button className="btn btn-danger" onClick={() => deleteElement(index)}
              id="wd-delete-element-click">
              Delete</button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
