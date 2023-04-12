import React, { useState } from 'react'

import Main from './Main'
import Order from './Order'

export default function Content() {
    const [orderItems, setOrderItems] = useState([])

    // console.log("OI + " + JSON.stringify(orderItems) + "  |")

    return (
        <div className="row">
            <Main setOrderItems={setOrderItems} />
            <Order orderItems={orderItems} />
        </div>
    )
}
