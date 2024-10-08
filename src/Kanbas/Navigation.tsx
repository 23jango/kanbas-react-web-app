import { Link } from "react-router-dom";
import "./style.css";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { BsCalendar3, BsFillInboxFill, BsClock, BsFillLaptopFill, BsFillQuestionCircleFill } from "react-icons/bs";

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 120 }} 
// add list group class

      className="list-group rounded-0 position-fixed
    bottom-0 top-0 d-none d-md-block bg-black z-2">
      {/* set 120px width*/}
      {/* d-none- dont show when small, show when medium up */}

      <a id="wd-neu-link" target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"> 
        {/* add list-group class*/}
        <img src="/images/NEU.png" width="75px" /></a>
        {/* add list-group-item class add icons   */}

      <Link to="/Kanbas/Account" id="wd-account-link"
        className="list-group-item text-center border-0 bg-black text-white">
        <FaRegCircleUser className="fs-1 text text-white" />
        Account </Link>

      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"
        className="list-group-item text-center border-0
              bg-white text-danger">
        <AiOutlineDashboard className="fs-1 text-danger" />
        {/* enlarge text and paint it red */}
        Dashboard </Link>

      <Link to="/Kanbas/Courses" id="wd-course-link"
        className="list-group-item text-white
              bg-black text-center border-0">
        <LiaBookSolid className="fs-1 text-danger" />
        Courses </Link>
        
        <Link to="/Kanbas/Courses" id="wd-groups-link"
        className="list-group-item text-white
              bg-black text-center border-0">
        <FaUserGroup className="fs-1 text-danger" />
        Groups </Link>

        <Link to="/Kanbas/Courses" id="wd-calendar-link"
        className="list-group-item text-white
              bg-black text-center border-0">
        <BsCalendar3 className="fs-1 text-danger" />
        Calendar </Link>

        <Link to="/Kanbas/Courses" id="wd-inbox-link"
        className="list-group-item text-white
              bg-black text-center border-0">
        <BsFillInboxFill className="fs-1 text-danger" />
        Inbox </Link>

        <Link to="/Kanbas/Courses" id="wd-history-link"
        className="list-group-item text-white
              bg-black text-center border-0">
        <BsClock className="fs-1 text-danger" />
        History </Link>

        <Link to="/Kanbas/Courses" id="wd-studio-link"
        className="list-group-item text-white
              bg-black text-center border-0">
        <BsFillLaptopFill className="fs-1 text-danger" />
        Studio </Link>

        <Link to="/Kanbas/Courses" id="wd-help-link"
        className="list-group-item text-white
              bg-black text-center border-0">
        <BsFillQuestionCircleFill className="fs-1 text-danger" />
        Help </Link>




      {/* complete styling the rest of the links */}
    </div>
  );
}

