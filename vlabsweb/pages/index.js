import Head from 'next/head'
import HeroSection from '../components/HeroSection'
export default function Home() {
  return (
    <div className="h-full">
      <Head>
        <title>Visium Labs</title>
      </Head>
      <HeroSection />

    </div>
  )
}
