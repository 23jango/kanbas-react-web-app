import { Link, useLocation, useParams } from "react-router-dom";
import {courses} from "../Database";


export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const course = courses.find((course) => course._id === cid);
  // const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  // to fix the 'course possibly not defined' error
  if (!course) {
    return <div>Course not found</div>; // Return error if course is not found
  }

  return (

    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link} to={`/Kanbas/Courses/${course._id}/${link}`} className={`list-group-item
        ${pathname.includes(link) ? "text-black active border border-0" : "text-danger border-0"}`}>
          {link} {/* Display the label */}
        </Link>
      ))
    }
    </div>
);}

