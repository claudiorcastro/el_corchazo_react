import React from 'react'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
  const titulo = useParams()
  
  return (
    <h1>ItemDetailContainer</h1>
  )
}

export default ItemDetailContainer