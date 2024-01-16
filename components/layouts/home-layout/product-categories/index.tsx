"use client"
import Categories from "@/components/categories"
import SecondaryCover from "@/components/cover/secondary-cover"
import { useEffect, useState } from "react"
import styles from "./styles.module.css"
const ProductCategories = () => {
  // resize the screen
  const [width, setWidth] = useState(950)
  const [height, setHeight] = useState(950)
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
    <div className={styles.prod_cat}>
      <SecondaryCover>
        <div className={styles.categories_grid}>
          <Categories
            image="/images/card-cover-5.jpg"
            height={width > 900 ? 616 : 300}
            width={width > 900 ? 451 : 331}
            items={5}
            category="FURNITURE"
          />
          <div className={styles.categoris_top_flex}>
            <Categories
              image="/images/card-cover-6.jpg"
              height={300}
              width={width > 900 ? 678 : 331}
              items={5}
              category="FURNITURE"
            />
            <div className={styles.categories_row_flex}>
              <Categories
                image="/images/card-cover-6 (1).jpg"
                height={300}
                width={331}
                items={5}
                category="FURNITURE"
              />
              <Categories
                image="/images/card-cover-7.jpg"
                height={300}
                width={331}
                items={5}
                category="FURNITURE"
              />
            </div>
          </div>
        </div>
      </SecondaryCover>
    </div>
  )
}

export default ProductCategories
