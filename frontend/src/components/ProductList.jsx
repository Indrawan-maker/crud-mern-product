
import Card from "./Card"

const ProductList = () => {
    return (
        <main className='mt-12'>
            <div className="">
                <h1 className='font-bold text-2xl ml-22'>Product List</h1>
            </div>
            <div className="flex justify-center items-center">
            <div className='grid grid-cols-3 items-center justify-center gap-4'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            </div>
        </main>
    )
}

export default ProductList