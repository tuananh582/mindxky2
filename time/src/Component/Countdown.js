import { useState, useEffect } from "react";
import "./Countdown.css";

function Countdown({ targetDate }) {
  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, [targetDate]);

  function calculateRemainingTime() {
    const difference = +new Date(targetDate) - +new Date();
    const remaining = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    return remaining;
  }

  return (
    <div className="countdown">
      <div className="countdown-item">
        <div className="countdown-value">{remainingTime.days}</div>
        <div className="countdown-label">Days</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{remainingTime.hours}</div>
        <div className="countdown-label">Hours</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{remainingTime.minutes}</div>
        <div className="countdown-label">Minutes</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">{remainingTime.seconds}</div>
        <div className="countdown-label">Seconds</div>
      </div>
    </div>
  );
}

export default Countdown;
