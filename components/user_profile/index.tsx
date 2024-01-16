import Image from "next/image"
import Link from "next/link"
import StarsSvg from "../SVG/starsSvg"
import styles from "./styles.module.css"
const UserProfile = () => {
  return (
    <div className={styles.user_profile}>
      <div className={styles.user_profile_image}>
        <Image src="/images/user.jpg" width={90} height={90} alt="user image" />
      </div>
      <div className={styles.user_ratting}>
        <StarsSvg fill={true} />
        <StarsSvg fill={true} />
        <StarsSvg fill={true} />
        <StarsSvg fill={true} />
        <StarsSvg fill={false} />
      </div>
      <div className={styles.user_info}>
        <h6>
          Slate helps you see how many more days you need to work to reach your
          financial goal.
        </h6>
      </div>
      <div className={styles.user_name_job}>
        <Link href="#">Regina Miles</Link>
        <h6>Designer</h6>
      </div>
    </div>
  )
}

export default UserProfile
