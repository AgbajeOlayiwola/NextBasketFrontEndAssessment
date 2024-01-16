import SecondaryCover from "@/components/cover/secondary-cover"
import Post from "@/components/posts"
import { posts } from "@/utils/data"
import styles from "./styles.module.css"
const FeaturedPosts = () => {
  return (
    <div className={styles.featured_post}>
      <SecondaryCover>
        <div className={styles.featured_layout}>
          <div className={styles.featured_heading}>
            <h6>Practice Advice</h6>
            <h2>Featured Posts</h2>
          </div>
          <div className={styles.post_flex}>
            {posts.map((item, index) => {
              return (
                <Post
                  key={index}
                  image={item?.image}
                  title={item?.title}
                  paragraph={item?.paragraph}
                  date={item?.date}
                  comments={item?.commentCount}
                  tag={item?.tag}
                  tags={item?.tags}
                />
              )
            })}
          </div>
        </div>
      </SecondaryCover>
    </div>
  )
}

export default FeaturedPosts
