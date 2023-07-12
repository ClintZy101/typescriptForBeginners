import { useEffect, useState } from "react"
import axios from 'axios'

// fakestore api 'https://fakestoreapi.com/products'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setIsLoading(true)
        axios
        .get('#')
        .then((response) => setData(response.data))
        .catch((err)=> setError(err))
        .finally(()=> setIsLoading(false))
    },[url]);

    return {data, isLoading, error}

}