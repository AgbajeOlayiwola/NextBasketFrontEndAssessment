"use client"
import SecondaryCover from "@/components/cover/secondary-cover"
import ProductTile from "@/components/product-tile"
import { useAllProductsQuery } from "@/vendor/api/mutationApi"
import { setAllProduct } from "@/vendor/slices/allProductsSlice"
import { setCart } from "@/vendor/slices/cartSlice"
import { setProduct } from "@/vendor/slices/productSlice"
import { setWishlist } from "@/vendor/slices/wishlistSlice"
import { Button, IconButton, Snackbar, styled } from "@material-ui/core"
import { useRouter } from "next/navigation"
import React, { useEffect, useState } from "react"
import { IoCloseCircleOutline } from "react-icons/io5"
import { useDispatch } from "react-redux"
import styles from "./styles.module.css"

const FeaturedProducts = ({
  itemCount,
  pagination,
}: {
  itemCount: number
  pagination: boolean
}) => {
  const [visibleProducts, setVisibleProducts] = useState(itemCount)
  const [cartItems, setCartItems] = useState<{ data: any; quantity: number }[]>(
    []
  )

  const [wishListItems, setWishListItems] = useState<{ data: any }[]>([])
  const dispatch = useDispatch()
  const router = useRouter()

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
  const [open, setOpen] = React.useState(false)
  const [openWishList, setOpenWishList] = useState(false)

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
  }
  const handleClickWishlist = () => {
    setOpenWishList(true)
  }

  const handleCloseWishlist = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return
    }

    setOpenWishList(false)
  }
  const wishlistaction = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseWishlist}
      >
        <IoCloseCircleOutline fontSize="small" />
      </IconButton>
    </React.Fragment>
  )
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <IoCloseCircleOutline fontSize="small" />
      </IconButton>
    </React.Fragment>
  )

  const addToCart = (data: any) => {
    const newItem = {
      data,
      quantity: 1,
    }
    handleClick()

    setCartItems((prevCartItems) => [...prevCartItems, newItem])
    dispatch(setCart([...cartItems, newItem]))
  }

  const addToWishList = (data: any) => {
    const newItem = {
      data,
    }
    handleClickWishlist()
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
          {pagination ? (
            <div className={styles.featured}>
              <h4>Featured Products</h4>
              <h3>BESTSELLER PRODUCTS</h3>
              <p>Problems trying to resolve the conflict between </p>
            </div>
          ) : null}
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
                    pagination={pagination}
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
          {pagination ? (
            <div className={styles.learn}>
              <StyledButton variant="outlined" onClick={handleLoadMore}>
                Learn More
              </StyledButton>
            </div>
          ) : null}
        </div>
      </SecondaryCover>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Added to cart"
        action={action}
      />
      <Snackbar
        open={openWishList}
        autoHideDuration={6000}
        onClose={handleCloseWishlist}
        message="Added to Wishlist"
        action={wishlistaction}
      />
    </div>
  )
}

export default FeaturedProducts
