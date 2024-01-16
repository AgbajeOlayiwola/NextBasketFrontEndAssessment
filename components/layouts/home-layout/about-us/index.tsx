import SecondaryCover from "@/components/cover/secondary-cover"
import UserProfile from "@/components/user_profile"
import { user_data } from "@/utils/data"
import Image from "next/image"
import styles from "./styles.module.css"
const AboutUs = () => {
  return (
    <div className={styles.about}>
      <SecondaryCover>
        <div className={styles.about_layout}>
          <div className={styles.about_head}>
            <h3>What they say about us</h3>
            <UserProfile />
          </div>
          <div className={styles.images}>
            {user_data?.images?.map((item: any, index: number) => {
              return (
                <Image
                  key={index}
                  src={item?.image}
                  width={142.769}
                  height={142.769}
                  alt={item?.alt}
                />
              )
            })}
          </div>
        </div>
      </SecondaryCover>
    </div>
  )
}

export default AboutUs
