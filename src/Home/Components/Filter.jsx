import React from 'react'
import { filters } from '../Data/data'

const Filter = () => {
    
    return (
        <div className="filters">
            {filters.map((item) => (
                <div className="filter" key={item.id}>
                    <div className="text" >{item.name}</div>
                </div>
            ))}
        </div>
    )
}

export default Filter