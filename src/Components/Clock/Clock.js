import { useState, useEffect } from "react";
import "./style.css";
import { ReactComponent as ClockIcon } from "../../Assets/icons/clock.svg";
import { ReactComponent as CalenderIcon } from "../../Assets/icons/calendar.svg";

// import Clock from "react-live-clock";

function Clock() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 10);
  }, []);

  return (
    <div className="home">
      <CalenderIcon className="icon" />
      <p>
        {" "}
        {dateState.toLocaleDateString("tr-TR", {
          day: "numeric",
          month: "short",
          year: "numeric",
        })}
      </p>
      <ClockIcon className="icon" />
      <p className="clock">
        {dateState.toLocaleString("tr-TR", {
          hour: "numeric",
          minute: "numeric",
          second: "2-digit",
          hour24: true,
        })}
      </p>
    </div>
  );
}

export default Clock;
