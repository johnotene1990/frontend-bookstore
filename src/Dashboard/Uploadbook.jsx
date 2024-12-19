import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";

function Uploadbook() {
  const bookCategory = [
    "Science",
    "Fiction",
    "Non-Fiction",
    "Children's Books",
    "Biographics",
    "Magazines",
    "History",
    "Parenting",
    "family",
    "Research",
    "Fantasy",
    "sci-Fi",
    "Horror",
    "programming",
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
    "Cookbooks & Recipes",
    "Travel & Adventure",
    "Education & Teaching",
    "Art & Crafts",
    "Sports & Outdoors",
    "Religion & Spirituality",
    "Science & Technology",
  ];
  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategory[0]
  );
  const handleCategoryChange = (e) => {
    //console.log(event.target.value)
    setSelectedBookCategory(e.target.value);
  };
  const handleBookSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookTitle = form.bookTitle.value;
    // console.log(bookTitle)
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.categoryName.value;
    const description = form.description.value;
    const bookPdfUrl = form.bookPdfUrl.value;
    const bookObjt = {
      bookTitle,
      authorName,
      imageUrl,
      category,
      description,
      bookPdfUrl,
    };
    console.log(bookObjt);

    // second option for submiting books
    // const newBook={
    //     title:e.target.bookTitle.value,
    //     author:e.target.authorName.value,
    //     imageUrl:e.target.imageUrl.value,
    //     category:e.selectedBookCategory,
    //     description:e.target.description.value,
    //     bookPdfUrl:e.target.bookPdfUrl.value
    // }
    // console.log(newBook);

    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObjt),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((data) => {
        alert("Book uploaded successfully!");
        form.reset();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="px-4 my-12">
      <h1 className="mb-8 text-3xl font-bold text-blue-950">
        Upload a New Book
      </h1>

      <form
        onSubmit={handleBookSubmit}
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
            />
          </div>
        </div>

        {/* second row */}

        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="imageUrl" />
            </div>
            <TextInput
              id="imageUrl"
              type="text"
              name="imageUrl"
              placeholder="Book imageUrl"
              required
              shadow
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              className="w-full rounded"
              name="categoryName"
              value={selectedBookCategory}
              onChange={handleCategoryChange}
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
          />
        </div>
        {/* fouth row */}
        <div className="gap-8 flex">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookPdfUrl" value="bookPdfUrl" />
            </div>
            <TextInput
              id="bookPdfUrl"
              type="text"
              name="bookPdfUrl"
              placeholder="book Pdf Url"
              required
              shadow
              rows={5}
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
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">
            I agree with the terms and conditions
          </Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default Uploadbook;
