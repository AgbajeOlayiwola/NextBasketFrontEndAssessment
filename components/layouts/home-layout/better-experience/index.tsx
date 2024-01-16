"use client"
import PrimaryButtonComponent from "@/components/buttons/primary-button"
import SecondaryCover from "@/components/cover/secondary-cover"
import styles from "./styles.module.css"
const BetterExprience = () => {
  return (
    <div className={styles.better_bg}>
      <SecondaryCover>
        <div className={styles.better_center}>
          <div className={styles.better_dets}>
            <h4>Designing Better Experience</h4>
            <h2>Problems trying to resolve the conflict between </h2>
            <p>
              Problems trying to resolve the conflict between the two major
              realms of Classical physics:{" "}
            </p>
            <h3>$16.48</h3>
            <PrimaryButtonComponent text=" ADD YOUR CALL TO ACTION" />
          </div>
        </div>
      </SecondaryCover>
    </div>
  )
}

export default BetterExprience
