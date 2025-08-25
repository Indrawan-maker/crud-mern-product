import { Link } from "react-router-dom";


export default function Card({ name, price, desc, img, id }) {

    const formatRupiah = (num) => {
        if(!num) return "Rp 0"
        return Number(num).toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        });
    };

    return (
        <>
            <main className="">

                <div className='w-80 h-80 sm:w-110 sm:h-110 rounded-md overflow-hidden mt-4 relative
            [box-shadow:rgba(9,_30,_66,_0.25)_0px_4px_8px_-2px,_rgba(9,_30,_66,_0.08)_0px_0px_0px_1px] 
            hover:[box-shadow:rgba(0,_0,_0,_0.25)_0px_0.0625em_0.0625em,_rgba(0,_0,_0,_0.25)_0px_0.125em_0.5em,_rgba(255,_255,_255,_0.1)_0px_0px_0px_1px_inset]
            px-4 py-4'>
                    <div className='justify-center items-center'>
                        <div>
                            <div className='items-center flex justify-center'>
                                <img
                                    className='w-56 h-56'
                                    src={img}
                                    alt="product image" />
                            </div>
                            <div className='mt-2'>
                                <h4 className='font-bold text-xl'>{name}</h4>
                                <h5 className='text-gray-700'>{formatRupiah(price)}</h5>
                                <div className='mt-4'>
                                    <h6 className='text-gray-700 text-sm'>{desc}</h6>
                                </div>
                            </div>
                        </div>
                        <div className='flex text-white gap-2 sm:gap-0  ml-42 sm:ml-66 absolute right bottom-0.5 translate-y-[20px] mb-8'>
                            <button className='bg-red-500 hover:bg-red-700 cursor-pointer rounded-sm p-2'>Delete</button>
                            <Link to={`/edit/${id}`}>
                            <button className='bg-blue-500 hover:bg-blue-700 cursor-pointer rounded-sm px-4 py-2 sm:ml-4'>Edit</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}