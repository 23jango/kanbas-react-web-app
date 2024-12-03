import { useEffect, useState } from "react";
import { FaPencil } from "react-icons/fa6";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import * as client from "../../Account/client";

//this file makes the pop up detail widget when a faculty presses on a user - and uses the client function (findUserById) to retrieve the user by ID and display info
export default function PeopleDetails() {
  const { uid } = useParams();

  const [user, setUser] = useState<any>({});
  //for editing and updating a users parameters:
  const [name, setName] = useState("");
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();

  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    navigate(-1);
  }

  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
  };

  useEffect(() => { //use UseEffect to add uid as a dependency so that if the component re-renders if you click on another user while the component is still displaying.
    if (uid) fetchUser();
  }, [uid]);

  if (!uid) return null;



  const saveUser = async () => {
    const [firstName, lastName] = name.split(" "); // split the name into an array and get first
    const updatedUser = { ...user, firstName, lastName };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    navigate(-1); //go back to people table
  };


  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button onClick={() => navigate(-1)} className="btn position-fixed end-0 top-0 wd-close-details">
        <IoCloseSharp className="fs-1" /> </button>
      <div className="text-center mt-2"> <FaUserCircle className="text-secondary me-2 fs-1" /> </div><hr />
      <div className="text-danger fs-4 wd-name">

        {!editing && (
          <FaPencil onClick={() => setEditing(true)} //if not editing show pencil icon, clicking pencil hides pencil and turns on editing
            className="float-end fs-5 mt-2 wd-edit" />
        )}

        {editing && (
          <FaCheck onClick={() => saveUser()}
            // if editing show check mark. Clicking check turns
            // off editing, saves and hides check
            className="float-end fs-5 mt-2 me-2 wd-save" />
        )}

        {!editing && (
          // if not editing show first and last name
          // clicking on name turns on editing

          <div className="wd-name"
            onClick={() => setEditing(true)}>
            {user.firstName} {user.lastName}
          </div>
        )}

        {/* if you are editing... */}
        {user && editing && ( // if editing show input field to edit name
          <input
            className="form-control w-50 wd-edit-name"
            defaultValue={`${user.firstName} ${user.lastName}`}
            onChange={(e) => setName(e.target.value)}
            // name is initially concatenation of first and last
            // update name as we type
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                saveUser();
              } //save changes when enter is pressed
            }} />)}
      </div>



      <b>Roles:</b>           <span className="wd-roles">         {user.role}         </span> <br />
      <b>Login ID:</b>        <span className="wd-login-id">      {user.loginId}      </span> <br />
      <b>Section:</b>         <span className="wd-section">       {user.section}      </span> <br />
      <b>Total Activity:</b>  <span className="wd-total-activity">{user.totalActivity}</span>

      {/* cancel and delete functions */}
      <hr />
      <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete" > Delete </button>
      <button onClick={() => navigate(-1)}
        className="btn btn-secondary float-start float-end me-2 wd-cancel" > Cancel </button>

    </div>);
}
