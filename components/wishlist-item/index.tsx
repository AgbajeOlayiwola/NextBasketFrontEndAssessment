import Image from "next/image"
import styles from "./styles.module.css"
const WishlistItem = ({
  WishlistItem,
  handleDeleteList,
}: {
  WishlistItem: any
  handleDeleteList: any
}) => {
  return (
    <div className={styles.cart_item}>
      <div className={styles.cart_inner}>
        <Image src={WishlistItem?.images[0]} alt="" width="100" height="100" />
        <div>
          <h6>{WishlistItem?.title}</h6>
          <h5>{WishlistItem?.category}</h5>
        </div>
      </div>
      <div className={styles.del_item}>
        <p onClick={() => handleDeleteList(WishlistItem?.id)}>Delete</p>
      </div>
    </div>
  )
}

export default WishlistItem
