import React from 'react'
import { User } from './User'
import { WithLoader } from './withLoader'


export const UserWIthLoader = () => {

    const userWithLoaderComp = WithLoader(User)

    return (
        <div>
            <userWithLoaderComp />
        </div>
    )
}
