import ProductHeroSection from "../../components/Products/ProductHeroSection"
import SecondaryMenu from "../../components/SecondaryMenu/SecondaryMenu"
import Head from 'next/head'
import Image from 'next/image'
import Text_Main from "../../components/Text/Text_Main"
import H2 from "../../components/Text/H2"
import Footer from "../../components/Footer"
import { AppWindow, Book, Cloud, CloudArrowUp, Coin, Database, Gauge, Gear, ProjectorScreenChart, Translate, TreeStructure, Users } from 'phosphor-react'
import ScrollUpBtn from "../../components/Products/ScrollUpBtn"
import VisiumFarmFeatures from "./VisiumFarmFeatures"
import CTA from "../../components/CTA"
import TestimonialQuotes from "../../components/TestimonialQuotes"

const visiumfarm = () => {
    return (
        <>
            <head>
                <title>Visium Farm: On-Prem Cihaz Parkuru Çözümü</title>
            </head>
            <SecondaryMenu name="Farm" />
            <ProductHeroSection id="overview" heading="On-Prem Cihaz Parkuru Çözümü" subheading="gerçej cihazlarda manuel testlerle karmaşık text senaryolarının üstesinden gelin veya paralel olarak çok sayıda otomasyon testi koşturun." backgroundSrc="" textPosition="left" />
            <section  className="max-w-7xl flex px-8 sm:px-8 md:px-10 lg:px:24 xl:px-32 xl:mx-auto self-center flex-col mt-10">
                <H2 allign="center">Neden Visium Farm’ı tercih etmelisiniz?</H2>
                <Text_Main allign="center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl potenti purus nisi, in nec et, ultricies. Vulputate convallis amet proin condimentum ut turpis neque nibh. Euismod consequat in massa tristique laoreet. Nisl consectetur diam amet adipiscing risus lectus tellus molestie dignissim. Sollicitudin quis malesuada lectus a, quam eget tellus.
            </Text_Main>
            </section>
            <section className="xl:mx-auto flex justify-center flex-row pt-10  space-x-4">
                <div className="max-w-7xl flex flex-row md:flex-col items-center px-8 sm:px-8 md:px-10 lg:px:24 xl:px-32 space-x-4">
                    <div className="flex flex-row tems-center md:items-start ">
                        {/*  */}
                        <div className="flex w-72 mb-10 flex-col items-center md:items-start">
                            <div className="flex flex-col md:flex-row mb-3 items-center">
                                <div className="flex mr-2 "><CloudArrowUp size={48} weight="duotone" color="#f54a23" /></div>
                                <div className="flex font-bold text-xl">On-prem çözüm</div>
                            </div>
                            <div className="font-normal text-center md:text-left text-sm">Kendi lokasyonunuzda bir cihaz parkuruna sahip olmak hiç bu kadar kolay olmamıştı.</div>
                        </div>
                        {/*  */}
                        <div className="flex w-72 mb-10 flex-col justify-center">
                            <div className="flex flex-col md:flex-row mb-3 items-center">
                                <div className="flex mr-2 "><Gear size={48} weight="duotone" color="#f54a23" /></div>
                                <div className="flex font-bold text-xl">Test Otomasyonu</div>
                            </div>
                            <div className="font-normal text-center md:text-left text-sm">Otomasyon testleri ile aynı anda paralel olarak birden fazla cihazda test koşabilirsiniz.</div>
                        </div>
                        {/*  */}
                        <div className="flex w-72 mb-10 flex-col items-center md:items-start">
                            <div className="flex flex-col md:flex-row mb-3 items-center">
                                <div className="flex mr-2 animate-bounce"><Coin size={48} weight="duotone" color="#f54a23" /></div>
                                <div className="flex font-bold text-xl">Maliyet Avantajı</div>
                            </div>
                            <div className="font-normal text-center md:text-left  text-sm">Özelliklerine göre piyasadaki en iyi fiyatlandırma</div>
                        </div>
                    </div>
                    <div className="flex">
                        <Image className="flex" src="/img/GifFarmDevMan.gif" height="500" width="1000" />
                    </div>
                </div>
            </section>
            <VisiumFarmFeatures/>
            <TestimonialQuotes />
            <CTA buttonLabel="Learn More">Learn more about the Visium Farm product and the Visium Labs product line and schedule a demo.</CTA>
            <ScrollUpBtn />
        </>
    )
}

export default visiumfarm
