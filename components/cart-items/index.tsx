import Image from "next/image"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from "./styles.module.css"

interface CartItem {
  id: number
  quantity: number
}

interface RootState {
  cart: CartItem[]
}
const CartItems = ({
  cartData,
  quantity,
  handleDeleteItem,
  idx,
  handleAddQuantity,
  handleRemoveQuantity,
}: {
  cartData: any
  quantity: number
  handleDeleteItem: any
  idx: number
  handleAddQuantity: any
  handleRemoveQuantity: any
}) => {
  const dispatch = useDispatch()
  const { cart } = useSelector((state: RootState) => state)
  const [cartItems, setCartItems] = useState(cart)

  return (
    <div className={styles.cart_item}>
      <div className={styles.cart_inner}>
        <Image src={cartData?.images[0]} alt="" width="100" height="100" />
        <div className={styles.info_price}>
          <div>
            <h6>{cartData?.title}</h6>
            <h5>{cartData?.category}</h5>
          </div>
          <div>
            <h4>$ {cartData?.price}</h4>
          </div>
        </div>
      </div>
      <div className={styles.quantity_management}>
        <div className={styles.quantity}>
          <div onClick={() => handleAddQuantity(idx)}>+</div>
          <p>{quantity}</p>
          <div onClick={() => handleRemoveQuantity(idx)}>-</div>
        </div>
        <p
          className={styles.del_item}
          onClick={() => handleDeleteItem(cartData?.id)}
        >
          Delete item
        </p>
      </div>
    </div>
  )
}

export default CartItems
