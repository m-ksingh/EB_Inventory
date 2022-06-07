import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../Utils/Auth'

const RequireAuth = ({children}) => {
    const auth = useAuth()

    if(!auth.user){
        return <Navigate to='/'
    //   state={{path: location.pathname}} 
       />
    }
  return children
}

export default RequireAuth