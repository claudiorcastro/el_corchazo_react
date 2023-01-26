import React from 'react'
import './Filtros.css'
import Select from 'react-select'

const filtros = [
    {label: 'Vinos', value: 'Vinos' },
    {label: 'Cervezas', value: 'Cervezas' },
    {label: 'Aperitivos', value: 'Aperitivos' },
]


const Filtros = () => {
  return (
    
    <div className="Suppliers-container">
        <span>Filtro</span>
        <Select
            defaultValue = {{label: 'Default', value: 'Default'}}
            options={ filtros }
        />
    </div>
  )
}

export default Filtros