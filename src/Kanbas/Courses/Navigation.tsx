import { Link, useLocation, useParams } from "react-router-dom";
//import {courses} from "../Database";
import { useEffect, useState } from "react";
import { fetchAllCourses, getCourseById } from "./client";
import { useDispatch } from "react-redux";


export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any>(null); // State to store the fetched course


  useEffect(() => {
    const fetchCourse = async () => {
      if (cid) {
        try {
          console.log("Fetching course with ID:", cid); //testing
          const courseData = await getCourseById(cid);
          setCourse(courseData); // Update state with the fetched course data
        } catch (error) {
          console.error("Failed to fetch course:", error);
        }
      }
    };

    fetchCourse();
  }, [cid]); // Re-run the effect if `cid` changes


  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  // to fix the 'course possibly not defined' error
  if (!course) {
    return <p>Course not found</p>; // Return error if course is not found
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

