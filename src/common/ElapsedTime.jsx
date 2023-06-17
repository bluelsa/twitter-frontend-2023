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
        elapsedTimeString = `${elapsedDays} 天`;
      } else if (elapsedHours > 0) {
        elapsedTimeString = `${elapsedHours} 小時 `;
      } else if (elapsedMinutes > 0) {
        elapsedTimeString = `${elapsedMinutes} 分鐘`;
      } else {
        elapsedTimeString = `${elapsedSeconds} 秒 `;
      }

      setElapsedTime(elapsedTimeString);
    };

    calculateElapsedTime();
  }, [createdAt]);

  return <span>{elapsedTime}</span>;
}


export default ElapsedTime