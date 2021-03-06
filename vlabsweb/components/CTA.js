import Link from 'next/link'
const CTA = ({ buttonLabel, buttonLink, children }) => {
    return (
        <section className="text-gray-600">
            <div className="container pt-12 pb-24 mx-auto">
                <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                    <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">{children}</h1>
                    <Link href={buttonLink}> 
                        <button className="flex-shrink-0 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg mt-10 sm:mt-0">
                            {buttonLabel}
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CTA

