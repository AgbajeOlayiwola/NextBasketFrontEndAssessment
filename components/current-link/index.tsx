import Link from "next/link"
import { FaAngleRight } from "react-icons/fa6"
import SecondaryCover from "../cover/secondary-cover"
import styles from "./styles.module.css"
const CurrentLink = () => {
  return (
    <div>
      <SecondaryCover>
        <div className={styles.links}>
          <Link href="/">Home</Link>
          <FaAngleRight />
          <Link href="#" className={styles.shop_text}>
            Shop
          </Link>
        </div>
      </SecondaryCover>
    </div>
  )
}

export default CurrentLink
