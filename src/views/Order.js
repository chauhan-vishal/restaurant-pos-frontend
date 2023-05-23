import React from 'react'
import OrderItem from './components/OrderItem'

export default function Order({ orderItems, updateCount }) {
    let subTotal = 0
    let discount = 0
    let gst = 0
    let finalAmount = 0

    console.log(localStorage.getItem("customerName"))

    orderItems.map(item => {
        subTotal += (item.count * item.price)
        return subTotal
    })

    discount = (subTotal * 0.05)
    gst = (subTotal * 0.08)
    finalAmount = (subTotal + gst - discount)

    const incrementCount = (itemId) => {
        updateCount("+", itemId)
    }

    const saveOrder = () => {
        const customerName = localStorage.getItem("customerName")
        const customerContact = localStorage.getItem("customerContact")
        const customerEmail = localStorage.getItem("customerEmail")
        if (!customerName) {
            alert("Please login first!")
            return
        }

        const orderData = {
            email: customerEmail,
            tableNo: 1,
            orderDate: new Date().toISOString(),
            items: orderItems,
            amount: finalAmount,
            status : "true"
        }

        fetch(process.env.REACT_APP_API_URL + "api/order/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(res => {
                alert(res.msg)
                window.location.reload()
            })

        console.log(orderData)
    }

    return (
        <div className="col-md-3 order-container" style={(orderItems.length > 0) ? { right: "0" } : {}}>
            <div className="head">
                <h4>Current Order</h4>
            </div>
            <div className="order-items-container">
                {
                    orderItems && orderItems.map((item, index) => {
                        return <OrderItem
                            key={index}
                            item={item}
                            incrementCount={incrementCount}
                            decrementCount={(itemId) => { updateCount("-", itemId) }}
                        />
                    })
                }
            </div>
            <div className='order-bottom'>
                <div className="amount-container">
                    <div className="details">
                        <table style={{ width: "100%", fontSize: "14px" }}>
                            <tbody>
                                <tr>
                                    <td className='text-gray'>Subtotal</td>
                                    <td className='text-right text-bold'> $ <span id="subTotal" className='sample'>{subTotal}</span> </td>
                                </tr>
                                <tr>
                                    <td className='text-gray'>Discount Sales</td>
                                    <td className='text-right text-bold'> $ <span id="discount">{discount}</span> </td>
                                </tr>
                                <tr>
                                    <td className='text-gray'>Goods & Services Tax</td>
                                    <td className='text-right text-bold'> $ <span id='gst'>{gst}</span> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="total-amount">
                        <table style={{ width: "100%", fontSize: "20px" }}>
                            <tbody>
                                <tr>
                                    <td className='text-gray'>Total</td>
                                    <td className='text-right text-bold'> $ <span id="finalAmount">{finalAmount}</span> </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <button className='btn btnPayment' onClick={saveOrder}>
                    Confirm Order
                </button>
            </div>
        </div >
    )
}
