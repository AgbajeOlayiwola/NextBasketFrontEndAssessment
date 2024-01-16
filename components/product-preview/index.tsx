import Image from "next/image"
import React, { useEffect, useState } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import LeftArrowSvg from "../SVG/leftArrowSvg"
import RightArrowSvg from "../SVG/rightArrowSvg"
import styles from "./styles.module.css"

interface ProductPreviewProps {
  images: any
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ images }) => {
  const [width, setWidth] = useState<number>(0)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    handleWindowResize()
    window.addEventListener("resize", handleWindowResize)
    return () => window.removeEventListener("resize", handleWindowResize)
  }, [])
  console.log(images)
  const CustomPrevArrow = (props: any) => {
    const { onClick } = props
    return (
      <div className={styles.custom_prev_arrow} onClick={onClick}>
        <LeftArrowSvg />
      </div>
    )
  }

  const CustomNextArrow = (props: any) => {
    const { onClick } = props
    return (
      <div className={styles.custom_next_arrow} onClick={onClick}>
        <RightArrowSvg />
      </div>
    )
  }
  const settings = {
    customPaging: (i: number) => (
      <div>
        <img
          src={`https://cdn.dummyjson.com/product-images/1/${i + 1}.jpg`}
          alt={`Product ${selectedImageIndex + 1}`}
        />
      </div>
    ),
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  }

  const slicedImages = images?.slice(0, 2)
  return (
    <div>
      <Slider {...settings}>
        {slicedImages?.map((image: any, index: number) => (
          <div key={index}>
            <Image
              src={image}
              alt=""
              width={width > 900 ? 606 : 348}
              height={width > 900 ? 450 : 277}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ProductPreview
