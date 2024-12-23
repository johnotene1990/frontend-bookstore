import { Outlet } from 'react-router-dom'
import Navbar from './component/navbar'
import './App.css'
import Myfooter from './component/footer'
import React, { useEffect } from 'react';


function App() {
   useEffect(() => {
     console.log('https://backend-bookstore-lbml.onrender.com/:', import.meta.env.VITE_API_URL);
     // Example fetch request
    fetch(`${import.meta.env.VITE_API_URL}/api/books`)
       .then((response) => response.json())
       .then((data) => console.log(data))
     .catch((error) => console.error('Error fetching data:', error));
   }, []);
 

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
