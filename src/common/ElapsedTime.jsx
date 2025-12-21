import { useEffect, useState } from "react";

const ElapsedTime = ({ createdAt }) => {
  const [elapsedTime, setElapsedTime] = useState("");

  useEffect(() => {
    const calculateElapsedTime = () => {
      const createdAtDate = new Date(createdAt);
      const now = new Date();

      const elapsedMilliseconds = now - createdAtDate;
      const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
      const elapsedMinutes = Math.floor(elapsedSeconds / 60);
      const elapsedHours = Math.floor(elapsedMinutes / 60);
      const elapsedDays = Math.floor(elapsedHours / 24);

      let elapsedTimeString = "";

      if (elapsedDays > 0) {
        elapsedTimeString = `${elapsedDays}d`;
      } else if (elapsedHours > 0) {
        elapsedTimeString = `${elapsedHours}h`;
      } else if (elapsedMinutes > 0) {
        elapsedTimeString = `${elapsedMinutes}m`;
      } else {
        elapsedTimeString = `${elapsedSeconds}s`;
      }

      setElapsedTime(elapsedTimeString);
    };

    calculateElapsedTime();
  }, [createdAt]);

  return <span>{elapsedTime}</span>;
}


export default ElapsedTime
