import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { FaStar } from 'react-icons/fa6';
// import { Button } from "flowbite-react";
import { Avatar } from "flowbite-react";
import Avar from '../assets/bookimages/avatar1.jpg'
import Avart from '../assets/bookimages/avatar2.jpg'
import Avat from '../assets/bookimages/avatar3.jpg'
import { EffectCards, Autoplay } from 'swiper/modules';

function Review() {
  return (
    <div className='my-16 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customer</h2>
      <div>
      <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[ EffectCards,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                <div className='flex text-amber-500'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>                
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quos earum quo. Alias explicabo 
                        corporis dignissimos beatae ad modi nisi, possimus error fugit at ipsum! Tempora molestias 
                        aliquam iste asperiores?
                    </p>
                    <div className='flex gap-4'>
                    <Avatar img={Avar} alt="avatar of Jese" rounded className='w-10 mb-4'/>
                      <div>
                        <h5 className='text-lg font-medium'>James Pang</h5>
                        <p className='text-base'>CEO, KCV Company</p>
                      </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='flex text-amber-500'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>                
                </div >
                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi velit quae eveniet. Animi ducimus,
                         alias doloribus adipisci natus dolorum, iure eius debitis fuga ipsa deserunt soluta 
                        inventore laboriosam.
                    </p>
                    <div className='flex gap-4'>
                    <Avatar img={Avart} alt="avatar of Jese" rounded  className='w-10 mb-4'/>
                      <div>
                        <h5 className='text-lg font-medium'>Luckas Paul</h5>
                        <p className='text-base'>CEO, YNC Company</p>
                      </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='flex text-amber-500'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>                
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, cumque consequatur 
                        debitis nisi ratione minima ad facilis, possimus mollitia ex reprehenderit 
                        quod consectetur molestias harum quibusdam aperiam, natus.
                    </p>
                    <div className='flex gap-4'>
                    <Avatar img={Avat} alt="avatar of Jese" rounded className='w-10 mb-4' />
                      <div>
                        <h5 className='text-lg font-medium'>Mark Ping</h5>
                        <p className='text-base'>CEO, ABC Company</p>
                      </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='flex text-amber-500'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>                
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, cumque consequatur 
                        debitis nisi ratione minima ad facilis, possimus mollitia ex reprehenderit 
                        quod consectetur molestias harum quibusdam aperiam, natus.
                    </p>
                    <div className='flex gap-4'>
                    <Avatar img={Avart} alt="avatar of Jese" rounded className='w-10 mb-4' />
                      <div>
                        <h5 className='text-lg font-medium'>Mark Ping</h5>
                        <p className='text-base'>CEO, ABC Company</p>
                      </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='flex text-amber-500'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>                
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, cumque consequatur 
                        debitis nisi ratione minima ad facilis, possimus mollitia ex reprehenderit 
                        quod consectetur molestias harum quibusdam aperiam, natus.
                    </p>
                    <div className='flex gap-4'>
                    <Avatar img={Avat} alt="avatar of Jese" rounded className='w-10 mb-4' />
                      <div>
                        <h5 className='text-lg font-medium'>Mark Ping</h5>
                        <p className='text-base'>CEO, ABC Company</p>
                      </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='shadow-xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='flex text-amber-500'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>                
                </div>
                <div className='mt-7'>
                    <p className='mb-5'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, cumque consequatur 
                        debitis nisi ratione minima ad facilis, possimus mollitia ex reprehenderit 
                        quod consectetur molestias harum quibusdam aperiam, natus.
                    </p>
                    <div className='flex gap-4'>
                    <Avatar img={Avart} alt="avatar of Jese" rounded className='w-10 mb-4' />
                      <div>
                        <h5 className='text-lg font-medium'>Mark Ping</h5>
                        <p className='text-base'>CEO, ABC Company</p>
                      </div>
                    </div>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
      {/* <Button>Click me</Button> */}
    </div>
  )
}

export default Review
