import React from "react";
import { useLoaderData } from "react-router-dom";

function Singlebook() {
  const {
    _id,
    bookTitle,
    imageUrl,
    description,
    authorName,
    category,
    bookPdfUrl,
    price,
  } = useLoaderData();
  return (
    <div className="bg-teal-200 pt-12 pb-48">
      <div className="mt-28 lg:mx-24 grid grid-cols-1 md:grid-cols-10 gap-4 mb-20 bg-white p-4 rounded">
        <div className="col-span-1 md:col-span-4">
          <img src={imageUrl} alt={bookTitle} className="h-48 md:h-96"/>
        </div>
        <div className="col-span-1 md:col-span-6">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-900"> {bookTitle} </h1>
          <h2 className="text-xl md:text-2xl font-bold text-teal-400"> {authorName} </h2>
          <h6 className="text-lg md:text-xl font-bold">{category}</h6>
          <p className="font-bold">{description}</p>
          <a href={bookPdfUrl} className="underline text-lg md:text-xl text-blue-700 font-semibold">
            Download PDF
          </a>
          <p className="text-xl md:text-2xl font-bold mt-6 bg-lime-500 p-2 w-32 rounded-lg text-gray-700">
            Price: ${price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Singlebook;

// import React from "react";
// import { useLoaderData } from "react-router-dom";

// function Singlebook() {
//   const { _id, bookTitle, imageUrl, description, authorName, category, bookPdfUrl, price } = useLoaderData();
//   return (
//   <div className="bg-teal-200 pt-12 pb-48">
//       <div className="mt-28 lg:mx-24 grid grid-cols-10 mb-20 bg-white p-4 rounded">
//       <div className="lg:col-span-4 lg:order-first md:col-span-10 md:order-last mb-4 col-span-10 order-last">
//         <img src={imageUrl} alt={bookTitle} className="h-96" />
//       </div>
//       <div className="lg:col-span-6 md:col-span-10 col-10 mb-8">
//         <h1 className="text-4xl font-bold text-blue-900">{bookTitle}</h1>
//          <h2 className="text-2xl font-bold text-teal-400">{authorName}</h2>
//         <h6 className="text-xl font-bold">{category}</h6>
//         <p className="font-bold">{description}</p>
//         <a href={bookPdfUrl} className="underline text-xl text-blue-700 font-semibold ">Download PDF</a>
//         <p className="text-2xl font-bold mt-6 bg-lime-500 p-2 w-32 rounded-lg text-gray-700 ">Price: ${price}</p>
//       </div>
//     </div>
//   </div>
//   );
// }

// export default Singlebook;
