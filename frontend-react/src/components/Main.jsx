import React from 'react'
import Button from './Button'
const Main = () => {
  return (
    <div className='container text-center'>
      <div className='bg-content pt-5 pb-5 rounded'>
        <h1 className='text-light'> Predicta </h1>
        <p className='text-light'>Predicta is a cutting-edge stock prediction web application that leverages 
          artificial intelligence and machine learning to help investors make informed 
          decisions in the stock market.
        </p>
        <Button text='Login' class="btn btn-outline-warning "/>
      </div>
      
    </div>
  )
}

export default Main