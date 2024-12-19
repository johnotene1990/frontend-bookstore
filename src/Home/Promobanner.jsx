import React from 'react'
import { Link } from 'react-router-dom'
import Award from '../assets/bookimages/Awardimage.jpg'

function Promobanner() {
  return (
    <div className='mt-16 py-12 bg-teal-100 px-4 lg:px-24'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
        <div className='md:w-1/2'>
            <h2 className='text-4xl font-bold mb-6 leading-snug text-black'>2024 National Book Award 
            for Fiction Shortlist</h2>
            <Link to={'/shop'} className='block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-blue-950 transition-all duration-300'>
            Get Promo</button></Link>
        </div>
        <div>
          <img className='w-96 mt-6 rounded-lg' src={Award} alt='Award' />
        </div>
      </div>
    </div>
  )
}

export default Promobanner
