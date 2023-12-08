import {createSlice} from '@reduxjs/toolkit';

export const defaultState= {
    cartItems: [],
    numCartItems:0,
    cartItemsPrice:0,
    shippingFee:500,
    tax:0,
    orderTotal:0,
}
const localStorageCart = JSON.parse(localStorage.getItem('cart'));

export const cartSlice = createSlice({
    name:'cart',
    initialState: localStorageCart || defaultState,
    reducers: {
        cartCalculations: (state, action) => {
            state.orderTotal = state.shippingFee + state.tax + state.cartItemsPrice;
            localStorage.setItem('cart',JSON.stringify(state))
        },
        addCartItem:(state,action)=> {
            const {product}= action.payload;
            const item = state.cartItems?.find((item)=>item.cartItemID === product.cartItemID )
            if(item) {
                item.quantity = item.quantity + parseInt(product.quantity);
            }
            else {
                state.cartItems.push(product)
            }
            state.numCartItems += product.quantity;
            state.cartItemsPrice = state.cartItemsPrice + (product.price * product.quantity);
            cartSlice.caseReducers.cartCalculations(state, {payload:product})
            return state;
        },
        removeCartItem: (state, action)=> {
            const {cartItemID:removeItemID} = action.payload;
            const toBeRemovedItem = state.cartItems.find((item)=> item.cartItemID === removeItemID);
            state.cartItems = [...state.cartItems.filter((item)=> item.cartItemID !== removeItemID)];
            state.numCartItems -= toBeRemovedItem.quantity;
            state.cartItemsPrice -= (toBeRemovedItem.price * toBeRemovedItem.quantity);
            cartSlice.caseReducers.cartCalculations(state)
          return state;
        },
        clearCart:(state)=> {
            localStorage.removeItem('cart');
            state = {...defaultState};
            return state;
        },
        editCartItem:(state, action)=> {
            const {cartItemID, quantity}= action.payload;
            const product = state.cartItems.find((item)=> item.cartItemID === cartItemID);
            console.log('edit item :', product);
            state.numCartItems = (state.numCartItems - product.quantity) +  quantity;
            state.cartItemsPrice = (state.cartItemsPrice - (product.price * product.quantity)) + ( product.price * quantity);
            product.quantity = parseInt(quantity);
            cartSlice.caseReducers.cartCalculations(state)
            return state;
        }
    }
})

export const {addCartItem, removeCartItem, editCartItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer; 