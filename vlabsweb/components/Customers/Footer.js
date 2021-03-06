import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer className="bg-red-600  h-16 py-10 flex items-center text-white w-full ">
            <div className="max-w-7xl container sm:px-8 md:px-10 lg:px:24 xl:px-32 flex justify-between items-center">
                <div className="flex flex-col space-y-1">
                    <span className="font-bold text-lg">Visium Labs</span>
                    <span className="font-normal text-sm">2021 All Rights Reserved</span>
                </div>
                <div className="flex space-x-10">
                    <Link href="/termsofservice"><a className="cursor-pointer">Terms of Service</a></Link>
                    <Link href="/privacypolicy"><a className="cursor-pointer">Privacy Policy</a></Link>
                    <Link href="/site-map"><a className="cursor-pointer">Site Map</a></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer