import React from 'react'
import Button from './Button'
const Header = () => {
  return (
    <>
      
      <nav className='navbar container align-items-start pt-2 pb-2' >
        <a href="/" className='nav-brand text-light decoration-none'>Predicta</a>


        <div>
          <Button text='Login' class="btn btn-outline-info "/>
          &nbsp;
          <Button text='Register' class="btn btn-info " />

        </div>
      </nav>
    </>
  )
}

export default Header