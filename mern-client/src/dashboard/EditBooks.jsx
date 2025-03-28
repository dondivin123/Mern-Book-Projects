import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";

const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageURL, bookDescription, bookPDFURL} = useLoaderData();


  const bookCategories = [
      "Fiction",
      "Non-Fiction",
      "Mystery",
      "Programming",
      "Science Fiction",
      "Fantasy",
      "Horror",
      "Bibliography",
      "Autobiography",
      "History",
      "Self-help",
      "Memoir",
      "Business",
      "Children Books",
      "Travel",
      "Religion",
      "Art and Design"
    ]
  
    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
  
    const handleChangeSelectedValue = (event) => {
      console.log(event.target.value);
      setSelectedBookCategory(event.target.value);
    }
  
    //handle book submission
    const handleUpdate = (event) => {
      event.preventDefault();
      const form = event.target;
  
      const bookTitle = form.bookTitle.value
      const authorName = form.authorName.value
      const imageURL = form.imageURL.value
      const category = form.categoryName.value
      const bookDescription = form.bookDescription.value
      const bookPDFuRL = form.bookPDFuRL.value
  
      const updateBookObj = {
        bookTitle, authorName, imageURL, category, bookDescription, bookPDFuRL
      }
      // console.log(bookObj)
      // update book data
      fetch(`http://localhost:5000/book/${id}`, {
        method:"PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updateBookObj)
      }).then(res => res.json()).then(data => {
        // console.log(data)
        alert("Book is updated successfully!!!")
      })
    }
    return (
      <div className='px-4 my-12 '>
          <h2 className='mb-8 text-3xl font-bold'>Updata the book date</h2>
  
          <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
              <div className='flex gap-8'>
              <div className='lg:w-1/2'>
              <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
           </div>
          <TextInput id="bookTitle" name="bookTitle" type="text" defaultValue={bookTitle} placeholder="Book name" required />
        </div>
        {/* authorName */}
        <div className='lg:w-1/2'>
              <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
           </div>
          <TextInput id="authorName" name="authorName" type="text" defaultValue={authorName} placeholder="Author Name" required />
        </div>
              </div>
  
              {/* 2nd Row */}
              <div className='flex gap-8'>
              <div className='lg:w-1/2'>
              <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book image URL" />
           </div>
          <TextInput id="imageURL" name="imageURL" type="text" defaultValue={imageURL} placeholder="Book image URL" required />
        </div>
  
        {/* category */}
        <div className='lg:w-1/2'>
              <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
           </div>
  
           <select name="categoryName" id="inputState" className='w-full rounded border border-gray-300 p-2 text-gray-900 focus:ring focus:ring-blue-500' value={selectedBookCategory}
           onChange={handleChangeSelectedValue}>
            {
              bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
            }
           </select>
        </div>
              </div>
  
              {/* bookDescription */}
              <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description"/>
          </div>
          <Textarea id="bookDescription" name="bookDescription" placeholder="Write your book description..." required rows={6}
          defaultValue={bookDescription} className='w-full'/>
        </div>
        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFuRL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFuRL" name="bookPDFuRL" type="text" defaultValue={bookPDFURL} placeholder="book pdf url" required />
        </div>
  
        <Button type="submit" className='mt-5'>Update Book</Button>
      </form>
      </div>
    )
}

export default EditBooks