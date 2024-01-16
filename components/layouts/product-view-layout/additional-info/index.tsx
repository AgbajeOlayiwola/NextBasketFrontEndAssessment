"use client"
import SecondaryCover from "@/components/cover/secondary-cover"
import Image from "next/image"
import { useEffect, useState } from "react"
import styles from "./styles.module.css"
const AdditionalInfo = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }
  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    handleWindowResize()
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [width])
  return (
    <>
      {width > 900 ? (
        <div className={styles.add_info}>
          <SecondaryCover>
            <div className={styles.add_desc}>
              <h5>Description</h5>
              <h5>Additional Information</h5>
              <h5>
                Reviews <span>(0)</span>
              </h5>
            </div>
            <hr />
            <div className={styles.add_details}>
              <div className={styles.add_paragraph}>
                <h3>the quick fox jumps over </h3>
                <div>
                  <p>
                    {" "}
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
                <div className={styles.add_second_paragraph}>
                  <p>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
                <div>
                  <p>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do
                    met sent. RELIT official consequent door ENIM RELIT Mollie.
                    Excitation venial consequent sent nostrum met.
                  </p>
                </div>
              </div>
              <Image
                src="/images/unsplash_QANOF9iJlFs.png"
                width={413}
                height={371}
                alt="info"
              />
            </div>
          </SecondaryCover>
        </div>
      ) : null}
    </>
  )
}

export default AdditionalInfo
