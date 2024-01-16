import AboutUs from "@/components/layouts/home-layout/about-us"
import BetterExprience from "@/components/layouts/home-layout/better-experience"
import FeaturedPosts from "@/components/layouts/home-layout/fatured-posts"
import FeaturedProducts from "@/components/layouts/home-layout/featured-products"
import ProductCategories from "@/components/layouts/home-layout/product-categories"
import Services from "@/components/layouts/home-layout/services"

const HomePage = () => {
  return (
    <div>
      <ProductCategories />
      <FeaturedProducts itemCount={8} pagination={true} />
      <Services />
      <FeaturedPosts />
      <AboutUs />
      <BetterExprience />
    </div>
  )
}

export default HomePage
