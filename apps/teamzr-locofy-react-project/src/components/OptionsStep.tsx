import { FunctionComponent } from "react";
import styles from "./OptionsStep.module.css";

export type OptionsStepType = {
  onClose?: () => void;
};

const OptionsStep: FunctionComponent<OptionsStepType> = ({ onClose }) => {
  return (
    <div className={styles.optionsStep}>
      <div className={styles.frameRoot}>
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
      <header className={styles.frameRoot1}>
        <div className={styles.mastersufixiconButton1}>
          <div className={styles.iconButtonmediumprimarydef1}>
            <div className={styles.mastermedium1}>
              <img className={styles.icons1} alt="" src="/icons-27.svg" />
            </div>
          </div>
        </div>
        <div className={styles.createACopy}>create a copy</div>
      </header>
      <img className={styles.dividerIcon1} alt="" src="/divider2.svg" />
      <div className={styles.frameRoot2}>
        <div className={styles.mastersufixiconButton2}>
          <div className={styles.iconButtonmediumprimarydef2}>
            <div className={styles.mastermedium2}>
              <img className={styles.icons2} alt="" src="/icons-32.svg" />
            </div>
          </div>
        </div>
        <div className={styles.remove}>remove</div>
      </div>
      <img className={styles.dividerIcon2} alt="" src="/divider2.svg" />
      <div className={styles.frameRoot3}>
        <div className={styles.mastersufixiconButton3}>
          <div className={styles.iconButtonmediumprimarydef3}>
            <div className={styles.mastermedium3}>
              <img className={styles.icons3} alt="" src="/icons-33.svg" />
            </div>
          </div>
        </div>
        <div className={styles.markAsLast}>mark as last</div>
      </div>
      <img className={styles.dividerIcon3} alt="" src="/divider2.svg" />
      <footer className={styles.frameRoot4}>
        <div className={styles.mastersufixiconButton4}>
          <div className={styles.iconButtonmediumprimarydef4}>
            <div className={styles.mastermedium4}>
              <img className={styles.icons4} alt="" src="/icons-44.svg" />
            </div>
          </div>
        </div>
        <div className={styles.more}>More</div>
      </footer>
    </div>
  );
};

export default OptionsStep;
