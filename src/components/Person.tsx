import React from 'react'
type PersonProps = {
    name:{
        firstName: string
        lastName: string
    }
}

export const Person = ({name}: PersonProps) => {
  return (
    <div>
        <h2>
            {name.firstName} {name.lastName}
        </h2>
    </div>
  )
}
