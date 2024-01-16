import { createFormatter } from "@/utils/formater"
import Image from "next/image"
import Link from "next/link"
import CartIconSvg from "../SVG/cartIconSvg"
import HeartIconSvg from "../SVG/heartIconSvg"
import styles from "./styles.module.css"
const SecondaryProductTile = ({
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
      <Image src={image} alt="talk" height={239} width={280} />
      <div className={styles.prod_details}>
        <h5 className={styles.prod_h5} onClick={onClick}>
          {title}
        </h5>
        <Link href="#">{category}</Link>
        <div className={styles.price}>
          <h5>${formater?.format(Number(price))}</h5>
          <h5>${formater?.format(Number(discount))}</h5>
        </div>
        <div className={styles.prod_flex}>
          <CartIconSvg
            fill="#23A6F0"
            width={20}
            height={20}
            onClick={addToCart}
          />
          <HeartIconSvg
            fill="#23A6F0"
            width={20}
            height={20}
            onClick={addToWishList}
          />
        </div>
      </div>
    </div>
  )
}

export default SecondaryProductTile
