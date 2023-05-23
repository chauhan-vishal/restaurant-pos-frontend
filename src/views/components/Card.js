import React from 'react'

export default function Card({ item, addOrderItem }) {

    return (
        <div className="card-container">
            <div className="c-card" key={item._id}>
                <div className="top">
                    <img src={item.img} alt="" />
                    <div className="cart-icon" onClick={(item) => { addOrderItem(item) }}>
                        <img src="/resources/icons/cart.svg" alt="" />
                    </div>
                </div>
                <div className="bottom">
                    <h6 className="head">{item.name}</h6>
                    <p>{item.desc}</p>
                    <h5>{item.price}</h5> /-
                </div>
            </div>
        </div>
    )
}
