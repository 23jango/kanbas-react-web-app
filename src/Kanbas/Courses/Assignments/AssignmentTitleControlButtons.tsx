import { IoEllipsisVertical } from "react-icons/io5";
export default function AssignmentTitleControlButtons() {
  return (

    <div className = "float-end">
      <div className = "float-end">
        <IoEllipsisVertical className="fs-4" />
      </div>
       <button id="wd-group" className="btn btn-md btn-secondary me-1 float-end rounded-pill ">
        +</button>
       <button id="wd-group" className="btn btn-md btn-secondary me-1 float-end rounded-pill border-dark">
        40% Of Total</button>
    </div>
  );
}