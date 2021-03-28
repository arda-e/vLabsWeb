import SecondaryMenu__Item from "./SecondaryMenu__Item"

const SecondaryMenu = ({ name }) => {
    return (
        <section className="z-20 sticky top-0 items-center bg-gray-200 ">
            <div className="max-w-7xl h-16 items-center mx-auto px-8 sm:px-8 md:px-10 lg:px:24 xl:px-32 flex" >
                <div className="flex h-full justify-start">
                    <div className="flex text-gray-700 text-2xl self-center font-semibold">
                        {name}
                    </div>
                    <div className="flex flex-row ml-20 h-full items-stretch" >
                        <SecondaryMenu__Item href="#overview">Overview</SecondaryMenu__Item>
                        <SecondaryMenu__Item href="#features">Features</SecondaryMenu__Item>
                        <SecondaryMenu__Item href="#case-studies">Case Studies</SecondaryMenu__Item>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SecondaryMenu

