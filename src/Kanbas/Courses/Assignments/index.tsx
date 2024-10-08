import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentTitleControlButtons from "./AssignmentTitleControlButtons";
import { MdAssignment } from "react-icons/md"
export default function Assignments() {
  return (
    <div>
      <AssignmentControls /><br /><br /><br /><br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            {/* ADD MODULES CONTROL BUTTONS INSTEADDDD if time */}
            <AssignmentTitleControlButtons />
          </div>

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-start">
              <div className="mt-4">
                <BsGripVertical className="me-2 fs-3" />
              <MdAssignment className="ms-2" />
              </div>
              <div className="d-flex flex-column ms-3">
                <a
                // link to editor
                  className="wd-assignment-link fw-bold h3"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  A1
                </a>
                <div className="wd-assignment-details mt-1">
                  <div className="wd-assignment-list-item mb-0 pe-5">
                    <span className="text-danger">Multiple Modules</span> |
                    <b> Not avaliable until</b> May 6 at 12:00am |
                    <br />
                    <b>Due</b> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              {/* spacing the button flush right */}
              <div className="ms-auto d-flex align-items-center">
                <AssignmentControlButtons />
              </div>
            </li>


            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-start">
              <div className="mt-4">
                <BsGripVertical className="me-2 fs-3" />
              <MdAssignment className="ms-2" />
              </div>
              <div className="d-flex flex-column ms-3">
                <a
                // link to editor
                  className="wd-assignment-link fw-bold h3"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  A2
                </a>
                <div className="wd-assignment-details mt-1">
                  <div className="wd-assignment-list-item mb-0 pe-5">
                    <span className="text-danger">Multiple Modules</span> |
                    <b> Not avaliable until</b> May 6 at 12:00am |
                    <br />
                    <b>Due</b> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              {/* spacing the button flush right */}
              <div className="ms-auto d-flex align-items-center">
                <AssignmentControlButtons />
              </div>
            </li>


            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-start">
              <div className="mt-4">
                <BsGripVertical className="me-2 fs-3" />
              <MdAssignment className="ms-2" />
              </div>
              <div className="d-flex flex-column ms-3">
                <a
                // link to editor
                  className="wd-assignment-link fw-bold h3"
                  href="#/Kanbas/Courses/1234/Assignments/123"
                >
                  A3
                </a>
                <div className="wd-assignment-details mt-1">
                  <div className="wd-assignment-list-item mb-0 pe-5">
                    <span className="text-danger">Multiple Modules</span> |
                    <b> Not avaliable until</b> May 6 at 12:00am |
                    <br />
                    <b>Due</b> May 13 at 11:59pm | 100 pts
                  </div>
                </div>
              </div>
              {/* spacing the button flush right */}
              <div className="ms-auto d-flex align-items-center">
                <AssignmentControlButtons />
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}


