import React, { useContext } from 'react'
import { FamilyContext } from './FamilyNamesContext'

export default function Family() {
    const familyMembers = useContext(FamilyContext)


  return (
    <div>
        Family:
    {familyMembers.map(name => (
        <div>
            <span>{name.firstName}</span>
            <span>{name.lastName}</span>
            
        </div>
    ))}
    </div>
  )
}
