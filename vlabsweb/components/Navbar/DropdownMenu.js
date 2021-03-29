import { useRef, useState, useEffect } from 'react'
import { useDetectOutsideClick } from './useDetectOutsideClick'
import Link from 'next/link'

const DropdownMenu = () => {
    const dropdownRef = useRef(null)
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
    const onClick = () => setIsActive(!isActive)

    return (
    <>
       {isActive ?
       <div ref={dropdownRef} className="flex flex-col opacity-100 bg-white border border-gray-200 rounded shadow-lg">
            <Link href="products/visiumfarm"><a title="Visium Farm" className="transition duration-700 ease-in-out w-full px-6 py-2 text-smopacity-75 text-secondary hover:opacity-100 whitespace-nowrap">Visium Farm</a></Link>
            <Link href="products/visiumcrowd"><a title="Visium Crowd" className="transition duration-700 ease-in-out w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap">Visium Crowd</a></Link>
            <Link href="products/visiummanage"><a title="Visium Manage" className="transition duration-700 ease-in-out w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap">Visium Manage</a></Link>
            <Link href="products/visiumgo"><a title="Visium Go" className="transition duration-700 ease-in-out w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap">Visium Go</a></Link>
            <Link href="products/visiumload"><a title="Visium Load" className="transition duration-700 ease-in-out w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap">Visium Load</a></Link>
        </div> : 
        <div ref={dropdownRef} className="flex flex-col opacity-0 pointer-events-none bg-white border border-gray-200 rounded shadow-lg">
               <Link href="products/visiumfarm"><a title="Visium Farm" className="transition duration-700 ease-in-out w-full px-6 py-2 text-smopacity-75 text-secondary hover:opacity-100 whitespace-nowrap">Visium Farm</a></Link>
               <Link href="products/visiumcrowd"><a title="Visium Crowd" className="transition duration-700 ease-in-out w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap">Visium Crowd</a></Link>
               <Link href="products/visiummanage"><a title="Visium Manage" className="transition duration-700 ease-in-out w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap">Visium Manage</a></Link>
               <Link href="products/visiumgo"><a title="Visium Go" className="transition duration-700 ease-in-out w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap">Visium Go</a></Link>
               <Link href="products/visiumload"><a title="Visium Load" className="transition duration-700 ease-in-out w-full px-6 py-2 text-sm opacity-75 text-secondary hover:opacity-100 whitespace-nowrap">Visium Load</a></Link>
        </div> }
        </>
    );
}

export default DropdownMenu