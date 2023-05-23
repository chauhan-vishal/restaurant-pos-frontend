import React, { useEffect, useState } from 'react'

export default function OrderItem({ item, incrementCount, decrementCount }) {

    const changeCount = () => {
        incrementCount(item.id)
    }

    return (
        <div className="order-item" >
            <div className="image">
                <img src={item.img} alt="image" />
            </div>
            <div className="side">
                <h6 className="title">{item.name}</h6>
                <h6 className="price">$ {item.price * item.count}</h6>
                <div className="item-count">
                    <button id={"decrease" + item._id} onClick={() => { decrementCount(item.id) }} >-</button>
                    <span id={"itemCount" + item._id}> {item.count} </span>
                    <button id={"increase" + item._id} disabled={(item.count > 8)} onClick={changeCount}>+</button>
                </div>
            </div>
        </div>
    )
}
