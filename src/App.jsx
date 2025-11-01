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
  return (
    <div>
      <ProductListView onHandleSetProductToEdit={handleSetProductToEdit} />
      <ProductForm onProductToEdit={productToEdit} onIsEdit={isEdit}/>
    </div>
  )
}

export default App
