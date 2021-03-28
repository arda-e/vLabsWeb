import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="bg-red-600  h-16 py-10 flex items-center text-white">
            <div className="max-w-7xl mx-auto flex justify-between">
                <div className="flex font-bold items-center space-x-10">
                    <span className="font-bold text-lg">Visium Labs</span>
                    <span>2021 All Rights Reserved</span>
                </div>
                <div className="flex space-x-10 bg-green-400">
                    <a className="cursor-pointer">Terms of Service</a>
                    <a className="cursor-pointer">Privacy Policy</a>
                    <a className="cursor-pointer">Site Map</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer