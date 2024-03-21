import { FunctionComponent, useState, useCallback } from "react";
import OptionsStep from "../components/OptionsStep";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./MyPlans6IPhone11Pro1.module.css";

const MyPlans6IPhone11Pro1: FunctionComponent = () => {
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
        <section className={styles.statusBarParent}>
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
          <div className={styles.appbarmenuWrapper}>
            <div className={styles.appbarmenu}>
              <div className={styles.appBarItems}>
                <div className={styles.rect} />
              </div>
              <div className={styles.appBarnavigationIconWrapper}>
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
                  <b className={styles.stepNrStep}>Format as Table</b>
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
          <div className={styles.typographySubtitle}>
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
            <div className={styles.header}>
              <div className={styles.userInputArea}>
                <div className={styles.typography1}>
                  <div className={styles.subtitle3}>Step fullfilment</div>
                </div>
              </div>
              <div className={styles.ratingSET}>
                <div className={styles.formatAsTable}>Format as Table 1</div>
              </div>
              <div className={styles.ratingSET1}>
                <div className={styles.fulfillmentsucceededFullParent}>
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
                      src="/avatar-14@2x.png"
                    />
                    <img
                      className={styles.avatarIcon2}
                      alt=""
                      src="/avatar-23@2x.png"
                    />
                    <div className={styles.avatar}>
                      <div className={styles.mastertext}>
                        <div className={styles.cardContainer}>+8</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.textSnippet}>
                <div className={styles.typographyInstance}>
                  <div className={styles.failedFrame}>
                    <button className={styles.fulfillmentfailedFull}>
                      <div className={styles.failed}>Failed</div>
                    </button>
                    <button className={styles.fulfillmentunratedFull}>
                      <div className={styles.notRated}>Not rated</div>
                    </button>
                  </div>
                  <div className={styles.feedbackCard}>
                    <div className={styles.avatarGroup}>
                      <img
                        className={styles.avatarIcon3}
                        alt=""
                        src="/avatar-32@2x.png"
                      />
                      <img
                        className={styles.avatarIcon4}
                        alt=""
                        src="/avatar-41@2x.png"
                      />
                      <img
                        className={styles.avatarIcon5}
                        alt=""
                        src="/avatar-51@2x.png"
                      />
                      <div className={styles.avatar1}>
                        <div className={styles.mastertext1}>
                          <div className={styles.div2}>+8</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.avatarIcon6}
                      alt=""
                      src="/avatar-61.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.ratingSET2}>
                <div className={styles.formatAsTable1}>Format as Table 2</div>
              </div>
              <div className={styles.ratingSET3}>
                <div className={styles.fulfillmentsucceededFullGroup}>
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
                      src="/avatar-81@2x.png"
                    />
                    <img
                      className={styles.avatarIcon9}
                      alt=""
                      src="/avatar-22@2x.png"
                    />
                    <div className={styles.avatar2}>
                      <div className={styles.mastertext2}>
                        <div className={styles.div3}>+8</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWithCard}>
                <div className={styles.subframeWithHeaderWrapper}>
                  <div className={styles.subframeWithHeader}>
                    <div className={styles.frameWithFulfillment}>
                      <div className={styles.failedFrame1}>
                        <button className={styles.fulfillmentfailedFull1}>
                          <div className={styles.failed1}>Failed</div>
                        </button>
                        <button className={styles.fulfillmentunratedFull1}>
                          <div className={styles.notRated1}>Not rated</div>
                        </button>
                      </div>
                    </div>
                    <div className={styles.commentBubble}>
                      <div className={styles.typography2}>
                        <div className={styles.subtitle31}>Rating</div>
                      </div>
                      <div className={styles.overall}>Overall</div>
                    </div>
                  </div>
                </div>
                <div className={styles.feedbackCard1}>
                  <div className={styles.frameDiv}>
                    <img
                      className={styles.avatarIcon10}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img
                      className={styles.avatarIcon11}
                      alt=""
                      src="/avatar-81@2x.png"
                    />
                    <img
                      className={styles.avatarIcon12}
                      alt=""
                      src="/avatar-22@2x.png"
                    />
                    <div className={styles.avatar3}>
                      <div className={styles.mastertext3}>
                        <div className={styles.div4}>+8</div>
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.avatarIcon13}
                    alt=""
                    src="/avatar-131.svg"
                  />
                </div>
              </div>
              <div className={styles.ratingsetWrapper}>
                <div className={styles.ratingset}>
                  <img
                    className={styles.ratinglargefullDefaultIcon}
                    loading="eager"
                    alt=""
                    src="/ratinglargefulldefault2.svg"
                  />
                  <img
                    className={styles.ratinglargefullDefaultIcon1}
                    alt=""
                    src="/ratinglargefulldefault2.svg"
                  />
                  <img
                    className={styles.ratinglargeinactiveIcon}
                    loading="eager"
                    alt=""
                    src="/ratinglargefulldefault.svg"
                  />
                  <img
                    className={styles.ratinglargeinactiveIcon1}
                    alt=""
                    src="/ratinglargefulldefault.svg"
                  />
                  <img
                    className={styles.ratinglargeinactiveIcon2}
                    alt=""
                    src="/ratinglargefulldefault.svg"
                  />
                </div>
              </div>
              <div className={styles.boxFrame}>
                <div className={styles.individual}>Individual</div>
              </div>
              <div className={styles.ratingSET4}>
                <div className={styles.ratingsetParent}>
                  <div className={styles.ratingset1}>
                    <img
                      className={styles.ratingmediumfullDefaultIcon}
                      alt=""
                      src="/ratingmediumfulldefault.svg"
                    />
                    <img
                      className={styles.ratingmediumfullDefaultIcon1}
                      alt=""
                      src="/ratingmediumfulldefault.svg"
                    />
                    <img
                      className={styles.ratingmediuminactiveIcon}
                      alt=""
                      src="/ratingmediumfulldefault.svg"
                    />
                    <img
                      className={styles.ratingmediuminactiveIcon1}
                      alt=""
                      src="/ratingmediumfulldefault.svg"
                    />
                    <img
                      className={styles.ratingmediuminactiveIcon2}
                      alt=""
                      src="/ratingmediumfulldefault.svg"
                    />
                  </div>
                  <div className={styles.avatarParent1}>
                    <img
                      className={styles.avatarIcon14}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img
                      className={styles.avatarIcon15}
                      alt=""
                      src="/avatar-81@2x.png"
                    />
                    <img
                      className={styles.avatarIcon16}
                      alt=""
                      src="/avatar-22@2x.png"
                    />
                    <div className={styles.avatar4}>
                      <div className={styles.mastertext4}>
                        <div className={styles.div5}>+8</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.ratingSET5}>
                <div className={styles.ratingsetGroup}>
                  <div className={styles.ratingset2}>
                    <img
                      className={styles.ratingmediumfullDefaultIcon2}
                      alt=""
                      src="/ratingmediumfulldefault.svg"
                    />
                    <img
                      className={styles.ratingmediumfullDefaultIcon3}
                      alt=""
                      src="/ratingmediumfulldefault.svg"
                    />
                    <img
                      className={styles.ratingmediuminactiveIcon3}
                      alt=""
                      src="/ratingmediumfulldefault.svg"
                    />
                    <img
                      className={styles.ratingmediuminactiveIcon4}
                      alt=""
                      src="/ratingmediuminactive-4.svg"
                    />
                    <img
                      className={styles.ratingmediuminactiveIcon5}
                      alt=""
                      src="/ratingmediuminactive-4.svg"
                    />
                  </div>
                  <div className={styles.avatarParent2}>
                    <img
                      className={styles.avatarIcon17}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img
                      className={styles.avatarIcon18}
                      alt=""
                      src="/avatar-81@2x.png"
                    />
                    <img
                      className={styles.avatarIcon19}
                      alt=""
                      src="/avatar-19@2x.png"
                    />
                    <div className={styles.avatar5}>
                      <div className={styles.mastertext5}>
                        <div className={styles.div6}>+2</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.ratingSET6}>
                <div className={styles.ratingsetContainer}>
                  <div className={styles.ratingset3}>
                    <img
                      className={styles.ratingmediumfullDefaultIcon4}
                      alt=""
                      src="/ratingmediumfulldefault.svg"
                    />
                    <img
                      className={styles.ratingmediumfullDefaultIcon5}
                      alt=""
                      src="/ratingmediuminactive-4.svg"
                    />
                    <img
                      className={styles.ratingmediuminactiveIcon6}
                      alt=""
                      src="/ratingmediuminactive-4.svg"
                    />
                    <img
                      className={styles.ratingmediuminactiveIcon7}
                      alt=""
                      src="/ratingmediuminactive-4.svg"
                    />
                    <img
                      className={styles.ratingmediuminactiveIcon8}
                      alt=""
                      src="/ratingmediuminactive-4.svg"
                    />
                  </div>
                  <div className={styles.avatarParent3}>
                    <img
                      className={styles.avatarIcon20}
                      alt=""
                      src="/avatar@2x.png"
                    />
                    <img
                      className={styles.avatarIcon21}
                      alt=""
                      src="/avatar-81@2x.png"
                    />
                    <img
                      className={styles.avatarIcon22}
                      alt=""
                      src="/avatar-19@2x.png"
                    />
                    <div className={styles.avatar6}>
                      <div className={styles.mastertext6}>
                        <div className={styles.div7}>+1</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.cardElement}>
          <img
            className={styles.titleComponentIcon}
            alt=""
            src="/title-component.svg"
          />
          <div className={styles.arrowSymbol}>
            <b className={styles.comments}>Comments</b>
            <div className={styles.card1}>
              <div className={styles.headerResize}>
                <img
                  className={styles.authorAvatarIcon}
                  loading="eager"
                  alt=""
                  src="/author-avatar@2x.png"
                />
                <div className={styles.header1}>
                  <b className={styles.gianfrancoBlanco}>Gianfranco Blanco</b>
                  <div className={styles.headerInfo}>
                    <div className={styles.rating}>
                      <img
                        className={styles.starIcon}
                        loading="eager"
                        alt=""
                        src="/star1.svg"
                      />
                      <img
                        className={styles.starIcon1}
                        alt=""
                        src="/star1.svg"
                      />
                      <img
                        className={styles.starIcon2}
                        alt=""
                        src="/star1.svg"
                      />
                      <img
                        className={styles.starIcon3}
                        alt=""
                        src="/star1.svg"
                      />
                      <img
                        className={styles.starIcon4}
                        alt=""
                        src="/star-41.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Excepteuofficia deserunt mollit anim id est laborum. `}</div>
              <div className={styles.hoursAgoFrame}>
                <div className={styles.minutesAgoParent}>
                  <div className={styles.minutesAgo}>5 minutes ago</div>
                  <img
                    className={styles.avatarsIcon}
                    loading="eager"
                    alt=""
                    src="/avatars1.svg"
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
          </div>
        </section>
        <section className={styles.card2}>
          <div className={styles.headerResize1}>
            <img
              className={styles.avatar02Icon}
              loading="eager"
              alt=""
              src="/avatar-02@2x.png"
            />
            <div className={styles.header2}>
              <b className={styles.mattinaMattini}>Mattina Mattini</b>
              <div className={styles.headerInfo1}>
                <div className={styles.rating1}>
                  <img className={styles.starIcon5} alt="" src="/star1.svg" />
                  <img className={styles.starIcon6} alt="" src="/star1.svg" />
                  <img className={styles.starIcon7} alt="" src="/star1.svg" />
                  <img className={styles.starIcon8} alt="" src="/star1.svg" />
                  <img className={styles.starIcon9} alt="" src="/star-41.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.loremIpsumDolor1}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Excepteur
            sint occaecat cupi!!!
          </div>
          <div className={styles.hoursAgoFrame1}>
            <div className={styles.minutesAgoFrame}>
              <div className={styles.hoursAgo}>4 hours ago</div>
              <img
                className={styles.avatarsIcon1}
                alt=""
                src="/avatars-11.svg"
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
        </section>
        <section className={styles.cardStack}>
          <div className={styles.card3}>
            <div className={styles.headerResize2}>
              <img
                className={styles.avatar01Icon}
                loading="eager"
                alt=""
                src="/avatar-01@2x.png"
              />
              <div className={styles.header3}>
                <b className={styles.carolineSweetie}>Caroline Sweetie</b>
                <div className={styles.headerInfo2}>
                  <div className={styles.rating2}>
                    <img
                      className={styles.starIcon10}
                      alt=""
                      src="/star1.svg"
                    />
                    <img
                      className={styles.starIcon11}
                      alt=""
                      src="/star1.svg"
                    />
                    <img
                      className={styles.starIcon12}
                      alt=""
                      src="/star1.svg"
                    />
                    <img
                      className={styles.starIcon13}
                      alt=""
                      src="/star1.svg"
                    />
                    <img
                      className={styles.starIcon14}
                      alt=""
                      src="/star-41.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.loremIpsumDolor2}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Excepteur sint occaecat cupi!!!
            </div>
            <div className={styles.hoursAgoFrame2}>
              <div className={styles.minutesAgoFrame1}>
                <div className={styles.hoursAgo1}>7 hours ago</div>
                <img
                  className={styles.avatarsIcon2}
                  alt=""
                  src="/avatars-21.svg"
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
        <div className={styles.typographyInstance1}>
          <div className={styles.typography3}>
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

export default MyPlans6IPhone11Pro1;
