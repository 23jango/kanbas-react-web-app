// import { useSelector } from "react-redux";
// import { Link, Navigate, useParams } from "react-router-dom";
// import { deleteAssignment } from "./reducer";
// import { useDispatch } from 'react-redux';

// export default function DeleteConfirmation() {
//     const dispatch = useDispatch();
//     const { cid } = useParams();
//     const { assignments } = useSelector((state: any) => state.assignmentReducer);

//     const assignment = assignments.find((a: any) => a._id === cid);

//     const handleDelete = () => {
//       dispatch(deleteAssignment(cid));
//   };

//     return (
//       <div id="wd-delete-assignment-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
//         <div className="modal-dialog">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h1 className="modal-title fs-5" id="staticBackdropLabel">
//                 Are you sure to delete? </h1>
//               <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
//             </div>
//             <div className="modal-body">
//             </div>
//             <div className="modal-footer">

//               <button type="button" data-bs-dismiss="modal" className="btn btn-secondary">
//                 No
//               </button>

//                 <button onClick={handleDelete} type="button" data-bs-dismiss="modal" className="btn btn-danger">Yes</button>

//                 <button onClick={deleteAssignment} type="button" data-bs-dismiss="modal" className="btn btn-danger">Yes</button>

//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
  

import React from "react";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

const DeleteConfirmation = () => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const modal = document.getElementById("wd-delete-assignment-dialog");
    const assignmentId = modal?.getAttribute("data-assignment-id");
    if (assignmentId) {
      dispatch(deleteAssignment(assignmentId));
    }
  };

  return (
    <div
      className="modal fade"
      id="wd-delete-assignment-dialog"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5">Delete Assignment</h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Are you sure to remove this assignment?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              No
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={handleDelete}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;

