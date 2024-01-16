import Image from "next/image"
import styles from "./styles.module.css"
const WishlistItem = () => {
  return (
    <div className={styles.cart_item}>
      <div className={styles.cart_inner}>
        <Image
          src="/images/product-cover-5.png"
          alt=""
          width="100"
          height="100"
        />
        <div>
          <h6>Iphone</h6>
          <h5>Category</h5>
        </div>
      </div>
    </div>
  )
}

export default WishlistItem
