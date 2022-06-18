import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        initializeItems: (state, action) => {
            state.cartItems = action.payload
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        }
    }
})

export const { initializeItems, removeItem } = cartSlice.actions

export default cartSlice.reducer