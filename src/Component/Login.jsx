// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../Redux/Features/authSlice";
// import "./login.scss";
// import { addTask } from "../Redux/Features/taskSlicer";

// const Login = () => {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const dispatch = useDispatch();
//   const { error, isAuthenticated } = useSelector((state) => state.auth);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(loginUser(credentials));
//   };
//   useEffect(() => {
//     fetchTask();
//   }, []);

//   const api_url = "http://localhost:5000/tasks";
//   const fetchTask = async () => {
//     try {
//       const response = await fetch(api_url, {
//         method: "GET",
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       });
//       const json = await response.json();
//       console.log("Fethc all Tasked", json);
//     } catch (error) {
//       console.error("Error on Fetching Task");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login Task</h2>
//       {error && <p className="error-message">{error}</p>}
//       {isAuthenticated && <p className="success-message">Login successful!</p>}

//       <form onSubmit={handleSubmit}>
//         <input
//           // autoComplete="off"
//           type="email"
//           placeholder="Email"
//           onChange={(e) =>
//             setCredentials({ ...credentials, email: e.target.value })
//           }
//         />
//         <input
//           // autoComplete="off"
//           type="password"
//           placeholder="Password"
//           onChange={(e) =>
//             setCredentials({ ...credentials, password: e.target.value })
//           }
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Redux/Features/authSlice";
import { addToast } from "../Redux/Features/toastSlice"; // Import toast action
import ToastComponent from "./ToastComponent"; // Import toast component
import "./Login.scss";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const { error, isAuthenticated } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };

  // Show toast when login fails (error)
  useEffect(() => {
    if (error) {
      dispatch(addToast({ message: error, type: "error" })); // Show error toast
    }
  }, [error, dispatch]);

  // Show toast when login is successful
  useEffect(() => {
    if (isAuthenticated) {
      dispatch(addToast({ message: "Login successful!", type: "success" })); // Show success toast
    }
  }, [isAuthenticated, dispatch]);

  return (
    <div className="login-container">
      <h2>Login Task</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setCredentials({ ...credentials, email: e.target.value })
          }
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>

      {/* Toast Notifications */}
      <ToastComponent />
    </div>
  );
};

export default Login;
