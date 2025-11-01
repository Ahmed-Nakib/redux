import React, { useState } from 'react'
import ProductListView from './features/products/ProductListView'
import ProductForm from './features/products/ProductForm'

const App = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null)

  const handleSetProductToEdit = (product) => {
    setProductToEdit(product)
    setIsEdit(true)
  }

     const handleCancelEdit = () => {
      setIsEdit(false);
      setProductToEdit(null);
    };
  return (
    <div>
      <ProductListView onHandleSetProductToEdit={handleSetProductToEdit} />
      <ProductForm onProductToEdit={productToEdit} onIsEdit={isEdit} onHandleCancelEdit={handleCancelEdit}/>
    </div>
  )
}

export default App
