const SecondaryMenu = () => {
    return (
        <div className="flex bg-gray-200 items-center h-16">
            <div className="flex flex-row mx-32 self-stretch">
                <div className="flex text-gray-700 text-2xl self-center font-semibold">
                    Manage
                </div>
                <div className="flex flex-row ml-20 h-full items-stretch" >
                    <a className="flex transition duration-700 ease-in-out h-full text-gray-700 hover:text-red-600 font-semibold place-items-center border-b-4 border-transparent hover:border-red-600 px-5 ">Overview</a>
                    <a className="flex transition duration-700 ease-in-out h-full text-gray-700 hover:text-red-600 font-semibold text-white place-items-center border-b-4 border-transparent hover:border-white px-5 ">Features</a>
                    <a className="flex transition duration-700 ease-in-out h-full text-gray-700 hover:text-red-600 font-semibold text-white place-items-center border-b-4 border-transparent hover:border-red-600 px-5 ">Case Studies</a>
                </div>
            </div>
        </div>
    )
}

export default SecondaryMenu

