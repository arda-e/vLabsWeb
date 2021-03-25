import ProductHeroSection from "../../components/Products/ProductHeroSection"
import SecondaryMenu from "../../components/SecondaryMenu"
import Head from 'next/head'

const visiumfarm = () => {
    return (
        <>
        <head>
            <title>Visium Farm: On-Prem Cihaz Parkuru Çözümü</title>
        </head>
        <section>
            <SecondaryMenu name="Farm"/>
            <ProductHeroSection heading="On-Prem Cihaz Parkuru Çözümü" subheading="gerçej cihazlarda manuel testlerle karmaşık text senaryolarının üstesinden gelin veya paralel olarak çok sayıda otomasyon testi koşturun." backgroundSrc="" textPosition="left"/>
        </section>
        </>
    )
}

export default visiumfarm
