import React, { useContext, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'
import { AuthContext } from './AuthProvider'

const Login=()=> {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const navigate =useNavigate()
  const [error,setError] = useState('')
  const {Loggedin,setLoggedin} = useContext(AuthContext)


  const handleLogin =  async (e)=>{
    e.preventDefault()
    setLoading(true)

    const userData = {username,password}
    console.log("userData==>",userData)
    
    try{
      const response = await axios.post("http://127.0.0.1:8000/api/v1/token/",userData)
      localStorage.setItem('accessToken',response.data.access)
      localStorage.setItem('refreshToken',response.data.access)
      console.log("Login Successfull")
      setLoggedin(true)
      navigate('/')
    }catch(error){
        console.log("Invalid Credential")
        setError('Invalid Credential')
    }finally{
      setLoading(false)

    }
  }
  return (
    <div className="container ">
        <div className="row justify-content-center ">
            <div className="col-md-6 bg-content">
                <h2 className="text-light mb-4 p-4 text-center"> Log In </h2>
                <form onSubmit={handleLogin}>
                    <div className='mb-3'>
                    <input type="text" placeholder='Enter username' className='form-control mb-4' value={username} onChange={(e)=>setUsername(e.target.value)}/>

                    </div>
                    

                    <div>
                    <input type="password" placeholder='Enter password' className='form-control mb-4' value={password} onChange={(e)=>setPassword(e.target.value)}/>

                    </div>
                    {error && <div className='text-danger'>{error}</div>}
                    
                    { loading ? (
                        <button type="Submit" className='btn btn-info mb-4 d-block mx-auto' disabled> <FontAwesomeIcon icon={faSpinner} spin /> Please Wait... </button>
                    ) : (
                        <button type="Submit" className='btn btn-info mb-4 d-block mx-auto'> Login </button>
                    )}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login