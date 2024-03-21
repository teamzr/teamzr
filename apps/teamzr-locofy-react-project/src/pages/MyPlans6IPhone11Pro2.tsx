import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MyPlans6IPhone11Pro2.module.css";

const MyPlans6IPhone11Pro2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAppBarnavigationIconContainerClick = useCallback(() => {
    navigate("/myplan-excel");
  }, [navigate]);

  return (
    <div className={styles.myPlans6Iphone11Pro}>
      <div className={styles.statusBar}>
        <img className={styles.statusBarBg} alt="" />
        <div className={styles.carrier}>
          <div className={styles.textFrame}>Teamzr</div>
        </div>
        <div className={styles.instance}>
          <img
            className={styles.wifiIcon}
            loading="eager"
            alt=""
            src="/wifi@2x.png"
          />
          <div className={styles.receptionWrapper}>
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
            <div className={styles.appBarMenu}>12:30</div>
          </div>
        </div>
      </div>
      <section className={styles.appbarFrame}>
        <div className={styles.appbarmenu}>
          <div className={styles.appBarItems}>
            <div className={styles.rect} />
          </div>
          <div className={styles.appBarnavigationIconWrapper}>
            <div
              className={styles.appBarnavigationIcon}
              onClick={onAppBarnavigationIconContainerClick}
            >
              <div className={styles.iconButtonlargeprimarydefa}>
                <div className={styles.masterlarge}>
                  <img
                    className={styles.icons}
                    loading="eager"
                    alt=""
                    src="/icons1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.appBartitlenormal}>
            <div className={styles.typography}>
              <b className={styles.stepNrStep}>Pivot table (1)</b>
            </div>
          </div>
          <div className={styles.masterlarge1}>
            <div className={styles.iconButtonlargeprimarydefa1}>
              <div className={styles.masterlarge2}>
                <img className={styles.icons1} alt="" src="/icons-14.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.commentsHeaderResize}>
          <div className={styles.stepper}>
            <div className={styles.tab}>
              <div className={styles.mastertexthorizontal}>
                <img className={styles.masterelementslineIcon} alt="" />
                <div className={styles.masterelementstextdefault}>
                  <div className={styles.tabContent}>DETAIL</div>
                </div>
              </div>
            </div>
            <div className={styles.tab1}>
              <div className={styles.mastertexthorizontal1}>
                <img className={styles.masterelementslineIcon1} alt="" />
                <div className={styles.masterelementstextdefault1}>
                  <div className={styles.tabContent1}>progress</div>
                </div>
              </div>
            </div>
            <div className={styles.tab2}>
              <div className={styles.mastertexthorizontal2}>
                <div className={styles.masterelementstextdefault2}>
                  <div className={styles.tabContent2}>Overview</div>
                </div>
                <img
                  className={styles.masterelementslineIcon2}
                  loading="eager"
                  alt=""
                  src="/masterelementsline.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.masterElementTextDefault}>
          <div className={styles.pythagoreanTheoremFrame}>
            <div className={styles.typography1}>
              <div className={styles.subtitle3}>Step fullfilment</div>
            </div>
            <div className={styles.pythagoreamTheorem1}>
              Pythagoream theorem 1
            </div>
            <div className={styles.pythagoreamTheorem2}>
              Pythagoream theorem 2
            </div>
          </div>
        </div>
      </section>
      <div className={styles.fab}>
        <div className={styles.masterroundsmall}>
          <img className={styles.icons2} alt="" />
        </div>
      </div>
      <div className={styles.bottomNavigation}>
        <div className={styles.bottomNavigation1}>
          <div className={styles.content}>
            <img className={styles.icons3} alt="" />
            <div className={styles.tabOne}>Explore</div>
          </div>
        </div>
        <div className={styles.bottomNavigation2}>
          <div className={styles.content1}>
            <img className={styles.icons4} alt="" />
            <div className={styles.tabOne1}>My plans</div>
          </div>
        </div>
        <div className={styles.bottomNavigation3}>
          <div className={styles.content2}>
            <img className={styles.icons5} alt="" />
            <div className={styles.tabOne2}>Chats</div>
          </div>
        </div>
      </div>
      <footer className={styles.frameTabContent}>
        <div className={styles.typographyInfo}>
          <div className={styles.statusBarFrame}>
            <div className={styles.pythagoreanTheoremFrame1}>
              <div className={styles.typography2}>
                <div className={styles.subtitle31}>Rating</div>
              </div>
            </div>
            <div className={styles.overallInfoFrame}>
              <div className={styles.overall}>Overall</div>
              <div className={styles.ratingLargeFullDefault}>
                <div className={styles.ratingset}>
                  <img
                    className={styles.ratinglargefullDefaultIcon}
                    loading="eager"
                    alt=""
                    src="/ratinglargefulldefault.svg"
                  />
                  <img
                    className={styles.ratinglargefullDefaultIcon1}
                    alt=""
                    src="/ratinglargefulldefault.svg"
                  />
                  <img
                    className={styles.ratinglargeinactiveIcon}
                    loading="eager"
                    alt=""
                    src="/ratinglargefulldefault.svg"
                  />
                  <img
                    className={styles.ratinglargeinactiveIcon1}
                    alt=""
                    src="/ratinglargefulldefault.svg"
                  />
                  <img
                    className={styles.ratinglargeinactiveIcon2}
                    alt=""
                    src="/ratinglargefulldefault.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.individualRatingsFrame}>
              <div className={styles.individual}>Individual</div>
              <div className={styles.ratingMediumFrame}>
                <div className={styles.ratingmediumfullDefaultParent}>
                  <img
                    className={styles.ratingmediumfullDefaultIcon}
                    alt=""
                    src="/ratingmediumfulldefault.svg"
                  />
                  <img
                    className={styles.ratingmediumfullDefaultIcon1}
                    alt=""
                    src="/ratingmediumfulldefault.svg"
                  />
                  <img
                    className={styles.ratingmediuminactiveIcon}
                    alt=""
                    src="/ratingmediumfulldefault.svg"
                  />
                  <img
                    className={styles.ratingmediuminactiveIcon1}
                    alt=""
                    src="/ratingmediumfulldefault.svg"
                  />
                  <img
                    className={styles.ratingmediuminactiveIcon2}
                    alt=""
                    src="/ratingmediumfulldefault.svg"
                  />
                  <img
                    className={styles.ratingmediumfullDefaultIcon2}
                    alt=""
                    src="/ratingmediumfulldefault.svg"
                  />
                  <img
                    className={styles.ratingmediumfullDefaultIcon3}
                    alt=""
                    src="/ratingmediumfulldefault.svg"
                  />
                  <img
                    className={styles.ratingmediuminactiveIcon3}
                    alt=""
                    src="/ratingmediumfulldefault.svg"
                  />
                  <img
                    className={styles.ratingmediuminactiveIcon4}
                    alt=""
                    src="/ratingmediumfulldefault.svg"
                  />
                  <img
                    className={styles.ratingmediuminactiveIcon5}
                    alt=""
                    src="/ratingmediuminactive-4.svg"
                  />
                  <img
                    className={styles.ratingmediumfullDefaultIcon4}
                    alt=""
                    src="/ratingmediumfulldefault.svg"
                  />
                  <img
                    className={styles.ratingmediumfullDefaultIcon5}
                    alt=""
                    src="/ratingmediumfulldefault.svg"
                  />
                  <img
                    className={styles.ratingmediuminactiveIcon6}
                    alt=""
                    src="/ratingmediumfulldefault.svg"
                  />
                  <img
                    className={styles.ratingmediuminactiveIcon7}
                    alt=""
                    src="/ratingmediuminactive-4.svg"
                  />
                  <img
                    className={styles.ratingmediuminactiveIcon8}
                    alt=""
                    src="/ratingmediuminactive-4.svg"
                  />
                  <img
                    className={styles.ratingmediumfullDefaultIcon6}
                    alt=""
                    src="/ratingmediumfulldefault.svg"
                  />
                  <img
                    className={styles.ratingmediumfullDefaultIcon7}
                    alt=""
                    src="/ratingmediumfulldefault.svg"
                  />
                  <img
                    className={styles.ratingmediuminactiveIcon9}
                    alt=""
                    src="/ratingmediuminactive-4.svg"
                  />
                  <img
                    className={styles.ratingmediuminactiveIcon10}
                    alt=""
                    src="/ratingmediuminactive-4.svg"
                  />
                  <img
                    className={styles.ratingmediuminactiveIcon11}
                    alt=""
                    src="/ratingmediuminactive-4.svg"
                  />
                  <img
                    className={styles.ratingmediumfullDefaultIcon8}
                    alt=""
                    src="/ratingmediumfulldefault.svg"
                  />
                  <img
                    className={styles.ratingmediumfullDefaultIcon9}
                    alt=""
                    src="/ratingmediuminactive-4.svg"
                  />
                  <img
                    className={styles.ratingmediuminactiveIcon12}
                    alt=""
                    src="/ratingmediuminactive-4.svg"
                  />
                  <img
                    className={styles.ratingmediuminactiveIcon13}
                    alt=""
                    src="/ratingmediuminactive-4.svg"
                  />
                  <img
                    className={styles.ratingmediuminactiveIcon14}
                    alt=""
                    src="/ratingmediuminactive-4.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.comments}>
            <div className={styles.headerResize}>
              <div className={styles.header}>
                <div className={styles.comments1}>Comments</div>
              </div>
              <img className={styles.vectorIcon} alt="" />
            </div>
          </div>
          <div className={styles.typography3}>
            <div className={styles.subtitle32}>Attachments</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MyPlans6IPhone11Pro2;
