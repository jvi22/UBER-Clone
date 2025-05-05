import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='h-screen w-full pt-8 flex justify-between flex-col bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1563282058-c9163e4ab24c?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]'>
      
      <link rel="preload" href="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" as="image" />
      <link rel="preload" href="https://images.unsplash.com/photo-1563282058-c9163e4ab24c?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" as="image" />
      
      <img 
        className='w-16 ml-8' 
        src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' 
        alt=''
        fetchPriority="high"
      />
      
      <div className='bg-white pb-7 py-4 px-4'>
        <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
        <Link 
          to='/login' 
          className='flex items-center justify-center w-full bg-black text-white py-3 text-xl rounded mt-5'
        >
          Continue
        </Link>
      </div>
    </div>
  )
}

export default Home;