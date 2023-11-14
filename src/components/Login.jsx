import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

const Login = () => {

    const [obj, setObj] = useState({email:"", password:""})
    const [credentials, setCredentials] = useState({});


    useEffect(() => {
        setCredentials(JSON.parse(localStorage.getItem("todo")))
    }, [])
    
    

    const handleChange = (e) =>{
       setObj({...obj,[e.target.name]:e.target.value})
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        if(obj.email === credentials.email){
        if(obj.password === credentials.password){
         alert("Login Successfully")
        }else{
            alert("Wrong Credentials")
         
        }
        }else{
            alert("Wrong Credentials")
        }



    }
    
    return (
    <div className='w-full h-screen flex items-center justify-center bg-blue-400'>
    <div className='bg-white w-[400px] p-8'>
    <h1 className='text-2xl font-semibold text-center mb-4'>Login</h1>

    <form action="">
     <label htmlFor="">email</label>
     <input type="email" name="email" id="email" value= {obj.email} onChange={handleChange} className='mb-4 w-full border py-2 px-3 focus:outline-none focus:border-blue-400' />

     <label htmlFor="password">password</label>
     <input type="password" name="password" id="password" value = {obj.password} 
     onChange={handleChange} className='mb-4 w-full border focus:outline-none py-2 px-3 focus:border-blue-400'  />

     <button type="submit" onClick={handleClick} className='w-full bg-blue-500 text-white hover:bg-blue-600 py-2 px-4'>Login</button>
     
    
    
    </form>
    <p>Don't have an account? <Link to={'/signup'}>Signup</Link></p>


    </div>
      
    </div>
  )
}

export default Login
