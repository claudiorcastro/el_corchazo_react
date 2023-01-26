import React from 'react'
import './Filtros.css'
import Select from 'react-select'

const filtros = [
    {label: 'Vinos', value: 'Vinos' },
    {label: 'Fernets', value: 'Fernets' },
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