
const HeroSection = () => {
    return (
        <section className="flex max-w-7xl mx-auto flex-col items-center justify-center h-80 px-8 md:px-52">
            <div className="flex flex-col">
                <div className="text-gray-600 text-4xl md:text-5xl font-semibold text-center">All About Test</div>
                <div className="text-gray-600 text-md md:text-xl font-normal text-center mt-2">You’re wondering how you’ll quickly transition your team to remote work. People are stressed,
                work feels scattered, projects are slipping, and it’s tough to see + manage everything.</div>
            </div>
            <div id="search-section" className="mt-10 space-x-4">
                <input className="py-2 px-10 bg-gray-100 border border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent "type="text" name="title" placeholder="Find best marketting"/>
                <button className="bg-red-600  focus:outline-none py-2 px-6 text-white rounded-lg" type="submit">sdfs</button>
            </div>
        </section>
    )
}

export default HeroSection