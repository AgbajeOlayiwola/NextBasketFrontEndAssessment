import AwsSvg from "@/components/SVG/awsSvg"
import HooliLogoSvg from "@/components/SVG/hooliLogoSvg"
import LyftLogogSvg from "@/components/SVG/lyftLogogSvg"
import PanHatLogoSvg from "@/components/SVG/panHatLogoSvg"
import RedditLogoSvg from "@/components/SVG/redditLogoSvg"
import StripeSvg from "@/components/SVG/stripeSvg"
import SecondaryCover from "@/components/cover/secondary-cover"
import styles from "./styles.module.css"

const Partners = () => {
  return (
    <div className={styles.partners}>
      <SecondaryCover>
        <div className={styles.partner_logo}>
          <HooliLogoSvg />
          <LyftLogogSvg />
          <PanHatLogoSvg />
          <StripeSvg />
          <AwsSvg />
          <RedditLogoSvg />
        </div>
      </SecondaryCover>{" "}
    </div>
  )
}

export default Partners
