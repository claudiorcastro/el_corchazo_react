import React from 'react'
import Titulo from '../Titulo/Titulo'

const ItemListContainer = (props) => {
  return (
    <Titulo greeting = {props.texto}/>
  )
}

export default ItemListContainer