import React from 'react'
import { Link } from 'react-router-dom'
const Item = (props) => {
    const {name} = props
  return (
    <Link to={'/item/detail/${name}'}>
        <div style={{cursor:'pointer'}}>
            <h2>{name}</h2>
        </div>
    </Link>
  )
}

export default Item