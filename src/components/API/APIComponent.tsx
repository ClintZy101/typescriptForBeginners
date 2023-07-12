import React from 'react'
import { useFetch } from './useFetchInTS'



export default function APIComponent() {
    const {data, isLoading, error} = useFetch('https://fakestoreapi.com/products')

    if(isLoading) return <div>Still Loading</div>
    if(error) return <div>Unknown Error Encountered</div>

    console.log('data',data)
  return (

    <div>
        APIComponent Loaded

    </div>
  )
}
