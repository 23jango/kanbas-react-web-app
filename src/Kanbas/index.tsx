import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import * as client from "./Courses/client";
import * as userClient from "./Account/client";
import "./style.css";
import * as courseClient from "./Courses/client";
//dont need db from databases anymore

import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import { useSelector } from "react-redux";

export default function Kanbas() {

  const [courses, setCourses] = useState<any[]>([]); //initialize as empty because we dont need databases anymore
  const { currentUser } = useSelector((state: any) => state.accountReducer);//Use the currentUser in the accountReducer as a dependency so that if a different user logs in, the courses will be reloaded from the server

  const fetchCourses = async () => {
    try {
      const courses = await userClient.findMyCourses();
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
 

  
  const [course, setCourse] = useState<any>({
    _id: "1234", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
  });
  // create courses state variable and initialize with database's courses  

  const addNewCourse = async () => {
    const newCourse= await userClient.createCourse(course);
    setCourses([...courses, newCourse]);

    // setCourses([...courses, { ...course, _id: new Date().getTime().toString() }]);
  };
  // convert course into a state
  // variable so we can change it
  // and force a redraw of the UI

  const deleteCourse = async (courseId: any) => {
    const status = await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  //convert courses and updates them 
  const updateCourse = async () => {
    console.log('hi');
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
    
  }; //move event handlers from dashboard to here


  // use useEffect to fetch the courses from the server on component load and update the courses state variable that populates the Dashboard. 
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  return (
    //wrap everything around session so that it renders before all other components to check if anyone is signed in. Once it figures out either way, it'll store the result in the store and let the rest of the components render. 
    <Session>

      <div id="wd-kanbas">
        <KanbasNavigation />
        <div className="wd-main-content-offset p-3">
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas/Account" />} />
            <Route path="/Account/*" element={<Account />} />

            <Route path="/Dashboard" element={
              <ProtectedRoute roles={["FACULTY"]}>
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              </ProtectedRoute>} />

            { }
            {/* ;cid means you have to be in a special case under courses, like a specific id to access the courses page */}
            <Route path="/Courses/:cid/*" element={
              <ProtectedRoute>
                <Courses courses={courses} />
              </ProtectedRoute>
            } />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>

  );
}