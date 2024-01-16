import Image from "next/image"
import { FaAngleRight } from "react-icons/fa6"
import ClockSVg from "../SVG/clockSVg"
import StatsSvg from "../SVG/statsSvg"
import styles from "./styles.module.css"
const Post = ({
  title,
  paragraph,
  date,
  comments,
  tag,
  tags,
  image,
}: {
  title: string
  paragraph: string
  date: string
  comments: string
  tag: string
  tags: any
  image: string
}) => {
  return (
    <div className={styles.post}>
      <div className={styles.post_image}>
        <Image src={image} alt="" width={348} height={300} />
        <div className={styles.post_tag}>
          <h6>{tag}</h6>{" "}
        </div>
      </div>
      <div className={styles.post_details}>
        <div className={styles.trends}>
          {tags?.map((item: string, index: number) => {
            return (
              <p key={index} className={styles.active}>
                {item}
              </p>
            )
          })}
        </div>
        <div className={styles.post_header_p}>
          <h4>{title}</h4>
          <p>{paragraph}</p>
        </div>
        <div className={styles.post_time_comments}>
          <div>
            <ClockSVg /> <p>{date}</p>
          </div>
          <div>
            <StatsSvg /> <p> {comments} comments</p>
          </div>
        </div>
        <div className={styles.post_learn}>
          <h6>Learn More</h6>
          <FaAngleRight />
        </div>
      </div>
    </div>
  )
}

export default Post
