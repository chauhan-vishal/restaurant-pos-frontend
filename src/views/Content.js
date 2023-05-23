import React, { useCallback, useEffect, useState } from 'react'

import Main from './Main'
import Order from './Order'
import { useSearchParams } from 'react-router-dom';

export default function Content({ setActiveClass, tableNo, search, setSearch }) {

    setActiveClass("home")

    const [orderItems, setOrderItems] = useState([])

    const updateCount = (option, itemId) => {

        let temp = orderItems

        const filteredItems = temp.map(curItem => {
            if (curItem.id == itemId) {
                curItem.count = (option == "+") ? curItem.count + 1 : curItem.count - 1
            }

            return curItem
        })
            .filter(curItem => {
                return curItem.count > 0
            })

        setOrderItems(filteredItems)
    }

    const updateOrderItems = (item) => {
        const newItem = { id: item._id, name: item.name, price: item.price, img: item.img, count: 1 }

        let tempItems = orderItems

        if (tempItems.some(i => i.id === item._id)) {
            alert("Item alerady exists in cart!")
        }
        else {
            const items = [...tempItems, newItem]
            setOrderItems(items)
        }
    }

    return (
        <div className="row">
            <Main search={search} setSearch={setSearch} orderItems={orderItems} updateOrderItems={updateOrderItems} />
            <Order orderItems={orderItems} updateCount={updateCount} />
        </div>
    )
}
