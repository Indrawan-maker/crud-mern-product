import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"


export default function EditUser() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [image_url, setImage_url] = useState("")
    const [price, setPrice] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [succesMessage, setSuccesMessage] = useState("")
    const {id} = useParams()
    const navigate = useNavigate()

    console.log({
        name, description, image_url, price
    })

    useEffect(() => {
        getUserById();
    },[])
    const getUserById = async () => {
        const response = await axios.get(`http://locahost:5000/users/${id}`)
        setName(response.data.name)
        setName(response.data.description)
        setName(response.data.image_url)
        setName(response.data.price)
    }

    setTimeout(() => {
        setErrorMessage("")
        setSuccesMessage("")
    }, 20000)

    const updateUser = async (e) => {
        e.preventDefault()
        console.log(name)
        console.log(description)
        console.log(image_url)
        console.log(price)
        if (isNaN(price) || price.trim() === "") {
            setErrorMessage("perhatikan harga produk!")
            return
        }
        try {
            await axios.patch(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/users/${id}`, { 
                name,
                description,
                image_url,
                price: Number(price)
            })

            setName("")
            setDescription("")
            setImage_url("")
            setPrice("")
            setSuccesMessage("Upload Sukses! Cancel untuk kembali")
        } catch (error) {
            console.log(error);
        }
    }

    const handleCancel = () => {
        setName("")
        setDescription("")
        setImage_url("")
        setPrice("")
        navigate("/")

    }
    return (
        <>
            <div className="grid justify-center items-center mt-12">
                <h1 className="font-bold text-4xl">Tambah produk</h1>
                {errorMessage && 
                <div role="alert" className="alert alert-error my-4">
                    <span>{errorMessage}</span>
                </div>}
                {succesMessage && 
                <div role="alert" className="alert alert-success mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{succesMessage}</span>
                </div>
                }
                <div className="grid justify-center items-center mt-12">
                    <form className="w-80 h-120 sm:w-220 sm:h-110 rounded-md overflow-hidden mt-4 relative
            [box-shadow:rgba(9,_30,_66,_0.25)_0px_4px_8px_-2px,_rgba(9,_30,_66,_0.08)_0px_0px_0px_1px] 
            hover:[box-shadow:rgba(0,_0,_0,_0.25)_0px_0.0625em_0.0625em,_rgba(0,_0,_0,_0.25)_0px_0.125em_0.5em,_rgba(255,_255,_255,_0.1)_0px_0px_0px_1px_inset]
            px-2 py-2"
                        action="" onSubmit={updateUser}>
                        <div className=" md:w-full mt-4">
                            <label className="font-semibold text-gray-500"
                                htmlFor="" >Nama</label>
                            <div>
                                <input className="border border-gray-300 w-full h-12 rounded-md px-2"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Mie instan" />
                            </div>
                        </div>
                        <div className="md:w-full mt-4">
                            <label className="font-semibold text-gray-500"
                                htmlFor="">Deskripsi</label>
                            <div>
                                <textarea className="border border-gray-300 w-full rounded-md px-2 py-1 h-14"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    name=""
                                    id="">

                                </textarea>
                            </div>
                        </div>
                        <div className="md:w-full mt-4">
                            <label className="font-semibold text-gray-500"
                                htmlFor="">image URL</label>
                            <div>
                                <input className="border border-gray-300 w-full h-12 rounded-md px-2"
                                    value={image_url}
                                    onChange={(e) => setImage_url(e.target.value)}
                                    type="text" placeholder="https://img.freepik.com/vektor-gratis/logo-vektor-gradien-warna-warni-burung_343694-1365.jpg" />
                            </div>
                        </div>
                        <div className="md:w-full mt-4">
                            <label className="font-semibold text-gray-500"
                                htmlFor="">Harga produk</label>
                            <div>
                                <input className="border border-gray-300 w-full h-12 rounded-md px-2"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    type="text" placeholder="2000" />
                            </div>
                        </div>
                        <div className="flex text-white gap-2 sm:gap-0 font-medium absolute right bottom-0.5 translate-y-[20px] mb-8">
                            <button className="bg-red-500 hover:bg-red-700 cursor-pointer rounded-sm p-2 mr-auto" type="button" onClick={handleCancel}>cancel</button>
                            <button className="bg-blue-500 hover:bg-blue-700 cursor-pointer rounded-sm px-4 py-2 sm:ml-4"
                                type="submit"
                            >Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}