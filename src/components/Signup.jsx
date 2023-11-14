import React,{useState} from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const [obj, setObj] = useState({name:"",email:"", password:""})

    

    const handleChange = (e) =>{
       setObj({...obj,[e.target.name]:e.target.value})
    }
    
    const handleClick = (e) => {
        e.preventDefault();
        localStorage.setItem("todo",JSON.stringify(obj))
         }

    
    return (
    <div className='w-full h-screen flex items-center justify-center bg-blue-400'>
    <div className='bg-white w-[400px] p-8'>
    <h1 className='text-2xl font-semibold text-center mb-4'>Signup</h1>

    <form action="">

    <label htmlFor="name">name</label>
    <input type="text" name="name" id="name" value = {obj.name} onChange={handleChange} className='mb-4 w-full py-2 px-3 border focus:outline-none focus:border-blue-400' />

     <label htmlFor="email">email</label>
     <input type="email" name="email" id="email" value= {obj.email} onChange={handleChange} className='mb-4 w-full border py-2 px-3 focus:outline-none focus:border-blue-400' />

     <label htmlFor="password">password </label>
     <input type="password" name="password" id="password" value = {obj.password} 
     onChange={handleChange} className='mb-4 w-full border focus:outline-none py-2 px-3 focus:border-blue-400'  />

     <button type="submit" onClick={handleClick} className='w-full bg-blue-500 text-white hover:bg-blue-600 py-2 px-4'>Signup</button>
     
    
    
    </form>
    <p>Already have an account? <Link to='/login'>Login</Link></p>


    </div>
      
    </div>
  )
}

export default Signup
