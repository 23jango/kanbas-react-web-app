import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import EnrollmentOptions from "./Dashboardtools/EnrollmentOptions";

export default function Dashboard({ 
  courses, 
  course, 
  setCourse, 
  addNewCourse,
  deleteCourse, 
  updateCourse, 
  enrolling, 
  setEnrolling,
  updateEnrollment
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: string) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void
  // move the state variables and
  // event handler functions
  // to Kanbas and then accept
  // them as parameters
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  //const { enrollments } = db;
  //constant to check if faculty, then show buttons
  const isFaculty = currentUser?.role === "FACULTY";
  const [enrollment, setEnrollment] = useState(false);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>

      {/* set enroll button */}
      <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>

      {isFaculty && (
        <div>
          <hr />
          <h5>
            New Course
            <button 
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>

            {/* Update button */}
            <button 
              className="btn btn-warning float-end me-2"
              onClick={updateCourse} 
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input 
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea 
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </div>
      )}

      {!isFaculty && (
        <h5>
          <button 
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={() => setEnrollment(!enrollment)}
          >
            Enrollment
          </button>
        </h5>
      )}
      {/* add input element for each of
      fields in course state
      variable */}

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>
      <hr />

      {!enrollment && (
        <div id="wd-dashboard-courses" className="row">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {/* retrieving data from database... */}
            {courses
              .map((course) => (
                <div key={course._id} className="wd-dashboard-course col" style={{ width: "270px" }}>
                  <div className="card rounded-3 overflow-hidden">
                    <Link 
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                      to={`/Kanbas/Courses/${course._id}/Home`}
                    >
                      <img src="/images/pirate.png" width="100%" height={160} alt="pirate logo" />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">

                          {/* for enrollments */}
                          {enrolling && (
                            <button 
                            onClick={(event) => {
                              event.preventDefault();
                              updateEnrollment(course._id, !course.enrolled);
                            }}      
                            // for the styling of button to make it responsive
                            className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                              {course.enrolled ? "Unenroll" : "Enroll"}
                            </button>
                          )}

                          {course.name}
                        </h5>
                        <p 
                          className="wd-dashboard-course-title card-text overflow-y-hidden" 
                          style={{ maxHeight: 100 }}
                        >
                          {course.description}
                        </p>
                        <button className="btn btn-primary">Go</button>

                        {isFaculty && (
                          <>
                            {/* delete course button */}
                            <button 
                              onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                              }} 
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>

                            {/* edit course button */}
                            <button 
                              id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                            >
                              Edit
                            </button>
                          </>
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
      
      {enrollment && (
        <EnrollmentOptions 
          addNewCourse={addNewCourse} 
          deleteCourse={deleteCourse}
        />
      )}
    </div>
  );
}