import { FunctionComponent, useState, useCallback } from "react";
import SortBy from "../components/SortBy";
import PortalPopup from "../components/PortalPopup";
import OptionsPlan from "../components/OptionsPlan";
import { useNavigate } from "react-router-dom";
import styles from "./MyPlans1IPhone11Pro.module.css";

const MyPlans1IPhone11Pro: FunctionComponent = () => {
  const [isSortByOpen, setSortByOpen] = useState(false);
  const [isOptionsPlanOpen, setOptionsPlanOpen] = useState(false);
  const [isOptionsPlan1Open, setOptionsPlan1Open] = useState(false);
  const navigate = useNavigate();

  const openSortBy = useCallback(() => {
    setSortByOpen(true);
  }, []);

  const closeSortBy = useCallback(() => {
    setSortByOpen(false);
  }, []);

  const onIcon80pxSocialMediaClick = useCallback(() => {
    navigate("/myplan-excel");
  }, [navigate]);

  const onCardElementsContainerClick = useCallback(() => {
    navigate("/myplan-excel");
  }, [navigate]);

  const openOptionsPlan = useCallback(() => {
    setOptionsPlanOpen(true);
  }, []);

  const closeOptionsPlan = useCallback(() => {
    setOptionsPlanOpen(false);
  }, []);

  const onIcon80pxSocialMedia2Click = useCallback(() => {
    navigate("/myplan-new");
  }, [navigate]);

  const onCardElementsContainer2Click = useCallback(() => {
    navigate("/myplan-new");
  }, [navigate]);

  const openOptionsPlan1 = useCallback(() => {
    setOptionsPlan1Open(true);
  }, []);

  const closeOptionsPlan1 = useCallback(() => {
    setOptionsPlan1Open(false);
  }, []);

  return (
    <>
      <div className={styles.myPlans1Iphone11Pro}>
        <div className={styles.statusBar}>
          <img className={styles.statusBarBg} alt="" />
          <div className={styles.carrier}>
            <div className={styles.div}>Teamzr</div>
          </div>
          <div className={styles.septemberMonth}>
            <img
              className={styles.wifiIcon}
              loading="eager"
              alt=""
              src="/wifi@2x.png"
            />
            <div className={styles.typographyText}>
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
              <div className={styles.badgeKrokCompleted}>12:30</div>
            </div>
          </div>
        </div>
        <div className={styles.appbarmenu}>
          <div className={styles.appBarItems}>
            <div className={styles.rect} />
          </div>
          <div className={styles.framebadgekrokcompleted}>
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
            <div className={styles.appBartitlenormal}>
              <div className={styles.typography}>
                <h3 className={styles.news}>My plans</h3>
              </div>
            </div>
          </div>
          <div className={styles.masterlargeIcons}>
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
        <div className={styles.frameCardElements}>
          <div className={styles.plans}>
            <div className={styles.chipset}>
              <div className={styles.chipsetplansall}>
                <div className={styles.chip}>
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
                    <div className={styles.medium}>All</div>
                    <img className={styles.closeFrameIcon} alt="" />
                  </div>
                </div>
                <div className={styles.chipoutlinedmediumprimaryt}>
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
                    <div className={styles.medium1}>In chat</div>
                    <img className={styles.closeFrameIcon1} alt="" />
                  </div>
                </div>
                <div className={styles.chipoutlinedmediumprimaryt1}>
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
                    <div className={styles.medium2}>Personal</div>
                    <img className={styles.closeFrameIcon2} alt="" />
                  </div>
                </div>
                <div className={styles.chipoutlinedmediumprimaryt2}>
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
                    <div className={styles.medium3}>Drafts</div>
                    <img className={styles.closeFrameIcon3} alt="" />
                  </div>
                </div>
                <div className={styles.chipoutlinedmediumprimaryt3}>
                  <div className={styles.masterdefaultoutlined3}>
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
                    <div className={styles.medium4}>Bookmarks</div>
                    <img className={styles.closeFrameIcon4} alt="" />
                  </div>
                </div>
                <div className={styles.chipoutlinedmediumprimaryt4}>
                  <div className={styles.masterdefaultoutlined4}>
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
                    <div className={styles.medium5}>Published</div>
                    <img className={styles.closeFrameIcon5} alt="" />
                  </div>
                </div>
                <div className={styles.chipoutlinedmediumprimaryt5}>
                  <div className={styles.masterdefaultoutlined5}>
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
                    <div className={styles.medium6}>WebApp</div>
                    <img className={styles.closeFrameIcon6} alt="" />
                  </div>
                </div>
                <div className={styles.chipoutlinedmediumprimaryt6}>
                  <div className={styles.masterdefaultoutlined6}>
                    <div className={styles.avatariconFrame7}>
                      <img
                        className={styles.masterelementsavatarimageIcon7}
                        alt=""
                      />
                      <img className={styles.masterelementsicon7} alt="" />
                      <div className={styles.masterelementsavatarletter7}>
                        <div className={styles.f7}>F</div>
                      </div>
                    </div>
                    <div className={styles.medium7}>Class</div>
                    <img className={styles.closeFrameIcon7} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.sorting} onClick={openSortBy}>
            <div className={styles.text}>
              <div className={styles.randomText}>Alphabetical</div>
            </div>
            <div className={styles.iconButton}>
              <div className={styles.mastersmall}>
                <img className={styles.icons2} alt="" src="/icons-23.svg" />
              </div>
            </div>
          </div>
        </div>
        <main className={styles.userplanset}>
          <img className={styles.dividerIcon} alt="" />
          <section className={styles.cardplan}>
            <img className={styles.avatarIcon1} alt="" src="/avatar@2x.png" />
            <div className={styles.socialMediaIconFrame}>
              <div className={styles.icon80pxSocialMediaWrapper}>
                <div
                  className={styles.icon80pxSocialMedia}
                  onClick={onIcon80pxSocialMediaClick}
                >
                  <img className={styles.groupIcon} alt="" src="/group.svg" />
                  <div className={styles.followbadge}>
                    <div className={styles.masterroundsmall}>
                      <img className={styles.icons3} alt="" />
                    </div>
                  </div>
                  <div className={styles.badgeVisible}>
                    <div className={styles.masterroundsmall1}>
                      <img className={styles.icons4} alt="" />
                    </div>
                  </div>
                  <div className={styles.badgePublished}>
                    <div className={styles.masterroundsmall2}>
                      <img className={styles.icons5} alt="" />
                    </div>
                  </div>
                  <div className={styles.badgeBookmark}>
                    <div className={styles.masterroundsmall3}>
                      <img className={styles.icons6} alt="" />
                    </div>
                  </div>
                  <img
                    className={styles.badgekrokProbhIcon}
                    loading="eager"
                    alt=""
                    src="/badgekrok-probh.svg"
                  />
                </div>
              </div>
              <div
                className={styles.cardElements}
                onClick={onCardElementsContainerClick}
              >
                <div className={styles.componentParent}>
                  <div className={styles.component}>
                    <div className={styles.september142016}>Jan Sovis (me)</div>
                  </div>
                  <div className={styles.component1}>
                    <i className={styles.september1420161}>Personal</i>
                  </div>
                </div>
                <div className={styles.typography1}>
                  <div className={styles.body2}>
                    Excel - Become office hero (1)
                  </div>
                </div>
              </div>
              <div
                className={styles.iconButtonlargeprimarydefa2}
                onClick={openOptionsPlan}
              >
                <div className={styles.masterlarge2}>
                  <img className={styles.icons7} alt="" src="/icons-7.svg" />
                </div>
              </div>
            </div>
            <img
              className={styles.dividerIcon1}
              loading="eager"
              alt=""
              src="/divider.svg"
            />
          </section>
          <section className={styles.card}>
            <img className={styles.avatarIcon2} alt="" src="/avatar@2x.png" />
            <div className={styles.icon80pxSocialMediaContainer}>
              <div className={styles.icon80pxSocialMedia1}>
                <img className={styles.groupIcon1} alt="" src="/group.svg" />
                <div className={styles.followbadge1}>
                  <div className={styles.masterroundsmall4}>
                    <img className={styles.icons8} alt="" />
                  </div>
                </div>
                <div className={styles.badgeVisible1}>
                  <div className={styles.masterroundsmall5}>
                    <img className={styles.icons9} alt="" />
                  </div>
                </div>
                <div className={styles.badgePublished1}>
                  <div className={styles.masterroundsmall6}>
                    <img className={styles.icons10} alt="" />
                  </div>
                </div>
                <div className={styles.badgeBookmark1}>
                  <div className={styles.masterroundsmall7}>
                    <img className={styles.icons11} alt="" />
                  </div>
                </div>
                <img
                  className={styles.badgekrokSpIcon}
                  loading="eager"
                  alt=""
                  src="/badgekrok-sp.svg"
                />
              </div>
            </div>
            <div className={styles.cardElements1}>
              <div className={styles.badgeKrokComplete}>
                <div className={styles.frameWithBadgeKrok}>
                  <div className={styles.component2}>
                    <div className={styles.september1420162}>Mládež ŠPK</div>
                  </div>
                  <div className={styles.component3}>
                    <i className={styles.september1420163}>In chat</i>
                  </div>
                </div>
              </div>
              <div className={styles.typography2}>
                <div
                  className={styles.body21}
                >{`How to travel cheaply in Europe `}</div>
              </div>
            </div>
            <div className={styles.masterlarge3}>
              <img className={styles.icons12} alt="" src="/icons-7.svg" />
            </div>
          </section>
          <img className={styles.dividerIcon2} alt="" src="/divider.svg" />
          <section className={styles.card1}>
            <img className={styles.avatarIcon3} alt="" src="/avatar@2x.png" />
            <div className={styles.icon80pxSocialMediaFrame}>
              <div className={styles.icon80pxSocialMedia2}>
                <div className={styles.groupParent}>
                  <img className={styles.groupIcon2} alt="" src="/group.svg" />
                  <div className={styles.masterroundsmall8}>
                    <img
                      className={styles.icons13}
                      alt=""
                      src="/icons-131.svg"
                    />
                  </div>
                </div>
                <div className={styles.followbadge2}>
                  <div className={styles.masterroundsmall9}>
                    <img className={styles.icons14} alt="" />
                  </div>
                </div>
                <div className={styles.badgeVisible2}>
                  <div className={styles.masterroundsmall10}>
                    <img className={styles.icons15} alt="" />
                  </div>
                </div>
                <div className={styles.badgeBookmark2}>
                  <div className={styles.masterroundsmall11}>
                    <img className={styles.icons16} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardElements2}>
              <div className={styles.componentGroup}>
                <div className={styles.component4}>
                  <div className={styles.september1420164}>Jan Sovis (me)</div>
                </div>
                <div className={styles.component5}>
                  <i className={styles.september1420165}>Published</i>
                </div>
              </div>
              <div className={styles.typography3}>
                <div className={styles.body22}>Excel - Become office hero</div>
              </div>
            </div>
            <div className={styles.masterlarge4}>
              <img className={styles.icons17} alt="" src="/icons-7.svg" />
            </div>
          </section>
          <img className={styles.dividerIcon3} alt="" src="/divider.svg" />
          <section className={styles.card2}>
            <img className={styles.avatarIcon4} alt="" src="/avatar@2x.png" />
            <div className={styles.frameDiv}>
              <div className={styles.icon80pxSocialMedia3}>
                <div className={styles.groupGroup}>
                  <img className={styles.groupIcon3} alt="" src="/group.svg" />
                  <div className={styles.badgeBookmark3}>
                    <div className={styles.masterroundsmall12}>
                      <img
                        className={styles.icons18}
                        alt=""
                        src="/icons-18.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.followbadge3}>
                  <div className={styles.masterroundsmall13}>
                    <img className={styles.icons19} alt="" />
                  </div>
                </div>
                <div className={styles.badgeVisible3}>
                  <div className={styles.masterroundsmall14}>
                    <img className={styles.icons20} alt="" />
                  </div>
                </div>
                <div className={styles.badgePublished2}>
                  <div className={styles.masterroundsmall15}>
                    <img className={styles.icons21} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardElements3}>
              <div className={styles.frameDividerCard}>
                <div className={styles.component6}>
                  <div className={styles.september1420166}>Ashley Bradley</div>
                </div>
                <div className={styles.component7}>
                  <i className={styles.september1420167}>Bookmarks</i>
                </div>
              </div>
              <div className={styles.typography4}>
                <div
                  className={styles.body23}
                >{`How to travel cheaply in Europe `}</div>
              </div>
            </div>
            <div className={styles.masterlarge5}>
              <img className={styles.icons22} alt="" src="/icons-7.svg" />
            </div>
          </section>
          <img className={styles.dividerIcon4} alt="" src="/divider.svg" />
          <section className={styles.card3}>
            <img className={styles.avatarIcon5} alt="" src="/avatar@2x.png" />
            <div className={styles.icon80pxSocialMediaWrapper1}>
              <div
                className={styles.icon80pxSocialMedia4}
                onClick={onIcon80pxSocialMedia2Click}
              >
                <img className={styles.groupIcon4} alt="" src="/group-4.svg" />
                <div className={styles.followbadge4}>
                  <div className={styles.masterroundsmall16}>
                    <img className={styles.icons23} alt="" />
                  </div>
                </div>
                <div className={styles.badgeVisible4}>
                  <div className={styles.masterroundsmall17}>
                    <img className={styles.icons24} alt="" />
                  </div>
                </div>
                <div className={styles.badgePublished3}>
                  <div className={styles.masterroundsmall18}>
                    <img className={styles.icons25} alt="" />
                  </div>
                </div>
                <div className={styles.badgeBookmark4}>
                  <div className={styles.masterroundsmall19}>
                    <img className={styles.icons26} alt="" />
                  </div>
                </div>
                <img
                  className={styles.badgekrokNedefinovnIcon}
                  loading="eager"
                  alt=""
                  src="/badgekrok-nedefinovn.svg"
                />
              </div>
            </div>
            <div
              className={styles.cardElements4}
              onClick={onCardElementsContainer2Click}
            >
              <div className={styles.componentContainer}>
                <div className={styles.component8}>
                  <div className={styles.september1420168}>Jan Sovis (me)</div>
                </div>
                <div className={styles.component9}>
                  <i className={styles.september1420169}>Personal</i>
                </div>
              </div>
              <div className={styles.typography5}>
                <div className={styles.body24}>Home workout</div>
              </div>
            </div>
            <div
              className={styles.iconButtonlargeprimarydefa3}
              onClick={openOptionsPlan1}
            >
              <div className={styles.masterlarge6}>
                <img className={styles.icons27} alt="" src="/icons-7.svg" />
              </div>
            </div>
          </section>
          <img className={styles.dividerIcon5} alt="" src="/divider.svg" />
          <section className={styles.card4}>
            <img className={styles.avatarIcon6} alt="" src="/avatar@2x.png" />
            <div className={styles.icon80pxSocialMediaWrapper2}>
              <div className={styles.icon80pxSocialMedia5}>
                <div className={styles.groupContainer}>
                  <img
                    className={styles.groupIcon5}
                    alt=""
                    src="/group-4.svg"
                  />
                  <div className={styles.masterroundsmall20}>
                    <img
                      className={styles.icons28}
                      alt=""
                      src="/icons-28.svg"
                    />
                  </div>
                </div>
                <div className={styles.followbadge5}>
                  <div className={styles.masterroundsmall21}>
                    <img className={styles.icons29} alt="" />
                  </div>
                </div>
                <div className={styles.badgeVisible5}>
                  <div className={styles.masterroundsmall22}>
                    <img className={styles.icons30} alt="" />
                  </div>
                </div>
                <div className={styles.badgeBookmark5}>
                  <div className={styles.masterroundsmall23}>
                    <img className={styles.icons31} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardElements5}>
              <div className={styles.componentParent1}>
                <div className={styles.component10}>
                  <div className={styles.september14201610}>Jan Sovis (me)</div>
                </div>
                <div className={styles.component11}>
                  <i className={styles.september14201611}>Published</i>
                </div>
              </div>
              <div className={styles.typography6}>
                <div className={styles.body25}>Excel - Become office hero</div>
              </div>
            </div>
            <div className={styles.masterlarge7}>
              <img className={styles.icons32} alt="" src="/icons-7.svg" />
              <div className={styles.fab}>
                <div className={styles.masterroundmedium}>
                  <img className={styles.icons33} alt="" src="/icons-8.svg" />
                </div>
              </div>
            </div>
          </section>
          <section className={styles.card5}>
            <img className={styles.avatarIcon7} alt="" src="/avatar@2x.png" />
            <div className={styles.followbadge6}>
              <div className={styles.masterroundsmall24}>
                <img className={styles.icons34} alt="" />
              </div>
            </div>
            <div className={styles.badgeVisible6}>
              <div className={styles.masterroundsmall25}>
                <img className={styles.icons35} alt="" />
              </div>
            </div>
            <div className={styles.badgePublished4}>
              <div className={styles.masterroundsmall26}>
                <img className={styles.icons36} alt="" />
              </div>
            </div>
            <div className={styles.badgeBookmark6}>
              <div className={styles.masterroundsmall27}>
                <img className={styles.icons37} alt="" />
              </div>
            </div>
            <div className={styles.cardInner}>
              <div className={styles.dividerParent}>
                <img
                  className={styles.dividerIcon6}
                  alt=""
                  src="/divider.svg"
                />
                <div className={styles.groupParent1}>
                  <img
                    className={styles.groupIcon6}
                    alt=""
                    src="/group-6.svg"
                  />
                  <div className={styles.cardElements6}>
                    <div className={styles.sepCardFrame}>
                      <div className={styles.component12}>
                        <div className={styles.september14201612}>
                          Mládež ŠPK
                        </div>
                      </div>
                      <div className={styles.component13}>
                        <i className={styles.september14201613}>Group</i>
                      </div>
                    </div>
                    <div className={styles.typography7}>
                      <div
                        className={styles.body26}
                      >{`How to travel cheaply in Europe `}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.badgekrokSplnnParent}>
              <img className={styles.badgekrokSplnnIcon} alt="" />
              <div className={styles.masterlargeWrapper}>
                <div className={styles.masterlarge8}>
                  <img className={styles.icons38} alt="" />
                </div>
              </div>
            </div>
          </section>
          <img className={styles.dividerIcon7} alt="" />
          <section className={styles.card6}>
            <img className={styles.avatarIcon8} alt="" src="/avatar@2x.png" />
            <div className={styles.frameParent}>
              <div className={styles.icon80pxSocialMediaWrapper3}>
                <div className={styles.icon80pxSocialMedia6}>
                  <div className={styles.groupParent2}>
                    <img className={styles.groupIcon7} alt="" />
                    <div className={styles.badgeBookmark7}>
                      <div className={styles.masterroundsmall28}>
                        <img className={styles.icons39} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.followbadge7}>
                    <div className={styles.masterroundsmall29}>
                      <img className={styles.icons40} alt="" />
                    </div>
                  </div>
                  <div className={styles.badgeVisible7}>
                    <div className={styles.masterroundsmall30}>
                      <img className={styles.icons41} alt="" />
                    </div>
                  </div>
                  <div className={styles.badgePublished5}>
                    <div className={styles.masterroundsmall31}>
                      <img className={styles.icons42} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.cardElements7}>
                <div className={styles.frameDividerCard1}>
                  <div className={styles.component14}>
                    <div className={styles.september14201614}>
                      Ashley Bradley
                    </div>
                  </div>
                  <div className={styles.component15}>
                    <i className={styles.september14201615}>Bookmarks</i>
                  </div>
                </div>
                <div className={styles.typography8}>
                  <div
                    className={styles.body27}
                  >{`How to travel cheaply in Europe `}</div>
                </div>
              </div>
              <div className={styles.masterlarge9}>
                <img className={styles.icons43} alt="" />
              </div>
            </div>
            <img className={styles.dividerIcon8} alt="" />
          </section>
        </main>
        <footer className={styles.bottomNavigation}>
          <div className={styles.bottomNavigation1}>
            <div className={styles.content}>
              <img className={styles.icons44} alt="" src="/icons-10.svg" />
              <div className={styles.tabOne}>Explore</div>
            </div>
          </div>
          <div className={styles.bottomNavigation2}>
            <div className={styles.content1}>
              <img className={styles.icons45} alt="" src="/icons-45.svg" />
              <div className={styles.tabOne1}>My plans</div>
            </div>
          </div>
          <div className={styles.bottomNavigation3}>
            <div className={styles.content2}>
              <img className={styles.icons46} alt="" src="/icons-46.svg" />
              <div className={styles.tabOne2}>Chats</div>
            </div>
          </div>
        </footer>
      </div>
      {isSortByOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSortBy}
        >
          <SortBy onClose={closeSortBy} />
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
      {isOptionsPlan1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeOptionsPlan1}
        >
          <OptionsPlan onClose={closeOptionsPlan1} />
        </PortalPopup>
      )}
    </>
  );
};

export default MyPlans1IPhone11Pro;
