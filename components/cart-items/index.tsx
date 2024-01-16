import Image from "next/image"
import { useState } from "react"
import { useSelector } from "react-redux"
import styles from "./styles.module.css"

interface CartItem {
  id: number
  quantity: number
}

interface RootState {
  cart: CartItem[]
}
const CartItems = () => {
  const { cart } = useSelector((state: RootState) => state)
  const [cartItems, setCartItems] = useState(cart)

  const handleAddQuantity = (index: any) => {
    setCartItems((prevItems: any) => {
      return prevItems.map((item: any, i: any) => {
        if (i === index) {
          return { ...item, quantity: item?.quantity + 1 }
        }
        return item
      })
    })
  }

  const handleRemoveQuantity = (index: any) => {
    setCartItems((prevItems: any) => {
      return prevItems.map((item: any, i: any) => {
        if (i === index) {
          return { ...item, quantity: item?.quantity - 1 }
        }
        return item
      })
    })
  }

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

      <div className={styles.quantity}>
        <div onClick={handleAddQuantity}>+</div>

        <p>{cart[0]?.quantity}</p>
        <div onClick={handleRemoveQuantity}>-</div>
      </div>
    </div>
  )
}

export default CartItems
