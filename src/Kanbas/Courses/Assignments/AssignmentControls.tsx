import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { toggleAddUpdate } from './reducer';
export default function AssignmentControls({ assignmentName, setAssignmentName, addAssignment }:
  { assignmentName: string; setAssignmentName: (title: string) => void; addAssignment: () => void; }) {

  const navigate = useNavigate();
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const dispatch = useDispatch();


  return (
    <div id="wd-assignment-controls" className="text-nowrap">

      {/* search bar with bootstrap styling, search bar */}
      <span className="d-inline-flex align-items-center">
        <FaSearch
          className="position-relative me-2"
          style={{ bottom: "1px" }}
          color="gray"
        />
        <input
          id="wd-search-assignment"
          className="form-control position-relative me-2"
          placeholder="Search..."
        />
      </span>

      {isFaculty && (
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments/new`}
          id="wd-view-assignment-btn"
          className="btn btn-lg btn-danger me-1 float-end"
        >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Assignment
        </Link>
      )}
      {isFaculty && (
        <button id="wd-group" className="btn btn-lg btn-secondary me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Group</button>
      )}
       


    </div>
  );
}
