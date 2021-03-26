import CustomerCard from './CustomerCard'
const Customers = () => {
    return (
        <section className="py-10 md:py-20 px-5 md:px-32 bg-gray-50 flex flex-col justify-center"> 
            <div className="mx-auto max-w-7xl">
                <div id="heading" className="flex flex-col mb-14">
                    <div className="text-center md:text-left font-bold text-3xl md:text-4xl text-gray-700">Customers</div>
                    <div className="text-center md:text-left mt-2 text-md md:text-lg">Sub heading</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-4 md:grid-rows-2 gap-10 ">
                    <div className="col-span-full md:col-span-1 self-stretch flex">
                        <CustomerCard logoSrc="" description="" name="" title="" />
                    </div>
                    <div className="col-span-full md:col-span-2 self-stretch flex">
                        <CustomerCard logoSrc="" description="" name="" title="" />
                    </div>
                    <div className="col-span-full md:col-span-2 self-stretch flex">
                        <CustomerCard logoSrc="" description="" name="" title="" />
                    </div>
                    <div className="col-span-full md:col-span-1 self-stretch flex">
                        <CustomerCard logoSrc="" description="" name="" title="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Customers
