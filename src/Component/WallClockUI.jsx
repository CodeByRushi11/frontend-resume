import React, { useEffect, useState } from "react";
import "./WallClockUI.scss";

const WallClockUI = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Calculate hand rotations with smooth transitions
  const getHourRotation = () => {
    const hours = time.getHours() % 12;
    const minutes = time.getMinutes();
    return hours * 30 + minutes * 0.5; // 30 degrees per hour + 0.5 degrees per minute
  };

  const getMinuteRotation = () => {
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    return minutes * 6 + seconds * 0.1; // 6 degrees per minute + 0.1 degrees per second
  };

  const getSecondRotation = () => {
    return time.getSeconds() * 6; // 6 degrees per second
  };

  return (
    <div className="wall-clock-container">
      <div className="clock-mount">
        <div className="mount-top"></div>
        <div className="mount-chain"></div>
      </div>

      <div className="clock-body">
        <div className="clock-frame">
          <div className="clock-face">
            {/* Hour markers */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className={`hour-marker marker-${i + 1}`}>
                <span className="hour-number">{i + 1}</span>
              </div>
            ))}

            {/* Minute markers */}
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={i}
                className={`minute-marker ${i % 5 === 0 ? "major" : "minor"}`}
                style={{ transform: `rotate(${i * 6}deg)` }}
              />
            ))}

            {/* Clock hands */}
            <div className="hands-container">
              <div
                className="hand hour-hand"
                style={{ transform: `rotate(${getHourRotation()}deg)` }}
              />
              <div
                className="hand minute-hand"
                style={{ transform: `rotate(${getMinuteRotation()}deg)` }}
              />
              <div
                className="hand second-hand"
                style={{ transform: `rotate(${getSecondRotation()}deg)` }}
              />
            </div>

            {/* Center assembly */}
            <div className="center-assembly">
              <div className="center-nut"></div>
              <div className="center-cap"></div>
              <div className="center-pin"></div>
            </div>

            {/* Brand logo */}
            <div className="brand-logo">
              <span>CLASSIC</span>
              <span>TIME</span>
            </div>
          </div>
        </div>
      </div>

      {/* Digital display */}
      <div className="digital-display">
        <div className="date-display">
          {time.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <div className="time-display">
          {time.toLocaleTimeString("en-US", {
            hour12: true,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
};

export default WallClockUI;
