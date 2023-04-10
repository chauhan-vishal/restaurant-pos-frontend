import React, { useContext } from 'react'
import OrderContext from '../OrderContext'

export default function Card({ item }) {
    const { orderItems, setOrderItems } = useContext(OrderContext);

    return (
        <div className="c-card" key={item._id}>
            <div className="top">
                <img src={item.img} alt="" />
                <div className="cart-icon" onClick={() => {
                    setOrderItems(oldOrderItems => {
                        oldOrderItems.push(item);
                        console.log(oldOrderItems)
                        return oldOrderItems;
                    });
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
