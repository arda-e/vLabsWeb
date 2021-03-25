import React, {useState} from 'react'
const ProductHeroSection = ({heading, subheading, backgroundSrc, textPosition}) => {
    
    return (
    textPosition === "center" ?
        <section className="flex flex-col items-center justify-center h-80 px-8 md:px-52">
            <div className="flex flex-col">
                <div className="text-gray-600 text-4xl md:text-5xl font-semibold text-center">{heading}</div>
                <div className="text-gray-600 text-md md:text-xl font-normal text-center mt-2">{subheading}</div>
            </div>
        </section> : 
            <section className="flex flex-col items-start justify-center h-80 px-8 md:px-52">
            <div className="flex flex-col">
                <div className="text-gray-600 text-4xl md:text-5xl font-semibold text-left">{heading}</div>
                <div className="text-gray-600 text-md md:text-xl font-normal text-left mt-2">{subheading}</div>
            </div>
        </section> 
    )
}

export default ProductHeroSection