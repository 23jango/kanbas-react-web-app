import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
  // create a state variable that holds
  // default values for the form below.
  // eventually we'll fetch this initial
  // data from the server and populate
  // the form with the remote data so
  // we can modify it here in the UI

  //and modules;; very similar:
  const [module, setModule] = useState({
    id: 1, name: "moduleOne",
    description: "an amazing module desciption", 
    course: "Web Dev",
  });
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>

      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        // encode the title in the URL that updates the title
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input className="form-control w-75" id="wd-assignment-title"
      // form element to edit local state variable
      // used to encode in URL that updates 
      // property in remote object
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })} />
      <hr />

      {/* to update score */}
      <a id="wd-update-assignment-score"
        className="btn btn-primary float-end"
        // encode the title in the URL that updates the title
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Score
      </a>
      <input  type="number" className="form-control w-75" id="wd-assignment-score"
      // form element to edit local state variable
      // used to encode in URL that updates 
      // property in remote object
        defaultValue={assignment.score} onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })} />
      <hr />

      {/* to update completed */}
      <a id="wd-update-assignment-completed"
        className="btn btn-primary float-end"
        // encode the title in the URL that updates the title
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
        Update Completed
      </a>
      <input type="checkbox"  checked={assignment.completed} id="wd-assignment-completed"
        // form element to edit local state variable
        // used to encode in URL that updates 
        // property in remote object
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })} />
      <hr />


      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr />

      {/* get title */}
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr />

{/* now for the modules */}

      <h4>Modifying Module Properties</h4>
      <a id="wd-update-module-name"
        className="btn btn-primary float-end"
        // encode the name in the URL that updates the name
        href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Module
      </a>
      <input className="form-control w-75" id="wd-module-name"
      // form element to edit local state variable
      // used to encode in URL that updates 
      // property in remote object
        defaultValue={module.name} onChange={(e) =>
          setModule({ ...module, name: e.target.value })} />
      <hr />
      <a id="wd-update-module-description"
        className="btn btn-primary float-end"
        // encode the name in the URL that updates the name
        href={`${MODULE_API_URL}/description/${module.description}`}>
        Update Description 
      </a>
      <input className="form-control w-75" id="wd-module-description"
      // form element to edit local state variable
      // used to encode in URL that updates 
      // property in remote object
        defaultValue={module.description} onChange={(e) =>
          setModule({ ...module, description: e.target.value })} />
      <hr />

      <h4>Retrieving Module Objects</h4>
      <a id="wd-retrieve-module" className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a><hr />

      {/* get name */}
      <h4>Retrieving Module Properties</h4>
      <a id="wd-retrieve-module-name" className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Name
      </a><hr />


    </div>
  );
}
