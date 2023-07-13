import React, { useState } from 'react'

// Use Higher Order Component for 2 components needing the same properties/functions

 const UpdatedComponent = (OriginalComponent) => {
    
    const NewComponent = () => {
        const [money, setMoney] = useState(10);

        const handleIncrease = () =>{
            setMoney(money * 2)
        };

        return <OriginalComponent handleIncrease={handleIncrease} money={money} />
    }

  return NewComponent

}

export default UpdatedComponent