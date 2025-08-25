import { useEffect, useState } from 'react'
import Card from "./Card"
import { fetchData } from '../api.js'
import axios from 'axios'

const ProductList = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetchData()
            .then(data => {
                setData(data)
                setLoading(false);
            })
            .catch(err => {
                setError(err)
                setLoading(false)
            })
    }, [])

    const deleteProduct = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/users/${id}`)
            setData(data.filter(item => item._id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    if (loading) {
        return <div className='flex justify-center items-center mt-44 gap-32'>
            <div className="flex w-70 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex w-70 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
            <div className="flex w-70 flex-col gap-4">
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-28"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
            </div>
        </div>
    }

    if (error) {
        return <div role="alert" className="alert alert-error">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span> Error coba lagi nanti!.</span>
        </div>
    }

    return (
        <main className='mt-12'>
            <div className="">
                <h1 className='font-bold text-2xl ml-22'>Product List</h1>
            </div>
            <div className="flex justify-center items-center">
                <div className='grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-4'>
                    {data.map(item => {
                        return <Card
                            key={item._id}
                            name={item.name}
                            price={item.price}
                            desc={item.description}
                            img={item.image_url}
                            id={item._id}
                            deleteBtn={() => deleteProduct(item._id)}
                        />
                    })}
                </div>
            </div>
        </main>
    )
}

export default ProductList