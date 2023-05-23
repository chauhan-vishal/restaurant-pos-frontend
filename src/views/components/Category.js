import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Category({ category }) {
    return (
        <div className="category-container">
            <NavLink to={"/?category=" + category.name}>
                <div className="card-div">
                    <img src={category.img} alt="" />
                    <div className='card-body'>
                        <h5 className='category-head'> {category.name} </h5>
                        <p className='category-desc text-secondary'> {category.desc} </p>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
