import { useEffect, useState } from "react"
import axios from 'axios'

// fakestore api 'https://fakestoreapi.com/products'
// sample data type from this api

export type ProductType = {
    category: string
    description: string
    id: number
    image: string
    price: number
    rating: {
        rate: number
        count: number
    }
    title: string
}

export const useFetch = (url: string) => {
    const [data, setData] = useState<ProductType[] | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<any>(null)

    useEffect(()=>{
        setIsLoading(true)
        axios
        .get(url)
        .then((response) => {setData(response.data); console.log(data)})
        .catch((err)=> setError(err))
        .finally(()=> setIsLoading(false))
    },[url]);

    return {data, isLoading, error}

}