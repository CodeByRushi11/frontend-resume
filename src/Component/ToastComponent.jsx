import React, { useEffect, useState } from "react";
import "./ToastComponent.scss";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "reactstrap";
import { removeToast } from "../Redux/Features/toastSlice";

const ToastComponent = () => {
  const toasts = useSelector((state) => state.toast);
  const dispatch = useDispatch();
  const AUTO_CLOSE_TIME = 5000; // Auto close after 5 seconds

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          dispatch={dispatch}
          duration={AUTO_CLOSE_TIME}
        />
      ))}
    </div>
  );
};

// Separate ToastItem component for handling countdown timer
const ToastItem = ({ toast, dispatch, duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration / 1000);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(removeToast(toast.id));
    }, duration);

    const countdown = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdown);
    };
  }, [dispatch, toast.id, duration]);

  return (
    <div className={`toast show row ${toast.type}`}>
      <div className="col-lg-6 toast-Message">
        <span>{toast.message}</span>

        <Button
          className="close-btn"
          onClick={() => dispatch(removeToast(toast.id))}
        >
          x
        </Button>
      </div>
      <div className="col-lg-6">
        <div className="toast-timer">Time Reamaing {timeLeft}s</div>
      </div>
    </div>
  );
};

export default ToastComponent;
