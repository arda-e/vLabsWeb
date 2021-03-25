import ProductBox from "./ProductCard"

const Products = () => {
    return (
        <section className="py-10 md:py-20 px-5 md:px-32 bg-red-50 flex flex-col justify-center">
            <div className="flex flex-col mb-5 md:mb-14">
                <h1 className="font-bold text-3xl md:text-4xl text-center md:text-left text-gray-700">Products</h1>
                <h3 className="mt-2 text-center md:text-left text-md md:text-lg">You’re wondering how you’ll quickly transition your team to remote work. People are stressed, work feels scattered, projects are slipping, and it’s tough to see + manage everything.</h3>
            </div>
            <div className="grid grid-cols-3 grid-rows-2 gap-2 md:gap-10 ">
                <ProductBox name="Visium Manage" description="Test Case Management" text="Lorem ipsum dolor sit amet" />
                <ProductBox name="Visium Manage" description="Test Case Management" text="Lorem ipsum dolor sit amet" />
                <ProductBox name="Visium Manage" description="Test Case Management" text="Lorem ipsum dolor sit amet" />
                <ProductBox name="Visium Manage" description="Test Case Management" text="Lorem ipsum dolor sit amet" />
                <ProductBox name="Visium Manage" description="Test Case Management" text="Lorem ipsum dolor sit amet" />
            </div>
        </section>
    )
}

export default Products
