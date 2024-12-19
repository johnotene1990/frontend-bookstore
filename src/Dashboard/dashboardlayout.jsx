import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'


function Dashboardlayout() {
  return (
    <div className='flex gap-4 flex-col md:flex-row bg-teal-50'>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default Dashboardlayout
