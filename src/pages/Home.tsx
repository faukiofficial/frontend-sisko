import BrandSection from "@/components/BrandSection/BrandSection"
import { CarouselSize } from "@/components/Carousel/Carousel"
import CategorySection from "@/components/CategorySection/CategorySection"
import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import HeroSection from "@/components/HeroSection/HeroSection"
import ProductList from "@/components/ProductList/ProductList"
import PromoSection from "@/components/PromoSection/PromoSection"

interface User {
    name: string
    profilePicture: string
}

interface HomeProps {
    user: User
}

const Home: React.FC<HomeProps> = ({user}) => {
  return (
    <div>
        <Header user={user}/>
        <HeroSection/>
        <CarouselSize/>
        <CategorySection/>
        <PromoSection/>
        <ProductList/>
        <BrandSection/>
        <Footer/>
    </div>
  )
}

export default Home