import { useParams, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";


export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const navigate = useNavigate();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);

  const dispatch = useDispatch();
  const saveAssignment = async (assignment: any) => {
    await assignmentsClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };


  const existingAssignment =
    aid !== "new" ? assignments.find((a: any) => a._id === aid) : null;

  const [assignment, setAssignment] = useState({
    title: existingAssignment?.title || "",
    description: existingAssignment?.description || "",
    points: existingAssignment?.points || 100,
    dueDate: existingAssignment?.dueDate || "",
    startDate: existingAssignment?.available || "",
    endDate: existingAssignment?.endDate || "",
  });

  const handleSave = () => {
    if (aid === "new") {
      dispatch(addAssignment({ ...assignment, course: cid }));
    } else {
      dispatch(
        updateAssignment({
          _id: aid,
          title: assignment.title,
          description: assignment.description,
          points: assignment.points,
          dueDate: assignment.dueDate,
          available: assignment.startDate,
          end: assignment.endDate,
        })
      );
      saveAssignment({ ...assignment, editing: false });
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <form>
        {assignment && (
          <div className="w-100">
            <div className="mb-3">
              <label htmlFor="wd-name" className="form-label">
                Assignment Name
              </label>
              <br />
              <input
                id="wd-name"
                type="text"
                className="form-control"
                value={assignment.title}
                onChange={(e) =>
                  setAssignment({ ...assignment, title: e.target.value })
                }
              />
            </div>
            <div>
              <textarea
                id="wd-description"
                className="form-control mb-4"
                value={assignment.description}
                onChange={(e) =>
                  setAssignment({ ...assignment, description: e.target.value })
                }
              ></textarea>
            </div>
            <div className="d-flex flex-column">
              <div className="d-flex text-nowrap flex-row mb-3">
                <label htmlFor="wd-points" className="form-label me-3 w-25">
                  Points
                </label>
                <input
                  id="wd-points"
                  type="number"
                  className="form-control"
                  value={assignment.points}
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      points: parseInt(e.target.value),
                    })
                  }
                />
              </div>

              <div className="d-flex text-nowrap flex-row mb-3">
                <label htmlFor="wd-group" className="form-label me-3 w-25">
                  Assignment Group
                </label>
                <select id="wd-group" className="form-select">
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                </select>
              </div>
              <div className="d-flex text-nowrap flex-row mb-3">
                <label
                  htmlFor="wd-display-grade-as"
                  className="form-label me-3 w-25"
                >
                  Display Grade as
                </label>
                <select id="wd-display-grade-as" className="form-select">
                  <option value="submission">Percentage</option>
                </select>
              </div>

              <div className="d-flex text-nowrap flex-row mb-3">
                <label htmlFor="wd-submission" className="form-label me-3 w-25">
                  Submission Type
                </label>
                <div className="rounded-box mb-3 p-3 w-100">
                  <label
                    htmlFor="wd-submission-type"
                    className="form-label me-3"
                  >
                    Submission Type
                  </label>
                  <select id="wd-submission-type" className="form-select">
                    <option value="submission-type">Online</option>
                  </select>
                  <label
                    htmlFor="wd-online-entry-options"
                    className="form-label mt-3"
                  >
                    <b>Online Entry Options</b>
                  </label>
                  <div className="mt-2">
                    <div className="form-check">
                      <input
                        className="wd-text-entry form-check-input"
                        type="checkbox"
                        id="text-entry"
                      />
                      <label
                        className="wd-text-entry form-check-label"
                        htmlFor="text-entry"
                      >
                        Text Entry
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="wd-website-url form-check-input"
                        type="checkbox"
                        id="website-url"
                        checked
                      />
                      <label
                        className="wd-website-url form-check-label"
                        htmlFor="website-url"
                      >
                        Website URL
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="wd-media-recordings form-check-input"
                        type="checkbox"
                        id="media-recordings"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="media-recordings"
                      >
                        Media Recordings
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="wd-student-annotation form-check-input"
                        type="checkbox"
                        id="student-annotation"
                      />
                      <label
                        className="wd-student-annotation form-check-label"
                        htmlFor="student-annotation"
                      >
                        Student Annotation
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="wd-file-upload form-check-input"
                        type="checkbox"
                        id="file-uploads"
                      />
                      <label
                        className="wd-file-upload form-check-label"
                        htmlFor="file-uploads"
                      >
                        File Uploads
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex text-nowrap flex-row mb-3">
                <label htmlFor="wd-assign-to" className="form-label me-3 w-25">
                  Assign to
                </label>
                <div className="rounded-box mb-3 p-3 w-100">
                  <div className="row mt-3">
                    <div className="col">
                      <label
                        htmlFor="due-date"
                        className="wd-due-date form-label"
                      >
                        <b>Due</b>
                      </label>
                      <input
                        type="date"
                        className="wd-due-date form-control"
                        id="due-date"
                        value={assignment.dueDate}
                        onChange={(e) =>
                          setAssignment({
                            ...assignment,
                            dueDate: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col">
                      <label
                        htmlFor="available-from"
                        className="wd-available-from form-label"
                      >
                        <b>Available from</b>
                      </label>
                      <input
                        type="date"
                        className="wd-available-from form-control"
                        id="available-from"
                        value={assignment.startDate}
                        onChange={(e) =>
                          setAssignment({
                            ...assignment,
                            startDate: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="col">
                      <label
                        htmlFor="until"
                        className="wd-available-until form-label"
                      >
                        <b>Until</b>
                      </label>
                      <input
                        type="date"
                        className="wd-available-until form-control"
                        id="until"
                        value={assignment.endDate}
                        onChange={(e) =>
                          setAssignment({
                            ...assignment,
                            endDate: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="d-flex justify-content-end">
          <button
            onClick={() => navigate(`/Kanbas/Courses/${cid}/Assignments`)}
            className="btn btn-secondary me-2"
            type="button"
          >
            Cancel
          </button>
          <button onClick={handleSave} 
          type="button"
           className="btn btn-danger">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}