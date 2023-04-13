import React, { useState } from 'react'
import OrderItem from './components/OrderItem'

export default function Order({ orderItems, setOrderItems }) {

    const [finalAmount, setFinalAmount] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [salesTax, setSalesTax] = useState(0)

    const getAmounts = () => {
        const subTotal = parseInt(document.querySelector("#subTotal"))
        if (subTotal) {
            alert(subTotal.innerHTML)
        }

        const discount = document.querySelector("#discount")
        if (discount) {
            alert(discount.innerHTML)
        }

        const salesTax = document.querySelector("#gst")
        if (salesTax) {
            alert(salesTax.innerHTML)
        }

        return [subTotal, discount, salesTax]
    }

    return (
        <div className="col-md-3 order-container">
            <div className="head">
                <h4>Current Order</h4>
            </div>
            <div className="order-items-container">
                {
                    orderItems && orderItems.map((item, index) => {
                        return <OrderItem key={index} item={item} setSubTotal={setSubTotal} setOrderItems={setOrderItems} />
                    })
                }
            </div>
            <div className='order-bottom'>
                <div className="amount-container">
                    <div className="details">
                        <table style={{ width: "100%", fontSize: "14px" }}>
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
                                <td className='text-right text-bold'> $ <span id='gst'>{salesTax}</span> </td>
                            </tr>
                        </table>
                    </div>
                    <div className="total-amount">
                        <table style={{ width: "100%", fontSize: "20px" }}>
                            <tr>
                                <td className='text-gray'>Total</td>
                                <td className='text-right text-bold'> $ <span id="finalAmount">{finalAmount}</span> </td>
                            </tr>
                        </table>
                    </div>
                </div>
                <button className='btn btnPayment'>
                    Continue to Payment
                    <img src="/resources/icons/right-chevron.svg" alt="right" />
                </button>
            </div>
        </div>
    )
}
