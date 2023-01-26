import React from 'react'
import "./card.css"
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
//import Counter from '../Counter/Counter';



const Card = (props) => {
    const {id,titulo,descripcion,img,btnText} = props;
  
    const [contador, setContador] = useState(0)

    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)
    
  return (
<section className="productos">
  <div className="container ">
    <div className='row'>
      <div className="card " style={{width: "18rem"}}>
        <img src={img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{titulo}</h5>
          <p className="card-text">{descripcion}</p>
        <div className="d-flex justify-content-end">
        <button onClick={restar}>-</button>
        <h2> {contador}</h2>
        <button onClick={sumar}>+</button>
        </div>
        <ul>
          <li>
            <NavLink to="/Cart" className="btn btn-primary" onClick={id}>{btnText}{id}</NavLink>
          </li>
        </ul>
          
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Card