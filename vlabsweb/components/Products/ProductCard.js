const ProductCard = ({name, description, text}) => {
    return (
        <div className="bg-white p-5 rounded flex flex-col items-stretch shadow-xl">
            <h3>{name}</h3>
            <h4>{description}</h4>
            <p>{text}</p>
        </div>
    )
}

export default ProductCard
