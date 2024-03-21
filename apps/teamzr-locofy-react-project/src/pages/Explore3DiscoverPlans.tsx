import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Explore3DiscoverPlans.module.css";

const Explore3DiscoverPlans: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAppBarnavigationIconContainerClick = useCallback(() => {
    // Please sync "Explore_1_(iPhone 11 Pro)" to the project
  }, []);

  const onWeeksCopiesFrameClick = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onAppbarNavigationIconClick = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onFrameContainer4Click = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onFrameContainer5Click = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onFrameContainer6Click = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onStatusBarFrameClick = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onAvatarFrameContainerClick = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  return (
    <div className={styles.explore3DiscoverPlans}>
      <div className={styles.typography}>
        <b className={styles.h6}>Pomodoro</b>
      </div>
      <section className={styles.statusBarParent}>
        <div className={styles.statusBar}>
          <img className={styles.statusBarBg} alt="" />
          <div className={styles.carrier}>
            <div className={styles.div}>Teamzr</div>
          </div>
          <div className={styles.wifiParent}>
            <img className={styles.wifiIcon} alt="" src="/wifi@2x.png" />
            <div className={styles.receptionWrapper}>
              <img
                className={styles.receptionIcon}
                alt=""
                src="/reception.svg"
              />
            </div>
            <img className={styles.batteryIcon} alt="" src="/battery.svg" />
            <div className={styles.time}>
              <div className={styles.div1}>12:30</div>
            </div>
          </div>
        </div>
        <div className={styles.appbarmenu}>
          <div className={styles.appBarItems}>
            <div className={styles.rect} />
          </div>
          <div className={styles.appbarNavigationIconFrame}>
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
            <div className={styles.typography1}>
              <h2 className={styles.stepNrStep}>Discover plans</h2>
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
      </section>
      <section className={styles.skillsContainerParent}>
        <div className={styles.skillsContainer}>
          <div className={styles.typography2}>
            <h2 className={styles.h61}>Bible</h2>
          </div>
        </div>
        <div className={styles.frameWithBookmark}>
          <div className={styles.card}>
            <div className={styles.iconBackground} />
            <div className={styles.cardChild} />
            <div className={styles.frameParent}>
              <div className={styles.icon120pxLaptopParent}>
                <img
                  className={styles.icon120pxLaptop}
                  alt=""
                  src="/icon-120px--laptop.svg"
                />
                <img
                  className={styles.duplicateIcon}
                  loading="eager"
                  alt=""
                  src="/duplicate.svg"
                />
              </div>
              <img
                className={styles.bookmarkIcon}
                loading="eager"
                alt=""
                src="/bookmark.svg"
              />
            </div>
            <div className={styles.button}>
              <div className={styles.masterbuttoncontainedsmall}>
                <div className={styles.content}>
                  <img className={styles.mastericonLeftsmall} alt="" />
                  <div className={styles.mastertextsmall}>
                    <div className={styles.buttonText}>Default</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.weeks120CopiesParent}>
                <div className={styles.weeks120}>{`8 weeks / 120 copies `}</div>
                <div className={styles.appbarNavigationIcon}>
                  <img
                    className={styles.appbarTitleNormal}
                    loading="eager"
                    alt=""
                    src="/vector1.svg"
                  />
                  <img
                    className={styles.masterLargeIcon}
                    alt=""
                    src="/vector-11.svg"
                  />
                  <img
                    className={styles.iconsContainer}
                    alt=""
                    src="/vector-21.svg"
                  />
                  <img
                    className={styles.rectangleShapeIcon}
                    alt=""
                    src="/vector-31.svg"
                  />
                  <img
                    className={styles.laptopFrameIcon}
                    alt=""
                    src="/vector-41.svg"
                  />
                </div>
              </div>
              <div className={styles.headingDescriptionParent}>
                <div className={styles.headingDescription}>
                  <h3 className={styles.skillsOfHighly}>
                    7 Skills of Highly Effective Programmers
                  </h3>
                  <div className={styles.ourTeamWas}>
                    Our team was inspired by the seven skills of highly
                    effective programmers created by the TechLead. W
                  </div>
                </div>
                <div className={styles.laptopIcon}>
                  <div
                    className={styles.weeksCopiesFrame}
                    onClick={onWeeksCopiesFrameClick}
                  >
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <div className={styles.glenWilliams}>Glen Williams</div>
                  </div>
                  <div className={styles.fab}>
                    <div className={styles.masterroundsmall}>
                      <img
                        className={styles.icons2}
                        alt=""
                        src="/icons-22.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card1}>
            <div className={styles.iconBackground1} />
            <div className={styles.cardItem} />
            <div className={styles.frameContainer}>
              <div className={styles.icon120pxLaptopGroup}>
                <img
                  className={styles.icon120pxLaptop1}
                  alt=""
                  src="/icon-120px--laptop-1.svg"
                />
                <img className={styles.duplicateIcon1} alt="" />
              </div>
              <img className={styles.bookmarkIcon1} alt="" />
            </div>
            <div className={styles.button1}>
              <div className={styles.masterbuttoncontainedsmall1}>
                <div className={styles.content1}>
                  <img className={styles.mastericonLeftsmall1} alt="" />
                  <div className={styles.mastertextsmall1}>
                    <div className={styles.buttonText1}>Default</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.weeks120CopiesGroup}>
                <div
                  className={styles.weeks1201}
                >{`8 weeks / 120 copies `}</div>
                <div className={styles.avatarGlenFrame}>
                  <img className={styles.cardBackgroundFrame} alt="" />
                  <img className={styles.iconPxLaptop} alt="" />
                  <img className={styles.duplicateFrameIcon} alt="" />
                  <img className={styles.bookmarkDuplicateIcon} alt="" />
                  <img className={styles.weeksCopiesFrame1} alt="" />
                </div>
              </div>
              <div className={styles.headingDescriptionGroup}>
                <div className={styles.headingDescription1}>
                  <h3 className={styles.skillsOfHighly1}>
                    7 Skills of Highly Effective Programmers
                  </h3>
                  <div className={styles.ourTeamWas1}>
                    Our team was inspired by the seven skills of highly
                    effective programmers created by the TechLead. W
                  </div>
                </div>
                <div className={styles.appbarNavigationIconParent}>
                  <div
                    className={styles.appbarNavigationIcon1}
                    onClick={onAppbarNavigationIconClick}
                  >
                    <img
                      className={styles.avatarIcon1}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <div className={styles.glenWilliams1}>Glen Williams</div>
                  </div>
                  <div className={styles.fab1}>
                    <div className={styles.masterroundsmall1}>
                      <img className={styles.icons3} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card2}>
            <div className={styles.iconBackground2} />
            <div className={styles.cardInner} />
            <div className={styles.frameParent1}>
              <div className={styles.icon120pxLaptopContainer}>
                <img className={styles.icon120pxLaptop2} alt="" />
                <img className={styles.duplicateIcon2} alt="" />
              </div>
              <img className={styles.bookmarkIcon2} alt="" />
            </div>
            <div className={styles.button2}>
              <div className={styles.masterbuttoncontainedsmall2}>
                <div className={styles.content2}>
                  <img className={styles.mastericonLeftsmall2} alt="" />
                  <div className={styles.mastertextsmall2}>
                    <div className={styles.buttonText2}>Default</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.weeks120CopiesContainer}>
                <div
                  className={styles.weeks1202}
                >{`8 weeks / 120 copies `}</div>
                <div className={styles.frame}>
                  <img className={styles.vectorIcon} alt="" />
                  <img className={styles.vectorIcon1} alt="" />
                  <img className={styles.vectorIcon2} alt="" />
                  <img className={styles.vectorIcon3} alt="" />
                  <img className={styles.vectorIcon4} alt="" />
                </div>
              </div>
              <div className={styles.headingDescriptionContainer}>
                <div className={styles.headingDescription2}>
                  <h3 className={styles.skillsOfHighly2}>
                    7 Skills of Highly Effective Programmers
                  </h3>
                  <div className={styles.ourTeamWas2}>
                    Our team was inspired by the seven skills of highly
                    effective programmers created by the TechLead. W
                  </div>
                </div>
                <div className={styles.frameParent3}>
                  <div
                    className={styles.avatarParent}
                    onClick={onFrameContainerClick}
                  >
                    <img
                      className={styles.avatarIcon2}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <div className={styles.glenWilliams2}>Glen Williams</div>
                  </div>
                  <div className={styles.fab2}>
                    <div className={styles.masterroundsmall2}>
                      <img className={styles.icons4} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card3}>
            <div className={styles.iconBackground3} />
            <div className={styles.cardChild1} />
            <div className={styles.frameParent4}>
              <div className={styles.icon120pxLaptopParent1}>
                <img className={styles.icon120pxLaptop3} alt="" />
                <img className={styles.duplicateIcon3} alt="" />
              </div>
              <img className={styles.bookmarkIcon3} alt="" />
            </div>
            <div className={styles.button3}>
              <div className={styles.masterbuttoncontainedsmall3}>
                <div className={styles.content3}>
                  <img className={styles.mastericonLeftsmall3} alt="" />
                  <div className={styles.mastertextsmall3}>
                    <div className={styles.buttonText3}>Default</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.weeks120CopiesParent1}>
                <div
                  className={styles.weeks1203}
                >{`8 weeks / 120 copies `}</div>
                <div className={styles.skillsHeader}>
                  <img className={styles.vectorIcon5} alt="" />
                  <img className={styles.vectorIcon6} alt="" />
                  <img className={styles.vectorIcon7} alt="" />
                  <img className={styles.vectorIcon8} alt="" />
                  <img className={styles.vectorIcon9} alt="" />
                </div>
              </div>
              <div className={styles.headingDescriptionParent1}>
                <div className={styles.headingDescription3}>
                  <h3 className={styles.skillsOfHighly3}>
                    7 Skills of Highly Effective Programmers
                  </h3>
                  <div className={styles.ourTeamWas3}>
                    Our team was inspired by the seven skills of highly
                    effective programmers created by the TechLead. W
                  </div>
                </div>
                <div className={styles.frameParent6}>
                  <div
                    className={styles.avatarGroup}
                    onClick={onFrameContainer2Click}
                  >
                    <img
                      className={styles.avatarIcon3}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <div className={styles.glenWilliams3}>Glen Williams</div>
                  </div>
                  <div className={styles.fab3}>
                    <div className={styles.masterroundsmall3}>
                      <img className={styles.icons5} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.cardParent}>
        <div className={styles.card4}>
          <div
            className={styles.glenWilliamsParent}
            onClick={onFrameContainer3Click}
          >
            <div className={styles.glenWilliams4}>Glen Williams</div>
            <img className={styles.avatarIcon4} alt="" src="/avatar@2x.png" />
          </div>
          <div className={styles.headingDescription4}>
            <div className={styles.ourTeamWas4}>
              Our team was inspired by the seven skills of highly effective
              programmers created by the TechLead. W
            </div>
            <div className={styles.skillsOfHighly4}>
              7 Skills of Highly Effective Programmers
            </div>
          </div>
          <div className={styles.weeks1204}>{`8 weeks / 120 copies `}</div>
          <div className={styles.iconBackground4} />
          <img className={styles.icon120pxLaptop4} alt="" />
          <div className={styles.cardChild2} />
          <div className={styles.frame1}>
            <img className={styles.vectorIcon10} alt="" />
            <img className={styles.vectorIcon11} alt="" />
            <img className={styles.vectorIcon12} alt="" />
            <img className={styles.vectorIcon13} alt="" />
            <img className={styles.vectorIcon14} alt="" />
          </div>
          <img className={styles.bookmarkIcon4} alt="" />
          <img className={styles.duplicateIcon4} alt="" />
          <div className={styles.button4}>
            <div className={styles.masterbuttoncontainedsmall4}>
              <div className={styles.content4}>
                <img className={styles.mastericonLeftsmall4} alt="" />
                <div className={styles.mastertextsmall4}>
                  <div className={styles.buttonText4}>Default</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fab4}>
            <div className={styles.masterroundsmall4}>
              <img className={styles.icons6} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.card5}>
          <div
            className={styles.glenWilliamsGroup}
            onClick={onFrameContainer4Click}
          >
            <div className={styles.glenWilliams5}>Glen Williams</div>
            <img className={styles.avatarIcon5} alt="" src="/avatar@2x.png" />
          </div>
          <div className={styles.headingDescription5}>
            <div className={styles.ourTeamWas5}>
              Our team was inspired by the seven skills of highly effective
              programmers created by the TechLead. W
            </div>
            <div className={styles.skillsOfHighly5}>
              7 Skills of Highly Effective Programmers
            </div>
          </div>
          <div className={styles.weeks1205}>{`8 weeks / 120 copies `}</div>
          <div className={styles.iconBackground5} />
          <img className={styles.icon120pxLaptop5} alt="" />
          <div className={styles.cardChild3} />
          <div className={styles.frame2}>
            <img className={styles.vectorIcon15} alt="" />
            <img className={styles.vectorIcon16} alt="" />
            <img className={styles.vectorIcon17} alt="" />
            <img className={styles.vectorIcon18} alt="" />
            <img className={styles.vectorIcon19} alt="" />
          </div>
          <img className={styles.bookmarkIcon5} alt="" />
          <img className={styles.duplicateIcon5} alt="" />
          <div className={styles.button5}>
            <div className={styles.masterbuttoncontainedsmall5}>
              <div className={styles.content5}>
                <img className={styles.mastericonLeftsmall5} alt="" />
                <div className={styles.mastertextsmall5}>
                  <div className={styles.buttonText5}>Default</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fab5}>
            <div className={styles.masterroundsmall5}>
              <img className={styles.icons7} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.card6}>
          <div
            className={styles.glenWilliamsContainer}
            onClick={onFrameContainer5Click}
          >
            <div className={styles.glenWilliams6}>Glen Williams</div>
            <img className={styles.avatarIcon6} alt="" src="/avatar@2x.png" />
          </div>
          <div className={styles.headingDescription6}>
            <div className={styles.ourTeamWas6}>
              Our team was inspired by the seven skills of highly effective
              programmers created by the TechLead. W
            </div>
            <div className={styles.skillsOfHighly6}>
              7 Skills of Highly Effective Programmers
            </div>
          </div>
          <div className={styles.weeks1206}>{`8 weeks / 120 copies `}</div>
          <div className={styles.iconBackground6} />
          <img className={styles.icon120pxLaptop6} alt="" />
          <div className={styles.cardChild4} />
          <div className={styles.frame3}>
            <img className={styles.vectorIcon20} alt="" />
            <img className={styles.vectorIcon21} alt="" />
            <img className={styles.vectorIcon22} alt="" />
            <img className={styles.vectorIcon23} alt="" />
            <img className={styles.vectorIcon24} alt="" />
          </div>
          <img className={styles.bookmarkIcon6} alt="" />
          <img className={styles.duplicateIcon6} alt="" />
          <div className={styles.button6}>
            <div className={styles.masterbuttoncontainedsmall6}>
              <div className={styles.content6}>
                <img className={styles.mastericonLeftsmall6} alt="" />
                <div className={styles.mastertextsmall6}>
                  <div className={styles.buttonText6}>Default</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.fab6}>
            <div className={styles.masterroundsmall6}>
              <img className={styles.icons8} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fab7}>
        <div className={styles.masterroundsmall7}>
          <img className={styles.icons9} alt="" />
        </div>
      </div>
      <section className={styles.frameSection}>
        <div className={styles.typographyWrapper}>
          <div className={styles.typography3}>
            <h2 className={styles.h62}>Kaizen</h2>
          </div>
        </div>
        <footer className={styles.cardGroup}>
          <div className={styles.card7}>
            <div className={styles.iconBackground7} />
            <div className={styles.cardChild5} />
            <div className={styles.frameParent7}>
              <div className={styles.icon120pxLaptopParent2}>
                <img
                  className={styles.icon120pxLaptop7}
                  alt=""
                  src="/icon-120px--laptop-4.svg"
                />
                <img
                  className={styles.duplicateIcon7}
                  alt=""
                  src="/duplicate.svg"
                />
              </div>
              <img
                className={styles.bookmarkIcon7}
                alt=""
                src="/bookmark.svg"
              />
            </div>
            <div className={styles.button7}>
              <div className={styles.masterbuttoncontainedsmall7}>
                <div className={styles.content7}>
                  <img className={styles.mastericonLeftsmall7} alt="" />
                  <div className={styles.mastertextsmall7}>
                    <div className={styles.buttonText7}>Default</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent8}>
              <div className={styles.weeks120CopiesParent2}>
                <div
                  className={styles.weeks1207}
                >{`8 weeks / 120 copies `}</div>
                <div className={styles.frame4}>
                  <img
                    className={styles.vectorIcon25}
                    alt=""
                    src="/vector1.svg"
                  />
                  <img
                    className={styles.vectorIcon26}
                    alt=""
                    src="/vector-11.svg"
                  />
                  <img
                    className={styles.vectorIcon27}
                    alt=""
                    src="/vector-21.svg"
                  />
                  <img
                    className={styles.vectorIcon28}
                    alt=""
                    src="/vector-31.svg"
                  />
                  <img
                    className={styles.vectorIcon29}
                    alt=""
                    src="/vector-41.svg"
                  />
                </div>
              </div>
              <div className={styles.headingDescriptionParent2}>
                <div className={styles.headingDescription7}>
                  <h3 className={styles.skillsOfHighly7}>
                    7 Skills of Highly Effective Programmers
                  </h3>
                  <div className={styles.ourTeamWas7}>
                    Our team was inspired by the seven skills of highly
                    effective programmers created by the TechLead. W
                  </div>
                </div>
                <div className={styles.frameParent9}>
                  <div
                    className={styles.avatarContainer}
                    onClick={onFrameContainer6Click}
                  >
                    <img
                      className={styles.avatarIcon7}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <div className={styles.glenWilliams7}>Glen Williams</div>
                  </div>
                  <div className={styles.fab8}>
                    <div className={styles.masterroundsmall8}>
                      <img className={styles.icons10} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card8}>
            <div className={styles.iconBackground8} />
            <div className={styles.icon120pxLaptopParent3}>
              <img
                className={styles.icon120pxLaptop8}
                alt=""
                src="/icon-120px--laptop-5.svg"
              />
              <img className={styles.duplicateIcon8} alt="" />
            </div>
            <div className={styles.cardChild6} />
            <div className={styles.weeks120CopiesParent3}>
              <div className={styles.weeks1208}>{`8 weeks / 120 copies `}</div>
              <div className={styles.frame5}>
                <img className={styles.frameWifiIcon} alt="" />
                <img className={styles.frameWifiIcon1} alt="" />
                <img className={styles.frameWifiIcon2} alt="" />
                <img className={styles.frameReceptionIcon} alt="" />
                <img className={styles.batteryFrameIcon} alt="" />
              </div>
            </div>
            <img className={styles.bookmarkIcon8} alt="" />
            <div className={styles.button8}>
              <div className={styles.masterbuttoncontainedsmall8}>
                <div className={styles.content8}>
                  <img className={styles.mastericonLeftsmall8} alt="" />
                  <div className={styles.mastertextsmall8}>
                    <div className={styles.buttonText8}>Default</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.descriptionCard}>
              <div className={styles.headingDescription8}>
                <h3 className={styles.skillsOfHighly8}>
                  7 Skills of Highly Effective Programmers
                </h3>
                <div className={styles.ourTeamWas8}>
                  Our team was inspired by the seven skills of highly effective
                  programmers created by the TechLead. W
                </div>
              </div>
              <div className={styles.glenFrame}>
                <div
                  className={styles.statusBarFrame}
                  onClick={onStatusBarFrameClick}
                >
                  <div className={styles.glenWilliams8}>Glen Williams</div>
                  <img
                    className={styles.avatarIcon8}
                    alt=""
                    src="/avatar@2x.png"
                  />
                </div>
                <div className={styles.fab9}>
                  <div className={styles.masterroundsmall9}>
                    <img className={styles.icons11} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card9}>
            <div className={styles.iconBackground9} />
            <div className={styles.icon120pxLaptopParent4}>
              <img className={styles.icon120pxLaptop9} alt="" />
              <img className={styles.duplicateIcon9} alt="" />
            </div>
            <div className={styles.cardChild7} />
            <div className={styles.weeks120CopiesParent4}>
              <div className={styles.weeks1209}>{`8 weeks / 120 copies `}</div>
              <div className={styles.frame6}>
                <img className={styles.skillsBannerIcon} alt="" />
                <img className={styles.skillsBannerIcon1} alt="" />
                <img className={styles.skillsBannerIcon2} alt="" />
                <img className={styles.skillsBannerIcon3} alt="" />
                <img className={styles.skillsBannerIcon4} alt="" />
              </div>
            </div>
            <img className={styles.bookmarkIcon9} alt="" />
            <div className={styles.button9}>
              <div className={styles.masterbuttoncontainedsmall9}>
                <div className={styles.content9}>
                  <img className={styles.mastericonLeftsmall9} alt="" />
                  <div className={styles.mastertextsmall9}>
                    <div className={styles.buttonText9}>Default</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.descriptionCard1}>
              <div className={styles.headingDescription9}>
                <h3 className={styles.skillsOfHighly9}>
                  7 Skills of Highly Effective Programmers
                </h3>
                <div className={styles.ourTeamWas9}>
                  Our team was inspired by the seven skills of highly effective
                  programmers created by the TechLead. W
                </div>
              </div>
              <div className={styles.glenFrame1}>
                <div
                  className={styles.avatarFrame}
                  onClick={onAvatarFrameContainerClick}
                >
                  <div className={styles.glenWilliams9}>Glen Williams</div>
                  <img
                    className={styles.avatarIcon9}
                    alt=""
                    src="/avatar@2x.png"
                  />
                </div>
                <div className={styles.fab10}>
                  <div className={styles.masterroundsmall10}>
                    <img className={styles.icons12} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Explore3DiscoverPlans;
