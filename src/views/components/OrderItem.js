import React, { useState } from 'react'

export default function OrderItem() {
    const staticPrice = 10.00

    const [count, setCount] = useState(1)
    const [price, setPrice] = useState(staticPrice)


    const increase = () => {
        setCount(count + 1);
        setPrice((staticPrice) * (count + 1));

        if (count > 0) { document.querySelector("#decrease").disabled = false }
        if (count + 1 >= 8) { document.querySelector("#increase").disabled = true }
    }

    const decrease = () => {
        setCount(count - 1);
        setPrice((staticPrice) * (count - 1));

        if (count == 0) { document.querySelector("#decrease").disabled = true }
        if (count < 8) { document.querySelector("#increase").disabled = false }
    }

    return (
        <div className="order-item">
            <div className="image">
                <img src="/resources/images/sample.jpg" alt="image" />
            </div>
            <div className="side">
                <h6 className="title">Item Name</h6>
                <h6 className="price">$ {price}</h6>
                <div className="item-count">
                    <button id="decrease" onClick={decrease} disabled={count ? false : true} >-</button>
                    <span id="itemCount"> {count} </span>
                    <button id="increase" onClick={increase}>+</button>
                </div>
            </div>
        </div>
    )
}
