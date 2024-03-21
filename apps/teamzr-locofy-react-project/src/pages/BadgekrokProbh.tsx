import { FunctionComponent } from "react";
import styles from "./BadgekrokProbh.module.css";

const BadgekrokProbh: FunctionComponent = () => {
  return (
    <div className={styles.badgekrokProbh}>
      <div className={styles.frameContainer}>
        <img
          className={styles.frameContainerChild}
          alt=""
          src="/ellipse-4.svg"
        />
        <img
          className={styles.path25Icon}
          loading="eager"
          alt=""
          src="/path-25.svg"
        />
      </div>
      <img className={styles.badgeIcon} alt="" />
    </div>
  );
};

export default BadgekrokProbh;
