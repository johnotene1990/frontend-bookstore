import React, { useEffect, useState } from "react";
// import {FaMagnifyingGlass } from 'react-icons/fa';
import Bookgirl from "../assets/bookimages/bookgirl.jpg";

function Dashboard() {
  const [books, setBooks]= useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/all-books')
    .then(res => res.json())
    .then(data=>setBooks(data.slice(0, 8)))
    .catch(err=>console.log(err))
  },[])

  return (
    <div className="bg-teal-50 h-full p-10">
      <div className="grid grid-cols-12 gap-8 m-10">
        <div className="col-span-6">
          <h1 className="font-bold text-blue-900 text-2xl">
            Welcome To Bookstore Dashboard
          </h1>
          <p className="font-semibold">
            Manage your books, authors, and orders here.
          </p>
        </div>
        {/* Search bar */}
        <div className="col-span-4">
          {/* <input type="search" placeholder="Search book..." className='rounded-lg w-full' />
         <FaMagnifyingGlass /> */}

          <form className="max-w-md mx-auto">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border
               border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
               dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search book.."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700
               hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                {" "}
                Search{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8 m-10 bg-white p-10">
        <div className="col-span-6">
          <h2 className="font-semibold text-2xl mb-2 text-blue-900">Upload your book to increase your sales</h2>
          <p className="font-bold">
            Engage your shop book with this dashboard and make sales everyday to
            your shop
          </p>
          <button className="bg-blue-800 p-2 rounded-3xl mt-2  text-white ">+ Add New Book</button>
        </div>
        <div className="col-span-6">
          <img src={Bookgirl} alt="" className="w-2/3 h-56 rounded-md" />
        </div>
      </div>
      <div>
        <h1 className="font-bold text-3xl text-blue-800 mb-8 mt-10">POPULAR BOOKS NOW 🔥</h1>
        <div className="grid grid-cols-12 gap-5">
            {books.map(book=>(
              <div key={book._id} className="col-span-3">
                <img src={book.imageUrl} alt='' className="w-56 h-56 rounded-md" />
                <div>
                  <h3 className="text-sm font-semibold">{book.bookTitle}</h3>
                  <p className="text-xs ">{book.authorName}</p>
                </div>
              </div>
              
            ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
