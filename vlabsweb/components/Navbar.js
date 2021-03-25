import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobile-menu')
        mobileMenu.classList.toggle('hidden')
    }
    return (
        <nav className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="justify-center p-2 rounded-md text-gray-400  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleMobileMenu} aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {/* Logo */}
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <Image src="/visium-labs-logo.png" height="35" width="150" /> 
                        </div>
                    </div>
                    {/* Menu Items */}
                    <div class="hidden sm:flex sm:ml-6 h-full items-stretch" >
                        <div className="flex space-x-4 items-center">
                            <Link href="/about"><a className="flex text-gray-700 hover:text-red-700 px-3 text-sm font-medium">About Us</a></Link>
                            <Link href="/products"><a className="text-gray-700 hover:text-red-700 px-3 text-sm font-medium">Products</a></Link>
                            <Link href="/blog"><a className="text-gray-700 hover:text-red-700 px-3 text-sm font-medium">Blog</a></Link>
                            <Link href="/visium-academy"><a className="text-gray-700 hover:text-red-700 px-3 text-sm font-medium">Visium Academy</a></Link>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className="sm:hidden" id="mobile-menu">
                    <div className="flex flex-col items-center space-y-7 px-2 pt-2 pb-3 space-y-1">
                        <Link href="/about"><a className="text-gray-700 hover:text-red-700 px-3 text-sm font-medium" >About Us</a></Link>
                        <Link href="/products"><a className="text-gray-700 hover:text-red-700 px-3 text-sm font-medium">Products</a></Link>
                        <Link href="/blog"><a className="text-gray-700 hover:text-red-700 px-3 text-sm font-medium">Blog</a></Link>
                        <Link href="/visium-academy"><a className="text-gray-700 hover:text-red-700 px-3 text-sm font-medium">Visium Academy</a></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar

