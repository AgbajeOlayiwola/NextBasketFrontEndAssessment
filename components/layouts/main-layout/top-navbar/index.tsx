import FacebookWhiteIconSvg from "@/components/SVG/facebookWhiteIconSvg"
import InstagramWhiteIconSvg from "@/components/SVG/instagramWhiteIconSvg"
import MailIconSvg from "@/components/SVG/mailIconSvg"
import PhoneIconSvg from "@/components/SVG/phoneIconSvg"
import TwitterWhiteIconSvg from "@/components/SVG/twitterWhiteIconSvg"
import YoutubWhiteIconSvg from "@/components/SVG/youtubWhiteIconSvg"
import PrimaryCover from "@/components/cover/primary-cover"
import styles from "./styles.module.css"
const TopNavbar = () => {
  return (
    <div className={styles.nav}>
      <PrimaryCover>
        <div className={styles.nav_flex}>
          <div className={styles.contact}>
            <div className={styles.flex_item}>
              <PhoneIconSvg /> <p>(225) 555-0118</p>
            </div>
            <div className={styles.flex_item}>
              <MailIconSvg /> <p>michelle.rivera@example.com</p>
            </div>
          </div>
          <div>
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
          <div className={styles.flex_item}>
            <p>Follow Us :</p>
            <InstagramWhiteIconSvg fill="white" width={17} height={17} />
            <YoutubWhiteIconSvg fill="white" width={17} height={17} />
            <FacebookWhiteIconSvg fill="white" width={17} height={17} />
            <TwitterWhiteIconSvg fill="white" width={17} height={17} />
          </div>
        </div>
      </PrimaryCover>
    </div>
  )
}

export default TopNavbar
