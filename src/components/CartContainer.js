import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import CartItem from './CartItem'
import styled from 'styled-components'
import axios from 'axios'
import { initializeItems } from '../features/cartSlice'

const CartContainer = () => {
    const dispatch = useDispatch()

    const getUsers = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
            dispatch(initializeItems(response.data))
        }).catch(error => {
            console.log("error", error)
        })
    }

    useEffect(() => {
        getUsers()
    }, [])

    const { cartItems } = useSelector((store) => {
        return store.cart
    })

    return (
        <Container>
            {cartItems.map((item) => {
                return <CartItem key={item.id}{...item} />
            })}
        </Container>
    )
}

export default CartContainer

const Container = styled.div`
display: flex;
flex-wrap: wrap;
`
