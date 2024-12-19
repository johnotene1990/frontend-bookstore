import React from 'react'
import BannerCard from '../Home/BannerCard'

function Banner() {
  return (
    <div className='px-4 lg:px-24 bg-green-400 flex items-center'>
      <div className='flex flex-col md:flex-row justify-between w-full items-center gap-12 py-40'>
        {/* left side */}
        <div className='md:w-1/2 h-full'> 
           <h2 className='text-4xl text-black font-bold leading-snug'>Buy and sell your books</h2>
           <p className='md:w-4/5'>WebBook Exchange is a premier bookstore dedicated to the buying and selling of websites. Our mission is to provide a seamless and professional platform for individuals and businesses to acquire or sell high-quality websites. Whether you're looking to purchase a new online venture or sell your existing website, 
           WebBook Exchange offers a comprehensive and user-friendly experience.</p>
            <div className='my-3'>
              <input type='search' placeholder='Search for a book' name='search' id='search'
              className='py-2 px-2 rounded-s-none outline-none'/>
              <button className='bg-blue-700 text-white py-2 px-4 rounded-s-none hover:bg-black transition-all ease-in duration-200'>Search</button>
            </div>
        </div>
        {/* right side */}
        <div>
          <BannerCard/>
        </div>
       
      </div>
    </div>
  )
}

export default Banner
