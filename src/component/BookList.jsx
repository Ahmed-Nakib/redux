import React from "react";
import {  useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../features/bookSlice";

const BookList = ({onHandleEdit}) => {
  const { books } = useSelector((state) => state.bookR);
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteBook(id))
  }
  const handleEdit = (book) => {
    onHandleEdit(book);
  }

  return (
    <div className="min-h-screen bg-gradient-to-left from-gray-50 to-gray-100 flex flex-col items-center py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        📚 List of Books
      </h1>

      {books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {books.map((book) => (
            <div
              key={book.id}
              className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-2xl p-6 flex flex-col justify-between border border-gray-100"
            >
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {book.title}
                </h2>
                <p className="text-gray-500 mb-3">by {book.author}</p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div className="text-gray-700">  
                  <p className="font-medium text-lg">${book.price}</p>
                  <p className="text-sm text-gray-400">
                    Quantity: {book.quantity}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(book.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition-all duration-300 cursor-pointer"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleEdit(book)}
                  className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-all duration-300 cursor-pointer"
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-lg mt-10">No books exist 😢</p>
      )}
    </div>
  );
};

export default BookList;
