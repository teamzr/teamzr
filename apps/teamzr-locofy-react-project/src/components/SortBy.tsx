import { FunctionComponent } from "react";
import styles from "./SortBy.module.css";

export type SortByType = {
  onClose?: () => void;
};

const SortBy: FunctionComponent<SortByType> = ({ onClose }) => {
  return (
    <div className={styles.sortBy}>
      <div className={styles.iconButton}>
        <div className={styles.mastersmall}>
          <img className={styles.icons} alt="" />
        </div>
      </div>
      <div className={styles.frameList}>
        <div className={styles.text}>
          <div className={styles.randomText}>Sort by</div>
        </div>
      </div>
      <div className={styles.iconButton1}>
        <input className={styles.mastersmall1} type="checkbox" />
      </div>
      <div className={styles.iconButton2}>
        <input className={styles.mastersmall2} type="checkbox" />
      </div>
      <div className={styles.secondFrame}>
        <div className={styles.iconButton3}>
          <div className={styles.iconButton4}>
            <div className={styles.mastersmall3}>
              <img
                className={styles.icons1}
                loading="eager"
                alt=""
                src="/icons-31.svg"
              />
            </div>
          </div>
          <div className={styles.frameWithText}>
            <div className={styles.text1}>
              <div className={styles.randomText1}>Alphabetical</div>
            </div>
            <div className={styles.text2}>
              <div className={styles.randomText2}>Date created</div>
            </div>
            <div className={styles.text3}>
              <div className={styles.randomText3}>Date modified</div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={styles.dividerIcon}
        loading="eager"
        alt=""
        src="/divider1.svg"
      />
      <div className={styles.iconButton5}>
        <div className={styles.mastersmall4}>
          <img className={styles.icons2} alt="" />
        </div>
      </div>
      <div className={styles.frameList1}>
        <div className={styles.text4}>
          <div className={styles.randomText4}>Order</div>
        </div>
      </div>
      <div className={styles.iconButton6}>
        <input className={styles.mastersmall5} type="checkbox" />
      </div>
      <div className={styles.thirdFrame}>
        <div className={styles.iconButtonWithText}>
          <div className={styles.iconButton7}>
            <div className={styles.mastersmall6}>
              <img
                className={styles.icons3}
                loading="eager"
                alt=""
                src="/icons-31.svg"
              />
            </div>
          </div>
          <div className={styles.fifthFrame}>
            <div className={styles.text5}>
              <div className={styles.randomText5}>Ascending</div>
            </div>
            <div className={styles.text6}>
              <div className={styles.randomText6}>Descending</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortBy;
