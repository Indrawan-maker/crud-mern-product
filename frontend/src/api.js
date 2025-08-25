import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASEURL;

const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
})

export const fetchData = async () => {
    try{
        const response = await instance.get('/')
        return response.data;
    } catch(error) {
        console.log("errror fetching data:", error)
        throw error
    }
}