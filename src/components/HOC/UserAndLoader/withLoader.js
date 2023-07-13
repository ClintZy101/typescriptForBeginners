import React, { useState } from 'react'

export const WithLoader = (WrappedComponent) => {
    const [loading, setLoading] = useState(true)

        setTimeout(()=>{
            setLoading(false)
        }, 2000);

        return (
            <div>
                { loading ? <p>Loading...</p> : <WrappedComponent /> }
            </div>
          )
    
}
