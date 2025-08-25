import {useEffect, useState} from 'react'
import Card from "./Card"
import { fetchData } from '../api.js'

const ProductList = () => {
    const [data, setData] = useState(null)
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
    },[])

    if(loading) return <p>loading api...</p>
    if(error) return <p>error loading api...</p>
    console.log(JSON.stringify(data, null, 2))

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
                />
                })}
            </div>
            </div>
        </main>
    )
}

export default ProductList