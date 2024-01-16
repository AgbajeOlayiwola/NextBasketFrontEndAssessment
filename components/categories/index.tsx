import Image from "next/image"
import styles from "./styles.module.css"
const Categories = ({
  image,
  height,
  width,
  items,
  category,
}: {
  image: string
  height: number
  width: number
  items: number
  category: string
}) => {
  return (
    <div className={styles.categories}>
      <Image src={image} alt="image-Categories" width={width} height={height} />
      <div className={styles.categories_details}>
        <p>{items} Items</p>
        <h2>{category}</h2>
        <h6>Read More</h6>
      </div>
    </div>
  )
}

export default Categories
