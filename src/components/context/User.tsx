import React, { useContext } from 'react'
import { UserDataType } from '../../types/types'
import { UserContext } from './UserContext'



export const User = ({name, email}: UserDataType) => {
    const userContext = useContext(UserContext)

    const handleLogin = () => { 
        userContext &&  userContext.setUser({
                name: name,
                email: email
            })
    }

    const handleLogout = () => {
        if(userContext) {
            userContext.setUser(null)
        }
     }
     
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>UserName is {userContext?.user?.name}</div>
            <div>User Email i {userContext?.user?.email}</div>
        </div>
    )
}
