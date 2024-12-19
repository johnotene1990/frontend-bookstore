import { Outlet } from 'react-router-dom'
import Navbar from './component/navbar'
import './App.css'
import Myfooter from './component/footer'


function App() {
 

  return (
    <>
    <Navbar/>

      {/* <h1>welcome to my book collection</h1> */}
      <Outlet/>
      <Myfooter/>
    </>
  )
}

export default App
