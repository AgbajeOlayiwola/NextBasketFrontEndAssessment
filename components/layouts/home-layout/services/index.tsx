import EasyWinsSvg from "@/components/SVG/easyWinsSvg"
import SecondaryCover from "@/components/cover/secondary-cover"
import styles from "./styles.module.css"
const Services = () => {
  return (
    <div className={styles.service}>
      <SecondaryCover>
        <div className={styles.services_ar}>
          <div className={styles.service_header}>
            <h4>Featured Products</h4>
            <h3>BESTSELLER PRODUCTS</h3>
            <p>Problems trying to resolve the conflict between </p>
          </div>
          <div className={styles.services_flex}>
            <div>
              <EasyWinsSvg />
              <h3>Easy Wins</h3>
              <p>Get your best looking smile now!</p>
            </div>
            <div>
              <EasyWinsSvg />
              <h3>Concrete</h3>
              <p>
                Defalcate is most focused in helping you discover your most
                beautiful smile
              </p>
            </div>
            <div>
              <EasyWinsSvg />
              <h3>Hack Growth</h3>
              <p>Overcame any hurdle or any other problem.</p>
            </div>
          </div>
        </div>
      </SecondaryCover>
    </div>
  )
}

export default Services
