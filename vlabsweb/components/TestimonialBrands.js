import Image from 'next/image'

const TestimonialBrands = () => {
    return (
        <section className="flex mx-auto justify-center bg-gray-50 py-10 flex-row space-x-4 md:space-x-16">
            <div className="flex"><Image src="/img/aksigorta.png" height="40" width="150" /></div>   
            <div className="flex"><Image src="/img/aktifbank.png" height="40" width="150" /></div>   
            <div className="flex"><Image src="/img/belbim.png" height="40" width="150" /></div>   
            <div className="flex"><Image src="/img/burgerking.png" height="40" width="150" /></div>   
            <div className="flex"><Image src="/img/hyundai.png" height="40" width="150" /></div>   
        </section>
    )
}

export default TestimonialBrands
