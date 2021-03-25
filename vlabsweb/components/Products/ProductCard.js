const ProductCard = ({name, description, text}) => {
    return (
        <div className="bg-white p-5 cursor-pointer rounded flex flex-col items-stretch shadow-xl">
            <h3 className="text-2xl font-semibold "><span className="text-red-600">Visium&nbsp;</span>{name}</h3>
            <h4 className="text-lg">{description}</h4>
            <p className="text-sm mt-2">{text}</p>
        </div>
    )
}

export default ProductCard
