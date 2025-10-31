import { createSlice } from "@reduxjs/toolkit";

const initialState = {books : [
    {id: 1, title: "Book One", author: "Author One", price: 9.99, quantity: 12},
]}


const bookSlice = createSlice ({
    name: "books",
    initialState,
    reducers: {
        deleteBook: (state, actions) => {
            const id = actions.payload
            state.books = state.books.filter((book) => book.id  != id)
        },
        updateBook: (state, actions) => {
            const {id, title, author, price, quantity} = actions.payload
            const existingBook = state.books.find((book) => book.id  == id)
            if(existingBook){

                existingBook.title = title;
                existingBook.author = author;
                existingBook.price = price;
                existingBook.quantity = quantity;
            }
        },
        addBook: (state, actions) => {
           state.books.push(actions.payload)
        }
    }
})


export default bookSlice.reducer;
export const{deleteBook, addBook, updateBook} = bookSlice.actions;
