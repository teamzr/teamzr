import { FunctionComponent } from "react";
import styles from "./BadgeKrokSp.module.css";

const BadgeKrokSp: FunctionComponent = () => {
  return (
    <div className={styles.badgekrokSp}>
      <img
        className={styles.krokspIcon}
        loading="eager"
        alt=""
        src="/kroksp.svg"
      />
      <img className={styles.badgeIcon} alt="" />
    </div>
  );
};

export default BadgeKrokSp;
