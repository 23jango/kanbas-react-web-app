export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label> {/* clicking this label */}
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br /> {/* selects this field */}
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label> {/* clicking this label */}
          </td>
          <td>
            <input id="wd-points" value={100} /> {/* selects this field */}
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label> {/* clicking this label */}
          </td>
          <td>
            <select id="wd-group">
              <option selected value="Assignment">ASSIGNMENTS</option>
              <option value="exam">EXAM</option>
              <option value="quiz">QUIZ</option>
            </select> {/* selects this field */}
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label> {/* clicking this label */}
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option selected value="Percentage">Percentage</option>
              <option value="other">Other</option>
              <option value="another">Another</option>
            </select> {/* selects this field */}
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label> {/* clicking this label */}
          </td>
          <td>
            <select id="wd-submission-type">
              <option selected value="online">Online</option>
              <option value="gradescope">Gradescope</option>
              <option value="in person">In Person</option>
            </select> {/* selects this field */}
          </td>
        </tr>
        <tr>
          <label>Online Entry Options:</label><br/>

          <input type="checkbox" name="check-entry" id="wd-text-entry"/>
          <label htmlFor="wd-text-entry">Text Entry</label><br/>

          <input type="checkbox" name="check-entry" id="wd-website-url"/>
          <label htmlFor="wd-website-url">Website URL</label><br/>

          <input type="checkbox" name="check-entry" id="wd-media-recordings"/>
          <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

          <input type="checkbox" name="check-entry" id="wd-student-annotation"/>
          <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

          <input type="checkbox" name="check-entry" id="wd-file-upload"/>
          <label htmlFor="wd-file-upload">File Upload</label>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign Assign to</label> {/* clicking this label */}
          </td>
          <td>
            <input id="wd-assign-to" value="Everyone" /> {/* selects this field */}
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due</label> {/* clicking this label */}
          </td>
          <td>
            <input type="date" id="wd-due-date" value="2024-05-13" /> {/* selects this field */}
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available from</label> {/* clicking this label */}
          </td>
          <td>
            <input type="date" id="wd-available-from" value="2024-05-06" /> {/* selects this field */}
          </td>

          <td align="right" valign="top">
            <label htmlFor="wd-available-until">Until</label> {/* clicking this label */}
          </td>
          <td>
            <input type="date" id="wd-available-until" value="2024-05-24" /> {/* selects this field */}
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
          <button id="wd-cancel" type="button">Cancel</button>
          <button id="wd-save" type="button">Save</button>
          </td>
        </tr>

        {/* Complete on your own */}
      </table>
    </div>
);}
