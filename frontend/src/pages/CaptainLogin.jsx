import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';


const CaptainLogin = () => {
    
       const [email, setEmail] = useState('');
       const [password, setPassword] = useState('');
       
       const { captain, setCaptain } = React.useContext(CaptainDataContext)
       const navigate = useNavigate()


       const submitHandler = async(e) => {
            e.preventDefault();
            const captain = {
                email: email,
                password
            };
            
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

            if (response.status === 200) {
                const data = response.data;

                setCaptain(data.captain);
                localStorage.setItem('token', data.token);
                navigate('/captain-home');
            
              }

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