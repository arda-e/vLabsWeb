
const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center h-80 px-8 md:px-52">
            <div className="flex flex-col">
                <div className="text-gray-600 text-4xl md:text-5xl font-semibold text-center">All About Test</div>
                <div className="text-gray-600 text-md md:text-xl font-normal text-center mt-2">You’re wondering how you’ll quickly transition your team to remote work. People are stressed,
                work feels scattered, projects are slipping, and it’s tough to see + manage everything.</div>
            </div>
            <div id="search-section" className="mt-10">
                <input className="py-2 px-10 bg-gray-100 rounded-l-lg "type="text" name="title" value="Find best marketting"/>
                <button className="bg-red-600 py-2 px-6 text-white rounded-r-lg" type="submit">sdfs</button>
            </div>
        </section>
    )
}

export default HeroSection