import React, { useState } from 'react'
import BookForm from './component/BookForm'
import BookList from './component/BookList'

const App = () => {
  const [bookToEdit, setBookToEdit] = useState(null)
  const handleEdit = (book) => {
    setBookToEdit(book);
  }
  const handleCancel = () => {
    setBookToEdit(null);
  }

  return (
    <div>
      <BookForm onBookToEdit={bookToEdit} onCancel={handleCancel}/>
      <BookList onHandleEdit={handleEdit} />
    </div>
  )
}

export default App
