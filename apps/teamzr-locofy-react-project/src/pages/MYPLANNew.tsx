import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MYPLANNew.module.css";

const MYPLANNew: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAppBarnavigationIconContainerClick = useCallback(() => {
    navigate("/my-plans-1-iphone-11-pro");
  }, [navigate]);

  const onSTEPClick = useCallback(() => {
    // Please sync "My plan_Set new step" to the project
  }, []);

  const onImportStepsClick = useCallback(() => {
    navigate("/new-group-plan-1-iphone-11-pro");
  }, [navigate]);

  const onPlusStepsContainerClick = useCallback(() => {
    navigate("/new-group-plan-1-iphone-11-pro");
  }, [navigate]);

  return (
    <div className={styles.myplanNew}>
      <div className={styles.fab}>
        <div className={styles.masterroundsmall}>
          <img className={styles.icons} alt="" />
        </div>
      </div>
      <div className={styles.bottomNavigation}>
        <div className={styles.bottomNavigation1}>
          <div className={styles.content}>
            <img className={styles.icons1} alt="" />
            <div className={styles.tabOne}>Explore</div>
          </div>
        </div>
        <div className={styles.bottomNavigation2}>
          <div className={styles.content1}>
            <img className={styles.icons2} alt="" />
            <div className={styles.tabOne1}>My plans</div>
          </div>
        </div>
        <div className={styles.bottomNavigation3}>
          <div className={styles.content2}>
            <img className={styles.icons3} alt="" />
            <div className={styles.tabOne2}>Chats</div>
          </div>
        </div>
      </div>
      <div className={styles.mYPLANNew}>
        <main className={styles.fRAME}>
          <div className={styles.statusBar}>
            <img className={styles.statusBarBg} alt="" />
            <div className={styles.carrier}>
              <div className={styles.fRA}>Teamzr</div>
            </div>
            <div className={styles.fRAME1}>
              <img
                className={styles.wifiIcon}
                loading="eager"
                alt=""
                src="/wifi@2x.png"
              />
              <div className={styles.fRAME2}>
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
                <div className={styles.fRA1}>12:30</div>
              </div>
            </div>
          </div>
          <div className={styles.appbarmenu}>
            <div className={styles.appBarItems}>
              <div className={styles.rect} />
            </div>
            <div className={styles.avatarFrame}>
              <div
                className={styles.appBarnavigationIcon}
                onClick={onAppBarnavigationIconContainerClick}
              >
                <div className={styles.iconButtonlargeprimarydefa}>
                  <div className={styles.masterlarge}>
                    <img className={styles.icons4} alt="" src="/icons1.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.appBartitlenormal}>
              <div className={styles.typography}>
                <b className={styles.stepNrStep}>
                  Excel - Become office hero (1)
                </b>
              </div>
            </div>
            <div className={styles.masterlarge1}>
              <div className={styles.iconButtonlargeprimarydefa1}>
                <div className={styles.masterlarge2}>
                  <img className={styles.icons5} alt="" src="/icons-14.svg" />
                </div>
              </div>
            </div>
          </div>
          <section className={styles.planheader}>
            <div className={styles.cardsItemVariant4}>
              <img
                className={styles.imageIcon}
                loading="eager"
                alt=""
                src="/image@2x.png"
              />
              <input
                className={styles.selectFrame}
                placeholder="Excel - Become office hero (1)"
                type="text"
              />
            </div>
            <div className={styles.labelFrame}>
              <div className={styles.notAbleToContainer}>
                <p
                  className={styles.notAbleTo}
                >{` Not able to use Excel efficiently? Wanna work smart? This tailored plan will enable it for FREE! Become the One who knows and can help your colleagues. `}</p>
                <p className={styles.beTheExcel}>
                  Be the Excel Hero in your team!
                </p>
              </div>
              <div className={styles.selectedText}>
                <div className={styles.select}>
                  <div className={styles.masterlinedense}>
                    <div className={styles.input}>
                      <img className={styles.underlineIcon} alt="" />
                      <div className={styles.label}>
                        <div className={styles.label1}>Start date</div>
                      </div>
                      <div className={styles.selectArrow}>
                        <img
                          className={styles.fillednavigationarrowDropDIcon}
                          alt=""
                        />
                      </div>
                      <div className={styles.content3}>
                        <div className={styles.adornmentStart}>
                          <div className={styles.kg}>Kg</div>
                        </div>
                        <div className={styles.inputText}>
                          <div className={styles.selected}>10.6.2021</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.helperText}>
                      <div className={styles.helperText1}>Helper text</div>
                    </div>
                  </div>
                </div>
                <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
              </div>
              <img
                className={styles.dividerIcon}
                loading="eager"
                alt=""
                src="/divider.svg"
              />
            </div>
          </section>
          <section className={styles.step} onClick={onSTEPClick}>
            <img className={styles.icons6} alt="" src="/icons-51.svg" />
            <button className={styles.kroknedefinovn}>
              <img className={styles.vectorIcon} alt="" src="/krok-node.svg" />
              <img
                className={styles.kroknedefinovnChild}
                alt=""
                src="/frame-592.svg"
              />
              <div className={styles.step1Wrapper}>
                <div className={styles.step1}>STEP 1</div>
              </div>
            </button>
            <div className={styles.nameYourStepParent}>
              <div className={styles.nameYourStep}>Name your step</div>
              <div className={styles.tapToSpecify}>
                Tap to specify step details.
              </div>
            </div>
            <img className={styles.icons7} alt="" src="/icons-7.svg" />
          </section>
          <div className={styles.step2}>
            <img className={styles.dividerIcon1} alt="" src="/divider-1.svg" />
            <img className={styles.icons8} alt="" src="/icons-25.svg" />
            <div className={styles.progress}>
              <div className={styles.bar}>
                <div className={styles.color} />
                <div className={styles.opacity} />
              </div>
              <div className={styles.progress1} />
            </div>
            <img className={styles.dividerIcon2} alt="" src="/divider-21.svg" />
          </div>
        </main>
      </div>
      <div className={styles.frameMainContent}>
        <button className={styles.importSteps} onClick={onImportStepsClick}>
          <div className={styles.masterextendedmedium}>
            <img className={styles.icons9} alt="" />
            <div className={styles.extended}>import steps</div>
          </div>
        </button>
      </div>
      <div className={styles.plusSteps} onClick={onPlusStepsContainerClick}>
        <div className={styles.masterextendedmedium1}>
          <img className={styles.icons10} alt="" />
          <div className={styles.extended1}>Steps</div>
        </div>
      </div>
    </div>
  );
};

export default MYPLANNew;
