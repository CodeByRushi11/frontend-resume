import React, { useEffect, useState } from "react";
import "./WallClockUI.scss";

const WallClockUI = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const getHourRotation = () => {
    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();
    return hours * 30 + minutes * 0.5;
  };

  const getMinuteRotation = () => {
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return minutes * 6 + seconds * 0.1;
  };

  const getSecondRotation = () => time.getSeconds() * 6;

  const formatTime = () => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const twelveHour = hours % 12 || 12;
    return `${twelveHour.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${ampm}`;
  };

  const formatDate = () =>
    time.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div className="modern-wall-clock">
      <div className="clock">
        <div className="clock-face">
          {/* Clock Hands */}
          <div
            className="hand hour"
            style={{ transform: `rotate(${getHourRotation()}deg)` }}
          />
          <div
            className="hand minute"
            style={{ transform: `rotate(${getMinuteRotation()}deg)` }}
          />
          <div
            className="hand second"
            style={{ transform: `rotate(${getSecondRotation()}deg)` }}
          />
          {/* Center Dot */}
          <div className="center-dot"></div>

          {/* Hour Markers */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="hour-marker"
              style={{ transform: `rotate(${i * 30}deg)` }}
            >
              <div className="marker-line"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="digital-section">
        <div className="date-text">{formatDate()}</div>
        <div className="time-text">{formatTime()}</div>
      </div>
    </div>
  );
};

export default WallClockUI;
