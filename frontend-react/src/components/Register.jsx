import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Register=()=> {
    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errors,setError] = useState({})
    const [successes,setSuccess] =useState(false)
    const [loading,setLoading] = useState(false)

    const handleRegisterForm = async (e) =>{
        e.preventDefault()
        setLoading(true)

        const userData = {
            username,email,password
        }
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/v1/register/',userData)
            console.log("respnse.data ==>",response.data)
            console.log("Registration Successful!")
            setError({})
            setSuccess(true)
        }
        catch(error){
            setError(error.response.data)
            console.log("Registration Failed! ",error.response.data)
        }
        finally{
            setLoading(false)
        }
    }
  return (
    <div className="container ">
        <div className="row justify-content-center ">
            <div className="col-md-6 bg-content">
                <h2 className="text-light mb-4 p-4 text-center"> Register Your Profile </h2>
                <form onSubmit={handleRegisterForm}>
                    <div className='mb-3'>
                    <input type="text" placeholder='Enter username' className='form-control mb-4' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <small>{errors.username&& <div className='text-danger' > {errors.username} </div>}</small>

                    </div>
                    <div className='mb-3'>
                    <input type="email" placeholder='Enter email' className='form-control mb-4' value={email} onChange={(e) =>setEmail (e.target.value)}/>
                    </div>

                    <div>
                    <input type="password" placeholder='Enter password' className='form-control mb-4' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <small>{errors.password&& <div className='text-danger' > {errors.password} </div>}</small>

                    </div>
                    <small>{successes && <div className='alert alert-success'> Registration Successful </div>} </small>
                    { loading ? (
                        <button type="Submit" className='btn btn-info mb-4 d-block mx-auto' disabled> <FontAwesomeIcon icon={faSpinner} spin /> Please Wait... </button>
                    ) : (
                        <button type="Submit" className='btn btn-info mb-4 d-block mx-auto'> Register </button>
                    )}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register