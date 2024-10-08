import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (8)</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">

          {/* first card below... */}
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/pirate.png" width="100%" height={160} alt="pirate logo" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* second card below... */}
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/kodak.jpeg" width="100%" height={160} alt="pirate logo" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 pitbull studies
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack pitbull
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

        {/* third card below... */}
        <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/pirate.png" width="100%" height={160} alt="pirate logo" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* fourth card below... */}
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/kodak.jpeg" width="100%" height={160} alt="pirate logo" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 pitbull studies
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack pitbull
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* fifth card below... */}
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/pirate.png" width="100%" height={160} alt="pirate logo" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* 6th card below... */}
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/kodak.jpeg" width="100%" height={160} alt="pirate logo" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 pitbull studies
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack pitbull
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* 7th card below... */}
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/pirate.png" width="100%" height={160} alt="pirate logo" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 React JS
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack software developer
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* last card below... */}
          <div className="wd-dashboard-course col" style={{ width: "270px" }}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                to="/Kanbas/Courses/1234/Home">
                <img src="/images/kodak.jpeg" width="100%" height={160} alt="pirate logo" />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">
                    CS1234 pitbull studies
                  </h5>
                  <p className="wd-dashboard-course-title card-text">
                    Full Stack pitbull
                  </p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
