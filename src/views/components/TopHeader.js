import React from 'react'

export default function TopHeader({ heading, setSearch }) {
    const searchOption = (search) => {
        setSearch(search)
    }

    return (
        <>
            <div className="row header">
                <div className="left">
                    <h3>{heading}</h3>
                    <span>Discover whatever you need easily</span>
                </div>
                <div className="right">
                    <div className="searchbox">
                        <img src='/resources/icons/search.svg' alt='searcg' />
                        <input type="text" placeholder="Search Product..." onChange={(e) => { searchOption(e.target.value) }} />
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
        </>
    )
}
