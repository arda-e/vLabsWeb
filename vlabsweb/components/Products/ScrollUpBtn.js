import { ArrowUp } from 'phosphor-react'

const ScrollUpBtn = () => {
    return (
        <a href="#navbar" className="fixed bottom-4 right-6 rounded-md shadow-lg bg-gray-700 p-2">
            <ArrowUp size={24} weight="duotone" color="#ffffff" />
        </a>
    )
}

export default ScrollUpBtn
