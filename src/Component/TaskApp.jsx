import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import TaskList from "./TaskList";
import { fetchTasks } from "../Redux/Features/taskSlicer";
// import { toggleTheme } from "../Redux/Features/themeSlice";
// import { fetchTasks } from "../Redux/Features/taskSlice";

const TaskApp = () => {
  const dispatch = useDispatch();
  // const darkMode = useSelector((state) => state.theme.darkMode);
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  // 🔹 Fetch tasks after successful login
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(fetchTasks());
    }
  }, [isAuthenticated, dispatch]);

  return (
    <div
      style={{
        // background: darkMode ? "#333" : "#fff",
        // color: darkMode ? "#fff" : "#000",
        height: "100vh",
        padding: "20px",
      }}
    >
      {/* <button onClick={() => dispatch(toggleTheme())}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button> */}

      {loading && <p>Loading...</p>}

      {!isAuthenticated && !loading && <Login />}

      {isAuthenticated && <TaskList />}
    </div>
  );
};

export default TaskApp;
