import { FunctionComponent } from "react";
import styles from "./OldPhone.module.css";

const OldPhone: FunctionComponent = () => {
  return (
    <div className={styles.oldPhone}>
      <section className={styles.frameRoot}>
        <header className={styles.statusBar}>
          <img className={styles.statusBarBg} alt="" />
          <div className={styles.carrier}>
            <div className={styles.timeFrame}>Teamzr</div>
          </div>
          <div className={styles.appbarMenuInstance}>
            <img
              className={styles.wifiIcon}
              loading="eager"
              alt=""
              src="/wifi@2x.png"
            />
            <div className={styles.rectangleFrame}>
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
              <div className={styles.textTimeInstance}>12:30</div>
            </div>
          </div>
        </header>
        <div className={styles.appbarmenu}>
          <div className={styles.appBarItems}>
            <div className={styles.rect} />
          </div>
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
          <div className={styles.bottomNavigationInstance}>
            <div className={styles.appBartitlenormal}>
              <div className={styles.typography}>
                <h2 className={styles.news}>Chats</h2>
              </div>
            </div>
          </div>
          <div className={styles.appBarMenu}>
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
        </div>
      </section>
      <section className={styles.floatingActionButton}>
        <div className={styles.fabWrapper}>
          <div className={styles.fab}>
            <div className={styles.masterroundsmall}>
              <img className={styles.icons2} alt="" src="/icons-8.svg" />
            </div>
          </div>
        </div>
        <footer className={styles.bottomNavigation}>
          <div className={styles.bottomNavigation1}>
            <div className={styles.content}>
              <img className={styles.icons3} alt="" src="/icons-10.svg" />
              <div className={styles.tabOne}>Explore</div>
            </div>
          </div>
          <div className={styles.bottomNavigation2}>
            <div className={styles.content1}>
              <img className={styles.icons4} alt="" src="/icons-11.svg" />
              <div className={styles.tabOne1}>My plans</div>
            </div>
          </div>
          <div className={styles.bottomNavigation3}>
            <div className={styles.content2}>
              <img className={styles.icons5} alt="" src="/icons-12.svg" />
              <div className={styles.tabOne2}>Chats</div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default OldPhone;
