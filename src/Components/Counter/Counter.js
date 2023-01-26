import React,{useState} from 'react'


const Counter = (props) => {
    const nombre = props

    const [contador, setContador] = useState(0)

    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)
    const reset = () => setContador(0)

  return (
    <div>
        <h1>{nombre}</h1>
        <h2>El valor del contador : {contador}</h2>
        <button onClick={sumar}>sumar</button>
        <button onClick={restar}>restar</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default Counter