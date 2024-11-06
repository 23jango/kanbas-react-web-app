// import AssignmentControls from "./AssignmentControls";
// import { BsGripVertical } from "react-icons/bs";
// import AssignmentControlButtons from "./AssignmentControlButtons";
// import AssignmentTitleControlButtons from "./AssignmentTitleControlButtons";
// import { MdAssignment } from "react-icons/md"
// import { useParams } from "react-router";
// import * as db from "../../Database";
// import React, { useState } from "react";
// import { UseSelector } from "react-redux";

// import { addAssignment, editAssignment, updateAssignment, deleteAssignment }
//   from "./reducer";
// import { useSelector, useDispatch } from "react-redux";





// export default function Assignments() {
//   const { cid } = useParams();
//   const [assignmentName, setAssignmentName] = useState("");

//   const { assignments } = useSelector((state: any) => state.assignmentReducer);
//   const dispatch = useDispatch();

//   //to check if role is faculty to hide buttons or not
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const isFaculty = currentUser?.role === "FACULTY";

//   return (
//     <div>
//       <AssignmentControls 
//       setAssignmentName={setAssignmentName} assignmentName={assignmentName} addAssignment={() => {
//         dispatch(addAssignment({ title: assignmentName, course: cid }));
//         setAssignmentName("");
//       }}/>
//       <br /><br /><br /><br />
//       <ul id="wd-assignments" className="list-group rounded-0">

//         <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" />
//             ASSIGNMENTS
//             <AssignmentTitleControlButtons />
//           </div>

//           <ul className="wd-lessons list-group rounded-0">
//             {assignments
//               .filter((assignment: any) => assignment.course === cid)
//               .map((assignment: any) => (
//                 <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-start">
//                   <div className="mt-4">
//                     <BsGripVertical className="me-2 fs-3" />
//                     <MdAssignment className="ms-2" />
//                   </div>
//                   <div className="d-flex flex-column ms-3">
//                     <a
//                       //link to editor
//                       className="wd-assignment-link fw-bold h3"
//                       href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
//                     >
//                       {assignment.title}
//                     </a>
//                     <div className="wd-assignment-details mt-1">
//                       <div className="wd-assignment-list-item mb-0 pe-5">
//                         <span className="text-danger">Multiple Modules</span> |
//                         <b> Not available until</b> May 6 at 12:00am |
//                         <br />
//                         <b>Due</b> May 13 at 11:59pm | 100 pts
//                       </div>
//                     </div>
//                   </div>
//                   {/* spacing the button flush right */}

//                   {!assignment.editing && assignment.title}
//                   {assignment.editing && (
//                     <input className="form-control w-50 d-inline-block"
//                       onChange={(e) => updateAssignment({ ...assignment, title: e.target.value })}
//                       onKeyDown={(e) => {
//                         if (e.key === "Enter") {
//                           updateAssignment({ ...assignment, editing: false });
//                         }
//                       }}
//                       defaultValue={assignment.title} />
//                   )}


//                   {isFaculty && (
//                   <div className="ms-auto d-flex align-items-center">
//                     <AssignmentControlButtons 
//                       assignmentId={assignment._id}
//                       deleteAssignment={deleteAssignment}
//                       editAssignment={editAssignment}/>
//                   </div>
//                   )}


//                 </li>
//               ))}
//           </ul>
//         </li>
//       </ul>
//     </div>
//   );
// }

// import AssignmentControls from "./AssignmentControls";
// import { BsGripVertical } from "react-icons/bs";
// import AssignmentControlButtons from "./AssignmentControlButtons";
// import AssignmentTitleControlButtons from "./AssignmentTitleControlButtons";
// import { MdAssignment } from "react-icons/md";
// import { useParams } from "react-router";
// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addAssignment, editAssignment, updateAssignment, deleteAssignment, toggleAddUpdate } from "./reducer";


// export default function Assignments() {
//   const { cid } = useParams();
//   const [assignmentName, setAssignmentName] = useState("");

//   const { assignments } = useSelector((state: any) => state.assignmentReducer);
//   const dispatch = useDispatch();

//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const isFaculty = currentUser?.role === "FACULTY";

//   return (
//     <div>
//       <AssignmentControls
//         setAssignmentName={setAssignmentName}
//         assignmentName={assignmentName}
//         addAssignment={() => {
//           dispatch(addAssignment({ title: assignmentName, course: cid }));
//           setAssignmentName("");
//         }}
//       />
//       <br /><br /><br /><br />
//       <ul id="wd-assignments" className="list-group rounded-0">
//         <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary">
//             <BsGripVertical className="me-2 fs-3" />
//             ASSIGNMENTS
//             <AssignmentTitleControlButtons />
//           </div>
//           <ul className="wd-lessons list-group rounded-0">
//             {assignments
//               .filter((assignment: any) => assignment.course === cid)
//               .map((assignment: any) => (
//                 <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-start">
//                   <div className="mt-4">
//                     <BsGripVertical className="me-2 fs-3" />
//                     <MdAssignment className="ms-2" />
//                   </div>
//                   <div className="d-flex flex-column ms-3">
//                     <a
//                       className="wd-assignment-link fw-bold h3"
//                       href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
//                       onClick={() => toggleAddUpdate(false)}
//                     >
//                       {assignment.title}
//                     </a>
//                     <div className="wd-assignment-details mt-1">
//                       <div className="wd-assignment-list-item mb-0 pe-5">
//                         <span className="text-danger">Multiple Modules</span> |
//                         <b> Not available until</b> {assignment.startDate || 'Month and day at time here'} |
//                         <br />
//                         <b>Due</b> {assignment.endDate || 'Month and day at time here'} | 100 pts
//                       </div>
//                     </div>
//                   </div>

//                   {!assignment.editing && assignment.title}
//                   {assignment.editing && (
//                     <input
//                       className="form-control w-50 d-inline-block"
//                       onChange={(e) => dispatch(updateAssignment({ ...assignment, title: e.target.value }))}
//                       onKeyDown={(e) => {
//                         if (e.key === "Enter") {
//                           dispatch(updateAssignment({ ...assignment, editing: false }));
//                         }
//                       }}
//                       defaultValue={assignment.title}
//                     />
//                   )}

//                   {isFaculty && (
//                     <div className="ms-auto d-flex align-items-center">
//                       <AssignmentControlButtons assignmentId={assignment._id}/>
//                     </div>
//                   )}
//                 </li>
//               ))}
//           </ul>
//         </li>
//       </ul>


      
//     </div>
//   );
// }




import { BsGripVertical } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { GrNotes } from "react-icons/gr";

import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
//import AssignmentLessonControlButtons from "./AssignmentLessonControlButtons";
import DeleteConfirmation from "./DeleteConfirmation";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";

  return (
    <div id="wd-assignments">
      {isFaculty && <AssignmentControls assignmentName={""} setAssignmentName={function (title: string): void {
        throw new Error("Function not implemented.");
      }} addAssignment={function (): void {
        throw new Error("Function not implemented.");
      }} />}
      <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <IoMdArrowDropdown className="me-2 fs-3" />
            ASSIGNMENTS
            {isFaculty && <AssignmentControlButtons assignmentId={""} />}
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li
                  key={assignment._id}
                  className="wd-lesson list-group-item d-flex align-items-center"
                >
                  <div className="d-flex align-items-center">
                    <BsGripVertical className="me-2 fs-3" />
                    <GrNotes className="me-2 fs-3 text-success" />
                    <div className="d-flex flex-column ms-3">
                      <a
                        className="wd-assignment-link fw-bold"
                        href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      >
                        {assignment.title}
                      </a>
                      <div className="wd-assignment-details mt-1">
                        <div className="wd-assignment-list-item mb-0 pe-5">
                          <span className="text-danger">Multiple Modules </span>
                          |<b> Not available until</b> {assignment.available} |
                          <b> Due </b>
                          {assignment.due} |{" "}
                          <span>{assignment.points} pts</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {isFaculty && (
                    <AssignmentControlButtons
                      assignmentId={assignment._id}
                    />
                  )}
                </li>
              ))}
          </ul>
        </li>
      </ul>
      <DeleteConfirmation />
    </div>
  );
}

