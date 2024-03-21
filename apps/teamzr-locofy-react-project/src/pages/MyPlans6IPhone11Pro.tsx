import { FunctionComponent, useState, useCallback } from "react";
import OptionsStep from "../components/OptionsStep";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./MyPlans6IPhone11Pro.module.css";

const MyPlans6IPhone11Pro: FunctionComponent = () => {
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
      <div className={styles.myPlans6Iphone11Pro}>
        <section className={styles.avatarStack}>
          <div className={styles.statusBar}>
            <img className={styles.statusBarBg} alt="" />
            <div className={styles.carrier}>
              <div className={styles.authorAvatar}>Teamzr</div>
            </div>
            <div className={styles.typography}>
              <img
                className={styles.wifiIcon}
                loading="eager"
                alt=""
                src="/wifi@2x.png"
              />
              <div className={styles.commentArea}>
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
                <div className={styles.buttonsFA}>12:30</div>
              </div>
            </div>
          </div>
          <div className={styles.secondLevelFrame}>
            <div className={styles.appbarmenu}>
              <div className={styles.appBarItems}>
                <div className={styles.rect} />
              </div>
              <div className={styles.rating}>
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
          <div className={styles.headerResize}>
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
                  <img className={styles.masterelementslineIcon1} alt="" />
                  <div className={styles.masterelementstextdefault1}>
                    <div className={styles.tabContent1}>progress</div>
                  </div>
                </div>
              </div>
              <div className={styles.tab2}>
                <div className={styles.mastertexthorizontal2}>
                  <div className={styles.masterelementstextdefault2}>
                    <div className={styles.tabContent2}>Overview</div>
                  </div>
                  <img
                    className={styles.masterelementslineIcon2}
                    loading="eager"
                    alt=""
                    src="/masterelementsline.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.fABButtons}>
              <div className={styles.authorAvatar1}>
                <div className={styles.typography2}>
                  <div className={styles.subtitle3}>Step fullfilment</div>
                </div>
              </div>
              <div className={styles.avatars}>
                <div className={styles.namedRanges1}>Named ranges 1</div>
                <div className={styles.commentsSection}>
                  <div className={styles.frameHeader}>
                    <button className={styles.fulfillmentsucceededFull}>
                      <div className={styles.succeeded}>Succeeded</div>
                    </button>
                    <div className={styles.avatarParent}>
                      <img
                        className={styles.avatarIcon}
                        alt=""
                        src="/avatar@2x.png"
                      />
                      <img
                        className={styles.avatarIcon1}
                        alt=""
                        src="/avatar-12@2x.png"
                      />
                      <img
                        className={styles.avatarIcon2}
                        alt=""
                        src="/avatar-22@2x.png"
                      />
                      <div className={styles.avatar}>
                        <div className={styles.mastertext}>
                          <div className={styles.div}>+8</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.textFrame}>
                  <div className={styles.vectorShape}>
                    <div className={styles.typographySubtitle}>
                      <div className={styles.headerWithAvatarAndMastert}>
                        <button className={styles.fulfillmentfailedFull}>
                          <div className={styles.failed}>Failed</div>
                        </button>
                      </div>
                      <div className={styles.headerWithAvatarAndMastert1}>
                        <button className={styles.fulfillmentunratedFull}>
                          <div className={styles.notRated}>Not rated</div>
                        </button>
                      </div>
                      <div className={styles.namedRanges2}>Named ranges 2</div>
                    </div>
                  </div>
                  <div className={styles.frameWithAvatarAndMasterte}>
                    <div className={styles.avatarGroup}>
                      <img
                        className={styles.avatarIcon3}
                        alt=""
                        src="/avatar@2x.png"
                      />
                      <img
                        className={styles.avatarIcon4}
                        alt=""
                        src="/avatar-12@2x.png"
                      />
                      <img
                        className={styles.avatarIcon5}
                        alt=""
                        src="/avatar-22@2x.png"
                      />
                      <div className={styles.avatar1}>
                        <div className={styles.mastertext1}>
                          <div className={styles.failedNotRated}>+8</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.avatarIcon6}
                      alt=""
                      src="/avatar-6.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.frameHeader1}>
                <button className={styles.fulfillmentsucceededFull1}>
                  <div className={styles.succeeded1}>Succeeded</div>
                </button>
                <div className={styles.avatarContainer}>
                  <img
                    className={styles.avatarIcon7}
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <img
                    className={styles.avatarIcon8}
                    alt=""
                    src="/avatar-12@2x.png"
                  />
                  <img
                    className={styles.avatarIcon9}
                    alt=""
                    src="/avatar-22@2x.png"
                  />
                  <div className={styles.avatar2}>
                    <div className={styles.mastertext2}>
                      <div className={styles.cardGroup}>+8</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.rootFrame}>
                <div className={styles.resizableFrameWithThreeHea}>
                  <div className={styles.authorAvatarAvatarAvatar}>
                    <div className={styles.authorAvatarAvatarAvatar1}>
                      <div className={styles.authorAvatarAvatarAvatar2}>
                        <button className={styles.fulfillmentfailedFull1}>
                          <div className={styles.failed1}>Failed</div>
                        </button>
                        <button className={styles.fulfillmentunratedFull1}>
                          <div className={styles.notRated1}>Not rated</div>
                        </button>
                      </div>
                    </div>
                    <div className={styles.typography3}>
                      <div className={styles.subtitle31}>Reward</div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameWithAvatarAndMasterte1}>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.avatarIcon10}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img
                      className={styles.avatarIcon11}
                      alt=""
                      src="/avatar-12@2x.png"
                    />
                    <img
                      className={styles.avatarIcon12}
                      alt=""
                      src="/avatar-22@2x.png"
                    />
                    <div className={styles.avatar3}>
                      <div className={styles.mastertext3}>
                        <div className={styles.failedFulfillment}>+8</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.avatarIcon13}
                    alt=""
                    src="/avatar-13.svg"
                  />
                </div>
              </div>
              <div className={styles.frameHeader2}>
                <img
                  className={styles.ikonacoinIcon}
                  loading="eager"
                  alt=""
                  src="/ikonacoin1.svg"
                />
                <div className={styles.avatarParent1}>
                  <img
                    className={styles.avatarIcon14}
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <img
                    className={styles.avatarIcon15}
                    alt=""
                    src="/avatar-12@2x.png"
                  />
                  <img
                    className={styles.avatarIcon16}
                    alt=""
                    src="/avatar-22@2x.png"
                  />
                  <div className={styles.avatar4}>
                    <div className={styles.mastertext4}>
                      <div className={styles.div1}>+8</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameHeader3}>
                <img
                  className={styles.ikonacoinIcon1}
                  alt=""
                  src="/ikonacoin.svg"
                />
                <div className={styles.avatarParent2}>
                  <img
                    className={styles.avatarIcon17}
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <img
                    className={styles.avatarIcon18}
                    alt=""
                    src="/avatar-12@2x.png"
                  />
                  <img
                    className={styles.avatarIcon19}
                    alt=""
                    src="/avatar-19@2x.png"
                  />
                  <div className={styles.avatar5}>
                    <div className={styles.mastertext5}>
                      <div className={styles.div2}>+2</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameHeader4}>
                <img
                  className={styles.ikonacoinIcon2}
                  alt=""
                  src="/ikonacoin-21.svg"
                />
                <div className={styles.avatarParent3}>
                  <img
                    className={styles.avatarIcon20}
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <img
                    className={styles.avatarIcon21}
                    alt=""
                    src="/avatar-12@2x.png"
                  />
                  <img
                    className={styles.avatarIcon22}
                    alt=""
                    src="/avatar-19@2x.png"
                  />
                  <div className={styles.avatar6}>
                    <div className={styles.mastertext6}>
                      <div className={styles.div3}>+1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.vector}>
          <img className={styles.cardIcon} alt="" src="/card.svg" />
          <div className={styles.commentsParent}>
            <b className={styles.comments}>Comments</b>
            <div className={styles.card1}>
              <div className={styles.headerResize1}>
                <img
                  className={styles.authorAvatarIcon}
                  loading="eager"
                  alt=""
                  src="/author-avatar@2x.png"
                />
                <div className={styles.header}>
                  <b className={styles.gianfrancoBlanco}>Gianfranco Blanco</b>
                  <div className={styles.headerInfo}>
                    <div className={styles.rating1}>
                      <img
                        className={styles.starIcon}
                        loading="eager"
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className={styles.starIcon1}
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className={styles.starIcon2}
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className={styles.starIcon3}
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className={styles.starIcon4}
                        alt=""
                        src="/star-4.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Excepteuofficia deserunt mollit anim id est laborum. `}</div>
              <div className={styles.minutesAgoButtonsParent}>
                <div className={styles.minutesAgoButtons}>
                  <div className={styles.minutesAgo}>5 minutes ago</div>
                  <img
                    className={styles.avatarsIcon}
                    loading="eager"
                    alt=""
                    src="/avatars.svg"
                  />
                </div>
                <div className={styles.wrapperButtonsFabLight}>
                  <img
                    className={styles.buttonsFabLightSmall}
                    loading="eager"
                    alt=""
                    src="/buttons--fab--light-small.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.card2}>
              <div className={styles.headerResize2}>
                <img
                  className={styles.avatar02Icon}
                  loading="eager"
                  alt=""
                  src="/avatar-02@2x.png"
                />
                <div className={styles.header1}>
                  <b className={styles.mattinaMattini}>Mattina Mattini</b>
                  <div className={styles.headerInfo1}>
                    <div className={styles.rating2}>
                      <img
                        className={styles.starIcon5}
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className={styles.starIcon6}
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className={styles.starIcon7}
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className={styles.starIcon8}
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className={styles.starIcon9}
                        alt=""
                        src="/star-4.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.loremIpsumDolor1}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Excepteur sint occaecat cupi!!!
              </div>
              <div className={styles.frameParent}>
                <div className={styles.hoursAgoParent}>
                  <div className={styles.hoursAgo}>4 hours ago</div>
                  <img
                    className={styles.avatarsIcon1}
                    alt=""
                    src="/avatars-1.svg"
                  />
                </div>
                <div className={styles.wrapperButtonsFabLight1}>
                  <img
                    className={styles.buttonsFabLightSmall1}
                    alt=""
                    src="/buttons--fab--light-small.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.card3}>
              <div className={styles.headerResize3}>
                <img
                  className={styles.avatar01Icon}
                  loading="eager"
                  alt=""
                  src="/avatar-01@2x.png"
                />
                <div className={styles.header2}>
                  <b className={styles.carolineSweetie}>Caroline Sweetie</b>
                  <div className={styles.headerInfo2}>
                    <div className={styles.rating3}>
                      <img
                        className={styles.starIcon10}
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className={styles.starIcon11}
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className={styles.starIcon12}
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className={styles.starIcon13}
                        alt=""
                        src="/star.svg"
                      />
                      <img
                        className={styles.starIcon14}
                        alt=""
                        src="/star-4.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.loremIpsumDolor2}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Excepteur sint occaecat cupi!!!
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.hoursAgoGroup}>
                  <div className={styles.hoursAgo1}>7 hours ago</div>
                  <img
                    className={styles.avatarsIcon2}
                    alt=""
                    src="/avatars-2.svg"
                  />
                </div>
                <div className={styles.wrapperButtonsFabLight2}>
                  <img
                    className={styles.buttonsFabLightSmall2}
                    alt=""
                    src="/buttons--fab--light-small.svg"
                  />
                </div>
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
        <div className={styles.commentsSection1}>
          <div className={styles.typography4}>
            <div className={styles.subtitle32}>Attachments</div>
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
    </>
  );
};

export default MyPlans6IPhone11Pro;
