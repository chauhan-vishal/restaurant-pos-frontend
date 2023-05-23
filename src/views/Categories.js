import React, { useEffect, useState } from 'react'
import Category from './components/Category'
import TopHeader from './components/TopHeader'

export default function Categories({ setActiveClass, tableNo, search, setSearch }) {

    const [categories, setCategories] = useState([])

    let API_PATH = "api/category"
    if (search) {
        API_PATH += "?categoryName=" + search
    }

    setActiveClass("categories")

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
                setCategories(res.document)
            })
    }, [search])

    return (
        <div className="row">
            <div className="col-md-12 main-content">
                <TopHeader heading={"Categories"} setSearch={setSearch} />

                <div className="row items-container">
                    <div className="col-md-12">
                        {
                            categories && categories.map((category, index) => {
                                return <Category key={index} category={category} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}