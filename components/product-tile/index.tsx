import { createFormatter } from "@/utils/formater"
import Image from "next/image"
import CartIconSvg from "../SVG/cartIconSvg"
import HeartIconSvg from "../SVG/heartIconSvg"
import styles from "./styles.module.css"
const ProductTile = ({
  image,
  title,
  price,
  category,
  discount,
  onClick,
  addToCart,
  addToWishList,
}: {
  image: string
  title: string
  price: number
  category: string
  onClick: any
  discount: number
  addToCart: any
  addToWishList: any
}) => {
  const formater = createFormatter()
  return (
    <div className={styles.prod}>
      <Image src={image} alt="talk" height={238} width={183} />
      <div className={styles.prod_details}>
        <h5 className={styles.prod_h5} onClick={onClick}>
          {title}
        </h5>
        <h6>{category}</h6>
        <div className={styles.price}>
          <h5>${formater?.format(Number(price))}</h5>
          <h5>${formater?.format(Number(discount))}</h5>
        </div>
      </div>
      <div className={styles.prod_flex}>
        <CartIconSvg
          fill="#23a6f0"
          width={20}
          height={20}
          onClick={addToCart}
        />
        <HeartIconSvg
          fill="#23a6f0"
          width={20}
          height={20}
          onClick={addToWishList}
        />
      </div>
    </div>
  )
}

export default ProductTile
