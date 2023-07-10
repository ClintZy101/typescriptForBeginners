import React from 'react'
import { Name } from '../types/types'

type PersonsListProps = {
    names: Name[]
}

export const PersonList = (props: PersonsListProps) => {
    return (
        <div>
            {
                props.names.map((name, index) => {
                    return (
                        <h2 key={index}>
                            {name.firstName} {name.lastName}
                        </h2>
                    )
                })
            }
        </div>
    )
}
