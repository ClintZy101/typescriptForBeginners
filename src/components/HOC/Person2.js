import React from 'react'
import UpdatedComponent from './HOCcomponent'


const Person2 = ({money, handleIncrease}) => {
  return (
    <div>
       <h2>Person2's bid ${money}</h2> 
    <button onClick={handleIncrease}>Increase Money</button>
    </div>

  )
}

export default UpdatedComponent(Person2)
