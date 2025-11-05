import React from "react";
import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Redux/Counter/counterSlice";

const CounterRedux = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Button
        color="danger"
        style={{ borderRadius: "4px", padding: "8px" }}
        onClick={() => dispatch(decrement())}
        aria-label="Decrement value"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M200-440v-80h560v80H200Z" />
        </svg>
      </Button>

      <span style={{ fontSize: "20px", fontWeight: "bold" }}>{count}</span>

      <Button
        color="success"
        style={{ borderRadius: "4px", padding: "8px" }}
        onClick={() => dispatch(increment())}
        aria-label="Increment value"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e3e3e3"
        >
          <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
      </Button>
    </div>
  );
};

export default CounterRedux;
// import { useEffect, useState } from "react";

// const CounterRedux = () => {
//   const [tasks, setTasks] = useState([]);
//   const api_url = "http://localhost:5000/tasks";

//   const FetchAllData = async () => {
//     try {
//       const response = await fetch(api_url, {
//         method: "GET",
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }

//       const json = await response.json();
//       console.log("Fetched all tasks:", json);
//       setTasks(json);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       setTasks([]);
//     }
//   };

//   useEffect(() => {
//     FetchAllData();
//   }, []);

//   return (
//     <ul>
//       {tasks.map((task) => (
//         <li key={task.id}>{task.name}</li>
//       ))}
//     </ul>
//   );
// };

// export default CounterRedux;
