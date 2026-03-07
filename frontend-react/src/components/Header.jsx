import React, { useContext } from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { AuthContext } from './AuthProvider'
const Header = () => {
  const{Loggedin,setLoggedin} = useContext(AuthContext)
  const handleLogout=()=>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setLoggedin(false)
    Navigate('/login')
  }
  return (
    <>
      
      <nav className='navbar container align-items-start pt-2 pb-2' >
        <Link to='/' className='nav-brand text-light decoration-none'>Predicta</Link>

        {Loggedin?(
          <button class="btn btn-success " onClick={handleLogout}> Logout </button>
        ):(
          <>
            <div>
              <Button text='Login' class="btn btn-outline-info " url="/login" />
                &nbsp;
              <Button text='Register' class="btn btn-info " url="/register" />
            </div>
          </>
        )}
        
      </nav>
    </>
  )
}

export default Header