import ProductHeroSection from "../../components/Products/ProductHeroSection"
import SecondaryMenu from "../../components/SecondaryMenu/SecondaryMenu"
import Head from 'next/head'
import Image from 'next/image'
import Text_Main from "../../components/Text/Text_Main"
import H2 from "../../components/Text/H2"
import Footer from "../../components/Footer"
import { AppWindow, Book, Cloud, CloudArrowUp, Coin, Database, Gauge, Gear, ProjectorScreenChart, Translate, TreeStructure, Users } from 'phosphor-react'
import ScrollUpBtn from "../../components/Products/ScrollUpBtn"

const visiumfarm = () => {
    return (
        <>
            <head>
                <title>Visium Farm: On-Prem Cihaz Parkuru Çözümü</title>
            </head>
            <SecondaryMenu name="Farm" />
            <ProductHeroSection heading="On-Prem Cihaz Parkuru Çözümü" subheading="gerçej cihazlarda manuel testlerle karmaşık text senaryolarının üstesinden gelin veya paralel olarak çok sayıda otomasyon testi koşturun." backgroundSrc="" textPosition="left" />
            <section className="max-w-7xl flex px-8 sm:px-8 md:px-10 lg:px:24 xl:px-32 xl:mx-auto self-center flex-col mt-10">
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
            <section className=" flex xl:mx-auto py-10 justify-center bg-gray-100">
                <div className="max-w-7xl px-8 sm:px-8 md:px-10 lg:px:24 xl:px-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 self-center gap-10">
                    <div className="flex flex-col mb-3 space-y-3 items-start">
                        <Cloud size={48} weight="duotone" color="#f54a23" />
                        <div className="flex font-bold text-xl">Ölçeklenebilir Mimari</div>
                        <div className="font-normal text-sm">Sunucu ve istemci modu ile ölçeklenebilirlik. Sunucuya bağlı cihazlar da test uygulaması için kullanılabilir.</div>
                    </div>
                    <div className="flex flex-col mb-3 space-y-3 items-start">
                        <Gauge size={48} weight="duotone" color="#f54a23" />
                        <div className="flex font-bold text-xl">Manuel ve Otomasyon Testi</div>
                        <div className="font-normal text-sm">Sunucu ve istemci modu ile ölçeklenebilirlik. Sunucuya bağlı cihazlar da test uygulaması için kullanılabilir.</div>
                    </div>
                    <div className="flex flex-col mb-3 space-y-3 items-start">
                        <AppWindow size={48} weight="duotone" color="#f54a23" />
                        <div className="flex font-bold text-xl">BDD &amp; Visium GO desteği​</div>
                        <div className="font-normal text-sm">Standart Appium JSONWP protokolünü destekleyen her test otomasyon sistemi kolayca entegre edilebilir.</div>
                    </div>
                    <div className="flex flex-col mb-3 space-y-3 items-start">
                        <Users size={48} weight="duotone" color="#f54a23" />
                        <div className="flex font-bold text-xl">LDAP Entegrasyonu</div>
                        <div className="font-normal  text-sm">Kullanıcı yönetimini, LDAP server ya da Microsoft Active Directory ile yapabildiğiniz gibi manuel olarakta kullanıcı ekleyebilirsiniz.</div>
                    </div>
                    <div className="flex flex-col mb-3 space-y-3 items-start">
                        <Translate size={48} weight="duotone" color="#f54a23" />
                        <div className="flex font-bold mt-3 text-xl">Multi Lingual Support</div>
                        <div className="font-normal  text-sm">Visium Farm’da  3 dil desteği bulunmakta ve esnek altyapısı sayesinde yeni dilleri eklemek çok basit!</div>
                    </div>
                    <div className="flex flex-col mb-3 space-y-3  items-start">
                        <ProjectorScreenChart size={48} weight="duotone" color="#f54a23" />
                        <div className="flex font-bold text-xl">Raporlama</div>
                        <div className="font-normal text-sm">Daha iyi bir sonuç elde etmek adına detaylı raporlardan yararlanın.</div>
                    </div>
                    <div className="flex flex-col mb-3 space-y-3 items-start">
                        <TreeStructure size={48} weight="duotone" color="#f54a23" />
                        <div className="flex font-bold text-xl">Rest API Desteği</div>
                        <div className="font-normal text-sm">Başarılı bir şekilde tasarlanmış API end-pointleri aracıyla bütün fonksiyonlara ulaşın.</div>
                    </div>
                </div>
            </section>
            <section id="case-study" className="xl-auto px-32 py-12 flex flex-row">
                <div className="flex flex-col w-1/2 space-y-4 mr-10">
                    <div className="">Pademi süreci ile birlikte fiziksel cihaz üzerindeki mobil testlerin uzaktan yapılabilmesi ihtiyacı bir anda arttı. Kısa zamanda Visium Farm’ın Akbank içerisinde konumlandırdık ve ekiplerin kullanımına açtık.</div>
                    <div> Özellikle kurulum gerektirmeden browser üzerinden tüm cihazlara erişilecek bir platform olması ve sorunsuz çalışıyor olması kısa zamanda tüm ekipler tarafında benimsenmesini sağladı. Ayrıca mobil test otomasyonlarımız için de Visium Farm üzerindeki cihazları kolayca test otomasyon altyapılarımıza entegre ettik.</div>
                    <div>
                        Önümüzdeki dönemde cihaz çeşitliliğimizi arttırarak tüm mobil cihaz ihtiyacı duyduğumuz testlerimizi bu platform üzerine kaydırmak için çalışmalarımıza devam ediyoruz.
                    </div>
                </div>
                <div className="flex w-1/2 ml-10 ">
                    <div className="flex w-full h-full justify-center place-self-center bg-gray-300">Image</div>
                </div>

            </section>
            <ScrollUpBtn />
        </>
    )
}

export default visiumfarm
