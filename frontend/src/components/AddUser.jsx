
export default function AddUser() {
    return (
        <>
            <div className="grid justify-center items-center mt-12">
                <h1 className="font-bold text-4xl">Tambah produk</h1>
                <div className="grid justify-center items-center mt-12">
                    <form className="w-80 h-120 sm:w-220 sm:h-110 rounded-md overflow-hidden mt-4 relative
            [box-shadow:rgba(9,_30,_66,_0.25)_0px_4px_8px_-2px,_rgba(9,_30,_66,_0.08)_0px_0px_0px_1px] 
            hover:[box-shadow:rgba(0,_0,_0,_0.25)_0px_0.0625em_0.0625em,_rgba(0,_0,_0,_0.25)_0px_0.125em_0.5em,_rgba(255,_255,_255,_0.1)_0px_0px_0px_1px_inset]
            px-2 py-2"
                    action="">
                        <div className=" md:w-full mt-4">
                            <label className="font-semibold text-gray-500"
                            htmlFor="" >Nama</label>
                            <div>
                                <input className="border border-gray-300 w-full h-12 rounded-md px-2"
                                    type="text" placeholder="Mie instan" />
                            </div>
                        </div>
                        <div className="md:w-full mt-4">
                            <label className="font-semibold text-gray-500"
                            htmlFor="">Deskripsi</label>
                            <div>
                                <textarea className="border border-gray-300 w-full h-12 rounded-md px-2"
                                    name="" id="">

                                </textarea>
                            </div>
                        </div>
                        <div className="md:w-full mt-4">
                            <label className="font-semibold text-gray-500"
                            htmlFor="">image URL</label>
                            <div>
                                <input className="border border-gray-300 w-full h-12 rounded-md px-2"
                                    type="text" placeholder="https://img.freepik.com/vektor-gratis/logo-vektor-gradien-warna-warni-burung_343694-1365.jpg" />
                            </div>
                        </div>
                        <div className="md:w-full mt-4">
                            <label className="font-semibold text-gray-500"
                            htmlFor="">Harga produk</label>
                            <div>
                                <input className="border border-gray-300 w-full h-12 rounded-md px-2"
                                    type="text" placeholder="2000" />
                            </div>
                        </div>
                        <div className="flex text-white gap-2 sm:gap-0 font-medium absolute right bottom-0.5 translate-y-[20px] mb-8">
                            <button className="bg-red-500 hover:bg-red-700 cursor-pointer rounded-sm p-2 mr-auto">cancel</button>
                            <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer rounded-sm px-4 py-2 sm:ml-4">save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}