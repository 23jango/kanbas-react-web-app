import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
export default function AssignmentControls() {
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
      

      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Assignment</button>
      {/* <div className="dropdown d-inline me-1 float-end"></div> */}

      <button id="wd-group" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group</button>

    </div>
  );
}
