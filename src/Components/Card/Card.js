import React from 'react'

const Card = (props) => {
    const {id,titulo,descripcion,img,btnText} = props;
  return (
<div className="d-flex justify-content-between">
  <div className="card d-flex justify-content-between" style={{width: "18rem"}}>
    <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">{descripcion}</p>
      <a href="/" className="btn btn-primary">{btnText}{id}</a>
    </div>
  </div>
</div>
  )
}

export default Card