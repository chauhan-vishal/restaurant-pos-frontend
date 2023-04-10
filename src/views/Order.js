import React from 'react'
import OrderItem from './components/OrderItem'

export default function Order() {
    
    return (
        <div className="col-md-3 order-container">
            <div className="head">
                <h4>Current Order</h4>
            </div>
            <div className="order-items-container">
                <OrderItem />
            </div>
        </div>
    )
}
