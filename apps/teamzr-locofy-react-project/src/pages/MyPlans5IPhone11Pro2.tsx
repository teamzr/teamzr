import { FunctionComponent, useState, useCallback } from "react";
import OptionsStep from "../components/OptionsStep";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./MyPlans5IPhone11Pro2.module.css";

const MyPlans5IPhone11Pro2: FunctionComponent = () => {
  const [isOptionsStepOpen, setOptionsStepOpen] = useState(false);
  const navigate = useNavigate();

  const onAppBarnavigationIconContainerClick = useCallback(() => {
    navigate("/myplan-excel");
  }, [navigate]);

  const openOptionsStep = useCallback(() => {
    setOptionsStepOpen(true);
  }, []);

  const closeOptionsStep = useCallback(() => {
    setOptionsStepOpen(false);
  }, []);

  return (
    <>
      <div className={styles.myPlans5Iphone11Pro}>
        <div className={styles.statusBar}>
          <img className={styles.statusBarBg} alt="" />
          <div className={styles.carrier}>
            <div className={styles.signalStrengthFrame}>Teamzr</div>
          </div>
          <div className={styles.connectivitySymbol}>
            <img
              className={styles.wifiIcon}
              loading="eager"
              alt=""
              src="/wifi@2x.png"
            />
            <div className={styles.batteryFrame}>
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
              <div className={styles.shapeMarker}>12:30</div>
            </div>
          </div>
        </div>
        <div className={styles.resultDisplayFrame}>
          <div className={styles.appbarmenu}>
            <div className={styles.appBarItems}>
              <div className={styles.rect} />
            </div>
            <div className={styles.successIconsFrame}>
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
            <div className={styles.masterlarge1} onClick={openOptionsStep}>
              <div className={styles.iconButtonlargeprimarydefa1}>
                <div className={styles.masterlarge2}>
                  <img className={styles.icons1} alt="" src="/icons-14.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.appBarMenu}>
          <div className={styles.appBarMenuItem}>
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
            <div className={styles.typographySubtitle}>
              <div className={styles.typography1}>
                <div className={styles.subtitle3}>Time remaining</div>
              </div>
              <div className={styles.progress}>
                <div className={styles.bar}>
                  <div className={styles.color} />
                  <div className={styles.opacity} />
                  <div className={styles.progressHalf} />
                </div>
                <div className={styles.progress1} />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.fulfillmentSet}>
          <div className={styles.fulfillmentSet1}>
            <div className={styles.typography2}>
              <div className={styles.subtitle31}>Your fullfilment</div>
            </div>
            <div className={styles.fulfillmentset}>
              <div className={styles.pythagoreamTheorem}>Named ranges 1</div>
              <div className={styles.fulfillmentsetEmpty}>
                <button className={styles.fulfillmentfailedEmpty}>
                  <div className={styles.failed}>Failed</div>
                </button>
                <button className={styles.fulfillmentsucceededFull}>
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
                <button className={styles.fulfillmentfailedFull}>
                  <div className={styles.failed1}>Failed</div>
                </button>
                <button className={styles.fulfillmentsucceededEmpty}>
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
                <button className={styles.fulfillmentfailedEmpty1}>
                  <div className={styles.failed2}>Failed</div>
                </button>
                <button className={styles.fulfillmentsucceededFull1}>
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
                <button className={styles.fulfillmentfailedEmpty2}>
                  <div className={styles.failed3}>Failed</div>
                </button>
                <button className={styles.fulfillmentsucceededEmpty1}>
                  <div className={styles.succeeded3}>Succeeded</div>
                </button>
                <button className={styles.fulfillmentunratedFull}>
                  <div className={styles.notRated3}>Not rated</div>
                </button>
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
        <section className={styles.ikonaCoin}>
          <div className={styles.typographyParent}>
            <div className={styles.typography3}>
              <div className={styles.subtitle32}>Reward</div>
            </div>
            <div className={styles.content3}>
              <div className={styles.primitiveselectdefaultlinedefa}>
                <img
                  className={styles.ikonacoinIcon}
                  loading="eager"
                  alt=""
                  src="/ikonacoin.svg"
                />
                <div className={styles.selectArrow}>
                  <div className={styles.ikonacoin}>
                    <div className={styles.frameParent}>
                      <img
                        className={styles.frameIcon}
                        alt=""
                        src="/frame.svg"
                      />
                      <img
                        className={styles.frameChild}
                        loading="eager"
                        alt=""
                        src="/group-35.svg"
                      />
                    </div>
                    <div className={styles.badge}>
                      <div className={styles.masterbadge}>
                        <div className={styles.masterbadge1}>3</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.ikonacoin1}>
                    <div className={styles.vectorParent}>
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector-12.svg"
                      />
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/group-35.svg"
                      />
                    </div>
                    <div className={styles.badge1}>
                      <div className={styles.masterbadge2}>
                        <div className={styles.text}>1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typographyGroup}>
              <div className={styles.typography4}>
                <div className={styles.subtitle33}>Your comment</div>
              </div>
              <div className={styles.select}>
                <div className={styles.primitiveselectdefaultline}>
                  <div className={styles.input}>
                    <div className={styles.contentWrapper}>
                      <div className={styles.content4}>
                        <div className={styles.content5}>
                          <div className={styles.adornmentStart}>
                            <div className={styles.kg}>Kg</div>
                          </div>
                          <div className={styles.inputText}>
                            <div className={styles.placeholder}>
                              It was freaky diffucult, but I made it!
                            </div>
                          </div>
                        </div>
                        <div className={styles.text1}>
                          <div className={styles.selectArrow1}>
                            <div className={styles.frame}>23 / 150</div>
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
                      src="/underline2.svg"
                    />
                  </div>
                  <div className={styles.helperText}>
                    <div className={styles.helperText1}>Helper text</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.typography5}>
              <div className={styles.subtitle34}>Attachments</div>
            </div>
          </div>
        </section>
      </div>
      {isOptionsStepOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOptionsStep}
        >
          <OptionsStep onClose={closeOptionsStep} />
        </PortalPopup>
      )}
    </>
  );
};

export default MyPlans5IPhone11Pro2;
