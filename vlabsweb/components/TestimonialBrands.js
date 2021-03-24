import Image from 'next/image'

const TestimonialBrands = () => {
    return (
        <section className="flex justify-center bg-gray-50 py-10 flex-row px-10 space-x-4 md:space-x-16">
            <div className="flex"><Image src="/visium-labs-logo.png" height="35" width="150" /></div>   
            <div className="flex"><Image src="/visium-labs-logo.png" height="35" width="150" /></div>   
            <div className="flex"><Image src="/visium-labs-logo.png" height="35" width="150" /></div>   
            <div className="flex"><Image src="/visium-labs-logo.png" height="35" width="150" /></div>   
            <div className="flex"><Image src="/visium-labs-logo.png" height="35" width="150" /></div>   
        </section>
    )
}

export default TestimonialBrands
