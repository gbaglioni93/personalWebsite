import React from "react";
import DateTimeDisplay from "./DateTimeDisplay";
import { useCountdown } from "./useCountdown";
import "./css/countdown.css";

const ShowCounter = ({ years, days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter">
      <DateTimeDisplay value={years} type={"Year"} />
      <DateTimeDisplay value={days} type={"Day"} />
      <DateTimeDisplay value={hours} type={"Hour"} />
      <DateTimeDisplay value={minutes} type={"Minute"} />
      <DateTimeDisplay value={seconds} type={"Second"} />
    </div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [years, days, hours, minutes, seconds] = useCountdown(targetDate);

  if (years + days + hours + minutes + seconds <= 0) {
    return "Expired Notice";
  } else {
    return (
      <ShowCounter
        years={years}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
