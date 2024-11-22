import { Link } from "react-router-dom";
//import * as db from "../Database";
import { useSelector, useDispatch } from "react-redux";
import { createEnrollment, deleteEnrollment } from "./reducer";
import { create } from "domain";
import { useEffect, useState } from "react";
import * as enrollmentClient from "./client";
import * as coursesClient from "../Courses/client";

export default function Enrollments(
    {addNewCourse, deleteCourse}: {addNewCourse: () => void; deleteCourse: (course: any) => void;
}) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();
    const [courses, setCourses] = useState<any[]>([]);
    const [enrollments, setEnrollments] = useState<any[]>([]);
    const [enrolled, setEnrolled] = useState<{ [key: string]: boolean }>({});


    // function checkEnrolled(c: any): boolean {
    //     return enrollments.some(enrollment => 
    //         enrollment.course === c._id && enrollment.user === currentUser._id
    //     );
    // }
    

    // useEffect(() => {
    //     const status = courses.reduce((acc, course) => {
    //         acc[course._id] = checkEnrolled(course);
    //         return acc;
    //     }, {} as { [key: string]: boolean });
    //     setEnrolled(status);
    // }, [courses, enrollments]);
    
    // function getEId(c: any): number {
    //     enrollments.filter((e) => e.user === currentUser._id && e.course === c._id);
    //     const id = enrollments[0]._id;
    //     return (parseInt(id))
    // }
    useEffect(() => {
        const fetchCoursesAndEnrollments = async () => {
          // Fetch courses and enrollments from the server
          const coursesData = await coursesClient.fetchAllCourses();
          const enrollmentsData = await enrollmentClient.getEnrollmentsForUser(currentUser._id);
    
          setCourses(coursesData);
          setEnrollments(enrollmentsData);
    
          // Update the enrolled status map
          const status = coursesData.reduce((acc: { [x: string]: any; }, course: { _id: string | number; }) => {
            acc[course._id] = enrollmentsData.some(
              (enrollment: { course: string | number; user: any; }) =>
                enrollment.course === course._id && enrollment.user === currentUser._id
            );
            return acc;
          }, {} as { [key: string]: boolean });
          setEnrolled(status);
        };
    
        fetchCoursesAndEnrollments();
      }, [currentUser._id]);

      const handleEnroll = async (course: any) => {
        const newEnrollment = { user: currentUser._id, course: course._id };
        const createdEnrollment = await enrollmentClient.createEnrollment(newEnrollment);
        setEnrollments((prev) => [...prev, createdEnrollment]);
        setEnrolled((prev) => ({ ...prev, [course._id]: true }));
      };
    
      const handleUnenroll = async (course: any) => {
        const enrollment = enrollments.find(
          (e) => e.user === currentUser._id && e.course === course._id
        );
        if (enrollment) {
          await enrollmentClient.unEnroll(enrollment._id);
          setEnrollments((prev) =>
            prev.filter((e) => e._id !== enrollment._id)
          );
          setEnrolled((prev) => ({ ...prev, [course._id]: false }));
        }
      };


    return (
        <div id="wd-enrollment">
            <div id="wd-enrollment-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div className="wd-enrollment-course col" style={{ width: "300px" }}>
                            <div className="card rounded-3 overflow-hidden">
                                    <img src="/images/reactjs.jpg" width="100%" height={160} />
                                    <div className="card-body">
                                        <h5 className="wd-enrollment-course-title card-title">
                                            {course.name} </h5>
                                        <p className="wd-enrollment-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                                            {course.description} </p>

                                        
                                        {(enrolled[course._id]) &&
                                            <button onClick={() =>
                                                handleUnenroll(course) 
                                                //{
                                                // dispatch(deleteEnrollment(getEId(course)));
                                                // setEnrolled(prev => ({
                                                //     ...prev,
                                                //     [course._id]: false,
                                                // }));
                                                //}
                                            } className="btn btn-danger"> Unenroll </button>}
                                        {(!enrolled[course._id]) && 
                                            <button onClick={() => 
                                                handleEnroll(course)
                                            //     {
                                            //     dispatch(createEnrollment({user: currentUser._id, course: course}));
                                            //     setEnrolled(prev => ({
                                            //         ...prev,
                                            //         [course._id]: true,
                                            //     }));
                                            // }
                                            } className="btn btn-primary"> Enroll </button>
                                        }
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

