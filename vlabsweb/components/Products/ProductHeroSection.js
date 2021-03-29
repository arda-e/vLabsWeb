import React, { useState } from 'react'
const ProductHeroSection = ({ heading, subheading, backgroundSrc, textPosition, id }) => {

    return (
        textPosition === "center" ?

            <section id={id} className=" flex  flex-col items-start bg-gray-300 mx-auto justify-center h-60 px-8 md:px-32">
                <div className="containermax-w-7xl bg-gradient-to-r from-red-600 to-yellow-600">
                    <div className="max-w-7xl flex px-8 sm:px-8 md:px-10 lg:px:24 xl:px-32 self-center flex-col">
                        <div className="text-white text-4xl md:text-5xl font-bold text-center">{heading}</div>
                        <div className="text-white text-md md:text-xl font-normal text-center mt-2">{subheading}</div>
                    </div>
                </div>
            </section> :
            <section id={id} className=" flex bg-gradient-to-r from-red-600 to-yellow-600 flex-col items-start bg-gray-300 mx-auto justify-center h-60">
                <div className=" container max-w-7xl flex px-8 sm:px-8 md:px-10 lg:px:24 xl:px-32 self-center flex-col">
                    <div className="text-white text-4xl md:text-5xl font-bold text-left">{heading}</div>
                    <div className="text-white text-md md:text-xl font-normal text-left mt-2">{subheading}</div>
                </div>
            </section>
    )
}

export default ProductHeroSection