import { useEffect, useState, useRef  } from 'react'
import { useDetectOutsideClick } from './useDetectOutsideClick'
import Link from 'next/link'
import Image from 'next/image'
import ResponsiveWrapper from '../ResponsiveWrapper'

const Navbar = () => {
    const dropdownRef = useRef(null)
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
    const onClick = () => setIsActive(!isActive)
    const dropdownClassActive="opacity-100 " + "z-30 p-6 grid grid-cols-2 gap-x-5 absolute bg-gray-100 top-16 right-32 w-84 flex-col transition duration-300  ease-in-out  border border-t-0 border-gray-200 rounded-b shadow-lg"
    const dropdownClassDeActive="opacity-0 " + "z-30 p-6 grid grid-cols-2 gap-x-5 absolute bg-gray-100 top-16 right-32 w-84 flex-col transition duration-300  ease-in-out  border border-t-0 border-gray-200 rounded-b shadow-lg"
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobile-menu')
        mobileMenu.classList.toggle('hidden')
    }
    return (
        <nav id="navbar" className="bg-gray-100">
                <ResponsiveWrapper>
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button type="button" className="justify-center p-2 rounded-md text-gray-400  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleMobileMenu} aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
                    <div className="hidden sm:flex sm:ml-6 h-full items-stretch" >
                        <div className="flex space-x-4 items-center">
                            <Link href="/about-us"><a className="flex text-gray-700 hover:text-red-700 px-3 text-sm font-semibold">About Us</a></Link>
                            <div onClick={(e) => setIsActive(true)}className="flex flex-row items-center">
                                <a className="text-gray-700 pl-3 pr-1 text-sm font-semibold">Products</a>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><polyline points="208 96 128 176 48 96" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
                            </div>
                            {/*  */}
                            <div ref={dropdownRef} className={ isActive ?  dropdownClassActive : dropdownClassDeActive }>
                                    <Link href="products/visiumlabs">
                                        <div className=" hover:bg-gray-200 rounded-md px-6 py-2 cursor-pointer">   
                                            <a onClick={(e) => setIsActive(false)} title="Visium labs" className="transition duration-700 ease-in-out flex w-full text-base font-semibold text-gray-700 hover:font-semibold">Visium Desk</a>
                                            <p className="text-gray-600 text-xs"> Lorem ipsum dolor sit amet</p>   
                                        </div>
                                    </Link>
                                    <Link href="products/visiumdesk">
                                        <div className=" hover:bg-gray-200 rounded-md px-6 py-2 cursor-pointer" >   
                                            <a onClick={(e) => setIsActive(false)} title="Visium Desk" className="transition duration-700 ease-in-out flex w-full text-base font-semibold text-gray-700  hover:font-semibold">Visium Desk</a>
                                            <p className="text-gray-600 text-xs"> Lorem ipsum dolor sit amet</p>   
                                        </div>
                                    </Link>
                                    <Link href="products/visiumfarm">
                                        <div className=" hover:bg-gray-200 rounded-md px-6 py-2 cursor-pointer">   
                                            <a onClick={(e) => setIsActive(false)} title="Visium Farm" className="transition duration-700 ease-in-out flex w-full text-base font-semibold text-gray-700  hover:font-semibold">Visium Farm</a>
                                            <p className="text-gray-600 text-xs"> Lorem ipsum dolor sit amet</p>   
                                        </div>
                                    </Link>
                                    <Link href="products/visiumgo">
                                        <div className=" hover:bg-gray-200 rounded-md px-6 py-2 cursor-pointer">   
                                            <a onClick={(e) => setIsActive(false)} title="Visium Go" className="transition duration-700 ease-in-out flex w-full text-base font-semibold text-gray-700  hover:font-semibold">Visium Go</a>
                                            <p className="text-gray-600 text-xs"> Lorem ipsum dolor sit amet</p>   
                                        </div>
                                    </Link>
                                    <Link href="products/visiumcrowd">
                                        <div className=" hover:bg-gray-200 rounded-md px-6 py-2 cursor-pointer">   
                                            <a onClick={(e) => setIsActive(false)} title="Visium Crowd" className="transition duration-700 ease-in-out flex w-full text-base font-semibold text-gray-700  hover:font-semibold">Visium Crowd</a>
                                            <p className="text-gray-600 text-xs"> Lorem ipsum dolor sit amet</p>   
                                        </div>
                                    </Link>
                                    <Link href="products/visiummanage">
                                        <div className=" hover:bg-gray-200 rounded-md px-6 py-2 cursor-pointer">   
                                            <a onClick={(e) => setIsActive(false)} title="Visium Manage" className="transition duration-700 ease-in-out flex w-full text-base font-semibold text-gray-700  hover:font-semibold">Visium Manage</a>
                                            <p className="text-gray-600 text-xs"> Lorem ipsum dolor sit amet</p>   
                                        </div>
                                    </Link>
                                    <Link href="products/visiumload">
                                        <div className=" hover:bg-gray-200 rounded-md px-6 py-2 cursor-pointer">   
                                            <a onClick={(e) => setIsActive(false)} title="Visium Load" className="transition duration-700 ease-in-out flex w-full text-base font-semibold text-gray-700  hover:font-semibold">Visium Load</a>
                                            <p className="text-gray-600 text-xs"> Lorem ipsum dolor sit amet</p>   
                                        </div>
                                    </Link>
                                </div> 
                            <Link href="/blog"><a className="text-gray-700 hover:text-red-700 px-3 text-sm font-semibold">Blog</a></Link>
                            <Link href="/visium-academy"><a className="text-gray-700 hover:text-red-700 px-3 text-sm font-semibold">Visium Academy</a></Link>
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
            </ResponsiveWrapper>
        </nav>
    )
}
export default Navbar

