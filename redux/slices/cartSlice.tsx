import { createSlice } from "@reduxjs/toolkit"
const initialState = {}
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }) => {
      return payload
    },
    clearCart: () => {
      return {}
    },
  },
})

const { reducer, actions } = cartSlice
export const { setCart, clearCart } = actions
export default reducer
