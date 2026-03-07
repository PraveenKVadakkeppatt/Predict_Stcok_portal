import React, { createContext, useState } from 'react'

const AuthContext = createContext();

const AuthProvider=({children}) => {

    const [Loggedin,setLoggedin] = useState(
        !!localStorage.getItem('accessToken')
    )

  return (
    <AuthContext.Provider value={{Loggedin,setLoggedin}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext};