import Image from 'next/image'

const CustomerCard = ({logoSrc, description, name, title}) => {
    return (
        <div className="bg-white p-6 rounded flex items-stretch shadow-xl">
            <div className="flex flex-col">
            <div className="flex">
                <Image src="/visium-labs-logo.png" height="35" width="150" />
            </div>
            <div className="flex flex-row mt-6">
                <div className="font-bold text-6xl mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M116,72v88a48.05436,48.05436,0,0,1-48,48,8,8,0,0,1,0-16,32.036,32.036,0,0,0,32-32v-8H40a16.01833,16.01833,0,0,1-16-16V72A16.01833,16.01833,0,0,1,40,56h60A16.01833,16.01833,0,0,1,116,72ZM216,56H156a16.01833,16.01833,0,0,0-16,16v64a16.01833,16.01833,0,0,0,16,16h60v8a32.036,32.036,0,0,1-32,32,8,8,0,0,0,0,16,48.05436,48.05436,0,0,0,48-48V72A16.01833,16.01833,0,0,0,216,56Z"></path></svg>                </div>
                <div>
                    <div className="">To quickly start my startup landing page design, I was looking for a landing page UI Kit.
                Landify is one of the best landing page UI kit I have come across.
                It’s so flexible, well organised and easily editable.
                    </div>
                    <div className="flex flex-col mt-4 mr-4">
                        <div className="font-bold text-md">Floyd Miles</div>
                        <div>Vice President, GoPro</div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CustomerCard
