

import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';

const OrderReview = () => {

    const [dataOrder, setDataOrder] = useState([]);


    const handleOrderReview = async () => {
        const email = localStorage.getItem('email');

        try {
            const response = await fetch('http://localhost:5001/OrderReview', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email }),
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data)
                setDataOrder(data.userData.order_data);
                console.log("data", dataOrder)
            } else {
                // Handle the case when the fetch request fails
                console.error('Failed to fetch dataOrder');
            }
        } catch (error) {
            console.error('An error occurred while fetching dataOrder', error);
        }
    };


    useEffect(() => {
        handleOrderReview()
    }, [])

    return (
        <div className='grid grid-cols-3 h-96'>
            <h2>Your Order History</h2>
            {dataOrder.map((order, index) => (
                <div key={index} className="order-card">
                    <h3>Order Date: {order[0].Order_date}</h3>
                    {order.slice(1).map((item, itemIndex) => (
                        <div key={itemIndex} className="order-item">
                            <img src={item.img} alt={item.name} />
                            <h4>{item.name}</h4>
                            <p>{item.description}</p>
                            <p>Quantity: {item.qty}</p>
                            <p>Size: {item.size}</p>
                            <p>Price: ${item.finalPrice}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default OrderReview