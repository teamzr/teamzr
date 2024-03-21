import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Explore2DiscoverUsers.module.css";

const Explore2DiscoverUsers: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAppBarnavigationIconContainerClick = useCallback(() => {
    // Please sync "Explore_1_(iPhone 11 Pro)" to the project
  }, []);

  const onCardContainerClick = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onCardContainer1Click = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onCardContainer2Click = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onCardContainer3Click = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onCardContainer4Click = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onCardContainer12Click = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onCardContainer22Click = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onCardContainer32Click = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onCardContainer5Click = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onCardContainer13Click = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onCardContainer23Click = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  const onCardContainer33Click = useCallback(() => {
    navigate("/explore-3-iphone-11-pro");
  }, [navigate]);

  return (
    <div className={styles.explore2DiscoverUsers}>
      <section className={styles.statusBarLayout}>
        <div className={styles.statusBar}>
          <img className={styles.statusBarBg} alt="" />
          <div className={styles.carrier}>
            <div className={styles.div}>Teamzr</div>
          </div>
          <div className={styles.appbarTime}>
            <img
              className={styles.wifiIcon}
              loading="eager"
              alt=""
              src="/wifi@2x.png"
            />
            <div className={styles.receptionWrapper}>
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
          <div className={styles.appBarMenuIcon}>
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
              <h2 className={styles.stepNrStep}>Discover users</h2>
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
      <div className={styles.typography1}>
        <b className={styles.h6}>Pomodoro</b>
      </div>
      <section className={styles.rectangle}>
        <div className={styles.text}>
          <div className={styles.typography2}>
            <h2 className={styles.h61}>Bible</h2>
          </div>
        </div>
        <div className={styles.instance}>
          <div className={styles.card} onClick={onCardContainerClick}>
            <img
              className={styles.iconBackground}
              loading="eager"
              alt=""
              src="/icon-background@2x.png"
            />
            <div className={styles.cardChild} />
            <div className={styles.column}>
              <div className={styles.vector}>
                <div className={styles.plansShared}>3 plans shared</div>
                <div className={styles.followers}>66 followers</div>
              </div>
              <div className={styles.headingDescription}>
                <h3 className={styles.ashleyBradley}>Ashley Bradley</h3>
                <div className={styles.weeklySugarFreeDays}>
                  Weekly sugar-free days!
                </div>
                <div className={styles.forAQuarter}>
                  For a quarter of year I eat completely sugar-free for 3 days
                  each week. Join me in this journey! :)
                </div>
              </div>
              <div className={styles.instance1}>
                <div className={styles.sugarFreeParent}>
                  <div className={styles.sugarFree}>Sugar-free</div>
                  <div className={styles.weeklyChallenge}>Weekly challenge</div>
                  <div className={styles.foodie}>Foodie!</div>
                </div>
                <div className={styles.textContainer}>
                  <div className={styles.running}>Running</div>
                  <div className={styles.bible}>Bible</div>
                </div>
              </div>
              <button className={styles.fab}>
                <div className={styles.masterextendedsmall}>
                  <img className={styles.icons2} alt="" src="/icons-21.svg" />
                  <div className={styles.extended}>Follow</div>
                </div>
              </button>
            </div>
          </div>
          <div className={styles.card1} onClick={onCardContainer1Click}>
            <img
              className={styles.iconBackground1}
              alt=""
              src="/icon-background@2x.png"
            />
            <div className={styles.plansSharedParent}>
              <div className={styles.plansShared1}>3 plans shared</div>
              <div className={styles.followers1}>66 followers</div>
            </div>
            <div className={styles.cardItem} />
            <div className={styles.headingDescriptionParent}>
              <div className={styles.headingDescription1}>
                <h3 className={styles.ashleyBradley1}>Ashley Bradley</h3>
                <div className={styles.weeklySugarFreeDays1}>
                  Weekly sugar-free days!
                </div>
                <div className={styles.forAQuarter1}>
                  For a quarter of year I eat completely sugar-free for 3 days
                  each week. Join me in this journey! :)
                </div>
              </div>
              <div className={styles.eXTENDED}>
                <div className={styles.sugarFreeGroup}>
                  <div className={styles.sugarFree1}>Sugar-free</div>
                  <div className={styles.weeklyChallenge1}>
                    Weekly challenge
                  </div>
                  <div className={styles.foodie1}>Foodie!</div>
                </div>
                <div className={styles.sugarfree}>
                  <div className={styles.running1}>Running</div>
                  <div className={styles.bible1}>Bible</div>
                </div>
              </div>
              <div className={styles.fab1}>
                <div className={styles.masterextendedsmall1}>
                  <img className={styles.icons3} alt="" />
                  <div className={styles.extended1}>Follow</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card2} onClick={onCardContainer2Click}>
            <img
              className={styles.iconBackground2}
              alt=""
              src="/icon-background@2x.png"
            />
            <div className={styles.plansSharedGroup}>
              <div className={styles.plansShared2}>3 plans shared</div>
              <div className={styles.followers2}>66 followers</div>
            </div>
            <div className={styles.cardInner} />
            <div className={styles.headingDescriptionGroup}>
              <div className={styles.headingDescription2}>
                <h3 className={styles.ashleyBradley2}>Ashley Bradley</h3>
                <div className={styles.weeklySugarFreeDays2}>
                  Weekly sugar-free days!
                </div>
                <div className={styles.forAQuarter2}>
                  For a quarter of year I eat completely sugar-free for 3 days
                  each week. Join me in this journey! :)
                </div>
              </div>
              <div className={styles.frameParent}>
                <div className={styles.sugarFreeContainer}>
                  <div className={styles.sugarFree2}>Sugar-free</div>
                  <div className={styles.weeklyChallenge2}>
                    Weekly challenge
                  </div>
                  <div className={styles.foodie2}>Foodie!</div>
                </div>
                <div className={styles.running2}>
                  <div className={styles.running3}>Running</div>
                  <div className={styles.bible2}>Bible</div>
                </div>
              </div>
              <div className={styles.fab2}>
                <div className={styles.masterextendedsmall2}>
                  <img className={styles.icons4} alt="" />
                  <div className={styles.extended2}>Follow</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card3} onClick={onCardContainer3Click}>
            <img
              className={styles.iconBackground3}
              alt=""
              src="/icon-background@2x.png"
            />
            <div className={styles.plansSharedContainer}>
              <div className={styles.plansShared3}>3 plans shared</div>
              <div className={styles.followers3}>66 followers</div>
            </div>
            <div className={styles.frameDiv} />
            <div className={styles.headingDescriptionContainer}>
              <div className={styles.headingDescription3}>
                <h3 className={styles.ashleyBradley3}>Ashley Bradley</h3>
                <div className={styles.weeklySugarFreeDays3}>
                  Weekly sugar-free days!
                </div>
                <div className={styles.forAQuarter3}>
                  For a quarter of year I eat completely sugar-free for 3 days
                  each week. Join me in this journey! :)
                </div>
              </div>
              <div className={styles.bibleFrame}>
                <div className={styles.sugarfreeChallengeInnerFram}>
                  <div className={styles.sugarFree3}>Sugar-free</div>
                  <div className={styles.weeklyChallenge3}>
                    Weekly challenge
                  </div>
                  <div className={styles.foodie3}>Foodie!</div>
                </div>
                <div className={styles.runningTrackInnerFrame}>
                  <div className={styles.running4}>Running</div>
                  <div className={styles.bible3}>Bible</div>
                </div>
              </div>
              <div className={styles.fab3}>
                <div className={styles.masterextendedsmall3}>
                  <img className={styles.icons5} alt="" />
                  <div className={styles.extended3}>Follow</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.cardParent}>
        <div className={styles.card4} onClick={onCardContainer4Click}>
          <div className={styles.headingDescription4}>
            <div className={styles.forAQuarter4}>
              For a quarter of year I eat completely sugar-free for 3 days each
              week. Join me in this journey! :)
            </div>
            <div className={styles.ashleyBradley4}>Ashley Bradley</div>
            <div className={styles.weeklySugarFreeDays4}>
              Weekly sugar-free days!
            </div>
          </div>
          <div className={styles.plansShared4}>3 plans shared</div>
          <div className={styles.followers4}>66 followers</div>
          <img
            className={styles.iconBackground4}
            alt=""
            src="/icon-background@2x.png"
          />
          <div className={styles.cardChild1} />
          <div className={styles.fab4}>
            <div className={styles.masterextendedsmall4}>
              <img className={styles.icons6} alt="" />
              <div className={styles.extended4}>Follow</div>
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.sugarFreeParent1}>
              <div className={styles.sugarFree4}>Sugar-free</div>
              <div className={styles.weeklyChallenge4}>Weekly challenge</div>
              <div className={styles.foodie4}>Foodie!</div>
            </div>
            <div className={styles.runningParent}>
              <div className={styles.running5}>Running</div>
              <div className={styles.bible4}>Bible</div>
            </div>
          </div>
        </div>
        <div className={styles.card5} onClick={onCardContainer12Click}>
          <div className={styles.headingDescription5}>
            <div className={styles.forAQuarter5}>
              For a quarter of year I eat completely sugar-free for 3 days each
              week. Join me in this journey! :)
            </div>
            <div className={styles.ashleyBradley5}>Ashley Bradley</div>
            <div className={styles.weeklySugarFreeDays5}>
              Weekly sugar-free days!
            </div>
          </div>
          <div className={styles.plansShared5}>3 plans shared</div>
          <div className={styles.followers5}>66 followers</div>
          <img
            className={styles.iconBackground5}
            alt=""
            src="/icon-background@2x.png"
          />
          <div className={styles.cardChild2} />
          <div className={styles.fab5}>
            <div className={styles.masterextendedsmall5}>
              <img className={styles.icons7} alt="" />
              <div className={styles.extended5}>Follow</div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.sugarFreeParent2}>
              <div className={styles.sugarFree5}>Sugar-free</div>
              <div className={styles.weeklyChallenge5}>Weekly challenge</div>
              <div className={styles.foodie5}>Foodie!</div>
            </div>
            <div className={styles.runningGroup}>
              <div className={styles.running6}>Running</div>
              <div className={styles.bible5}>Bible</div>
            </div>
          </div>
        </div>
        <div className={styles.card6} onClick={onCardContainer22Click}>
          <div className={styles.headingDescription6}>
            <div className={styles.forAQuarter6}>
              For a quarter of year I eat completely sugar-free for 3 days each
              week. Join me in this journey! :)
            </div>
            <div className={styles.ashleyBradley6}>Ashley Bradley</div>
            <div className={styles.weeklySugarFreeDays6}>
              Weekly sugar-free days!
            </div>
          </div>
          <div className={styles.plansShared6}>3 plans shared</div>
          <div className={styles.followers6}>66 followers</div>
          <img
            className={styles.iconBackground6}
            alt=""
            src="/icon-background@2x.png"
          />
          <div className={styles.cardChild3} />
          <div className={styles.fab6}>
            <div className={styles.masterextendedsmall6}>
              <img className={styles.icons8} alt="" />
              <div className={styles.extended6}>Follow</div>
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.sugarFreeParent3}>
              <div className={styles.sugarFree6}>Sugar-free</div>
              <div className={styles.weeklyChallenge6}>Weekly challenge</div>
              <div className={styles.foodie6}>Foodie!</div>
            </div>
            <div className={styles.runningContainer}>
              <div className={styles.running7}>Running</div>
              <div className={styles.bible6}>Bible</div>
            </div>
          </div>
        </div>
        <div className={styles.card7} onClick={onCardContainer32Click}>
          <div className={styles.headingDescription7}>
            <div className={styles.forAQuarter7}>
              For a quarter of year I eat completely sugar-free for 3 days each
              week. Join me in this journey! :)
            </div>
            <div className={styles.ashleyBradley7}>Ashley Bradley</div>
            <div className={styles.weeklySugarFreeDays7}>
              Weekly sugar-free days!
            </div>
          </div>
          <div className={styles.plansShared7}>3 plans shared</div>
          <div className={styles.followers7}>66 followers</div>
          <img
            className={styles.iconBackground7}
            alt=""
            src="/icon-background@2x.png"
          />
          <div className={styles.cardChild4} />
          <div className={styles.fab7}>
            <div className={styles.masterextendedsmall7}>
              <img className={styles.icons9} alt="" />
              <div className={styles.extended7}>Follow</div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.sugarFreeParent4}>
              <div className={styles.sugarFree7}>Sugar-free</div>
              <div className={styles.weeklyChallenge7}>Weekly challenge</div>
              <div className={styles.foodie7}>Foodie!</div>
            </div>
            <div className={styles.runningParent1}>
              <div className={styles.running8}>Running</div>
              <div className={styles.bible7}>Bible</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fab8}>
        <div className={styles.masterroundsmall}>
          <img className={styles.icons10} alt="" />
        </div>
      </div>
      <section className={styles.rectangle1}>
        <div className={styles.typographyWrapper}>
          <div className={styles.typography3}>
            <h2 className={styles.h62}>Kaizen</h2>
          </div>
        </div>
        <footer className={styles.cardGroup}>
          <div className={styles.card8} onClick={onCardContainer5Click}>
            <img
              className={styles.iconBackground8}
              alt=""
              src="/icon-background@2x.png"
            />
            <div className={styles.plansSharedParent1}>
              <div className={styles.plansShared8}>3 plans shared</div>
              <div className={styles.followers8}>66 followers</div>
            </div>
            <div className={styles.cardChild5} />
            <div className={styles.headingDescriptionParent1}>
              <div className={styles.headingDescription8}>
                <h3 className={styles.ashleyBradley8}>Ashley Bradley</h3>
                <div className={styles.weeklySugarFreeDays8}>
                  Weekly sugar-free days!
                </div>
                <div className={styles.forAQuarter8}>
                  For a quarter of year I eat completely sugar-free for 3 days
                  each week. Join me in this journey! :)
                </div>
              </div>
              <div className={styles.text1}>
                <div className={styles.group}>
                  <div className={styles.sugarFree8}>Sugar-free</div>
                  <div className={styles.weeklyChallenge8}>
                    Weekly challenge
                  </div>
                  <div className={styles.foodie8}>Foodie!</div>
                </div>
                <div className={styles.text2}>
                  <div className={styles.running9}>Running</div>
                  <div className={styles.bible8}>Bible</div>
                </div>
              </div>
              <div className={styles.fab9}>
                <div className={styles.masterextendedsmall8}>
                  <img className={styles.icons11} alt="" />
                  <div className={styles.extended8}>Follow</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card9} onClick={onCardContainer13Click}>
            <img
              className={styles.iconBackground9}
              alt=""
              src="/icon-background@2x.png"
            />
            <div className={styles.plansSharedParent2}>
              <div className={styles.plansShared9}>3 plans shared</div>
              <div className={styles.followers9}>66 followers</div>
            </div>
            <div className={styles.cardChild6} />
            <div className={styles.headingDescriptionParent2}>
              <div className={styles.headingDescription9}>
                <h3 className={styles.ashleyBradley9}>Ashley Bradley</h3>
                <div className={styles.weeklySugarFreeDays9}>
                  Weekly sugar-free days!
                </div>
                <div className={styles.forAQuarter9}>
                  For a quarter of year I eat completely sugar-free for 3 days
                  each week. Join me in this journey! :)
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.sugarFreeParent5}>
                  <div className={styles.sugarFree9}>Sugar-free</div>
                  <div className={styles.weeklyChallenge9}>
                    Weekly challenge
                  </div>
                  <div className={styles.foodie9}>Foodie!</div>
                </div>
                <div className={styles.runningParent2}>
                  <div className={styles.running10}>Running</div>
                  <div className={styles.bible9}>Bible</div>
                </div>
              </div>
              <div className={styles.fab10}>
                <div className={styles.masterextendedsmall9}>
                  <img className={styles.icons12} alt="" />
                  <div className={styles.extended9}>Follow</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card10} onClick={onCardContainer23Click}>
            <img
              className={styles.iconBackground10}
              alt=""
              src="/icon-background@2x.png"
            />
            <div className={styles.plansSharedParent3}>
              <div className={styles.plansShared10}>3 plans shared</div>
              <div className={styles.followers10}>66 followers</div>
            </div>
            <div className={styles.cardChild7} />
            <div className={styles.headingDescriptionParent3}>
              <div className={styles.headingDescription10}>
                <h3 className={styles.ashleyBradley10}>Ashley Bradley</h3>
                <div className={styles.weeklySugarFreeDays10}>
                  Weekly sugar-free days!
                </div>
                <div className={styles.forAQuarter10}>
                  For a quarter of year I eat completely sugar-free for 3 days
                  each week. Join me in this journey! :)
                </div>
              </div>
              <div className={styles.frameParent4}>
                <div className={styles.sugarFreeParent6}>
                  <div className={styles.sugarFree10}>Sugar-free</div>
                  <div className={styles.weeklyChallenge10}>
                    Weekly challenge
                  </div>
                  <div className={styles.foodie10}>Foodie!</div>
                </div>
                <div className={styles.runningParent3}>
                  <div className={styles.running11}>Running</div>
                  <div className={styles.bible10}>Bible</div>
                </div>
              </div>
              <div className={styles.fab11}>
                <div className={styles.masterextendedsmall10}>
                  <img className={styles.icons13} alt="" />
                  <div className={styles.extended10}>Follow</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card11} onClick={onCardContainer33Click}>
            <img
              className={styles.iconBackground11}
              alt=""
              src="/icon-background@2x.png"
            />
            <div className={styles.plansSharedParent4}>
              <div className={styles.plansShared11}>3 plans shared</div>
              <div className={styles.followers11}>66 followers</div>
            </div>
            <div className={styles.cardChild8} />
            <div className={styles.headingDescriptionParent4}>
              <div className={styles.headingDescription11}>
                <h3 className={styles.ashleyBradley11}>Ashley Bradley</h3>
                <div className={styles.weeklySugarFreeDays11}>
                  Weekly sugar-free days!
                </div>
                <div className={styles.forAQuarter11}>
                  For a quarter of year I eat completely sugar-free for 3 days
                  each week. Join me in this journey! :)
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.sugarFreeParent7}>
                  <div className={styles.sugarFree11}>Sugar-free</div>
                  <div className={styles.weeklyChallenge11}>
                    Weekly challenge
                  </div>
                  <div className={styles.foodie11}>Foodie!</div>
                </div>
                <div className={styles.runningParent4}>
                  <div className={styles.running12}>Running</div>
                  <div className={styles.bible11}>Bible</div>
                </div>
              </div>
              <div className={styles.fab12}>
                <div className={styles.masterextendedsmall11}>
                  <img className={styles.icons14} alt="" />
                  <div className={styles.extended11}>Follow</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Explore2DiscoverUsers;
