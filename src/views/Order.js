import React from 'react'

export default function Order() {
    return (
        <div className="col-md-3 order-container">
            <div className="head">
                <h4>Current Order</h4>
            </div>
            <div className="order-items-container">
                <div className="order-item">
                    <div className="image">
                        <img src="/resources/images/sample.jpg" alt="image" />
                    </div>
                    <div className="side">
                        <h6 className="title">Item Name</h6>
                        <h6 className="price">$10.33</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
