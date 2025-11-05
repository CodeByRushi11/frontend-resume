import React, { useState } from "react";
import "./Layout.scss";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Redux/Features/themeSlice";
const Layout = () => {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();

  const darkMode = useSelector((state) => state.theme.darkMode);
  // function for open side bar and close
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSideBarOpen);
  };
  return (
    <div className={`Layout ${darkMode ? "dark-mode" : ""}`}>
      {" "}
      {/* 🔹 Apply Dark Mode */}
      {/* SideBar here */}
      <div className={`sidebar  ${isSideBarOpen ? "open" : "closed"}`}>
        {/* sideBar Header : Here we add logo and name of website and other */}
        <div className="sidebar-header">
          <Button className="toggle-btn" onClick={toggleSidebar}>
            {isSideBarOpen ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </Button>
        </div>
        {/* sidebar menus */}

        <ul className="sidebar-menu">
          <li>
            <Link to="/" className="sidebar-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
              </svg>
              {isSideBarOpen && <span>Home</span>}
            </Link>
          </li>
          <li>
            <Link to="/get_api" className="sidebar-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M120-80v-800l60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60 60 60 60-60v800l-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60-60-60-60 60Zm120-200h480v-80H240v80Zm0-160h480v-80H240v80Zm0-160h480v-80H240v80Zm-40 404h560v-568H200v568Zm0-568v568-568Z" />
              </svg>
              {isSideBarOpen && <span> Get API</span>}
            </Link>
          </li>
          <li>
            <Link to="/post_api" className="sidebar-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="m680-320-56-56 62-64H480v-80h206l-62-64 56-56 160 160-160 160ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v160h-80v-40H280v480h400v-40h80v160q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-640h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z" />
              </svg>
              {isSideBarOpen && <span> Post API</span>}
            </Link>
          </li>

          <li>
            <Link to="/CounterRedux" className="sidebar-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M480-120q-74 0-139.5-28.5T226-226q-49-49-77.5-114.5T120-480q0-44 10-85.5t29-78q19-36.5 45.5-68T264-768l272 272-56 56-216-216q-30 36-47 80.5T200-480q0 116 82 198t198 82q116 0 198-82t82-198q0-107-68.5-184.5T520-756v76h-80v-160h40q74 0 139.5 28.5T734-734q49 49 77.5 114.5T840-480q0 74-28.5 139.5T734-226q-49 49-114.5 77.5T480-120ZM280-440q-17 0-28.5-11.5T240-480q0-17 11.5-28.5T280-520q17 0 28.5 11.5T320-480q0 17-11.5 28.5T280-440Zm200 200q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm200-200q-17 0-28.5-11.5T640-480q0-17 11.5-28.5T680-520q17 0 28.5 11.5T720-480q0 17-11.5 28.5T680-440Z" />
              </svg>
              {isSideBarOpen && <span> Counter Redux</span>}
            </Link>
          </li>
          <li>
            <Link to="/TaskApp" className="sidebar-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q65 0 123 19t107 53l-58 59q-38-24-81-37.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160q32 0 62-6t58-17l60 61q-41 20-86 31t-94 11Zm280-80v-120H640v-80h120v-120h80v120h120v80H840v120h-80ZM424-296 254-466l56-56 114 114 400-401 56 56-456 457Z" />
              </svg>
              {isSideBarOpen && <span>Task app</span>}
            </Link>
          </li>
          <li>
            <Link to="/resumeComponent" className="sidebar-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="M240-240v-480h80v480h-80Zm160 0 400-240-400-240v480Zm80-141v-198l165 99-165 99Zm0-99Z" />
              </svg>
              {isSideBarOpen && <span>Resume</span>}
            </Link>
          </li>
          <li>
            <Link to="/apiIntegration" className="sidebar-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="m480-400-80-80 80-80 80 80-80 80Zm-85-235L295-735l185-185 185 185-100 100-85-85-85 85ZM225-295 40-480l185-185 100 100-85 85 85 85-100 100Zm510 0L635-395l85-85-85-85 100-100 185 185-185 185ZM480-40 295-225l100-100 85 85 85-85 100 100L480-40Z" />
              </svg>
              {isSideBarOpen && <span>API Integration</span>}
            </Link>
          </li>
          {/* <li>
            <Link to="/ResgistrationForm" className="sidebar-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#e3e3e3"
              >
                <path d="m480-400-80-80 80-80 80 80-80 80Zm-85-235L295-735l185-185 185 185-100 100-85-85-85 85ZM225-295 40-480l185-185 100 100-85 85 85 85-100 100Zm510 0L635-395l85-85-85-85 100-100 185 185-185 185ZM480-40 295-225l100-100 85 85 85-85 100 100L480-40Z" />
              </svg>
              {isSideBarOpen && <span>Registration Form</span>}
            </Link>
          </li> */}
          <li>
            <Link to="/ReactPractice" className="sidebar-link">
              <span>😏</span>
              {isSideBarOpen && <span> React Practice</span>}
            </Link>
          </li>
          <li>
            <Link to="/WallClockUI" className="sidebar-link">
              <span>⏰</span>
              {isSideBarOpen && <span> Wall Clock</span>}
            </Link>
          </li>
          <li>
            <Link to="/TechnoUi" className="sidebar-link">
              <span>🧑‍💻</span>
              {isSideBarOpen && <span> Contact Form Ui</span>}
            </Link>
          </li>
          <li>
            <Link to="/AboutUs" className="sidebar-link">
              <span>🅰️</span>
              {isSideBarOpen && <span> About Page Ui</span>}
            </Link>
          </li>
          <li>
            <Link to="/AxiosApi" className="sidebar-link">
              <span>🌐</span>
              {isSideBarOpen && <span> Axios Api </span>}
            </Link>
          </li>
        </ul>
      </div>
      {/* Here is main Content  // navbar of and other page outlet here  */}
      <div className={`main-content ${isSideBarOpen ? "" : "shifted"}`}>
        {/* navbar  */}
        <nav
          className={`navbar ${isSideBarOpen ? "" : "shifted"}`}
          style={{ zIndex: "1" }}
        >
          <div className="navbar-left">
            <h5 className="logo">React All</h5>
          </div>
          <div className="navbar-right">
            <Input type="text" placeholder="Search" />
            <span>
              <i className="fa-solid fa-bell"></i>
            </span>

            <FormGroup switch>
              <Input
                type="switch"
                checked={darkMode}
                onChange={() => dispatch(toggleTheme())}
              />
              <Label check>{darkMode ? "🌛" : "🌞"}</Label>
            </FormGroup>
          </div>
        </nav>
        {/* Page Content :Other Page Contenet here */}
        <div className="page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
