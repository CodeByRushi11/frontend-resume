import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, fetchTasks, addTask } from "../Redux/Features/taskSlicer";
import { addToast } from "../Redux/Features/toastSlice"; // Import toast action
import ToastComponent from "./ToastComponent"; // Import toast component
import "./taskList.scss"; // Import the SCSS file

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, loading } = useSelector((state) => state.tasks);
  const [taskName, setTaskName] = useState("");

  useEffect(() => {
    dispatch(fetchTasks()); // Fetch tasks when component loads
  }, [dispatch]);

  const handleAddTask = () => {
    if (taskName.trim()) {
      dispatch(addTask({ name: taskName }));
      dispatch(
        addToast({ message: "Task added successfully!", type: "success" })
      ); // Show success toast
      setTaskName(""); // Clear input after adding task
    }
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
    dispatch(
      addToast({ message: "Task deleted successfully!", type: "delete" })
    ); // Show success toast
  };

  if (loading) return <p className="loading-message">Loading...</p>;

  return (
    <div className="task-list-container">
      <h2>Task List</h2>

      {/* Add Task Section */}
      <div className="add-task-section">
        <input
          autoComplete="off"
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      {/* Task List */}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Toast Notifications */}
      <ToastComponent />
    </div>
  );
};

export default TaskList;
