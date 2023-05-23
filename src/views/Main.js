import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import Card from './components/Card'
import TopHeader from './components/TopHeader'

export default function Main({ search, setSearch, orderItems, updateOrderItems }) {
    const [items, setItems] = useState([])
    const [queryParams] = useSearchParams()

    const customerName = localStorage.getItem("customerName")

    const categoryName = queryParams.get("category")

    let API_PATH = "api/item?"
    if (categoryName) {
        API_PATH += "categoryName=" + categoryName + "&"
    }
    if (search) {
        API_PATH += "itemName=" + search
    }

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + API_PATH, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "type": "front"
            }
        })
            .then(res => res.json())
            .then(res => {
                setItems(res.document)
            })
    }, [API_PATH])

    const addOrderItem = (item) => {
        updateOrderItems(item)
    }

    return (
        <div className="col-md-12 main-content" style={(orderItems.length > 0) ? { paddingRight: "415px" } : {}}>
            <TopHeader heading={"Welcome, " + ((customerName) ? customerName : "")} setSearch={setSearch} />

            <div className="row items-container">
                <div className="col-md-12">
                    {
                        items && items.map((item, index) => {
                            return <Card key={index} item={item} addOrderItem={() => { return addOrderItem(item) }} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
