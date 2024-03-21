import { FunctionComponent, useState, useCallback } from "react";
import OptionsStep from "../components/OptionsStep";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./MyPlans4IPhone11Pro.module.css";

const MyPlans4IPhone11Pro: FunctionComponent = () => {
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
      <div className={styles.myPlans4Iphone11Pro}>
        <div className={styles.statusBar}>
          <img className={styles.statusBarBg} alt="" />
          <div className={styles.carrier}>
            <div className={styles.framecarrier}>Teamzr</div>
          </div>
          <div className={styles.framewifi}>
            <img
              className={styles.wifiIcon}
              loading="eager"
              alt=""
              src="/wifi@2x.png"
            />
            <div className={styles.framebattery}>
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
              <div className={styles.inputFrameselectprimitive}>12:30</div>
            </div>
          </div>
        </div>
        <div className={styles.autocompleteInstance}>
          <div className={styles.appbarmenu}>
            <div className={styles.appBarItems}>
              <div className={styles.rect} />
            </div>
            <div className={styles.appbarTitleNormal}>
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
            <div className={styles.masterlarge1} onClick={openOptionsStep}>
              <div className={styles.iconButtonlargeprimarydefa1}>
                <div className={styles.masterlarge2}>
                  <img className={styles.icons1} alt="" src="/icons-14.svg" />
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
        <main className={styles.instancetabtabtab}>
          <div className={styles.stepper}>
            <div className={styles.tab}>
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
                <img className={styles.masterelementslineIcon2} alt="" />
                <div className={styles.masterelementstextdefault2}>
                  <div className={styles.tabContent2}>Overview</div>
                </div>
              </div>
            </div>
          </div>
          <section className={styles.inputtextinputtextinputtext}>
            <div className={styles.frameFrameselectprimitivesele}>
              <div className={styles.typography1}>
                <div className={styles.subtitle3}>About</div>
              </div>
              <div className={styles.select}>
                <div className={styles.primitiveselectdefaultline}>
                  <div className={styles.input}>
                    <div className={styles.masterbadgemasterbadgeWrapper}>
                      <div className={styles.masterbadgemasterbadge}>
                        <div className={styles.content3}>
                          <div className={styles.adornmentStart}>
                            <div className={styles.kg}>Kg</div>
                          </div>
                          <div className={styles.inputText}>
                            <div className={styles.nameYourStep}>
                              Pivot Tables 1
                            </div>
                          </div>
                        </div>
                        <div className={styles.receptionFrame}>
                          <div className={styles.selectArrow}>
                            <div className={styles.timeFrame}>14 / 40</div>
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
                      src="/underline3.svg"
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
                              Make sense of your data. Time for Pivot..
                            </div>
                          </div>
                        </div>
                        <div className={styles.selectArrowWrapper}>
                          <div className={styles.selectArrow1}>
                            <div className={styles.div}>120 / 150</div>
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
                      src="/underline3.svg"
                    />
                  </div>
                  <div className={styles.helperText2}>
                    <div className={styles.helperText3}>Helper text</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.lastStepoff}>
              <div className={styles.lastStep}>Last step - OFF</div>
              <div className={styles.switch}>
                <div className={styles.switch1}>
                  <div className={styles.slide}>
                    <div className={styles.slide1} />
                  </div>
                  <div className={styles.knob}>
                    <div className={styles.knob1} />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={styles.howToSubstepText}>
            <div className={styles.typography2}>
              <div className={styles.subtitle31}>Substeps</div>
            </div>
            <div className={styles.autocomplete}>
              <div className={styles.autocompletelinechipdefault}>
                <div className={styles.textField}>
                  <div className={styles.label4}>
                    <div className={styles.multipleValues}>Multiple values</div>
                  </div>
                  <div className={styles.content5}>
                    <div className={styles.adornmentStart2}>
                      <div className={styles.kg2}>Kg</div>
                    </div>
                    <img className={styles.icons6} alt="" src="/icons-61.svg" />
                    <div className={styles.inputText2}>
                      <div className={styles.howToSubstep}>Substep 1</div>
                    </div>
                  </div>
                  <img
                    className={styles.underlineIcon2}
                    alt=""
                    src="/underline-2.svg"
                  />
                  <div className={styles.helperText4}>
                    <div className={styles.helperText5}>Helper text</div>
                  </div>
                </div>
              </div>
              <div className={styles.autocomplete1}>
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
                    <img className={styles.icons7} alt="" src="/icons-61.svg" />
                    <div className={styles.inputText3}>
                      <div className={styles.howToSubstep1}>Substep 2</div>
                    </div>
                  </div>
                  <img
                    className={styles.underlineIcon3}
                    alt=""
                    src="/underline-2.svg"
                  />
                  <div className={styles.helperText6}>
                    <div className={styles.helperText7}>Helper text</div>
                  </div>
                </div>
              </div>
              <button className={styles.autocomplete2}>
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
                    <img className={styles.icons8} alt="" src="/icons-81.svg" />
                    <div className={styles.inputText4}>
                      <div className={styles.addSubstep1}>{`Add substep `}</div>
                    </div>
                  </button>
                  <img
                    className={styles.underlineIcon4}
                    alt=""
                    src="/underline-2.svg"
                  />
                  <div className={styles.helperText8}>
                    <div className={styles.helperText9}>Helper text</div>
                  </div>
                </button>
              </button>
            </div>
          </section>
          <section className={styles.lastStepToggle}>
            <div className={styles.subtitle}>
              <div className={styles.typography3}>
                <div className={styles.subtitle32}>Duration</div>
              </div>
              <div className={styles.masterdefaultoutlined}>
                <div className={styles.chipsetplansall}>
                  <button className={styles.chip}>
                    <div className={styles.masterdefaultoutlined1}>
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
                    <div className={styles.masterdefaultoutlined2}>
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
                    <div className={styles.masterdefaultoutlined3}>
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
                    <div className={styles.masterdefaultoutlined4}>
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
              </div>
              <div className={styles.starts1062021EndsContainer}>
                <p className={styles.starts1062021Ends}>
                  Starts: 10.6.2021; ends: 11.6.2021;
                </p>
                <p className={styles.remainsXxxxxx}>remains: XXXXXX</p>
              </div>
            </div>
            <div className={styles.progress}>
              <div className={styles.bar}>
                <div className={styles.color} />
                <div className={styles.opacity} />
                <div className={styles.progressHalf} />
              </div>
              <div className={styles.progress1} />
            </div>
          </section>
          <section className={styles.ikonaCoinComponent}>
            <div className={styles.titleFrame}>
              <div className={styles.typography4}>
                <div className={styles.subtitle33}>Reward</div>
              </div>
            </div>
            <img
              className={styles.ikonacoinIcon}
              loading="eager"
              alt=""
              src="/ikonacoin.svg"
            />
            <div className={styles.thesenodesdonthavedistinctorme}>
              <div className={styles.ikonacoin}>
                <div className={styles.thesenodesdonthavedistinctormeParent}>
                  <img
                    className={styles.thesenodesdonthavedistinctormeIcon}
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
                    <div className={styles.text}>3</div>
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
                  <div className={styles.masterbadge1}>
                    <div className={styles.text1}>1</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
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

export default MyPlans4IPhone11Pro;
