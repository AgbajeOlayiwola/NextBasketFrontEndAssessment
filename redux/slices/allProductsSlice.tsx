import { createSlice } from "@reduxjs/toolkit"
const initialState = {}
const allProductSlice = createSlice({
  name: "allProduct",
  initialState,
  reducers: {
    setAllProduct: (state, { payload }) => {
      return payload
    },
    clearAllProduct: () => {
      return {}
    },
  },
})

const { reducer, actions } = allProductSlice
export const { setAllProduct, clearAllProduct } = actions
export default reducer
