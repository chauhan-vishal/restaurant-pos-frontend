import React from 'react'
import OrderItem from './components/OrderItem'

export default function Order({ orderItems }) {
        
    return (
        <div className="col-md-3 order-container">
            <div className="head">
                <h4>Current Order</h4>
            </div>
            <div className="order-items-container">
                {
                    orderItems && orderItems.map((item, index) => {
                        return <OrderItem key={index} item={item} />
                    })
                }
            </div>
        </div>
    )
}
