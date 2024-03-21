import { FunctionComponent, useState, useCallback } from "react";
import OptionsStep from "../components/OptionsStep";
import PortalPopup from "../components/PortalPopup";
import OptionsPlan from "../components/OptionsPlan";
import { useNavigate } from "react-router-dom";
import styles from "./MYPLANExcel.module.css";

const MYPLANExcel: FunctionComponent = () => {
  const [isOptionsStepOpen, setOptionsStepOpen] = useState(false);
  const [isOptionsPlanOpen, setOptionsPlanOpen] = useState(false);
  const [isOptionsStep1Open, setOptionsStep1Open] = useState(false);
  const [isOptionsStep2Open, setOptionsStep2Open] = useState(false);
  const [isOptionsStep3Open, setOptionsStep3Open] = useState(false);
  const navigate = useNavigate();

  const openOptionsStep = useCallback(() => {
    setOptionsStepOpen(true);
  }, []);

  const closeOptionsStep = useCallback(() => {
    setOptionsStepOpen(false);
  }, []);

  const onAppBarnavigationIconContainerClick = useCallback(() => {
    navigate("/my-plans-1-iphone-11-pro");
  }, [navigate]);

  const openOptionsPlan = useCallback(() => {
    setOptionsPlanOpen(true);
  }, []);

  const closeOptionsPlan = useCallback(() => {
    setOptionsPlanOpen(false);
  }, []);

  const onSTEPClick = useCallback(() => {
    navigate("/my-plans-6-iphone-11-pro");
  }, [navigate]);

  const openOptionsStep1 = useCallback(() => {
    setOptionsStep1Open(true);
  }, []);

  const closeOptionsStep1 = useCallback(() => {
    setOptionsStep1Open(false);
  }, []);

  const onSTEPContainerClick = useCallback(() => {
    navigate("/my-plans-5-iphone-11-pro");
  }, [navigate]);

  const openOptionsStep2 = useCallback(() => {
    setOptionsStep2Open(true);
  }, []);

  const closeOptionsStep2 = useCallback(() => {
    setOptionsStep2Open(false);
  }, []);

  const onImportStepsClick = useCallback(() => {
    navigate("/new-group-plan-1-iphone-11-pro");
  }, [navigate]);

  const onSTEPContainer4Click = useCallback(() => {
    navigate("/my-plans-4-iphone-11-pro");
  }, [navigate]);

  const openOptionsStep3 = useCallback(() => {
    setOptionsStep3Open(true);
  }, []);

  const closeOptionsStep3 = useCallback(() => {
    setOptionsStep3Open(false);
  }, []);

  const onSTEPContainer6Click = useCallback(() => {
    // Please sync "My plan_Set new step" to the project
  }, []);

  const onPlusStepsContainerClick = useCallback(() => {
    navigate("/new-group-plan-1-iphone-11-pro");
  }, [navigate]);

  return (
    <>
      <div className={styles.myplanExcel}>
        <div className={styles.step}>
          <img className={styles.icons} alt="" />
          <div className={styles.krokuzavenSOdmnou}>
            <img className={styles.krokuzavenSOdmnouChild} alt="" />
            <img className={styles.path277Icon} alt="" />
            <div className={styles.step1Wrapper}>
              <div className={styles.step1}>STEP 1</div>
            </div>
            <div className={styles.krokuzavenSOdmnouItem} />
            <img className={styles.badgeIcon} alt="" />
            <img className={styles.ikonacoinIcon} alt="" />
          </div>
          <div className={styles.formatAsTableParent}>
            <div className={styles.formatAsTable}>Format as Table</div>
            <div className={styles.theDiscoveryOf}>
              The discovery of the functionality "Format as Table" has been a
              Wow- moment for many people I have guided. Are you ready for your
              woww moment?
            </div>
            <div className={styles.closedDdmmyyyy}>Closed dd.mm.yyyy</div>
          </div>
          <img className={styles.icons1} alt="" onClick={openOptionsStep} />
          <img className={styles.progressIcon} alt="" />
        </div>
        <div className={styles.step2}>
          <img className={styles.dividerIcon} alt="" />
        </div>
        <div className={styles.step3}>
          <img className={styles.dividerIcon1} alt="" src="/divider-1.svg" />
          <img className={styles.icons2} alt="" src="/icons-25.svg" />
          <div className={styles.progress}>
            <div className={styles.bar}>
              <div className={styles.color} />
              <div className={styles.opacity} />
            </div>
            <div className={styles.progress1} />
          </div>
          <img className={styles.dividerIcon2} alt="" src="/divider-2.svg" />
        </div>
        <main className={styles.appbartitlenormal}>
          <div className={styles.statusBar}>
            <img className={styles.statusBarBg} alt="" />
            <div className={styles.carrier}>
              <div className={styles.image}>Teamzr</div>
            </div>
            <div className={styles.wifiParent}>
              <img
                className={styles.wifiIcon}
                loading="eager"
                alt=""
                src="/wifi@2x.png"
              />
              <div className={styles.nAMEDRANGESFORM}>
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
                <div className={styles.text}>12:30</div>
              </div>
            </div>
          </div>
          <div className={styles.appbarmenu}>
            <div className={styles.appBarItems}>
              <div className={styles.rect} />
            </div>
            <div className={styles.appbarMenuItems}>
              <div
                className={styles.appBarnavigationIcon}
                onClick={onAppBarnavigationIconContainerClick}
              >
                <div className={styles.iconButtonlargeprimarydefa}>
                  <div className={styles.masterlarge}>
                    <img className={styles.icons3} alt="" src="/icons1.svg" />
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
            <div className={styles.masterlarge1} onClick={openOptionsPlan}>
              <div className={styles.iconButtonlargeprimarydefa1}>
                <div className={styles.masterlarge2}>
                  <img className={styles.icons4} alt="" src="/icons-14.svg" />
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
                className={styles.titleText}
                placeholder="Excel - Become office hero (1)"
                type="text"
              />
            </div>
            <div className={styles.inputText}>
              <div className={styles.notAbleToContainer}>
                <p
                  className={styles.notAbleTo}
                >{` Not able to use Excel efficiently? Wanna work smart? This tailored plan will enable it for FREE! Become the One who knows and can help your colleagues. `}</p>
                <p className={styles.beTheExcel}>
                  Be the Excel Hero in your team!
                </p>
              </div>
              <div className={styles.frameWithText}>
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
                      <div className={styles.content}>
                        <div className={styles.adornmentStart}>
                          <div className={styles.kg}>Kg</div>
                        </div>
                        <div className={styles.inputText1}>
                          <div className={styles.selected}>25.3.2021</div>
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
              <img className={styles.dividerIcon3} alt="" />
            </div>
          </section>
          <div className={styles.step4}>
            <img className={styles.dividerIcon4} alt="" src="/divider-3.svg" />
          </div>
          <section className={styles.step5} onClick={onSTEPClick}>
            <div className={styles.iconsParent}>
              <img className={styles.icons5} alt="" src="/icons-51.svg" />
              <div className={styles.krokuzavenSOdmnou1}>
                <img
                  className={styles.krokuzavenSOdmnouInner}
                  alt=""
                  src="/ellipse-3-1.svg"
                />
                <img
                  className={styles.path277Icon1}
                  alt=""
                  src="/path-277-1.svg"
                />
                <div className={styles.step1Container}>
                  <div className={styles.step11}>STEP 1</div>
                </div>
                <div className={styles.ellipseDiv} />
                <img className={styles.badgeIcon1} alt="" />
                <img
                  className={styles.ikonacoinIcon1}
                  alt=""
                  src="/ikonacoin-1.svg"
                />
              </div>
              <div className={styles.stepLearningContainer}>
                <div className={styles.namedRanges}>
                  Named ranges + formatting
                </div>
                <div
                  className={styles.thisWeekYou}
                >{`This week you will learn about named ranges. Also, structured formatting will be no more a night-mare for you! `}</div>
                <div className={styles.dueDateDdmmyyyy}>
                  Due date dd.mm.yyyy
                </div>
              </div>
              <img
                className={styles.icons6}
                alt=""
                src="/icons-7.svg"
                onClick={openOptionsStep1}
              />
            </div>
            <div className={styles.timedivider}>
              <div className={styles.progress2}>
                <div className={styles.bar1}>
                  <div className={styles.color1} />
                  <div className={styles.opacity1} />
                </div>
                <div className={styles.progress3} />
                <div className={styles.progressHalf} />
              </div>
              <img className={styles.icons7} alt="" />
            </div>
          </section>
          <div className={styles.step6}>
            <img className={styles.dividerIcon5} alt="" src="/divider-3.svg" />
          </div>
          <section className={styles.stepsProgressBar}>
            <div className={styles.step7} onClick={onSTEPContainerClick}>
              <div className={styles.weeklyLesson}>
                <img className={styles.icons8} alt="" src="/icons-51.svg" />
                <div className={styles.krokprobhSOdmnouZloha}>
                  <img
                    className={styles.krokprobhSOdmnouZlohaChild}
                    alt=""
                    src="/ellipse-4.svg"
                  />
                  <img
                    className={styles.path25Icon}
                    loading="eager"
                    alt=""
                    src="/path-251.svg"
                  />
                  <div className={styles.thesenodesareemptyoridenticalt}>
                    <div className={styles.step21}>STEP 2</div>
                  </div>
                  <img
                    className={styles.ikonacoinIcon2}
                    alt=""
                    src="/ikonacoin-2.svg"
                  />
                </div>
                <div className={styles.thesenodesaresimilartoeachothe}>
                  <div className={styles.namedRanges1}>
                    Named ranges + formatting
                  </div>
                  <div
                    className={styles.thisWeekYou1}
                  >{`This week you will learn about named ranges. Also, structured formatting will be no more a night-mare for you! `}</div>
                  <div className={styles.dueDateDdmmyyyy1}>
                    Due date dd.mm.yyyy
                  </div>
                </div>
                <img
                  className={styles.icons9}
                  alt=""
                  src="/icons-7.svg"
                  onClick={openOptionsStep2}
                />
              </div>
              <div className={styles.importStepsHeader}>
                <div className={styles.progress4}>
                  <div className={styles.bar2}>
                    <div className={styles.color2} />
                    <div className={styles.opacity2} />
                  </div>
                  <div className={styles.progressHalf1} />
                </div>
                <img className={styles.icons10} alt="" />
              </div>
            </div>
            <button className={styles.importSteps} onClick={onImportStepsClick}>
              <div className={styles.masterextendedmedium}>
                <img className={styles.icons11} alt="" />
                <div className={styles.extended}>import steps</div>
              </div>
            </button>
          </section>
        </main>
        <div className={styles.step8}>
          <img className={styles.dividerIcon6} alt="" src="/divider-5.svg" />
          <img className={styles.icons12} alt="" src="/icons-25.svg" />
          <div className={styles.progress5}>
            <div className={styles.bar3}>
              <div className={styles.color3} />
              <div className={styles.opacity3} />
            </div>
            <div className={styles.progress6} />
          </div>
          <img className={styles.dividerIcon7} alt="" src="/divider-6.svg" />
        </div>
        <div className={styles.step9} onClick={onSTEPContainer4Click}>
          <div className={styles.stepIndicator}>
            <img className={styles.icons13} alt="" src="/icons-51.svg" />
            <div className={styles.krokspSOdmnou}>
              <div className={styles.dateLabelWithCoin}>
                <div className={styles.dateLabelWithCoin1}>
                  <img
                    className={styles.dateLabelWithCoinChild}
                    alt=""
                    src="/ellipse-2.svg"
                  />
                  <div className={styles.step3Wrapper}>
                    <div className={styles.step31}>STEP 3</div>
                  </div>
                </div>
              </div>
              <div className={styles.dateLabelWithCoin2}>
                <img
                  className={styles.ikonacoinIcon3}
                  alt=""
                  src="/ikonacoin-2.svg"
                />
              </div>
              <img
                className={styles.namedRangeFormattingLabel}
                alt=""
                src="/named-range-formatting-label.svg"
              />
            </div>
            <div className={styles.stepIndicatorWithDate}>
              <div className={styles.namedRanges2}>
                Named ranges + formatting
              </div>
              <div
                className={styles.thisWeekYou2}
              >{`This week you will learn about named ranges. Also, structured formatting will be no more a night-mare for you! `}</div>
              <div className={styles.dueDateDdmmyyyy2}>Due date dd.mm.yyyy</div>
            </div>
            <img
              className={styles.icons14}
              alt=""
              src="/icons-7.svg"
              onClick={openOptionsStep3}
            />
          </div>
          <div className={styles.progressParent}>
            <div className={styles.progress7}>
              <div className={styles.bar4}>
                <div className={styles.color4} />
                <div className={styles.opacity4} />
              </div>
              <div className={styles.progress8} />
            </div>
            <img className={styles.icons15} alt="" />
          </div>
        </div>
        <div className={styles.step10}>
          <img className={styles.dividerIcon8} alt="" src="/divider-1.svg" />
          <img className={styles.icons16} alt="" src="/icons-25.svg" />
          <div className={styles.progress9}>
            <div className={styles.bar5}>
              <div className={styles.color5} />
              <div className={styles.opacity5} />
            </div>
            <div className={styles.progress10} />
          </div>
          <img className={styles.dividerIcon9} alt="" src="/divider-2.svg" />
        </div>
        <div className={styles.fab}>
          <div className={styles.masterroundsmall}>
            <input className={styles.icons17} type="checkbox" />
          </div>
        </div>
        <footer className={styles.bottomNavigation}>
          <div className={styles.bottomNavigation1}>
            <div className={styles.content1}>
              <img className={styles.icons18} alt="" />
              <div className={styles.tabOne}>Explore</div>
            </div>
          </div>
          <div className={styles.bottomNavigation2}>
            <div className={styles.content2}>
              <img className={styles.icons19} alt="" />
              <div className={styles.tabOne1}>My plans</div>
            </div>
          </div>
          <div className={styles.bottomNavigation3}>
            <div className={styles.content3}>
              <img className={styles.icons20} alt="" />
              <div className={styles.tabOne2}>Chats</div>
            </div>
          </div>
        </footer>
        <div className={styles.step12} onClick={onSTEPContainer6Click}>
          <img className={styles.icons21} alt="" src="/icons-51.svg" />
          <div className={styles.kroknedefinovn}>
            <img className={styles.krokNodeIcon} alt="" src="/krok-node.svg" />
            <img
              className={styles.unknownNodeIcon}
              alt=""
              src="/unknown-node.svg"
            />
            <div className={styles.step1Frame}>
              <div className={styles.step13}>STEP 5</div>
            </div>
          </div>
          <div className={styles.nameYourStepParent}>
            <div className={styles.nameYourStep}>Name your step</div>
            <div className={styles.tapToSpecify}>
              Tap to specify step details.
            </div>
          </div>
          <img className={styles.icons22} alt="" src="/icons-7.svg" />
        </div>
        <div className={styles.plusSteps} onClick={onPlusStepsContainerClick}>
          <div className={styles.masterextendedmedium1}>
            <img className={styles.icons23} alt="" />
            <div className={styles.extended1}>Steps</div>
          </div>
        </div>
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
      {isOptionsPlanOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOptionsPlan}
        >
          <OptionsPlan onClose={closeOptionsPlan} />
        </PortalPopup>
      )}
      {isOptionsStep1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOptionsStep1}
        >
          <OptionsStep onClose={closeOptionsStep1} />
        </PortalPopup>
      )}
      {isOptionsStep2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOptionsStep2}
        >
          <OptionsStep onClose={closeOptionsStep2} />
        </PortalPopup>
      )}
      {isOptionsStep3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOptionsStep3}
        >
          <OptionsStep onClose={closeOptionsStep3} />
        </PortalPopup>
      )}
    </>
  );
};

export default MYPLANExcel;
