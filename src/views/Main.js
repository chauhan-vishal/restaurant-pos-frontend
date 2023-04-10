import React from 'react'

import Card from './components/Card'

export default function Main() {

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
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    )
}
