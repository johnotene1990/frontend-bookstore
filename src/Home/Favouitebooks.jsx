import React from 'react'
import Favimage from '../assets/bookimages/Favimage.png'
import { Link } from 'react-router-dom'

function Favouitebooks() {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col sm:flex-row justify-between items-center gap-12'>
      <div className='md:w-1/2 h-full'>
        <img src={Favimage} alt='Favoriteimage' className='rounded md:w-10/12 h-96'/>
      </div>

      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-4xl font-bold my-5 md:w-3/5 leading-snug'>Find Your Favorite <span className='text-blue-700'>Book Here</span></h2>
        <p className='text-xl mb-10 md:w-5/6'>Some of my favorite books from the past few years, who is djeg come noe go peace 
            sfro bbire sed vale fells id diam swpet shnak mattie kadomm . djdjdkssh smjens ajddms kkjdhem ldjehems kiewi
            andjehekskd msie s apqkama dkfjgog djmdhye nd fmfkirhe dskcndgsdd fkfhrmne sjehe e jdsfjrefmd ksmsmsnbhs skuhj
            kejehdkdhfd sjmshsmnfjjms kj msns lkjhdmnd.
        </p>
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 mmy-14'>
            <div>
                <h3 className='text-3xl font-bold'>800+</h3>
                <h3 className='text-base'>Books Listing</h3>
            </div>
            <div>
                <h3 className='text-3xl font-bold'>550+</h3>
                <p className='text-base'>Register Users</p>
            </div>
            <div>
                <h3 className='text-3xl font-bold'>1200+</h3>
                <p className='text-base'>PDF Downloads</p>
            </div>
        </div>
        <Link to={'/shop'} className='mt-12 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-blue-950 transition-all duration-300'>Explore More</button></Link>
      </div>
    </div>
  )
}

export default Favouitebooks
