import React,{useContext} from 'react'
import Layout from '../../component/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../component/heroSection/HeroSection'
import Filter from '../../component/filter/Filter'
import ProductCard from '../../component/productCard/ProductCard'
import Testimonial from '../../component/testimonia/Testimonial'
import Track from '../../component/track/Track'
import Promo from '../promo/Promo'
export default function Home() {
   
    
      return (
    <Layout>
     <HeroSection/>
     <Promo/>
     <Filter/>
     <ProductCard/>
     <Track/>
     <Testimonial/>
    </Layout>
  )
}
