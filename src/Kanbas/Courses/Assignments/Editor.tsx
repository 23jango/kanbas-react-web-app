import { useParams } from "react-router";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid } = useParams();

  const editor = db.courses;

  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {editor
        .filter((editor: any) => editor._id === cid)
        .map((editor: any) => (
          <div className="w-100" key={editor._id}>
            {/* first box */}
            <label htmlFor="wd-name">Assignment Name</label>
            {/* clicking this label */}
            <br />
            <input
              className="w-100 form-control"
              id="wd-name"
              value={editor.name}
            />
            <br />
            <br />
            {/* selects this field */}

            {/* description */}
            <textarea
              className="form-control mb-4 d-flex flex-row"
              id="wd-description"
            >
              {editor.description}
            </textarea>
            <br />

            <form>
              {/* Points and Assignment Group */}
              <div className="d-flex text-nowrap flex-row mb-3">
                <label htmlFor="wd-points" className="col-sm-2 col-form-label">
                  Points
                </label>
                <input
                  type="number"
                  id="wd-points"
                  className="form-control"
                  value={editor.credits}
                />
              </div>
              <div className="d-flex text-nowrap flex-row mb-3">
                <label htmlFor="wd-group" className="col-sm-2 col-form-label">
                  Assignment Group
                </label>
                <select id="wd-group" className="form-control">
                  <option value="Assignment" selected>
                    ASSIGNMENTS
                  </option>
                  <option value="exam">EXAM</option>
                  <option value="quiz">QUIZ</option>
                </select>
              </div>

              {/* Display Grade as and Submission Type */}
              <div className="d-flex text-nowrap flex-row mb-3">
                <label
                  htmlFor="wd-display-grade-as"
                  className="col-sm-2 col-form-label"
                >
                  Display Grade as
                </label>
                <select id="wd-display-grade-as" className="form-control">
                  <option value="Percentage" selected>
                    Percentage
                  </option>
                  <option value="other">Other</option>
                  <option value="another">Another</option>
                </select>
              </div>

              {/* submission and options box */}
              <div className="d-flex text-nowrap flex-row mb-3">
                <label
                  htmlFor="wd-submission-type"
                  className="form-label me-3 w-25"
                >
                  Submission Type
                </label>
                <div className="rounded-box mb-3 p-3 w-100">
                  <div className="d-flex text-nowrap flex-row mb-3">
                    {/* div to make everything inside box */}
                    <div className="rounded-box mb-3 p-3 w-100">
                      {/* so the online box can be neatly in the box w margins and padding */}
                      <select id="wd-submission-type" className="form-control">
                        <option value="online" selected>
                          Online
                        </option>
                        <option value="gradescope">Gradescope</option>
                        <option value="in person">In Person</option>
                      </select>
                    </div>
                  </div>

                  {/* Online Entry Options */}
                  <div className="mt-2">
                    <div className="form-label mt-3">
                      <label>
                        <b>Online Entry Options:</b>
                      </label>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="wd-text-entry"
                        />
                        <label
                          htmlFor="wd-text-entry"
                          className="form-check-label"
                        >
                          Text Entry
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="wd-website-url"
                          checked
                        />
                        <label
                          htmlFor="wd-website-url"
                          className="form-check-label"
                        >
                          Website URL
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="wd-media-recordings"
                        />
                        <label
                          htmlFor="wd-media-recordings"
                          className="form-check-label"
                        >
                          Media Recordings
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="wd-student-annotation"
                        />
                        <label
                          htmlFor="wd-student-annotation"
                          className="form-check-label"
                        >
                          Student Annotation
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="wd-file-upload"
                        />
                        <label
                          htmlFor="wd-file-upload"
                          className="form-check-label"
                        >
                          File Upload
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* assign to box */}
              <div className="d-flex text-nowrap flex-row mb-3">
                <label htmlFor="wd-assign" className="form-label me-3 w-25">
                  Assign
                </label>
                <div className="rounded-box mb-3 p-3 w-100">
                  {/* Assign to */}
                  <div className="col-sm-10">
                    <div className="form-group row">
                      <label
                        htmlFor="wd-assign-to"
                        className="col-sm-2 col-form-label"
                      >
                        <b>Assign to</b>
                      </label>
                      <input
                        type="text"
                        id="wd-assign-to"
                        className="form-control"
                        value="Everyone"
                      />
                    </div>

                    {/* Due Date and Availability */}
                    <div className="form-group row">
                      <label
                        htmlFor="wd-due-date"
                        className="col-sm-2 col-form-label"
                      >
                        <b>Due</b>
                      </label>
                      <input
                        type="date"
                        id="wd-due-date"
                        className="form-control"
                        value={editor.endDate}
                      />
                    </div>
                    <div className="row mt-3">
                      {/* wrap it in a col so the avail and until can be in the same row */}
                      <div className="col">
                        <label
                          htmlFor="wd-available-from"
                          className="form-label"
                        >
                          <b>Available from</b>
                        </label>
                        <input
                          type="date"
                          id="wd-available-from"
                          className="form-control"
                          value={editor.startDate}
                        />
                      </div>
                      <div className="col">
                        <label
                          htmlFor="wd-available-until"
                          className="form-label"
                        >
                          <b>Until</b>
                        </label>
                        <input
                          type="date"
                          id="wd-available-until"
                          className="form-control"
                          value={editor.endDate}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Save/Cancel Buttons */}
              <div className="row mb-3 float-end me-5">
                <div className="col-sm-12">
                  <button id="wd-cancel" type="button" className="btn btn-secondary">
                    Cancel
                  </button>
                  <button id="wd-save" type="button" className="btn btn-danger">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        ))}
    </div>
  );
}

