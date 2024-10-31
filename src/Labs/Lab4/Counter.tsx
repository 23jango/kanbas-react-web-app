import React, { useState } from "react";
export default function Counter() {
  //let count = 7; //declare and initialize variable
  const [count, setCount] = useState(7); //new method - so react can inform the virtual DOM

  console.log(count); //print changes to console
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      <button
        className="btn btn-primary"
        // onClick={() => { count++; console.log(count); }} //this failed to update the virtual DOM
        onClick={() => setCount(count + 1)} //updates correctly
        id="wd-counter-up-click"> 
        
        Up
      </button>
      <button
        className="btn btn-danger"
        onClick={() => setCount(count - 1)}
        id="wd-counter-down-click">
        Down
      </button>
<hr/></div>);}