import { useEffect, useState } from "react";
import styles from '../common/Reply/replyStyle.module.scss'

const DateTime = ({ createdAt }) => {

const [formattedDateTime, setFormattedDateTime] = useState("");

useEffect(() => {
  const formatDateTime = () => {
    const createdAtDate = new Date(createdAt);

    // Format options
    const options = {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const formattedDateTimeString = createdAtDate.toLocaleString(
      "zh-TW",
      options
    );
    setFormattedDateTime(formattedDateTimeString);
  };

  formatDateTime();
}, [createdAt]);


  return <span className={styles.time}>{formattedDateTime}</span>;
}

export default DateTime