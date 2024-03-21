import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MyChats2IPhone11Pro.module.css";

const MyChats2IPhone11Pro: FunctionComponent = () => {
  const navigate = useNavigate();

  const onAppBarnavigationIconContainerClick = useCallback(() => {
    navigate("/my-chats-1-iphone-11-pro");
  }, [navigate]);

  const onSearchBarAndUserProfileClick = useCallback(() => {
    navigate("/my-chats-3-iphone-11-pro");
  }, [navigate]);

  const onSearchBarAndUserProfile2Click = useCallback(() => {
    // Please sync "My chats_8_(iPhone 11 Pro)" to the project
  }, []);

  return (
    <div className={styles.myChats2Iphone11Pro}>
      <div className={styles.statusBar}>
        <img className={styles.statusBarBg} alt="" />
        <div className={styles.carrier}>
          <div className={styles.carrierLogo}>Teamzr</div>
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
            <div className={styles.appbarMenu}>12:30</div>
          </div>
        </div>
      </div>
      <div className={styles.wrapperMasterroundsmall}>
        <img
          className={styles.masterroundsmallIcon}
          alt=""
          src="/masterroundsmall.svg"
        />
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
      <div className={styles.appbarmenu}>
        <div className={styles.appBarItems}>
          <div className={styles.rect} />
        </div>
        <div className={styles.appBarnavigationIconParent}>
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
          <div className={styles.appBartitlenormal}>
            <div className={styles.typography}>
              <b className={styles.news}>New message</b>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.appBaroverflowIcon}>
            <div className={styles.iconButtonlargeprimarydefa1}>
              <div className={styles.masterlarge1}>
                <img className={styles.icons1} alt="" src="/icons.svg" />
              </div>
            </div>
          </div>
          <div className={styles.appBaroverflowIcon2}>
            <div className={styles.iconButtonlargeprimarydefa2}>
              <div className={styles.masterlarge2}>
                <img className={styles.icons2} alt="" src="/icons-14.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fab}>
        <div className={styles.masterroundsmall}>
          <img className={styles.icons3} alt="" />
        </div>
      </div>
      <main className={styles.searchbarusers}>
        <div className={styles.dropdown} />
        <section className={styles.notapplicablenouniquenamescanb}>
          <div
            className={styles.searchBarAndUserProfile}
            onClick={onSearchBarAndUserProfileClick}
          >
            <img
              className={styles.avatarIcon}
              loading="eager"
              alt=""
              src="/avatar1.svg"
            />
            <div className={styles.searchBarAnd}>New group</div>
          </div>
          <b className={styles.suggested}>Suggested</b>
        </section>
        <section className={styles.searchBarAndUserProfile1}>
          <div
            className={styles.searchBarAndUserProfile2}
            onClick={onSearchBarAndUserProfile2Click}
          >
            <div className={styles.avatarParent}>
              <img
                className={styles.avatarIcon1}
                alt=""
                src="/avatar-11@2x.png"
              />
              <div className={styles.followbadge}>
                <div className={styles.masterroundsmall1}>
                  <img className={styles.icons4} alt="" src="/icons-4.svg" />
                </div>
              </div>
            </div>
            <div className={styles.searchbarUserAvatar}>Ashley Bradley</div>
          </div>
          <div className={styles.searchBarAndUserProfile3}>
            <div className={styles.avatarGroup}>
              <img
                className={styles.avatarIcon2}
                alt=""
                src="/avatar-21@2x.png"
              />
              <div className={styles.followbadge1}>
                <div className={styles.masterroundsmall2}>
                  <img className={styles.icons5} alt="" src="/icons-4.svg" />
                </div>
              </div>
            </div>
            <div className={styles.text}>
              <span>Sabrina</span>
              <span className={styles.bonucci}> Bonucci</span>
            </div>
          </div>
          <div className={styles.searchBarAndUserProfile4}>
            <div className={styles.avatarContainer}>
              <img
                className={styles.avatarIcon3}
                alt=""
                src="/avatar-31@2x.png"
              />
              <div className={styles.followbadge2}>
                <div className={styles.masterroundsmall3}>
                  <img className={styles.icons6} alt="" src="/icons-4.svg" />
                </div>
              </div>
            </div>
            <div className={styles.text1}>Sabrina Davies</div>
          </div>
          <div className={styles.searchBarAndUserProfile5}>
            <div className={styles.frameDiv}>
              <img
                className={styles.avatarIcon4}
                alt=""
                src="/avatar-11@2x.png"
              />
              <div className={styles.followbadge3}>
                <div className={styles.masterroundsmall4}>
                  <img className={styles.icons7} alt="" src="/icons-4.svg" />
                </div>
              </div>
            </div>
            <div className={styles.text2}>Sabrina Rodriguez</div>
          </div>
          <div className={styles.searchBarAndUserProfile6}>
            <div className={styles.avatarParent1}>
              <img
                className={styles.avatarIcon5}
                alt=""
                src="/avatar-21@2x.png"
              />
              <div className={styles.followbadge4}>
                <div className={styles.masterroundsmall5}>
                  <img className={styles.icons8} alt="" src="/icons-4.svg" />
                </div>
              </div>
            </div>
            <div className={styles.text3}>Sabrina Bonucci</div>
          </div>
          <div className={styles.searchBarAndUserProfile7}>
            <img
              className={styles.avatarIcon6}
              alt=""
              src="/avatar-31@2x.png"
            />
            <div className={styles.text4}>Sabrina Davies</div>
          </div>
          <div className={styles.searchBarAndUserProfile8}>
            <img
              className={styles.avatarIcon7}
              alt=""
              src="/avatar-11@2x.png"
            />
            <div className={styles.text5}>Sabrina Rodriguez</div>
          </div>
          <div className={styles.searchBarAndUserProfile9}>
            <img
              className={styles.avatarIcon8}
              alt=""
              src="/avatar-21@2x.png"
            />
            <div className={styles.text6}>Sabrina Bonucci</div>
          </div>
          <div className={styles.searchBarAndUserProfile10}>
            <img
              className={styles.avatarIcon9}
              alt=""
              src="/avatar-31@2x.png"
            />
            <div className={styles.text7}>Sabrina Davies</div>
          </div>
          <div className={styles.searchBarAndUserProfile11}>
            <img
              className={styles.avatarIcon10}
              alt=""
              src="/avatar-10@2x.png"
            />
            <div className={styles.text8}>Sabrina Rodriguez</div>
          </div>
          <footer className={styles.searchBarAndUserProfile12}>
            <img
              className={styles.avatarIcon11}
              alt=""
              src="/avatar-111@2x.png"
            />
            <div className={styles.text9}>Sabrina Bonucci</div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default MyChats2IPhone11Pro;
