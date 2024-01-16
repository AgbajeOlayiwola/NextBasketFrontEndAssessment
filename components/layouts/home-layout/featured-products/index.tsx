"use client"
import SecondaryCover from "@/components/cover/secondary-cover"
import ProductTile from "@/components/product-tile"
import { useAllProductsQuery } from "@/vendor/api/mutationApi"
import { setAllProduct } from "@/vendor/slices/allProductsSlice"
import { setCart } from "@/vendor/slices/cartSlice"
import { setProduct } from "@/vendor/slices/productSlice"
import { setWishlist } from "@/vendor/slices/wishlistSlice"
import { Button, Snackbar, SnackbarOrigin, styled } from "@material-ui/core"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import styles from "./styles.module.css"

interface State extends SnackbarOrigin {
  open: boolean
}
const FeaturedProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(10)
  const [cartItems, setCartItems] = useState<{ data: any; quantity: number }[]>(
    []
  )
  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  })
  const [wishListItems, setWishListItems] = useState<{ data: any }[]>([])
  const dispatch = useDispatch()
  const router = useRouter()

  const { vertical, horizontal, open } = state

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true })
  }

  const handleClose = () => {
    setState({ ...state, open: false })
  }
  const StyledButton = styled(Button)({
    display: "flex",
    padding: "15px 40px",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    color: " #23A6F0",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "22px",
    letterSpacing: "0.2px",
    borderRadius: "5px",
    border: "1px solid #23A6F0",
  })

  const {
    data: productData,
    refetch,
    isLoading,
    isError,
  } = useAllProductsQuery(null, {
    refetchOnFocus: false,
    refetchOnMountOrArgChange: true,
  })

  useEffect(() => {
    refetch()
  }, [])

  useEffect(() => {
    if (!isLoading && !isError) {
      dispatch(setAllProduct(productData?.products))
    }
  }, [isLoading, isError, productData])

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 5)
  }

  const addToCart = (data: any) => {
    const newItem = {
      data,
      quantity: 1,
    }
    handleClick({ vertical: "bottom", horizontal: "right" })

    setCartItems((prevCartItems) => [...prevCartItems, newItem])
    dispatch(setCart([...cartItems, newItem]))
  }

  const addToWishList = (data: any) => {
    const newItem = {
      data,
    }

    setWishListItems((prevWishListItems) => [...prevWishListItems, newItem])
    dispatch(setWishlist([...wishListItems, newItem]))
  }

  const openProducts = (data: any) => {
    dispatch(setProduct(data))
    router.push(`/view-product?id=${data?.id}`)
  }

  return (
    <div className={styles.featured}>
      <SecondaryCover>
        <div className={styles.featured_prods}>
          <div className={styles.featured}>
            <h4>Featured Products</h4>
            <h3>BESTSELLER PRODUCTS</h3>
            <p>Problems trying to resolve the conflict between </p>
          </div>
          <div className={styles.products_grid}>
            {isLoading ? (
              <p>Loading...</p>
            ) : isError ? (
              <p>Error loading products</p>
            ) : (
              productData?.products
                ?.slice(0, visibleProducts)
                ?.map((product: any, index: number) => (
                  <ProductTile
                    addToWishList={() => addToWishList(product)}
                    key={index}
                    onClick={() => openProducts(product)}
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
                ))
            )}
          </div>
          <div className={styles.learn}>
            <StyledButton variant="outlined" onClick={handleLoadMore}>
              Learn More
            </StyledButton>
          </div>
        </div>
      </SecondaryCover>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        message="Addeed to wishlist"
        key={vertical + horizontal}
      />
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        autoHideDuration={6000}
        open={open}
        onClose={handleClose}
        message="Addeed to cart"
        key={vertical + horizontal}
      />
    </div>
  )
}

export default FeaturedProducts
