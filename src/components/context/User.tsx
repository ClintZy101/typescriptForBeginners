import React, { useContext } from 'react'
import { UserContext } from './UserContext'

type UserDataType = {
    name: string
    email: string
}

export const User = ({name, email}: UserDataType) => {
    const userContext = useContext(UserContext)

    const handleLogin = () => { 
        if(userContext){
            userContext.setUser({
                name: name,
                email: email
            })
        }
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
