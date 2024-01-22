"use client"
import BurgerMenuSvg from "@/components/SVG/burgerMenuSvg"
import CartIconSvg from "@/components/SVG/cartIconSvg"
import HeartIconSvg from "@/components/SVG/heartIconSvg"
import SearchIconSvg from "@/components/SVG/searchIconSvg"
import UsersSvg from "@/components/SVG/usersSvg"
import CartItems from "@/components/cart-items"
import PrimaryCover from "@/components/cover/primary-cover"
import WishlistItem from "@/components/wishlist-item"
import { RootState } from "@/vendor/provider/store"
import { setCart } from "@/vendor/slices/cartSlice"
import { setWishlist } from "@/vendor/slices/wishlistSlice"
import { useEffect, useState } from "react"
import { IoChevronDownSharp } from "react-icons/io5"
import { useDispatch, useSelector } from "react-redux"
import styles from "./styles.module.css"

interface WishlistItem {
  id: number
  name: string
  data: any
}
interface CartItemType {
  data: any
  id: number
  name: string
}
const BottomNavbar = () => {
  const dispatch = useDispatch()
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const { cart, wishlist } = useSelector((store: RootState) => ({
    cart: store.cart as CartItemType[],
    wishlist: store.wishlist as WishlistItem[],
  }))
  const [cartItems, setCartItems] = useState(cart)
  const [total, setTotal] = useState()
  const [wishList, setWishList] = useState(wishlist)
  const [dropDown, setDropDown] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showWishList, setShowWishList] = useState(false)
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
  const handleDeleteItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.data.id !== id))
    console.log(cartItems)
    dispatch(setCart(cartItems))
  }
  const handleDeleteList = (id: number) => {
    console.log("Deleting item with id:", id)
    setWishList((prevItems) => prevItems.filter((item) => item.data.id !== id))
    dispatch(setWishlist(wishList))
  }
  const handleAddQuantity = (index: any) => {
    setCartItems((prevItems: any) => {
      return prevItems.map((item: any, i: any) => {
        if (i === index) {
          return { ...item, quantity: item?.quantity + 1 }
        }
        return item
      })
    })
    const total = calculateTotal(cartItems)
    setTotal(total)
  }

  const handleRemoveQuantity = (index: any) => {
    setCartItems((prevItems: any) => {
      return prevItems.map((item: any, i: any) => {
        if (item?.quantity <= 0) {
          handleDeleteItem(item.data.id)
        } else if (i === index) {
          return { ...item, quantity: item?.quantity - 1 }
        }
        return item
      })
    })
    const total = calculateTotal(cartItems)
    setTotal(total)
  }
  const calculateTotal = (cartItems: any) => {
    // Calculate the total by summing up the product of quantity and price for each item
    const total = cartItems.reduce((accumulator: number, cartItems: any) => {
      return accumulator + cartItems?.quantity * cartItems?.data?.price
    }, 0)

    return total
  }

  useEffect(() => {
    setCartItems(cart)
  }, [cart])
  useEffect(() => {
    setWishList(wishlist)
  }, [wishlist])
  return (
    <PrimaryCover>
      {width > 900 ? (
        <div className={styles.bottom_nav}>
          <div>
            <h3>Bandage</h3>{" "}
          </div>
          <div className={styles.bottom_nav_nav_item}>
            <div className={styles.nav_item_links}>
              <p>Home</p>
              <p>
                Shop <IoChevronDownSharp />
              </p>
              <p>About</p>
              <p>Blog</p>
              <p>Contact</p>
              <p>Pages</p>
            </div>
            <div className={styles.cart_auth_flex}>
              <div className={styles.flex_item}>
                <UsersSvg width={16} height={16} />
                <p>Login / Register</p>
              </div>
              <div>
                <div className={styles.flex_item}>
                  <SearchIconSvg width={16} height={16} />
                </div>
              </div>
              <div>
                <div className={styles.flex_item}>
                  <CartIconSvg
                    width={16}
                    height={16}
                    onClick={() => {
                      setShowWishList((prev) => !prev)
                    }}
                    fill="#23A6F0"
                  />{" "}
                  <p>{cartItems?.length}</p>
                  {showWishList ? (
                    <div className={styles.cart}>
                      {cartItems?.length <= 0 ? (
                        <p>No item in your cart</p>
                      ) : (
                        cartItems?.map((item: any, index: number) => {
                          return (
                            <CartItems
                              idx={index}
                              handleRemoveQuantity={handleRemoveQuantity}
                              handleAddQuantity={handleAddQuantity}
                              cartData={item?.data}
                              key={index}
                              quantity={item?.quantity}
                              handleDeleteItem={handleDeleteItem}
                            />
                          )
                        })
                      )}
                      <div className={styles.total}>
                        <div>
                          <p>Total:</p> $<h5>{total}</h5>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
              <div>
                <div className={styles.flex_item}>
                  <HeartIconSvg
                    width={16}
                    height={16}
                    onClick={() => {
                      setShowCart((prev) => !prev)
                    }}
                    fill="#23A6F0"
                  />{" "}
                  <p>{wishList?.length}</p>
                  {showCart ? (
                    <div className={styles.cart}>
                      {wishList?.length <= 0 ? (
                        <p>No item in your wishlist</p>
                      ) : (
                        wishList.map((item: any, index: number) => {
                          return (
                            <WishlistItem
                              handleDeleteList={handleDeleteList}
                              key={index}
                              WishlistItem={item?.data}
                            />
                          )
                        })
                      )}
                    </div>
                  ) : (
                    false
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.bottom_nav}>
          <div>
            <h3>Bandage</h3>{" "}
          </div>
          <BurgerMenuSvg onClick={() => setDropDown((prev) => !prev)} />
        </div>
      )}
      {dropDown ? (
        <div className={styles.bottom_nav_nav_item}>
          <div className={styles.nav_item_links}>
            <p>Home</p>
            <p>
              Shop <IoChevronDownSharp />
            </p>
            <p>About</p>
            <p>Blog</p>
            <p>Contact</p>
            <p>Pages</p>
          </div>
          <div className={styles.cart_auth_flex}>
            <div className={styles.flex_item}>
              <UsersSvg width={34} height={34} />
              <p>Login / Register</p>
            </div>
            <div>
              <div className={styles.flex_item}>
                <SearchIconSvg width={34} height={34} /> <p>1</p>
              </div>
            </div>
            <div>
              <div className={styles.flex_item}>
                <CartIconSvg
                  fill="#23a6f0"
                  width={34}
                  height={34}
                  onClick={() => null}
                />{" "}
                <p>{cart?.length}</p>
              </div>
            </div>
            <div>
              <div className={styles.flex_item}>
                <HeartIconSvg
                  fill="#23a6f0"
                  width={34}
                  height={34}
                  onClick={() => null}
                />{" "}
                <p>{wishlist?.length}</p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </PrimaryCover>
  )
}

export default BottomNavbar
