"use client"
import CurrentLink from "@/components/current-link"
import FeaturedProducts from "@/components/layouts/home-layout/featured-products"
import AdditionalInfo from "@/components/layouts/product-view-layout/additional-info"
import Partners from "@/components/layouts/product-view-layout/partners"
import ProductView from "@/components/layouts/product-view-layout/product-view"
import { useGetSingleProductQuery } from "@/vendor/api/mutationApi"
import { setProduct } from "@/vendor/slices/productSlice"
import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

const ViewProduct = () => {
  const searchParams = useSearchParams()
  const dispatch = useDispatch()
  const id = searchParams.get("id")
  console.log(id)
  const {
    data: productData,
    refetch,
    isFetching,
    isSuccess,
    isError,
  } = useGetSingleProductQuery(id, {
    refetchOnFocus: false,
    refetchOnMountOrArgChange: true,
  })

  useEffect(() => {
    refetch()
  }, [id])
  useEffect(() => {
    if (isSuccess) {
      dispatch(setProduct(productData))
    }
  }, [isSuccess])
  return (
    <div>
      <CurrentLink />
      <ProductView />
      <AdditionalInfo />
      <FeaturedProducts itemCount={8} pagination={false} />
      <Partners />
    </div>
  )
}

export default ViewProduct
