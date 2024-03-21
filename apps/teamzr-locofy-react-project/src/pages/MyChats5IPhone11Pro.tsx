import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MyChats5IPhone11Pro.module.css";

const MyChats5IPhone11Pro: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAppBarnavigationIconContainerClick = useCallback(() => {
    navigate("/my-chats-4-iphone-11-pro");
  }, [navigate]);

  const onSelectContainerClick = useCallback(() => {
    // Please sync "My chats_6_(iPhone 11 Pro)" to the project
  }, []);

  return (
    <div className={styles.myChats5Iphone11Pro}>
      <div className={styles.statusBar}>
        <img className={styles.statusBarBg} alt="" />
        <div className={styles.carrier}>
          <div className={styles.div}>Teamzr</div>
        </div>
        <div className={styles.appBarMenuInstance}>
          <img
            className={styles.wifiIcon}
            loading="eager"
            alt=""
            src="/wifi@2x.png"
          />
          <div className={styles.wifiFrame}>
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
            <div className={styles.inputFieldLabel}>12:30</div>
          </div>
        </div>
      </div>
      <div className={styles.chipsetWrapper}>
        <div className={styles.chipset}>
          <div className={styles.chipoutlinedmediumprimaryt}>
            <div className={styles.masterdefaultoutlined}>
              <div className={styles.avatariconFrame}>
                <img className={styles.masterelementsavatarimageIcon} alt="" />
                <img className={styles.masterelementsicon} alt="" />
                <div className={styles.masterelementsavatarletter}>
                  <div className={styles.f}>F</div>
                </div>
              </div>
              <div className={styles.medium}>GTD</div>
              <img className={styles.closeFrameIcon} alt="" />
            </div>
          </div>
          <div className={styles.chipoutlinedmediumprimaryt1}>
            <div className={styles.masterdefaultoutlined1}>
              <div className={styles.avatariconFrame1}>
                <img className={styles.masterelementsavatarimageIcon1} alt="" />
                <img className={styles.masterelementsicon1} alt="" />
                <div className={styles.masterelementsavatarletter1}>
                  <div className={styles.f1}>F</div>
                </div>
              </div>
              <div className={styles.medium1}>Daily challenge</div>
              <img className={styles.closeFrameIcon1} alt="" />
            </div>
          </div>
          <div className={styles.chipoutlinedmediumprimaryt2}>
            <div className={styles.masterdefaultoutlined2}>
              <div className={styles.avatariconFrame2}>
                <img className={styles.masterelementsavatarimageIcon2} alt="" />
                <img className={styles.masterelementsicon2} alt="" />
                <div className={styles.masterelementsavatarletter2}>
                  <div className={styles.f2}>F</div>
                </div>
              </div>
              <div className={styles.medium2}>SQL Basics</div>
              <img className={styles.closeFrameIcon2} alt="" />
            </div>
          </div>
          <div className={styles.chipoutlinedmediumprimaryt3}>
            <div className={styles.masterdefaultoutlined3}>
              <div className={styles.avatariconFrame3}>
                <img className={styles.masterelementsavatarimageIcon3} alt="" />
                <img className={styles.masterelementsicon3} alt="" />
                <div className={styles.masterelementsavatarletter3}>
                  <div className={styles.f3}>F</div>
                </div>
              </div>
              <div className={styles.medium3}>SQL Advanced</div>
              <img className={styles.closeFrameIcon3} alt="" />
            </div>
          </div>
          <div className={styles.chipoutlinedmediumprimaryt4}>
            <div className={styles.masterdefaultoutlined4}>
              <div className={styles.avatariconFrame4}>
                <img className={styles.masterelementsavatarimageIcon4} alt="" />
                <img className={styles.masterelementsicon4} alt="" />
                <div className={styles.masterelementsavatarletter4}>
                  <div className={styles.f4}>F</div>
                </div>
              </div>
              <div className={styles.medium4}>Be Efficient!</div>
              <img className={styles.closeFrameIcon4} alt="" />
            </div>
          </div>
          <div className={styles.chipoutlinedmediumprimaryt5}>
            <div className={styles.masterdefaultoutlined5}>
              <div className={styles.avatariconFrame5}>
                <img className={styles.masterelementsavatarimageIcon5} alt="" />
                <img className={styles.masterelementsicon5} alt="" />
                <div className={styles.masterelementsavatarletter5}>
                  <div className={styles.f5}>F</div>
                </div>
              </div>
              <div className={styles.medium5}>Class 4D</div>
              <img className={styles.closeFrameIcon5} alt="" />
            </div>
          </div>
          <div className={styles.chipoutlinedmediumprimaryt6}>
            <div className={styles.masterdefaultoutlined6}>
              <div className={styles.avatariconFrame6}>
                <img className={styles.masterelementsavatarimageIcon6} alt="" />
                <img className={styles.masterelementsicon6} alt="" />
                <div className={styles.masterelementsavatarletter6}>
                  <div className={styles.f6}>F</div>
                </div>
              </div>
              <div className={styles.medium6}>Class</div>
              <img className={styles.closeFrameIcon6} alt="" />
            </div>
          </div>
        </div>
      </div>
      <section className={styles.mainFrame}>
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
          <div className={styles.appBarTitle}>
            <div
              className={styles.appBarnavigationIcon}
              onClick={onAppBarnavigationIconContainerClick}
            >
              <div className={styles.iconButtonlargeprimarydefa1}>
                <div className={styles.masterlarge1}>
                  <img className={styles.icons1} alt="" src="/icons1.svg" />
                </div>
              </div>
            </div>
            <div className={styles.appBartitlenormal}>
              <div className={styles.typography}>
                <b className={styles.news}>About group</b>
              </div>
            </div>
          </div>
          <div className={styles.masterlarge2}>
            <div className={styles.appBarElements}>
              <div className={styles.mastertextmedium}>
                <div className={styles.buttonText}>Create!</div>
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
      <section className={styles.masterFrame}>
        <div className={styles.inputSection}>
          <div className={styles.wifiSignal}>
            <div className={styles.receptionSignal}>
              <div className={styles.batteryIcon1}>
                <div className={styles.avatar}>
                  <div className={styles.mastertext}>
                    <div className={styles.op}>
                      <span className={styles.opTxt}>
                        <p className={styles.choose}>choose</p>
                        <p className={styles.avatar1}>avatar</p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.select} onClick={onSelectContainerClick}>
                <div className={styles.primitiveselectdefaultline}>
                  <div className={styles.input}>
                    <div className={styles.inputFrame}>
                      <div className={styles.contentFrame}>
                        <div className={styles.content}>
                          <div className={styles.adornmentStart}>
                            <div className={styles.kg}>Kg</div>
                          </div>
                          <div className={styles.inputText}>
                            <div className={styles.nameYourStep}>
                              Name your group... (required)
                            </div>
                          </div>
                        </div>
                        <div className={styles.selectArrowWrapper}>
                          <div className={styles.selectArrow}>
                            <div className={styles.batteryFrame}>0 / 40</div>
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
            </div>
          </div>
          <div className={styles.appbarMenuInstance}>
            <div className={styles.typography1}>
              <div className={styles.subtitle3}>Members</div>
            </div>
            <div className={styles.avatarFollowBadgeFrameParent}>
              <div className={styles.avatarFollowBadgeFrame}>
                <div className={styles.frameParent}>
                  <div className={styles.avatarParent}>
                    <img
                      className={styles.avatarIcon}
                      alt=""
                      src="/avatar-11@2x.png"
                    />
                    <div className={styles.followbadge}>
                      <div className={styles.masterroundsmall1}>
                        <img
                          className={styles.icons3}
                          alt=""
                          src="/icons-4.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.avatarGroup}>
                    <img
                      className={styles.avatarIcon1}
                      alt=""
                      src="/avatar-31@2x.png"
                    />
                    <div className={styles.followbadge1}>
                      <div className={styles.masterroundsmall2}>
                        <img
                          className={styles.icons4}
                          alt=""
                          src="/icons-4.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.avatarContainer}>
                    <img
                      className={styles.avatarIcon2}
                      alt=""
                      src="/avatar-11@2x.png"
                    />
                    <div className={styles.followbadge2}>
                      <div className={styles.masterroundsmall3}>
                        <img
                          className={styles.icons5}
                          alt=""
                          src="/icons-4.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <img
                    className={styles.avatarIcon3}
                    alt=""
                    src="/avatar-21@2x.png"
                  />
                </div>
                <div className={styles.textTextTextText}>
                  <div className={styles.frame}>Ashley Bradley</div>
                  <div className={styles.frame1}>Sabrina Davies</div>
                  <div className={styles.frame2}>Sabrina Rodriguez</div>
                  <div className={styles.frame3}>Sabrina Bonucci</div>
                </div>
              </div>
              <div className={styles.iconbuttonmasterlargeIconsins}>
                <div className={styles.iconButton}>
                  <div className={styles.masterlarge3}>
                    <img className={styles.icons6} alt="" src="/icons-42.svg" />
                  </div>
                </div>
                <div className={styles.iconButton1}>
                  <div className={styles.masterlarge4}>
                    <img className={styles.icons7} alt="" src="/icons-42.svg" />
                  </div>
                </div>
                <div className={styles.iconButton2}>
                  <div className={styles.masterlarge5}>
                    <img className={styles.icons8} alt="" src="/icons-42.svg" />
                  </div>
                </div>
                <div className={styles.iconButton3}>
                  <div className={styles.masterlarge6}>
                    <img className={styles.icons9} alt="" src="/icons-42.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyChats5IPhone11Pro;
