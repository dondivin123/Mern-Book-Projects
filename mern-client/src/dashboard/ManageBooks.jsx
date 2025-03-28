import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";


const ManageBooks = () => {
  // const [allBooks, setAllBooks] = useState([]);
  // useEffect( () => {
  //   fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setAllBooks(data));
  // }, [])

  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/all-books");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAllBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  // delete a books
  // const handleDelete = (id) =>{
  //   console.log(id);
  //   fetch(`http://localhost:5000/book/${id}`, {
  //     method: "DELETE"
  //   }).then(res => res.json()).then(data => {
  //     alert("Book is deleted successfully") 
  //     // setAllBooks(data);
  //   })
  // }

  const handleDelete = (id) => {
    console.log("Deleting book with ID:", id);
    
    fetch(`http://localhost:5000/book/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to delete book");
        }
        return res.json();
      })
      .then(() => {
        alert("Book is deleted successfully");
        
        setAllBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting book:", error);
        alert("Failed to delete the book!");
      });
  };
  
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>

      {/* table for book data */}
      <Table className="lg:w-[1110px]">
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {
          allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {index + 1}
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {book.bookTitle}
            </Table.Cell>
            <Table.Cell>{book.authorName}</Table.Cell>
            <Table.Cell>{book.category}</Table.Cell>
            <Table.Cell> $10.00 </Table.Cell>
            <Table.Cell>
              <Link to={`/admin/dashboard/edit-books/${book._id}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                Edit
              </Link>
              <button onClick={() => handleDelete(book._id)} className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm 
              hover:bg-sky-600" >Delete</button>
            </Table.Cell>
          </Table.Row>
          </Table.Body>)
        }
      </Table>
    </div>
  )
}

export default ManageBooks