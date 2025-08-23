import image from '../images/nimek.jpg'

export default function Card() {
    return (
        <>
        <main className="">

            <div className=' max-w-110 min-h-110 rounded-md overflow-hidden mt-4 relative
            [box-shadow:rgba(9,_30,_66,_0.25)_0px_4px_8px_-2px,_rgba(9,_30,_66,_0.08)_0px_0px_0px_1px] 
            hover:[box-shadow:rgba(0,_0,_0,_0.25)_0px_0.0625em_0.0625em,_rgba(0,_0,_0,_0.25)_0px_0.125em_0.5em,_rgba(255,_255,_255,_0.1)_0px_0px_0px_1px_inset]
            px-4 py-4'>
            <div className='justify-center items-center'>
            <div>
            <div className='items-center flex justify-center'>
                <img 
                className='w-56 h-56'
                src={image} 
                alt="product image" />
            </div>
            <div className='mt-2'>
            <h4 className='font-bold text-xl'>nama produk</h4>
            <h5 className='text-gray-700'>harga produk Rp 5.000</h5>
            <div className='mt-4'>
            <h6 className='text-gray-700 text-sm'>deskriprkj sit amet. consectetur adipisicing elit. Lorem ipsum dolor sit amet. Maiores!</h6>
            </div>
            </div>
            </div>
            <div className='text-white gap-2  ml-66 absolute right bottom-0.5 translate-y-[20px] mb-8'>
                <button className='bg-red-500 cursor-pointer rounded-sm p-2'>Delete</button>
                <button className='bg-blue-500 cursor-pointer rounded-sm px-4 py-2 ml-4'>Edit</button>
            </div>
                </div>
            </div>
        </main>
        </>
    )
}