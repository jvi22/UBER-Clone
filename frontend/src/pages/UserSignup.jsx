import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName:{
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    });
    
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        <img 
          className='w-16 mb-8' 
          src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' 
          alt='Uber Logo'
          loading='eager'
        />

        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-semibold mb-2'>What's your name</h3>
          <div className='flex gap-2 mb-7'>
            <input 
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-sm'
              type="text"
              placeholder='First name'
            />
            <input 
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 text-base placeholder:text-sm'
              type="text"
              placeholder='Last name'
            />
          </div>

          <h3 className='text-lg font-semibold mb-2'>What's your email</h3>
          <input 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded w-full px-4 py-2 text-base placeholder:text-sm' 
            type='email'
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-semibold mb-2'>Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] mb-2 rounded w-full px-4 py-2 text-base placeholder:text-sm'
            type="password" 
            placeholder='password'
          />

          <div className='border-t border-gray-300 my-4'></div>

          <button 
            type='submit'
            className='bg-[#111] text-white font-normal mb-2 rounded px-4 py-3 w-full text-l'
          >
            Create Account
          </button>
        </form>
        <p className='text-center text-sm'>Already have an account? <Link to='/login' className='text-blue-600'>Login</Link></p>
      </div>
       <p className='text-[10px] leading-tight text-gray-500'>
        By proceeding, you consent to get WhatsApp or SMS messages, includinh by automated means, 
        from Uber and its affiliates to the number provided.
       </p>
    </div>
  );
};

export default UserSignup;