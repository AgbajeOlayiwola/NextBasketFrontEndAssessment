"use client"
import BurgerMenuSvg from "@/components/SVG/burgerMenuSvg"
import CartIconSvg from "@/components/SVG/cartIconSvg"
import HeartIconSvg from "@/components/SVG/heartIconSvg"
import SearchIconSvg from "@/components/SVG/searchIconSvg"
import UsersSvg from "@/components/SVG/usersSvg"
import CartItems from "@/components/cart-items"
import PrimaryCover from "@/components/cover/primary-cover"
import WishlistItem from "@/components/wishlist-item"
import { RootState } from "@/redux/provider/store"
import { useEffect, useState } from "react"
import { IoChevronDownSharp } from "react-icons/io5"
import { useSelector } from "react-redux"
import styles from "./styles.module.css"

interface WishlistItem {
  id: number
  name: string
}
interface CartItemType {
  id: number
  name: string
}
const BottomNavbar = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const { cart, wishlist } = useSelector((store: RootState) => ({
    cart: store.cart as CartItemType[],
    wishlist: store.wishlist as WishlistItem[],
  }))

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
                  <p>{cart?.length}</p>
                  {showWishList ? (
                    <div className={styles.cart}>
                      {wishlist.map((item: any, index: number) => {
                        return <WishlistItem key={index} />
                      })}
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
                  <p>{wishlist?.length}</p>
                  {showCart ? (
                    <div className={styles.cart}>
                      {cart.map((item: any, index: number) => {
                        return <CartItems key={index} />
                      })}
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
