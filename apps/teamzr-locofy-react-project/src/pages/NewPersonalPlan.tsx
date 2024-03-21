import { FunctionComponent, useState, useCallback } from "react";
import OptionsPlan from "../components/OptionsPlan";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./NewPersonalPlan.module.css";

const NewPersonalPlan: FunctionComponent = () => {
  const [isOptionsPlanOpen, setOptionsPlanOpen] = useState(false);
  const navigate = useNavigate();

  const openOptionsPlan = useCallback(() => {
    setOptionsPlanOpen(true);
  }, []);

  const closeOptionsPlan = useCallback(() => {
    setOptionsPlanOpen(false);
  }, []);

  const onButtonContainerClick = useCallback(() => {
    navigate("/myplan-new");
  }, [navigate]);

  return (
    <>
      <div className={styles.newPersonalPlan1}>
        <div className={styles.statusBar}>
          <img className={styles.statusBarBg} alt="" />
          <div className={styles.carrier}>
            <div className={styles.div}>Teamzr</div>
          </div>
          <div className={styles.wifiParent}>
            <img
              className={styles.wifiIcon}
              loading="eager"
              alt=""
              src="/wifi@2x.png"
            />
            <div className={styles.stepperItemSet}>
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
              <div className={styles.div1}>12:30</div>
            </div>
          </div>
        </div>
        <div className={styles.appbarmenu}>
          <div className={styles.appBarItems}>
            <div className={styles.rect} />
          </div>
          <div className={styles.appBaroverflowIcon}>
            <div className={styles.iconButtonlargeprimarydefa}>
              <div className={styles.masterlarge}>
                <img className={styles.icons} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.masterButtonContainedLarge}>
            <div className={styles.appBarnavigationIcon}>
              <div className={styles.iconButtonlargeprimarydefa1}>
                <div className={styles.masterlarge1}>
                  <img className={styles.icons1} alt="" src="/icons1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.appBartitlenormal}>
              <div className={styles.typography}>
                <b className={styles.news}>New plan</b>
              </div>
            </div>
          </div>
          <div className={styles.masterlarge2} onClick={openOptionsPlan}>
            <div className={styles.masterFrame}>
              <div className={styles.mastertextmedium}>
                <div className={styles.buttonText}>Create</div>
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
        <main className={styles.stepperItem}>
          <section className={styles.inputTextField}>
            <div className={styles.symbolReward}>
              <div className={styles.typography1}>
                <div className={styles.subtitle3}>About</div>
              </div>
              <div className={styles.select}>
                <div className={styles.primitiveselectdefaultline}>
                  <div className={styles.input}>
                    <div className={styles.typographySubtitle}>
                      <div className={styles.chipSetPlans}>
                        <div className={styles.content3}>
                          <div className={styles.adornmentStart}>
                            <div className={styles.kg}>Kg</div>
                          </div>
                          <div className={styles.inputText}>
                            <div className={styles.nameYourStep}>
                              Name your plan
                            </div>
                          </div>
                        </div>
                        <div className={styles.inputStepName}>
                          <div className={styles.selectArrow}>
                            <div className={styles.underline}>0 / 40</div>
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
              </div>
              <div className={styles.select1}>
                <div className={styles.primitiveselectdefaultline1}>
                  <div className={styles.input1}>
                    <div className={styles.inputInner}>
                      <div className={styles.contentParent}>
                        <div className={styles.content4}>
                          <div className={styles.adornmentStart1}>
                            <div className={styles.kg1}>Kg</div>
                          </div>
                          <div className={styles.inputText1}>
                            <div className={styles.nameYourStep1}>
                              Describe it’s goal
                            </div>
                          </div>
                        </div>
                        <div className={styles.selectArrowWrapper}>
                          <div className={styles.selectArrow1}>
                            <div className={styles.div2}>0 / 150</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.label2}>
                      <div className={styles.label3}>Label</div>
                    </div>
                    <img
                      className={styles.underlineIcon1}
                      alt=""
                      src="/underline.svg"
                    />
                  </div>
                  <div className={styles.helperText2}>
                    <div className={styles.helperText3}>Helper text</div>
                  </div>
                </div>
              </div>
              <div className={styles.select2}>
                <div className={styles.masterlinedense}>
                  <div className={styles.input2}>
                    <div className={styles.label4}>
                      <div className={styles.label5}>Related conversation</div>
                    </div>
                    <div className={styles.textInput}>
                      <div className={styles.content5}>
                        <div className={styles.adornmentStart2}>
                          <div className={styles.kg2}>Kg</div>
                        </div>
                        <div className={styles.inputText2}>
                          <div className={styles.selected}>
                            Jan Sovis (default)
                          </div>
                        </div>
                      </div>
                      <div className={styles.selectArrow2}>
                        <img
                          className={styles.fillednavigationarrowDropDIcon}
                          alt=""
                          src="/fillednavigationarrowdropdown.svg"
                        />
                      </div>
                    </div>
                    <img
                      className={styles.underlineIcon2}
                      alt=""
                      src="/underline-22.svg"
                    />
                  </div>
                  <div className={styles.helperText4}>
                    <div className={styles.helperText5}>Helper text</div>
                  </div>
                </div>
              </div>
              <div className={styles.autocomplete}>
                <div className={styles.textField}>
                  <div className={styles.label6}>
                    <div className={styles.interests}>Interests</div>
                  </div>
                  <div className={styles.content6}>
                    <div className={styles.adornmentStart3}>
                      <div className={styles.kg3}>Kg</div>
                    </div>
                    <button className={styles.chipdefaultmediumdefaultre}>
                      <div className={styles.masterdefaultdefault}>
                        <div className={styles.avatariconFrame}>
                          <img
                            className={styles.masterelementsavatarimageIcon}
                            alt=""
                          />
                          <img className={styles.masterelementsicon} alt="" />
                          <div className={styles.masterelementsavatarletter}>
                            <div className={styles.f}>F</div>
                          </div>
                        </div>
                        <div className={styles.medium}>Personal Growth</div>
                        <div className={styles.wrapperCloseFrame}>
                          <img
                            className={styles.closeFrameIcon}
                            alt=""
                            src="/close-frame.svg"
                          />
                        </div>
                      </div>
                    </button>
                    <button className={styles.chipdefaultmediumdefaultre1}>
                      <div className={styles.masterdefaultdefault1}>
                        <div className={styles.avatariconFrame1}>
                          <img
                            className={styles.masterelementsavatarimageIcon1}
                            alt=""
                          />
                          <img className={styles.masterelementsicon1} alt="" />
                          <div className={styles.masterelementsavatarletter1}>
                            <div className={styles.f1}>F</div>
                          </div>
                        </div>
                        <div className={styles.medium1}>Kaizen</div>
                        <div className={styles.wrapperCloseFrame1}>
                          <img
                            className={styles.closeFrameIcon1}
                            alt=""
                            src="/close-frame.svg"
                          />
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className={styles.content7}>
                    <div className={styles.adornmentStart4}>
                      <div className={styles.kg4}>Kg</div>
                    </div>
                    <button className={styles.chipdefaultmediumdefaultre2}>
                      <div className={styles.masterdefaultdefault2}>
                        <div className={styles.avatariconFrame2}>
                          <img
                            className={styles.masterelementsavatarimageIcon2}
                            alt=""
                          />
                          <img className={styles.masterelementsicon2} alt="" />
                          <div className={styles.masterelementsavatarletter2}>
                            <div className={styles.f2}>F</div>
                          </div>
                        </div>
                        <div className={styles.medium2}>Pomodoro</div>
                        <div className={styles.wrapperCloseFrame2}>
                          <img
                            className={styles.closeFrameIcon2}
                            alt=""
                            src="/close-frame.svg"
                          />
                        </div>
                      </div>
                    </button>
                    <div className={styles.inputText3}>
                      <div className={styles.addInterest}>Add interest...</div>
                    </div>
                  </div>
                  <img
                    className={styles.underlineIcon3}
                    alt=""
                    src="/underline-3.svg"
                  />
                  <div className={styles.helperText6}>
                    <div className={styles.helperText7}>Helper text</div>
                  </div>
                </div>
                <div className={styles.selectArrow3}>
                  <img
                    className={styles.fillednavigationarrowDropDIcon1}
                    alt=""
                  />
                </div>
                <img className={styles.deleteIcon} alt="" />
              </div>
            </div>
            <div className={styles.chipSetPlansAll}>
              <div className={styles.typography2}>
                <div className={styles.subtitle31}>Start date</div>
              </div>
              <div className={styles.autocomplete1}>
                <div className={styles.textField1}>
                  <div className={styles.label7}>
                    <div className={styles.multipleValues}>Multiple values</div>
                  </div>
                  <div className={styles.content8}>
                    <div className={styles.adornmentStart5}>
                      <div className={styles.kg5}>Kg</div>
                    </div>
                    <img className={styles.icons6} alt="" src="/icons-64.svg" />
                    <div className={styles.inputText4}>
                      <div className={styles.addSubstep1}>[today]</div>
                    </div>
                  </div>
                  <img
                    className={styles.underlineIcon4}
                    alt=""
                    src="/underline-2.svg"
                  />
                  <div className={styles.helperText8}>
                    <div className={styles.helperText9}>Helper text</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.masterButtonContainedLarge1}>
              <div className={styles.typography3}>
                <div className={styles.subtitle32}>Duration</div>
              </div>
              <div className={styles.defaultDurationOf}>
                Default duration of a new step:
              </div>
              <div className={styles.chipSetFrame}>
                <div className={styles.chipsetplansall}>
                  <button className={styles.chip}>
                    <div className={styles.masterdefaultoutlined}>
                      <div className={styles.avatariconFrame3}>
                        <img
                          className={styles.masterelementsavatarimageIcon3}
                          alt=""
                        />
                        <img className={styles.masterelementsicon3} alt="" />
                        <div className={styles.masterelementsavatarletter3}>
                          <div className={styles.f3}>F</div>
                        </div>
                      </div>
                      <div className={styles.medium3}>1 day</div>
                      <img className={styles.closeFrameIcon3} alt="" />
                    </div>
                  </button>
                  <button className={styles.chipoutlinedmediumprimaryt}>
                    <div className={styles.masterdefaultoutlined1}>
                      <div className={styles.avatariconFrame4}>
                        <img
                          className={styles.masterelementsavatarimageIcon4}
                          alt=""
                        />
                        <img className={styles.masterelementsicon4} alt="" />
                        <div className={styles.masterelementsavatarletter4}>
                          <div className={styles.f4}>F</div>
                        </div>
                      </div>
                      <div className={styles.medium4}>1 week</div>
                      <img className={styles.closeFrameIcon4} alt="" />
                    </div>
                  </button>
                  <button className={styles.chipoutlinedmediumprimaryt1}>
                    <div className={styles.masterdefaultoutlined2}>
                      <div className={styles.avatariconFrame5}>
                        <img
                          className={styles.masterelementsavatarimageIcon5}
                          alt=""
                        />
                        <img className={styles.masterelementsicon5} alt="" />
                        <div className={styles.masterelementsavatarletter5}>
                          <div className={styles.f5}>F</div>
                        </div>
                      </div>
                      <div className={styles.medium5}>2 weeks</div>
                      <img className={styles.closeFrameIcon5} alt="" />
                    </div>
                  </button>
                  <button className={styles.chipoutlinedmediumprimaryt2}>
                    <div className={styles.masterdefaultoutlined3}>
                      <div className={styles.avatariconFrame6}>
                        <img
                          className={styles.masterelementsavatarimageIcon6}
                          alt=""
                        />
                        <img className={styles.masterelementsicon6} alt="" />
                        <div className={styles.masterelementsavatarletter6}>
                          <div className={styles.f6}>F</div>
                        </div>
                      </div>
                      <div className={styles.medium6}>1 month</div>
                      <img className={styles.closeFrameIcon6} alt="" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.typographyParent}>
              <div className={styles.typography4}>
                <div className={styles.subtitle33}>Reward</div>
              </div>
              <div className={styles.willSomeReward}>
                Will some reward be provided to motivate participants? Are there
                any requirements?
              </div>
              <div className={styles.noPlanRewardParent}>
                <div className={styles.noPlanReward}>No plan reward</div>
                <img
                  className={styles.symbolOdmnyIcon}
                  loading="eager"
                  alt=""
                  src="/symbol-odmny1.svg"
                />
                <div className={styles.stepper}>
                  <img
                    className={styles.stepperItemIcon}
                    loading="eager"
                    alt=""
                    src="/stepper-item1.svg"
                  />
                  <img
                    className={styles.stepperItemIcon1}
                    alt=""
                    src="/stepper-item-1.svg"
                  />
                  <img
                    className={styles.stepperItemIcon2}
                    alt=""
                    src="/stepper-item-1.svg"
                  />
                  <img
                    className={styles.stepperItemIcon3}
                    alt=""
                    src="/stepper-item-1.svg"
                  />
                  <img
                    className={styles.stepperItemIcon4}
                    alt=""
                    src="/stepper-item-1.svg"
                  />
                </div>
                <div className={styles.select3}>
                  <div className={styles.primitiveselectdefaultline2}>
                    <div className={styles.input3}>
                      <div className={styles.inputText5}>
                        <div className={styles.content9}>
                          <div className={styles.adornmentStart6}>
                            <div className={styles.kg6}>Kg</div>
                          </div>
                          <div className={styles.inputText6}>
                            <div className={styles.nameYourStep2}>
                              Describe reward and requirements
                            </div>
                          </div>
                        </div>
                        <div className={styles.selectarrow}>
                          <div className={styles.selectArrow4}>
                            <div className={styles.appbarMenuInstance}>
                              0 / 150
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.label8}>
                        <div className={styles.label9}>Label</div>
                      </div>
                      <img className={styles.underlineIcon5} alt="" />
                    </div>
                    <div className={styles.helperText10}>
                      <div className={styles.helperText11}>Helper text</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className={styles.buttonWrapper}>
            <div className={styles.button} onClick={onButtonContainerClick}>
              <div className={styles.masterbuttoncontainedlarge}>
                <div className={styles.mastertextlarge}>
                  <div className={styles.buttonText1}>Create plan</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {isOptionsPlanOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOptionsPlan}
        >
          <OptionsPlan onClose={closeOptionsPlan} />
        </PortalPopup>
      )}
    </>
  );
};

export default NewPersonalPlan;
