import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { store } from '../app/store'
import CartItem from './CartItem'

const CartContainer = () => {
    const dispatch = useDispatch()

    const { cartItems } = useSelector((store) => {
        console.log("store", store);
        return store.cart})
    console.log("cartItems", typeof cartItems, cartItems);
    return <section>
        <div>    {cartItems.map((item) => {
            return <CartItem key={item.id}{...item} />
        })}</div>

    </section>


}
export default CartContainer