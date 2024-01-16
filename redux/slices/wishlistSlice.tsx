import { createSlice } from "@reduxjs/toolkit"
const initialState = {}
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlist: (state, { payload }) => {
      return payload
    },
    clearWishlist: () => {
      return {}
    },
  },
})

const { reducer, actions } = wishlistSlice
export const { setWishlist, clearWishlist } = actions
export default reducer
