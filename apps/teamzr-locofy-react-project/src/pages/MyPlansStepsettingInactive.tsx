import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MyPlansStepsettingInactive.module.css";

const MyPlansStepsettingInactive: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAppBarnavigationIconContainerClick = useCallback(() => {
    navigate("/myplan-excel");
  }, [navigate]);

  return (
    <div className={styles.myPlansStepsettingInactive}>
      <div className={styles.frameParent}>
        <div className={styles.statusBarParent}>
          <div className={styles.statusBar}>
            <img className={styles.statusBarBg} alt="" />
            <div className={styles.carrier}>
              <div className={styles.appbarMenu}>Teamzr</div>
            </div>
            <div className={styles.appbartitlenormal}>
              <img
                className={styles.wifiIcon}
                loading="eager"
                alt=""
                src="/wifi@2x.png"
              />
              <div className={styles.tab}>
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
                <div className={styles.frame}>12:30</div>
              </div>
            </div>
          </div>
          <div className={styles.appbarmenu}>
            <div className={styles.appBarItems}>
              <div className={styles.rect} />
            </div>
            <div className={styles.autocomplete}>
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
          <div className={styles.tab1}>
            <div className={styles.mastertexthorizontal}>
              <div className={styles.masterelementstextdefault}>
                <div className={styles.tabContent}>Detail</div>
              </div>
              <img
                className={styles.masterelementslineIcon}
                loading="eager"
                alt=""
                src="/masterelementsline.svg"
              />
            </div>
          </div>
          <div className={styles.tab2}>
            <div className={styles.mastertexthorizontal1}>
              <img className={styles.masterelementslineIcon1} alt="" />
              <div className={styles.masterelementstextdefault1}>
                <div className={styles.tabContent1}>progress</div>
              </div>
            </div>
          </div>
          <div className={styles.tab3}>
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
      <main className={styles.frameContentInputtext}>
        <section className={styles.selectArrow}>
          <div className={styles.underline}>
            <div className={styles.autocompleteFrame}>
              <div className={styles.typography1}>
                <div className={styles.h6}>About</div>
              </div>
              <div className={styles.select}>
                <div className={styles.primitiveselectdefaultline}>
                  <div className={styles.input}>
                    <div className={styles.inputInner}>
                      <div className={styles.contentParent}>
                        <div className={styles.content3}>
                          <div className={styles.adornmentStart}>
                            <div className={styles.kg}>Kg</div>
                          </div>
                          <div className={styles.inputText}>
                            <div className={styles.placeholder}>
                              Named ranges + formatting
                            </div>
                          </div>
                        </div>
                        <div className={styles.batteryFrame}>
                          <div className={styles.selectArrow1}>
                            <div className={styles.appbarNavigationIcon}>
                              14 / 40
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
                      src="/underline4.svg"
                    />
                  </div>
                  <div className={styles.helperText}>
                    <div className={styles.helperText1}>Helper text</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.select1}>
              <div className={styles.primitiveselectdefaultline1}>
                <div className={styles.input1}>
                  <div className={styles.underline1}>
                    <div className={styles.selectArrow2}>
                      <div className={styles.chipSE}>14 / 150</div>
                    </div>
                    <div className={styles.content4}>
                      <div className={styles.adornmentStart1}>
                        <div className={styles.kg1}>Kg</div>
                      </div>
                      <div className={styles.inputText1}>
                        <div className={styles.placeholder1}>
                          This week you will learn about named ranges.
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
                    src="/underline4.svg"
                  />
                </div>
                <div className={styles.helperText2}>
                  <div className={styles.helperText3}>Helper text</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tabContainer}>
            <div className={styles.typography2}>
              <div className={styles.h61}>Substeps</div>
            </div>
            <div className={styles.autocomplete1}>
              <div className={styles.autocompleteLineChip}>
                <div className={styles.autocompletelinechipdefault}>
                  <div className={styles.textField}>
                    <div className={styles.label4}>
                      <div className={styles.multipleValues}>
                        Multiple values
                      </div>
                    </div>
                    <div className={styles.content5}>
                      <div className={styles.adornmentStart2}>
                        <div className={styles.kg2}>Kg</div>
                      </div>
                      <img
                        className={styles.icons6}
                        alt=""
                        src="/icons-62.svg"
                      />
                      <div className={styles.inputText2}>
                        <div className={styles.howToSubstep}>
                          Named ranges 1
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.underlineIcon2}
                      alt=""
                      src="/underline-21.svg"
                    />
                    <div className={styles.helperText4}>
                      <div className={styles.helperText5}>Helper text</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.autocompleteLineChip1}>
                <div className={styles.autocomplete2}>
                  <div className={styles.textField1}>
                    <div className={styles.label5}>
                      <div className={styles.multipleValues1}>
                        Multiple values
                      </div>
                    </div>
                    <div className={styles.content6}>
                      <div className={styles.adornmentStart3}>
                        <div className={styles.kg3}>Kg</div>
                      </div>
                      <img
                        className={styles.icons7}
                        alt=""
                        src="/icons-62.svg"
                      />
                      <div className={styles.inputText3}>
                        <div className={styles.howToSubstep1}>
                          Named ranges 2
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.underlineIcon3}
                      alt=""
                      src="/underline-21.svg"
                    />
                    <div className={styles.helperText6}>
                      <div className={styles.helperText7}>Helper text</div>
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.autocompleteLineChip2}>
                <button className={styles.autocomplete3}>
                  <button className={styles.textField2}>
                    <div className={styles.label6}>
                      <div className={styles.multipleValues2}>
                        Multiple values
                      </div>
                    </div>
                    <button className={styles.content7}>
                      <div className={styles.adornmentStart4}>
                        <div className={styles.kg4}>Kg</div>
                      </div>
                      <img
                        className={styles.icons8}
                        alt=""
                        src="/icons-82.svg"
                      />
                      <div className={styles.inputText4}>
                        <div className={styles.addSubstep1}>Add substep</div>
                      </div>
                    </button>
                    <img
                      className={styles.underlineIcon4}
                      alt=""
                      src="/underline-4.svg"
                    />
                    <div className={styles.helperText8}>
                      <div className={styles.helperText9}>Helper text</div>
                    </div>
                  </button>
                </button>
              </button>
            </div>
          </div>
          <div className={styles.masterLargeIcon}>
            <div className={styles.chipSetPlansAllWrapper}>
              <div className={styles.chipSetPlansAll}>
                <div className={styles.startsEnds}>
                  <div className={styles.typography3}>
                    <div className={styles.h62}>Duration</div>
                  </div>
                </div>
                <div className={styles.chipMasterdefaultdefault}>
                  <div className={styles.chipsetplansall}>
                    <button className={styles.chip}>
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
                        <div className={styles.medium}>1 day</div>
                        <img className={styles.closeFrameIcon} alt="" />
                      </div>
                    </button>
                    <button className={styles.chipoutlinedmediumprimaryt}>
                      <div className={styles.masterdefaultoutlined}>
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
                        <div className={styles.medium1}>1 week</div>
                        <img className={styles.closeFrameIcon1} alt="" />
                      </div>
                    </button>
                    <button className={styles.chipoutlinedmediumprimaryt1}>
                      <div className={styles.masterdefaultoutlined1}>
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
                        <div className={styles.medium2}>2 weeks</div>
                        <img className={styles.closeFrameIcon2} alt="" />
                      </div>
                    </button>
                    <button className={styles.chipoutlinedmediumprimaryt2}>
                      <div className={styles.masterdefaultoutlined2}>
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
                        <div className={styles.medium3}>1 month</div>
                        <img className={styles.closeFrameIcon3} alt="" />
                      </div>
                    </button>
                  </div>
                  <div className={styles.starts1062020Ends}>
                    Starts: 10.6.2020; ends: 11.6.2020
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.autocompleteContent}>
            <div className={styles.chipReward}>
              <div className={styles.typography4}>
                <div className={styles.h63}>Reward</div>
              </div>
              <div className={styles.selectInput}>
                <div className={styles.rewardGeneral}>Reward (general)</div>
                <img
                  className={styles.symbolOdmnyIcon}
                  loading="eager"
                  alt=""
                  src="/symbol-odmny.svg"
                />
                <div className={styles.stepper1}>
                  <img
                    className={styles.stepperItemIcon}
                    loading="eager"
                    alt=""
                    src="/stepper-item.svg"
                  />
                  <img
                    className={styles.stepperItemIcon1}
                    alt=""
                    src="/stepper-item.svg"
                  />
                  <img
                    className={styles.stepperItemIcon2}
                    alt=""
                    src="/stepper-item.svg"
                  />
                  <img
                    className={styles.stepperItemIcon3}
                    alt=""
                    src="/stepper-item.svg"
                  />
                  <img
                    className={styles.stepperItemIcon4}
                    alt=""
                    src="/stepper-item.svg"
                  />
                </div>
                <div className={styles.select2}>
                  <div className={styles.primitiveselectdefaultline2}>
                    <footer className={styles.input2}>
                      <div className={styles.contentInputText}>
                        <div className={styles.content8}>
                          <div className={styles.adornmentStart5}>
                            <div className={styles.kg5}>Kg</div>
                          </div>
                          <div className={styles.inputText5}>
                            <div
                              className={styles.nameYourStep}
                            >{`Define the appropriate reward `}</div>
                          </div>
                        </div>
                        <div className={styles.selectArrow3}>
                          <div className={styles.selectArrow4}>
                            <div className={styles.selectArrow5}>0 / 40</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.label7}>
                        <div className={styles.label8}>Label</div>
                      </div>
                      <img className={styles.underlineIcon5} alt="" />
                    </footer>
                    <div className={styles.helperText10}>
                      <div className={styles.helperText11}>Helper text</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyPlansStepsettingInactive;
