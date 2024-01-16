import { createSlice } from "@reduxjs/toolkit"
const initialState = {}
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProduct: (state, { payload }) => {
      return payload
    },
    clearProduct: () => {
      return {}
    },
  },
})

const { reducer, actions } = productSlice
export const { setProduct, clearProduct } = actions
export default reducer
