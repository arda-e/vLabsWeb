
const responsiveWrapper = ({children}) => {
    return (
        <div className="max-w-7xl container mx-auto px-8 sm:px-8 md:px-10 lg:px:24 xl:px-32">
            {children}
        </div>
    )
}

export default responsiveWrapper
