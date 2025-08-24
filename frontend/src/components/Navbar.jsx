

export default function Navbar() {
    return (
        <nav className="h-18 bg-slate-900 items-center">
            <div className="flex justify-between items-center text-white">
                <div className="mt-4 ml-6 sm:ml-22 text-2xl font-bold">
        <h1>Zahira Mart</h1>
                </div>
                <div className="mt-4 mr-6 sm:mr-22">
        <button className="border-1 border-white bg-blue-700 rounded-md p-2 w-38 h-10 cursor-pointer">+ Tambah Produk</button>
                </div>
            </div>
        </nav>
    )
}