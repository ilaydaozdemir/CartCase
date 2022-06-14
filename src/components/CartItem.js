import React from 'react'
import { removeItem } from '../features/cartSlice'
import { useDispatch } from 'react-redux'
import Destination1 from "../assets/Destination1.png"

const CartItem = ({ id, name,
    email, phone, website }) => {

    const data = 
        {
            image: Destination1
        }
    
    console.log("data",data)

    const dispatch = useDispatch()
    return <div>
        <img src={data.image} alt="" />
        <h4>{name}</h4>
        <h4>{email}</h4>
        <h4>{phone}</h4>
        <h4>{website}</h4>
        <button onClick={() => dispatch(removeItem(id))}>remove</button>
    </div>
}
export default CartItem;