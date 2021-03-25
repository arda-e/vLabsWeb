const SecondaryMenu = ({name}) => {
    return (
        <div className="flex bg-red-600 items-center h-16">
            <div className="flex flex-row mx-32 self-stretch">
                <div className="flex text-white text-2xl self-center font-semibold">
                    {name}
                </div>
                <div className="flex flex-row space-x-4" >
                    <div className="flex flex-grow">
                        <a className="flex self-center flex-grow bg-green-600 border-b-4">Test 1</a>
                    </div>
                    <a className="flex bg-red-600 text-white align-middle border-b-4 -translate-y-1">Test 2</a>
                    <a className="flex bg-green-600">Test 3</a>
                </div>
            </div>
        </div>
    )
}

export default SecondaryMenu

