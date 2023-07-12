import { useEffect, useState } from "react"
import axios from 'axios'

// fakestore api 'https://fakestoreapi.com/products'


export const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<any>(null)

    useEffect(()=>{
        setIsLoading(true)
        axios
        .get(url)
        .then((response) => setData(response.data))
        .catch((err)=> setError(err))
        .finally(()=> setIsLoading(false))
    },[url]);

    return {data, isLoading, error}

}