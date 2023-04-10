import React from 'react'

export default function Card() {
    return (
        <div className="c-card">
            <div className="top">
                <img src="/resources/images/sample.jpg" alt="" />
                <div className="cart-icon">
                    <img src="/resources/icons/cart.svg" alt="" />
                </div>
            </div>
            <div className="bottom">
                <h6 className="head">Item Name</h6>
                <p>This is item description. This will be of two lines. So that it may look good.</p>
                <h5>$12.33</h5> /-
            </div>
        </div>
    )
}
