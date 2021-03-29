import { AppWindow, Book, Cloud, CloudArrowUp, Coin, Database, Gauge, Gear, ProjectorScreenChart, Translate, TreeStructure, Users } from 'phosphor-react'

const VisiumFarmFeatures = () => {
    return (
        <section id="features" className=" flex xl:mx-auto py-10 justify-center bg-gray-100">
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
    )
}

export default VisiumFarmFeatures
