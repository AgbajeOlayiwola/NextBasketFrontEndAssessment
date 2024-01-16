import { ReactNode } from "react"
import styles from "./styles.module.css"
const SecondaryCover = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.outer_cover}>
      <div className={styles.inner_cover}> {children}</div>
    </div>
  )
}

export default SecondaryCover
