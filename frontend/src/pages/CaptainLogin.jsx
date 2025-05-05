import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CaptainLogin = () => {
    
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       const [captainData, setCaptainData] = useState({});
    
       const submitHandler = (e) => {
            e.preventDefault();
            setCaptainData({
                email: email,
                password: password
            });
            console.log(captainData);
            setEmail('');
            setPassword('');
       }
    
      return (
        <div className='p-7 h-screen flex flex-col justify-between'>
          <div>
            <img className='w-16 mb-10' src='https://pngimg.com/d/uber_PNG24.png' alt=''></img>
    
            <form onSubmit = {(e)=> {
                submitHandler(e)
            }}>
              <h3 className='text-lg font-semibold mt-12 mb-2'>What's your email</h3>
              <input 
                required
                value={email}
                onChange={(e) =>{
                     setEmail(e.target.value)
                }}
                className='bg-[#eeeeee] mb-7 rounded border-none w-full px-3 py-2 placeholder:text-base' 
                type='email'
                placeholder='email@example.com'
                />
        
              <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
    
              <input
                required
                value={password}
                onChange={(e) =>{
                     setPassword(e.target.value)
                }}
                className='bg-[#eeeeee] mb-7 rounded border-none w-full px-3 py-2'
                type ="password" 
                placeholder='password'
                />
    
        <button className='bg-[#111] text-white font-medium mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
        Login</button>
      </form>
        <p className='text-center text-sm'>Join a Fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
    
          </div>
          <div>
       <Link to='/signup'
         className='bg-[#d5622d] flex items-center justify-center text-white font-medium mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
          >Sign up as User</Link>

<p className='text-[10px] leading-tight text-gray-500'>

        This site is protected by reCAPTCHA and the  <span className= 'underline'>Google Terms and Policy</span>
        and <span className='underline'>Terms of Service apply.</span></p>
          </div>
        </div>
  )
}

export default CaptainLogin;