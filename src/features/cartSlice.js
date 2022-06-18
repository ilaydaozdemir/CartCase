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
        },
        updateItem: (state, action) => {
            state.cartItems.map((item, index) => {
                if (item.id === action.payload.id) {
                    state.cartItems[index] = action.payload
                }
            })
        }
    }
})

export const { initializeItems, removeItem, updateItem } = cartSlice.actions

export default cartSlice.reducer
