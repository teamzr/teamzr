import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MyPlans5IPhone11Pro.module.css";

const MyPlans5IPhone11Pro: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAppBarnavigationIconContainerClick = useCallback(() => {
    navigate("/myplan-excel");
  }, [navigate]);

  const onFulfillmentsetframesandtextClick = useCallback(() => {
    navigate("/my-plans-5-iphone-11-pro");
  }, [navigate]);

  return (
    <div className={styles.myPlans5Iphone11Pro}>
      <div className={styles.appFrame}>
        <div className={styles.statusBarBackground}>
          <div className={styles.statusBar}>
            <img className={styles.statusBarBg} alt="" />
            <div className={styles.carrier}>
              <div className={styles.appbarMenuInstance}>Teamzr</div>
            </div>
            <div className={styles.appTitleNormal}>
              <img
                className={styles.wifiIcon}
                loading="eager"
                alt=""
                src="/wifi@2x.png"
              />
              <div className={styles.wifiFrame}>
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
                <div className={styles.tabMasterText}>12:30</div>
              </div>
            </div>
          </div>
          <div className={styles.appbarmenu}>
            <div className={styles.appBarItems}>
              <div className={styles.rect} />
            </div>
            <div className={styles.appbarItemsInstance}>
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
                <b className={styles.stepNrStep}>Named ranges + formatting</b>
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
        </div>
        <div className={styles.stepper}>
          <div className={styles.tab}>
            <div className={styles.mastertexthorizontal}>
              <img className={styles.masterelementslineIcon} alt="" />
              <div className={styles.masterelementstextdefault}>
                <div className={styles.tabContent}>Detail</div>
              </div>
            </div>
          </div>
          <div className={styles.tab1}>
            <div className={styles.mastertexthorizontal1}>
              <div className={styles.masterelementstextdefault1}>
                <div className={styles.tabContent1}>progress</div>
              </div>
              <img
                className={styles.masterelementslineIcon1}
                loading="eager"
                alt=""
                src="/masterelementsline.svg"
              />
            </div>
          </div>
          <div className={styles.tab2}>
            <div className={styles.mastertexthorizontal2}>
              <img className={styles.masterelementslineIcon2} alt="" />
              <div className={styles.masterelementstextdefault2}>
                <div className={styles.tabContent2}>Overview</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <main className={styles.frameFulfillmentSet}>
        <section
          className={styles.fulfillmentsetframesandtext}
          onClick={onFulfillmentsetframesandtextClick}
        >
          <div className={styles.fulfillmentsetframesandtext1}>
            <div className={styles.typography1}>
              <div className={styles.subtitle3}>Your fullfilment</div>
            </div>
          </div>
          <div className={styles.fulfillmentsetframesandtext2}>
            <div className={styles.ratingSETInstance}>
              <div className={styles.fulfillmentset}>
                <div className={styles.pythagoreamTheorem}>Named ranges 1</div>
                <div className={styles.fulfillmentsetEmpty}>
                  <button className={styles.fulfillmentfailedEmpty}>
                    <div className={styles.failed}>Failed</div>
                  </button>
                  <button className={styles.fulfillmentsucceededEmpty}>
                    <div className={styles.succeeded}>Succeeded</div>
                  </button>
                  <button className={styles.fulfillmentunratedEmpty}>
                    <div className={styles.notRated}>Not rated</div>
                  </button>
                </div>
              </div>
              <div className={styles.fulfillmentset1}>
                <div className={styles.pythagoreamTheorem1}>Named ranges 2</div>
                <div className={styles.fulfillmentsetEmpty1}>
                  <button className={styles.fulfillmentfailedEmpty1}>
                    <div className={styles.failed1}>Failed</div>
                  </button>
                  <button className={styles.fulfillmentsucceededEmpty1}>
                    <div className={styles.succeeded1}>Succeeded</div>
                  </button>
                  <button className={styles.fulfillmentunratedEmpty1}>
                    <div className={styles.notRated1}>Not rated</div>
                  </button>
                </div>
              </div>
              <div className={styles.fulfillmentset2}>
                <div className={styles.pythagoreamTheorem2}>Formatting 1</div>
                <div className={styles.fulfillmentsetEmpty2}>
                  <button className={styles.fulfillmentfailedEmpty2}>
                    <div className={styles.failed2}>Failed</div>
                  </button>
                  <button className={styles.fulfillmentsucceededEmpty2}>
                    <div className={styles.succeeded2}>Succeeded</div>
                  </button>
                  <button className={styles.fulfillmentunratedEmpty2}>
                    <div className={styles.notRated2}>Not rated</div>
                  </button>
                </div>
              </div>
              <div className={styles.fulfillmentset3}>
                <div className={styles.pythagoreamTheorem3}>Formatting 2</div>
                <div className={styles.fulfillmentsetEmpty3}>
                  <button className={styles.fulfillmentfailedEmpty3}>
                    <div className={styles.failed3}>Failed</div>
                  </button>
                  <button className={styles.fulfillmentsucceededEmpty3}>
                    <div className={styles.succeeded3}>Succeeded</div>
                  </button>
                  <button className={styles.fulfillmentunratedEmpty3}>
                    <div className={styles.notRated3}>Not rated</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fulfillmentsetframesandtext3}>
            <div className={styles.typography2}>
              <div className={styles.subtitle31}>Your rating</div>
            </div>
          </div>
          <div className={styles.ratingSet}>
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
          <div className={styles.typography3}>
            <div className={styles.subtitle32}>Your comment</div>
          </div>
          <div className={styles.selectWrapper}>
            <footer className={styles.select}>
              <div className={styles.primitiveselectdefaultline}>
                <div className={styles.input}>
                  <div className={styles.inputField}>
                    <div className={styles.contentArea}>
                      <div className={styles.content3}>
                        <div className={styles.adornmentStart}>
                          <div className={styles.kg}>Kg</div>
                        </div>
                        <div className={styles.inputText}>
                          <div className={styles.nameYourStep}>
                            Tell others your feedback
                          </div>
                        </div>
                      </div>
                      <div className={styles.selectArrowLabel}>
                        <div className={styles.selectArrow}>
                          <div className={styles.underlineDecorator}>
                            0 / 150
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.label}>
                    <div className={styles.label1}>Label</div>
                  </div>
                  <img
                    className={styles.underlineIcon}
                    loading="eager"
                    alt=""
                    src="/underline.svg"
                  />
                </div>
                <div className={styles.helperText}>
                  <div className={styles.helperText1}>Helper text</div>
                </div>
              </div>
            </footer>
          </div>
          <div className={styles.typography4}>
            <div className={styles.subtitle33}>Attachments</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyPlans5IPhone11Pro;
