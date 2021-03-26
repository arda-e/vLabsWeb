import ProductHeroSection from "../../components/Products/ProductHeroSection"
import SecondaryMenu from "../../components/SecondaryMenu"
import Head from 'next/head'
import Text_Main from "../../components/Text/Text_Main"
import H2 from "../../components/Text/H2"
import { CloudArrowUp } from 'phosphor-react'

const visiumfarm = () => {
    return (
        <>
        <head>
            <title>Visium Farm: On-Prem Cihaz Parkuru Çözümü</title>
        </head>
        <section>
            <SecondaryMenu name="Farm"/>
        </section>
            <ProductHeroSection heading="On-Prem Cihaz Parkuru Çözümü" subheading="gerçej cihazlarda manuel testlerle karmaşık text senaryolarının üstesinden gelin veya paralel olarak çok sayıda otomasyon testi koşturun." backgroundSrc="" textPosition="left"/>
        <section className="mt-10 mx-32">
            <H2 allign="center">Neden Visium Farm’ı tercih etmelisiniz?</H2>
            <Text_Main allign="center">            
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisl potenti purus nisi, in nec et, ultricies. Vulputate convallis amet proin condimentum ut turpis neque nibh. Euismod consequat in massa tristique laoreet. Nisl consectetur diam amet adipiscing risus lectus tellus molestie dignissim. Sollicitudin quis malesuada lectus a, quam eget tellus.
            </Text_Main>
        </section>
        <section className="mt-10 mx-32">
            <div className="flex">
                <div className="flex flex-col">
                    <div className="flex flex-row mb-3 items-center">
                        <div className="flex mr-2 "><CloudArrowUp size={48} /></div>
                        <div className="flex font-bold text-xl">Kendi lokasyonunuzda bir cihaz parkuruna sahip olmak hiç bu kadar kolay olmamıştı.

</div>
                    </div>
                    <div>Text</div>
                </div>
            </div>
            <div className="flex"></div>
        </section>
        </>
    )
}

export default visiumfarm
