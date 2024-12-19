import React, { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useLoaderData, useParams } from "react-router-dom";

function Editbook() {
  const { id } = useParams();
  const loaderData = useLoaderData();
  const bookCategory = [
    "Science",
    "Fiction",
    "Non-Fiction",
    "Children's Books",
    "Biographies",
    "Magazines",
    "History",
    "Parenting",
    "Family",
    "Research",
    "Fantasy",
    "Sci-Fi",
    "Horror",
    "Programming",
    "Mystery & Thriller",
    "Romance",
    "Cooking & Baking",
    "Reference",
    "Business & Finance",
    "Language & Culture",
    "Health & Fitness",
    "Cookbooks & Recipes",
    "Travel & Adventure",
    "Education & Teaching",
    "Art & Crafts",
    "Sports & Outdoors",
    "Religion & Spirituality",
    "Science & Technology",
    "History & Geography",
    "Family & Relationships",
    "Self-Help & Mindfulness",
  ];

  const [formData, setFormData] = useState({
    bookTitle: loaderData.bookTitle,
    authorName: loaderData.authorName,
    imageUrl: loaderData.imageUrl,
    category: loaderData.category,
    description: loaderData.description,
    bookPdfUrl: loaderData.bookPdfUrl,
    price: loaderData.price,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/book/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Book updated successfully");
        window.location.href = "/admin/dashboard/manage";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="px-4 my-12">
      <h1 className="mb-8 text-3xl font-bold text-blue-950">
        Update This Book Data
      </h1>

      <form
        onSubmit={handleUpdate}
        className="flex lg:w-[1100px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              type="text"
              name="bookTitle"
              placeholder="Book Name"
              required
              shadow
              value={formData.bookTitle}
              onChange={handleInputChange}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              type="text"
              name="authorName"
              placeholder="Author Name"
              required
              shadow
              value={formData.authorName}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* second row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Image URL" />
            </div>
            <TextInput
              id="imageUrl"
              type="text"
              name="imageUrl"
              placeholder="Book Image URL"
              required
              shadow
              value={formData.imageUrl}
              onChange={handleInputChange}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              className="w-full rounded"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              shadow
              required
            >
              <option>Select Category</option>
              {bookCategory.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* third row */}
        <div className="lg:w-full">
          <div className="mb-2 block">
            <Label htmlFor="description" value="Book Description" />
          </div>
          <Textarea
            id="description"
            type="text"
            name="description"
            placeholder="Write Your Book Description here"
            required
            shadow
            rows={5}
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>

        {/* fourth row */}
        <div className="gap-8 flex">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
            </div>
            <TextInput
              id="bookPdfUrl"
              type="text"
              name="bookPdfUrl"
              placeholder="Book PDF URL"
              required
              shadow
              value={formData.bookPdfUrl}
              onChange={handleInputChange}
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookPrice" value="Price" />
            </div>
            <TextInput
              id="bookPrice"
              type="text"
              name="price"
              placeholder="Book Price"
              required
              shadow
              value={formData.price}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">
            I agree with the terms and conditions
          </Label>
        </div>
        <Button type="submit">Update Book</Button>
      </form>
    </div>
  );
}

export default Editbook;
