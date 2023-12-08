// import store from '../../store';
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const addUserToLocalStorage = (user) => {
  return localStorage.setItem('user', JSON.stringify(user));
}
const getUserFromLocalStorage =() => {
  return JSON.parse(localStorage.getItem('user'));
}
const removeUserFromLocalStorage = () => {
   localStorage.removeItem('user');
   localStorage.removeItem('cart');
}
const initialState = {
    user:getUserFromLocalStorage() || null,
}
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
     loginUser:(state, action) =>{
       const {userData} = action.payload;
       state.user = userData;
       addUserToLocalStorage(userData);
     },
     logoutUser:(state)=> {
       removeUserFromLocalStorage();
       console.log(' user state in logout :', state.user)
       state.user=null;
      //  store.getState().cart = null; // causing issue cannot access reducer before intiatlization
       toast.success('logged out');
     }
    }
})
export const {loginUser, logoutUser} = userSlice.actions;
export default userSlice.reducer;