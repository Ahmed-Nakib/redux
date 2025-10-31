import React, { useEffect, useState } from "react";
import { nanoid } from 'nanoid'
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "../features/bookSlice";

const BookForm = ({onBookToEdit, onCancel}) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
  });

  const dispatch = useDispatch()

  useEffect(() => {
    if(onBookToEdit){
      setBook(onBookToEdit)
    }
  }, [onBookToEdit])

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(onBookToEdit){
      dispatch(updateBook(book))
    }else{
       dispatch(addBook({...book, id:nanoid()}));
    }
    setBook({
          title: "",
          author: "",
          price: "",
          quantity: "",
    })
  };

  return (
    <div className="bg-gradient-to-right from-gray-50 to-gray-100 flex items-center justify-center py-12 px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-gray-100"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          📖 Add New Book
        </h2>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            placeholder="Book Title"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />

          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            placeholder="Author Name"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />

          <input
            type="number"
            name="price"
            value={book.price}
            onChange={handleChange}
            placeholder="Book Price"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />

          <input
            type="number"
            name="quantity"
            value={book.quantity}
            onChange={handleChange}
            placeholder="Quantity"
            className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-all duration-300"
          >
            {onBookToEdit ? "Update Book" : "Add Book"}
          </button>
          
          {onBookToEdit 
          && 
          <button
            onClick={onCancel}
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-all duration-300"
          >
           Cancel
          </button>
          }


        </div>
      </form>
    </div>
  );
};

export default BookForm;
