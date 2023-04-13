import React, { useContext } from 'react'

export default function Card({ item, setOrderItems }) {

    function updateOrderItems(item) {
        setOrderItems(prev => {
            if (prev.length > 0 && prev.includes(item)) {
                alert("Item already is in cart !")
                return prev
            }
            return [...prev, item]
        })

        const subTotal = document.querySelector("#subTotal")
        if (subTotal) {
            subTotal.innerHTML = parseInt(subTotal.innerHTML) + item.price
        }
    }

    return (
        <div className="c-card" key={item._id}>
            <div className="top">
                <img src={item.img} alt="" />
                <div className="cart-icon" onClick={() => {
                    updateOrderItems(item)
                }}>
                    <img src="/resources/icons/cart.svg" alt="" />
                </div>
            </div>
            <div className="bottom">
                <h6 className="head">{item.name}</h6>
                <p>{item.desc}</p>
                <h5>{item.price}</h5> /-
            </div>
        </div>
    )
}
