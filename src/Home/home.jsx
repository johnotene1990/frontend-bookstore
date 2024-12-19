import React from 'react'
import Banner from '../component/banner'
import BestSellingbook from './BestSellingbook'
import Favouitebooks from './Favouitebooks'
import Promobanner from './Promobanner'
import Otherbooks from './Otherbooks'
import Review from './review'


function Home() {
  return (
    <div>
      <Banner/>
      <BestSellingbook/>
      <Favouitebooks/>
      <Promobanner/>
      <Otherbooks/>
      <Review/>
    </div>
  )
}

export default Home
