
const Text_Main = ({ children, allign }) => {
    return (
        allign === "center" ?
            <div className="leading-8 text-center">
                {children}
            </div> :
            <div className="leading-8 text-left">
                {children}
            </div>
    )
}

export default Text_Main
