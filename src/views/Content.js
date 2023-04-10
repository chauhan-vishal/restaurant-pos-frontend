import React, { useEffect, useState } from 'react'

import Main from './Main'
import Order from './Order'
import OrderContext from './OrderContext'

export default function Content() {
    const [orderItems, setOrderItems] = useState([])

    return (
        <OrderContext.Provider value={{ orderItems, setOrderItems }}>
            <div className="row">
                <Main />
                <Order />
            </div>
        </OrderContext.Provider>
    )
}
