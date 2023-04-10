import React, { useContext, useEffect } from 'react'
import OrderItem from './components/OrderItem'
import OrderContext from './OrderContext';

export default function Order() {
    const { orderItems, setOrderItems } = useContext(OrderContext);

    console.log("OI : " + orderItems)

    return (
        <div className="col-md-3 order-container">
            <div className="head">
                <h4>Current Order</h4>
            </div>
            <div className="order-items-container">
                {
                    orderItems && orderItems.map(item => {
                        return <OrderItem item={item} />
                    })
                }
            </div>
        </div>
    )
}
