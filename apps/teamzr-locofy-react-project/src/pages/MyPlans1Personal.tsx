import { FunctionComponent, useState, useCallback } from "react";
import SortBy from "../components/SortBy";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./MyPlans1Personal.module.css";

const MyPlans1Personal: FunctionComponent = () => {
  const [isSortByOpen, setSortByOpen] = useState(false);
  const navigate = useNavigate();

  const openSortBy = useCallback(() => {
    setSortByOpen(true);
  }, []);

  const closeSortBy = useCallback(() => {
    setSortByOpen(false);
  }, []);

  const onCardContainerClick = useCallback(() => {
    navigate("/myplan-excel");
  }, [navigate]);

  const onCardContainer1Click = useCallback(() => {
    navigate("/myplan-excel");
  }, [navigate]);

  return (
    <>
      <div className={styles.myPlans1Personal}>
        <img className={styles.dividerIcon} alt="" />
        <img className={styles.dividerIcon1} alt="" src="/divider.svg" />
        <section className={styles.cardCollection}>
          <div className={styles.statusBar}>
            <img className={styles.statusBarBg} alt="" />
            <div className={styles.carrier}>
              <div className={styles.frame}>Teamzr</div>
            </div>
            <div className={styles.wifi}>
              <img
                className={styles.wifiIcon}
                loading="eager"
                alt=""
                src="/wifi@2x.png"
              />
              <div className={styles.battery}>
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
                <div className={styles.typography}>12:30</div>
              </div>
            </div>
          </div>
          <div className={styles.appbarmenu}>
            <div className={styles.appBarItems}>
              <div className={styles.rect} />
            </div>
            <div className={styles.appBarnavigationIconParent}>
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
                <div className={styles.typography1}>
                  <h3 className={styles.news}>My plans</h3>
                </div>
              </div>
            </div>
            <div className={styles.appBaroverflowIconParent}>
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
          <div className={styles.plansParent}>
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
                  <img className={styles.icons2} alt="" src="/icons-24.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card} onClick={onCardContainerClick}>
            <img className={styles.avatarIcon1} alt="" src="/avatar@2x.png" />
            <div className={styles.frameParent}>
              <div className={styles.icon80pxSocialMediaWrapper}>
                <div className={styles.icon80pxSocialMedia}>
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
              <div className={styles.cardElements}>
                <div className={styles.componentParent}>
                  <div className={styles.component}>
                    <div className={styles.september142016}>Jan Sovis (me)</div>
                  </div>
                  <div className={styles.component1}>
                    <i className={styles.september1420161}>Personal</i>
                  </div>
                </div>
                <div className={styles.typography2}>
                  <div className={styles.body2}>Home workout</div>
                </div>
              </div>
              <div className={styles.masterlarge2}>
                <img className={styles.icons7} alt="" src="/icons-7.svg" />
              </div>
            </div>
            <img
              className={styles.dividerIcon2}
              loading="eager"
              alt=""
              src="/divider.svg"
            />
          </div>
          <div className={styles.card1} onClick={onCardContainer1Click}>
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
                  className={styles.badgekrokNedefinovnIcon}
                  loading="eager"
                  alt=""
                  src="/badgekrok-nedefinovn1.svg"
                />
              </div>
            </div>
            <div className={styles.cardElements1}>
              <div className={styles.componentGroup}>
                <div className={styles.component2}>
                  <div className={styles.september1420162}>Jan Sovis (me)</div>
                </div>
                <div className={styles.component3}>
                  <i className={styles.september1420163}>Personal</i>
                </div>
              </div>
              <div className={styles.typography3}>
                <div className={styles.body21}>Home workout</div>
              </div>
            </div>
            <div className={styles.masterlarge3}>
              <img className={styles.icons12} alt="" src="/icons-7.svg" />
            </div>
          </div>
          <div className={styles.card2}>
            <img className={styles.avatarIcon3} alt="" src="/avatar@2x.png" />
            <div className={styles.frameGroup}>
              <div className={styles.icon80pxSocialMediaFrame}>
                <div className={styles.icon80pxSocialMedia2}>
                  <img className={styles.groupIcon2} alt="" src="/group.svg" />
                  <div className={styles.followbadge2}>
                    <div className={styles.masterroundsmall8}>
                      <img className={styles.icons13} alt="" />
                    </div>
                  </div>
                  <div className={styles.badgeVisible2}>
                    <div className={styles.masterroundsmall9}>
                      <img className={styles.icons14} alt="" />
                    </div>
                  </div>
                  <div className={styles.badgePublished2}>
                    <div className={styles.masterroundsmall10}>
                      <img className={styles.icons15} alt="" />
                    </div>
                  </div>
                  <div className={styles.badgeBookmark2}>
                    <div className={styles.masterroundsmall11}>
                      <img className={styles.icons16} alt="" />
                    </div>
                  </div>
                  <img
                    className={styles.badgekrokSplnnIcon}
                    loading="eager"
                    alt=""
                    src="/badgekrok-splnn.svg"
                  />
                </div>
              </div>
              <div className={styles.cardElements2}>
                <div className={styles.componentContainer}>
                  <div className={styles.component4}>
                    <div className={styles.september1420164}>
                      Jan Sovis (me)
                    </div>
                  </div>
                  <div className={styles.component5}>
                    <i className={styles.september1420165}>Personal</i>
                  </div>
                </div>
                <div className={styles.typography4}>
                  <div
                    className={styles.body22}
                  >{`How to travel cheaply in Europe `}</div>
                </div>
              </div>
              <div className={styles.masterlarge4}>
                <img className={styles.icons17} alt="" src="/icons-7.svg" />
              </div>
            </div>
            <img className={styles.dividerIcon3} alt="" src="/divider.svg" />
          </div>
        </section>
        <section className={styles.frameContainer}>
          <div className={styles.fabWrapper}>
            <button className={styles.fab}>
              <div className={styles.masterroundmedium}>
                <img className={styles.icons18} alt="" src="/icons-8.svg" />
              </div>
            </button>
          </div>
          <footer className={styles.bottomNavigation}>
            <div className={styles.bottomNavigation1}>
              <div className={styles.content}>
                <img className={styles.icons19} alt="" src="/icons-10.svg" />
                <div className={styles.tabOne}>Explore</div>
              </div>
            </div>
            <div className={styles.bottomNavigation2}>
              <div className={styles.content1}>
                <img className={styles.icons20} alt="" src="/icons-45.svg" />
                <div className={styles.tabOne1}>My plans</div>
              </div>
            </div>
            <div className={styles.bottomNavigation3}>
              <div className={styles.content2}>
                <img className={styles.icons21} alt="" src="/icons-46.svg" />
                <div className={styles.tabOne2}>Chats</div>
              </div>
            </div>
          </footer>
        </section>
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
    </>
  );
};

export default MyPlans1Personal;
