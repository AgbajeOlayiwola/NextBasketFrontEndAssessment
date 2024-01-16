"use client"
import CartIconSvg from "@/components/SVG/cartIconSvg"
import EyeSvg from "@/components/SVG/eyeSvg"
import HeartIconSvg from "@/components/SVG/heartIconSvg"
import StarsSvg from "@/components/SVG/starsSvg"
import PrimaryButtonComponent from "@/components/buttons/primary-button"
import SecondaryCover from "@/components/cover/secondary-cover"
import ProductPreview from "@/components/product-preview"
import { createFormatter } from "@/utils/formater"
import { useSelector } from "react-redux"
import styles from "./styles.module.css"

interface ProductSlice {
  title: string
  images: any[]
  price: number
  stock: number
  description: string
  // Other properties...
}

interface RootState {
  product: ProductSlice
  // Other slices...
}
const ProductView = () => {
  const { product } = useSelector((store: RootState) => store)
  const colors = ["#23A6F0", "#2DC071", "#E77C40", "#252B42"]
  const formater = createFormatter()
  return (
    <div>
      <SecondaryCover>
        <div className={styles.product_flex}>
          <div className={styles.product_flex_div}>
            <ProductPreview images={product?.images} />
          </div>

          <div className={styles.product_info}>
            <div>
              <div className={styles.prod_info}>
                <h4>{product?.title}</h4>
                <div className={styles.star_rev}>
                  <div className={styles.prod_star}>
                    <StarsSvg fill={true} />
                    <StarsSvg fill={true} />
                    <StarsSvg fill={true} />
                    <StarsSvg fill={true} />
                    <StarsSvg fill={false} />
                  </div>
                  <p>10 Review</p>
                </div>
              </div>
              <div className={styles.prod_pe}>
                <h3>${formater.format(Number(product?.price))}</h3>
                <div className={styles.prod_avail}>
                  <h5>Availability :</h5>
                  {product?.stock > 0 ? (
                    <h6>In Stock </h6>
                  ) : (
                    <h6>Not in stock</h6>
                  )}
                </div>
              </div>
            </div>
            <div>
              <p>{product?.description}</p>
              <hr />
              <div className={styles.color_layout}>
                {colors.map((item, index) => {
                  return (
                    <div
                      className={styles.color}
                      key={index}
                      style={{ backgroundColor: `${item}` }}
                    ></div>
                  )
                })}
              </div>
              <div className={styles.prod_options}>
                <PrimaryButtonComponent text="Select Options" />
                <div>
                  <div>
                    <HeartIconSvg
                      fill="#252B42"
                      width={20}
                      height={20}
                      onClick={() => null}
                    />
                  </div>
                  <div>
                    <CartIconSvg
                      fill="#252B42"
                      width={20}
                      height={20}
                      onClick={() => null}
                    />
                  </div>
                  <div>
                    <EyeSvg />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SecondaryCover>
    </div>
  )
}

export default ProductView
