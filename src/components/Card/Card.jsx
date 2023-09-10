import React, { useState, useRef, useEffect } from 'react'
import { useCartDispatch, useCartState } from '../ContextApi/ContaxtApi';

const Card = ({ food_itemsData }) => {


    // console.log(food_itemsData)
    const priceRef = useRef()
    const dispatch = useCartDispatch();
    const option = food_itemsData.options[0];
    const key = Object.keys(option)
    const values = Object.values(option)
    const data = useCartState();
    // console.log(key, values)
    const [qty, setQty] = useState(1);
    const [size, setsize] = useState(key[0]);
    useEffect(() => {
        setsize(priceRef.current.value)
    }, [])

    const handleAddToCart = async () => {




        let food = []
        for (const item of data) {
            if (item.id === food_itemsData._id) {
                food = item;
                break;
            }
        }
        console.log(food)
        console.log(new Date())
        if (food !== []) {
            if (food.size === size) {
                await dispatch({ type: "update", id: food_itemsData._id, qty: qty, finalPrice: finalPrice })
                return
            }
            else if (food.size !== size) {

                await dispatch({ type: "add", id: food_itemsData._id, img: food_itemsData.img, name: food_itemsData.name, description: food_itemsData.description, CategoryName: food_itemsData.CategoryName, qty: qty, size: size, finalPrice: finalPrice })
                console.log("Size different so simply ADD one more to the list")
                return
            }
            return
        }


        await dispatch({ type: "add", id: food_itemsData._id, img: food_itemsData.img, name: food_itemsData.name, description: food_itemsData.description, CategoryName: food_itemsData.CategoryName, qty: qty, size: size, finalPrice: finalPrice })
        console.log(data)
    }

    let finalPrice = qty * parseInt(option[size])
    // const values = Object.values(options)
    return (
        <div className='shadow-lg border-2 shadow-black  m-3'>
            <div className='p-3'>
                <div >
                    <img className='w-96 h-96 object-cover rounded-lg' src={food_itemsData.img}></img>
                </div>
                <div>
                    <h4 className='py-1 text-center font-bold'>{food_itemsData.name} </h4>

                    <p>{food_itemsData.description}.</p>
                    <hr></hr>
                    <p className='bg-gray-300 ps-2 mt-2 rounded-md'>{food_itemsData.CategoryName}</p>
                    <div className='flex flex-row  items-center justify-between'>
                        <div>
                            <select name="key" id="key" className='mt-2 border-2 rounded-lg px-3' onChange={(e) => setsize(e.target.value)}>
                                {
                                    key.map((item, index) => (
                                        <option className='hover:bg-gray-300 rounded-lg' key={index} value={item}>{item}</option>
                                    ))
                                }

                            </select>
                            <select name="qty" id="qty" className='ms-3 mt-2 border-2 rounded-lg px-3' ref={priceRef} onChange={(e) => setQty(e.target.value)}>
                                {
                                    Array.from(Array(6)).map((e, index) => (

                                        <option key={index} value={index + 1}>{index + 1} </option>
                                    ))
                                }

                            </select>
                        </div>
                        <p className='ps-4'>{finalPrice}</p>
                    </div>
                    <hr></hr>
                    <div className='flex items-center` justify-center'>

                        <button className='bg-gray-200 py-2 hover:bg-gray-400 hover:transition-colors hover:duration-300 w-1/2 mt-3 rounded-md mx-auto' onClick={handleAddToCart}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card