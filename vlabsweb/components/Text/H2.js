
const H2 = ({ children, allign }) => {
    return (
        allign === "center" ?
            <div className="font-semibold text-3xl leading-8 text-center mb-5">
                {children}
            </div> :
            <div className="font-semibold text-3xl leading-8 text-left mb-5">
                {children}
            </div>
    )
}

export default H2
