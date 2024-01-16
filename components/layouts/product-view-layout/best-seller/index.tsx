import SecondaryCover from "@/components/cover/secondary-cover"
import SecondaryProductTile from "@/components/secondary-product-tile"
import { RootState } from "@/vendor/provider/store"
import { setCart } from "@/vendor/slices/cartSlice"
import { setWishlist } from "@/vendor/slices/wishlistSlice"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from "./styles.module.css"

interface Product {
  id: number
  title: string
  images: string[]
  price: number
  category: string
  discountPercentage: number
}

interface WishlistItem {
  id: number
  name: string
}

interface CartItem {
  id: number
  name: string
  quantity: number
}

const BestSeller = () => {
  const dispatch = useDispatch()
  const { allProduct } = useSelector((store: RootState) => store)

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [wishListItems, setWishListItems] = useState<WishlistItem[]>([])

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

  const addToCart = (data: Product) => {
    const newItem: CartItem = {
      id: data.id,
      name: data.title,
      quantity: 1,
    }

    setCartItems((prevCartItems) => [...prevCartItems, newItem])
    dispatch(setCart([...cartItems, newItem]))
  }

  const addToWishList = (data: Product) => {
    const newItem: WishlistItem = {
      id: data.id,
      name: data.title,
    }

    setWishListItems((prevWishListItems) => [...prevWishListItems, newItem])
    dispatch(setWishlist([...wishListItems, newItem]))
  }
  const allProductsArray = allProduct as Product[]
  return (
    <>
      {width > 900 ? (
        <div className={styles.best_prod}>
          <SecondaryCover>
            <div className={styles.best_seller}>
              <h3> BESTSELLER PRODUCTS</h3>
              <hr />
              <div className={styles.best_seller_item}>
                {allProductsArray
                  ?.slice(0, 8)
                  ?.map((product: Product, index: number) => {
                    return (
                      <SecondaryProductTile
                        addToWishList={() => addToWishList(product)}
                        key={index}
                        onClick={() => null}
                        addToCart={() => addToCart(product)}
                        image={product?.images[0]}
                        title={product?.title}
                        price={product?.price}
                        category={product?.category}
                        discount={
                          product?.price -
                          (product?.price * product?.discountPercentage) / 100
                        }
                      />
                    )
                  })}
              </div>
            </div>
          </SecondaryCover>
        </div>
      ) : null}
    </>
  )
}

export default BestSeller
