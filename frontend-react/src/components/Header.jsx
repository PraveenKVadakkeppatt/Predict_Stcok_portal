import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      
      <nav className='navbar container align-items-start pt-2 pb-2' >
        <Link to='/' className='nav-brand text-light decoration-none'>Predicta</Link>


        <div>
          <Button text='Login' class="btn btn-outline-info " url="/login" />
          &nbsp;
          <Button text='Register' class="btn btn-info " url="/register" />
          
        </div>
      </nav>
    </>
  )
}

export default Header