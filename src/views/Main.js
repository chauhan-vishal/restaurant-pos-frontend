import React, { useState, useEffect, useContext } from 'react'

import Card from './components/Card'

export default function Main({ setOrderItems }) {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + "api/item", {
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
    }, [])

    return (
        <div className="col-md-9 main-content">
            <div className="row header">
                <div className="left">
                    <h3>Welcome, User</h3>
                    <span>Discover whatever you need easily</span>
                </div>
                <div className="right">
                    <div className="searchbox">
                        <img src='/resources/icons/search.svg' alt='searcg' />
                        <input type="text" placeholder="Search Product..." />
                    </div>
                    <div className="filter">
                        <img src="/resources/icons/filter.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="row categories">
                <div className="col-md-12">
                    &nbsp;
                </div>
            </div>
            <div className="row items-container">
                <div className="col-md-12">
                    {
                        items && items.map((item, index) => {
                            return <Card key={index} item={item} setOrderItems={setOrderItems} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
