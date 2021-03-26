import React, {useState} from 'react'
const ProductHeroSection = ({heading, subheading, backgroundSrc, textPosition}) => {
    
    return (
    textPosition === "center" ?
        <section className="flex bg-gradient-to-r from-red-600 to-yellow-600 flex-col items-center bg-gray-300 justify-center h-60 px- md:px-32">
            <div className="flex flex-col">
                <div className="text-white text-4xl md:text-5xl font-bold text-center">{heading}</div>
                <div className="text-white text-md md:text-xl font-normal text-center mt-2">{subheading}</div>
            </div>
        </section> : 
            <section className="flex bg-gradient-to-r from-red-600 to-yellow-600 flex-col items-start bg-gray-300 justify-center h-60 px-8 md:px-32">
            <div className="flex flex-col">
                <div className="text-white text-4xl md:text-5xl font-bold text-left">{heading}</div>
                <div className="text-white text-md md:text-xl font-normal text-left mt-2">{subheading}</div>
            </div>
        </section> 
    )
}

export default ProductHeroSection