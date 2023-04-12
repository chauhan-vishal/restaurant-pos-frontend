import React, { useEffect, useState } from 'react'

export default function OrderItem({ item }) {
    const staticPrice = item.price

    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(staticPrice)

    const increase = () => {
        setCount(count + 1);
        setPrice((staticPrice) * (count + 1));

        if (count > 0) { document.querySelector("#decrease" + item._id).disabled = false }
        if (count + 1 >= 8) { document.querySelector("#increase" + item._id).disabled = true }
    }

    const decrease = () => {
        setCount(count - 1);
        setPrice((staticPrice) * (count - 1));

        if (count == 0) { document.querySelector("#decrease" + item._id).disabled = true }
        if (count < 8) { document.querySelector("#increase" + item._id).disabled = false }
    }

    return (
        <div className="order-item" >
            <div className="image">
                <img src="/resources/images/sample.jpg" alt="image" />
            </div>
            <div className="side">
                <h6 className="title">{item.name}</h6>
                <h6 className="price">$ {price}</h6>
                <div className="item-count">
                    <button id={"decrease" + item._id} onClick={decrease} disabled={count ? false : true} >-</button>
                    <span id={"itemCount" + item._id}> {count} </span>
                    <button id={"increase" + item._id} onClick={increase}>+</button>
                </div>
            </div>
        </div>
    )
}
