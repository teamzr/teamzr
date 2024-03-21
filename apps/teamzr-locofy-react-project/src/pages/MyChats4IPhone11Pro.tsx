import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MyChats4IPhone11Pro.module.css";

const MyChats4IPhone11Pro: FunctionComponent = () => {
  const navigate = useNavigate();

  const onMasterlargeContainerClick = useCallback(() => {
    navigate("/my-chats-5-iphone-11-pro");
  }, [navigate]);

  const onSearchbarNewGroupselectedClick = useCallback(() => {
    navigate("/my-chats-3-iphone-11-pro");
  }, [navigate]);

  return (
    <div className={styles.myChats4Iphone11Pro}>
      <div className={styles.statusBar}>
        <img className={styles.statusBarBg} alt="" />
        <div className={styles.carrier}>
          <div className={styles.timeFrame}>Teamzr</div>
        </div>
        <div className={styles.wifiIcon}>
          <img
            className={styles.wifiIcon1}
            loading="eager"
            alt=""
            src="/wifi@2x.png"
          />
          <div className={styles.batteryFrame}>
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
            <div className={styles.appBarMenu}>12:30</div>
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
      <div className={styles.appbarmenu}>
        <div className={styles.appBarItems}>
          <div className={styles.rect} />
        </div>
        <div className={styles.navigationIcon}>
          <div className={styles.appBarnavigationIcon}>
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
              <b className={styles.news}>Add members</b>
            </div>
          </div>
        </div>
        <div className={styles.navigationIcon1}>
          <div className={styles.appBaroverflowIcon}>
            <div className={styles.iconButtonlargeprimarydefa1}>
              <div className={styles.masterlarge1}>
                <img className={styles.icons1} alt="" src="/icons.svg" />
              </div>
            </div>
          </div>
          <div
            className={styles.masterlarge2}
            onClick={onMasterlargeContainerClick}
          >
            <div className={styles.mastertextmedium}>
              <div className={styles.buttonText}>Next</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.fab}>
        <div className={styles.masterroundsmall}>
          <img className={styles.icons2} alt="" />
        </div>
      </div>
      <main
        className={styles.searchbarnewgroupselected}
        onClick={onSearchbarNewGroupselectedClick}
      >
        <div className={styles.dropdown} />
        <b className={styles.suggested}>Suggested</b>
        <section className={styles.suggestedTextTo}>
          <div className={styles.suggestedTextTo1}>
            <div className={styles.suggestedTextTo2}>
              <div className={styles.itemTwo}>
                <img
                  className={styles.avatarIcon}
                  alt=""
                  src="/avatar-11@2x.png"
                />
                <div className={styles.followBadgeIcon}>Ashley Bradley</div>
                <div className={styles.followbadge}>
                  <div className={styles.masterroundsmall1}>
                    <img className={styles.icons3} alt="" src="/icons-4.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.iconButton}>
              <div className={styles.masterlarge3}>
                <img className={styles.icons4} alt="" src="/icons-42.svg" />
              </div>
            </div>
          </div>
          <div className={styles.suggestedTextTo3}>
            <div className={styles.itemThreeWrapper}>
              <div className={styles.itemThree}>
                <img
                  className={styles.avatarIcon1}
                  alt=""
                  src="/avatar-21@2x.png"
                />
                <div className={styles.text}>Sabrina Bonucci</div>
                <div className={styles.followbadge1}>
                  <div className={styles.masterroundsmall2}>
                    <img className={styles.icons5} alt="" src="/icons-4.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.iconButton1}>
              <div className={styles.masterlarge4}>
                <img className={styles.icons6} alt="" src="/icons-41.svg" />
              </div>
            </div>
          </div>
          <div className={styles.suggestedTextTo4}>
            <div className={styles.itemOneWrapper}>
              <div className={styles.itemOne}>
                <img
                  className={styles.avatarIcon2}
                  alt=""
                  src="/avatar-31@2x.png"
                />
                <div className={styles.text1}>Sabrina Davies</div>
                <div className={styles.followbadge2}>
                  <div className={styles.masterroundsmall3}>
                    <img className={styles.icons7} alt="" src="/icons-4.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.iconButton2}>
              <div className={styles.masterlarge5}>
                <img className={styles.icons8} alt="" src="/icons-42.svg" />
              </div>
            </div>
          </div>
          <div className={styles.suggestedTextTo5}>
            <div className={styles.itemTwoWrapper}>
              <div className={styles.itemTwo1}>
                <img
                  className={styles.avatarIcon3}
                  alt=""
                  src="/avatar-11@2x.png"
                />
                <div className={styles.text2}>Sabrina Rodriguez</div>
                <div className={styles.followbadge3}>
                  <div className={styles.masterroundsmall4}>
                    <img className={styles.icons9} alt="" src="/icons-4.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.iconButton3}>
              <div className={styles.masterlarge6}>
                <img className={styles.icons10} alt="" src="/icons-42.svg" />
              </div>
            </div>
          </div>
          <div className={styles.suggestedTextTo6}>
            <div className={styles.itemThreeContainer}>
              <div className={styles.itemThree1}>
                <img
                  className={styles.avatarIcon4}
                  alt=""
                  src="/avatar-21@2x.png"
                />
                <div className={styles.text3}>Sabrina Bonucci</div>
                <div className={styles.followbadge4}>
                  <div className={styles.masterroundsmall5}>
                    <img className={styles.icons11} alt="" src="/icons-4.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.iconButton4}>
              <div className={styles.masterlarge7}>
                <img className={styles.icons12} alt="" src="/icons-41.svg" />
              </div>
            </div>
          </div>
          <div className={styles.suggestedTextTo7}>
            <div className={styles.itemOne1}>
              <img
                className={styles.avatarIcon5}
                alt=""
                src="/avatar-31@2x.png"
              />
              <div className={styles.followBadgeIcon1}>Sabrina Davies</div>
            </div>
            <div className={styles.iconButton5}>
              <div className={styles.masterlarge8}>
                <img className={styles.icons13} alt="" src="/icons-41.svg" />
              </div>
            </div>
          </div>
          <div className={styles.suggestedTextTo8}>
            <div className={styles.itemTwo2}>
              <img
                className={styles.avatarIcon6}
                alt=""
                src="/avatar-11@2x.png"
              />
              <div className={styles.text4}>Sabrina Rodriguez</div>
            </div>
            <div className={styles.iconButton6}>
              <div className={styles.masterlarge9}>
                <img className={styles.icons14} alt="" src="/icons-41.svg" />
              </div>
            </div>
          </div>
          <div className={styles.suggestedTextTo9}>
            <div className={styles.itemThree2}>
              <img
                className={styles.avatarIcon7}
                alt=""
                src="/avatar-21@2x.png"
              />
              <div className={styles.text5}>Sabrina Bonucci</div>
            </div>
            <div className={styles.iconButton7}>
              <div className={styles.masterlarge10}>
                <img className={styles.icons15} alt="" src="/icons-42.svg" />
              </div>
            </div>
          </div>
          <div className={styles.suggestedTextTo10}>
            <div className={styles.itemOne2}>
              <img
                className={styles.avatarIcon8}
                alt=""
                src="/avatar-31@2x.png"
              />
              <div className={styles.text6}>Sabrina Davies</div>
            </div>
            <div className={styles.iconButton8}>
              <div className={styles.masterlarge11}>
                <img className={styles.icons16} alt="" src="/icons-41.svg" />
              </div>
            </div>
          </div>
          <div className={styles.suggestedTextTo11}>
            <div className={styles.itemTwo3}>
              <img
                className={styles.avatarIcon9}
                alt=""
                src="/avatar-11@2x.png"
              />
              <div className={styles.text7}>Sabrina Rodriguez</div>
            </div>
            <div className={styles.iconButton9}>
              <div className={styles.masterlarge12}>
                <img className={styles.icons17} alt="" src="/icons-41.svg" />
              </div>
            </div>
          </div>
          <div className={styles.suggestedTextTo12}>
            <div className={styles.itemThree3}>
              <img
                className={styles.avatarIcon10}
                alt=""
                src="/avatar-111@2x.png"
              />
              <div className={styles.text8}>Sabrina Bonucci</div>
            </div>
            <div className={styles.iconButton10}>
              <div className={styles.masterlarge13}>
                <img className={styles.icons18} alt="" />
              </div>
            </div>
          </div>
          <footer className={styles.suggestedTextTo13}>
            <div className={styles.itemThree4}>
              <img
                className={styles.avatarIcon11}
                alt=""
                src="/avatar-111@2x.png"
              />
              <div className={styles.text9}>Sabrina Bonucci</div>
            </div>
            <div className={styles.iconButton11}>
              <div className={styles.masterlarge14}>
                <img className={styles.icons19} alt="" />
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default MyChats4IPhone11Pro;
