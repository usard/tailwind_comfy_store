import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    search:'',
    category:'all',
    company:'all',
    freeShipping:'',
    products:[],

}
export const filterProductSlice = createSlice({
    name: 'filterProducts',
    state: initialState,
})