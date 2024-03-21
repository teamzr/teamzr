import { FunctionComponent } from "react";
import styles from "./IPhone11ProMax.module.css";

const IPhone11ProMax: FunctionComponent = () => {
  return (
    <div className={styles.iphone11ProMax1}>
      <section className={styles.frameParent}>
        <div className={styles.statusBar}>
          <img className={styles.statusBarBg} alt="" />
          <div className={styles.carrier}>
            <div className={styles.div}>Teamzr</div>
          </div>
          <div className={styles.batteryFrame}>
            <img
              className={styles.wifiIcon}
              loading="eager"
              alt=""
              src="/wifi@2x.png"
            />
            <div className={styles.appbarMenuInstance}>
              <img
                className={styles.receptionIcon}
                loading="eager"
                alt=""
                src="/reception.svg"
              />
            </div>
            <img
              className={styles.batteryIcon}
              loading="eager"
              alt=""
              src="/battery.svg"
            />
            <div className={styles.time}>
              <div className={styles.contentFrame}>12:30</div>
            </div>
          </div>
        </div>
        <header className={styles.appbarmenu}>
          <div className={styles.appBarItems}>
            <div className={styles.rect} />
          </div>
          <div className={styles.appBarIconButton}>
            <div className={styles.appBarnavigationIcon}>
              <div className={styles.iconButtonlargeprimarydefa}>
                <img
                  className={styles.avatarIcon}
                  loading="eager"
                  alt=""
                  src="/avatar@2x.png"
                />
              </div>
            </div>
            <div className={styles.appBartitlenormal}>
              <div className={styles.typography}>
                <h3 className={styles.news}>Chats</h3>
              </div>
            </div>
          </div>
          <div className={styles.appBaroverflowIconParent}>
            <div className={styles.appBaroverflowIcon}>
              <div className={styles.iconButtonlargeprimarydefa1}>
                <div className={styles.masterlarge}>
                  <img
                    className={styles.icons}
                    loading="eager"
                    alt=""
                    src="/icons.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.masterlarge1}>
              <img className={styles.icons1} alt="" src="/icons-1.svg" />
            </div>
          </div>
        </header>
      </section>
      <div className={styles.cardWrapper}>
        <div className={styles.card}>
          <div className={styles.cardBackground} />
          <img className={styles.icons2} alt="" src="/icons-13.svg" />
          <h3 className={styles.heading}>
            7 Skills of Highly Effective Programmers
          </h3>
          <div className={styles.weeks}>8 weeks</div>
          <div className={styles.groupParent}>
            <img
              className={styles.groupIcon}
              loading="eager"
              alt=""
              src="/group.svg"
            />
            <div className={styles.div1}>(1433)</div>
          </div>
        </div>
      </div>
      <section className={styles.frameGroup}>
        <div className={styles.fabWrapper}>
          <div className={styles.fab}>
            <div className={styles.masterroundsmall}>
              <img className={styles.icons3} alt="" src="/icons-8.svg" />
            </div>
          </div>
        </div>
        <footer className={styles.bottomNavigation}>
          <div className={styles.bottomNavigation1}>
            <div className={styles.content}>
              <img className={styles.icons4} alt="" src="/icons-10.svg" />
              <div className={styles.tabOne}>Explore</div>
            </div>
          </div>
          <div className={styles.bottomNavigation2}>
            <div className={styles.content1}>
              <img className={styles.icons5} alt="" src="/icons-11.svg" />
              <div className={styles.tabOne1}>My plans</div>
            </div>
          </div>
          <div className={styles.bottomNavigation3}>
            <div className={styles.content2}>
              <img className={styles.icons6} alt="" src="/icons-12.svg" />
              <div className={styles.tabOne2}>Chats</div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default IPhone11ProMax;
