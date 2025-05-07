import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {

  const navigate = useNavigate()

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')

  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')


  const { captain, setCaptain } = React.useContext(CaptainDataContext)


  const submitHandler = async (e) => {
    e.preventDefault()
    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

    if (response.status === 201) {
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')

  }
  return (
    <div className='py-4 px-6 h-screen flex flex-col justify-between'>
      <div>
        <img className='w-13 mb-2' src="https://pngimg.com/d/uber_PNG24.png" alt="" />

        <form onSubmit={(e) => {
          submitHandler(e)
        }}>

          <h3 className='text-l w-full  font-medium mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-5'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 text-l placeholder:text-base'
              type="text"
              placeholder='First name'
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2  rounded-lg px-4 py-2 text-l placeholder:text-base'
              type="text"
              placeholder='Last name'
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value)
              }}
            />
          </div>

          <h3 className='text-l font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-5 rounded-lg px-4 py-2 w-full text-l placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-l font-medium mb-2'>Enter Password</h3>

          <input
  className='bg-[#eeeeee] mb-4 rounded-md px-3 py-2 w-full text-sm placeholder:text-sm'
  value={password}
  onChange={(e) => {
    setPassword(e.target.value)
  }}
  required
  type="password"
  placeholder='Password'
/>

<h3 className='text-base font-medium mb-2'>Vehicle Information</h3>

<div className='flex gap-3 mb-3'>
  <input
    required
    className='bg-[#eeeeee] w-1/2 rounded-md px-3 py-2 text-sm placeholder:text-sm'
    type="text"
    placeholder='Vehicle Color'
    value={vehicleColor}
    onChange={(e) => {
      setVehicleColor(e.target.value)
    }}
  />
  <input
    required
    className='bg-[#eeeeee] w-1/2 rounded-md px-3 py-2 text-sm placeholder:text-sm'
    type="text"
    placeholder='Vehicle Plate'
    value={vehiclePlate}
    onChange={(e) => {
      setVehiclePlate(e.target.value)
    }}
  />
</div>

<div className='flex gap-3 mb-5'>
  <input
    required
    className='bg-[#eeeeee] w-1/2 rounded-md px-3 py-2 text-sm placeholder:text-sm'
    type="number"
    placeholder='Capacity'
    value={vehicleCapacity}
    onChange={(e) => {
      setVehicleCapacity(e.target.value)
    }}
  />
  <select
    required
    className='bg-gray-100 w-1/2 rounded-md px-3 py-2 text-sm text-gray-800 border-none focus:ring-2 focus:ring-blue-500 focus:outline-none'
    value={vehicleType}
    onChange={(e) => setVehicleType(e.target.value)}
  >
    <option value="" disabled className='text-gray-400'>Type</option>
    <option value="car" className='hover:bg-gray-200'>Car</option>
    <option value="auto" className='hover:bg-gray-200'>Auto</option>
    <option value="moto" className='hover:bg-gray-200'>Moto</option>
  </select>
</div>

          <div className='border-t border-gray-300 my-2'></div>

          <button
            className='bg-[#111] text-white mb-1 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Create Account</button>

        </form>
        <p className='text-center'>Already have a account? <Link to='/captain-login' className='text-blue-600'>Login here</Link></p>
      </div>
      <div>
        <p className='text-[10px] text-gray-500 mt-6 leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
          Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
      </div>
    </div>
  )
}

export default CaptainSignup;





