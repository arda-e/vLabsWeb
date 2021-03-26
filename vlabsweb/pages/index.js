import Head from 'next/head'
import Customers from '../components/Customers/Customers'
import Products from '../components/Products/Products'
import HeroSection from '../components/HeroSection'
import TestimonialBrands from '../components/TestimonialBrands'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Visium Labs</title>
      </Head>
      <HeroSection />
      <TestimonialBrands />
      <Products />
      <Customers />
    </div>
  )
}
