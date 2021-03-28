const SecondaryMenu__Item = ({children, href}) => {
    return (
        <a href={ href } className="flex transition duration-700 ease-in-out h-full text-gray-700 
        hover:text-red-600 font-semibold place-items-center border-b-4 border-transparent hover:border-red-600 px-5 ">
        {children} </a>
    )
}

export default SecondaryMenu__Item
