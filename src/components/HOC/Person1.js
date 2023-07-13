import React from 'react'
import UpdatedComponent from './HOCcomponent'


const Person1 = ({money, handleIncrease}) => {
  return (
    <div>
       <h2>Person1's bid ${money}</h2> 
    <button onClick={handleIncrease}>Increase Money</button>
    </div>

  )
}

export default UpdatedComponent(Person1)
