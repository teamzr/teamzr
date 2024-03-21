import { FunctionComponent } from "react";
import styles from "./OptionsPlan.module.css";

export type OptionsPlanType = {
  onClose?: () => void;
};

const OptionsPlan: FunctionComponent<OptionsPlanType> = ({ onClose }) => {
  return (
    <div className={styles.optionsPlan}>
      <div className={styles.optionsMenu}>
        <div className={styles.mastersufixiconButton}>
          <div className={styles.iconButtonmediumprimarydef}>
            <div className={styles.mastermedium}>
              <img
                className={styles.icons}
                loading="eager"
                alt=""
                src="/icons.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.edit}>Edit</div>
      </div>
      <img
        className={styles.dividerIcon}
        loading="eager"
        alt=""
        src="/divider2.svg"
      />
      <div className={styles.optionsMenu1}>
        <div className={styles.mastersufixiconButton1}>
          <div className={styles.iconButtonmediumprimarydef1}>
            <div className={styles.mastermedium1}>
              <img
                className={styles.icons1}
                loading="eager"
                alt=""
                src="/icons-15.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.publish}>publish</div>
      </div>
      <img
        className={styles.dividerIcon1}
        loading="eager"
        alt=""
        src="/divider2.svg"
      />
      <div className={styles.optionsMenu2}>
        <div className={styles.mastersufixiconButton2}>
          <div className={styles.iconButtonmediumprimarydef2}>
            <div className={styles.mastermedium2}>
              <img
                className={styles.icons2}
                loading="eager"
                alt=""
                src="/icons-27.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.createACopy}>create a copy</div>
      </div>
      <img
        className={styles.dividerIcon2}
        loading="eager"
        alt=""
        src="/divider2.svg"
      />
      <div className={styles.optionsMenu3}>
        <div className={styles.mastersufixiconButton3}>
          <div className={styles.iconButtonmediumprimarydef3}>
            <div className={styles.mastermedium3}>
              <img
                className={styles.icons3}
                loading="eager"
                alt=""
                src="/icons-32.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.delete}>delete</div>
      </div>
      <img
        className={styles.dividerIcon3}
        loading="eager"
        alt=""
        src="/divider2.svg"
      />
      <footer className={styles.optionsMenu4}>
        <div className={styles.mastersufixiconButton4}>
          <div className={styles.iconButtonmediumprimarydef4}>
            <div className={styles.mastermedium4}>
              <img
                className={styles.icons4}
                loading="eager"
                alt=""
                src="/icons-44.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.more}>More</div>
      </footer>
    </div>
  );
};

export default OptionsPlan;
