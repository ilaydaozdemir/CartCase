import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../cartItems";

const initialState = {
    cartItems: cartItems
}

console.log("initialState", initialState);

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
        }
    }
})
export const { removeItem } = cartSlice.actions;

export default cartSlice.reducer;