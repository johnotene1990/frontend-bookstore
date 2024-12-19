import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contexts/Authprovider'

function Logout() {
    const {logout} = useContext(AuthContext)

    const handleLogout = async () => {
      await logout()
      window.location.href = '/';
    }

  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
      <button onClick={handleLogout} className='bg-red-700 rounded text-white px-4 py-2'>Logout</button>
      <p>Are you sure you want to logout?</p>
    </div>
  )
}

export default Logout
