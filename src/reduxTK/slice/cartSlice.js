import {createSlice} from '@reduxjs/toolkit';
import { act } from 'react-test-renderer';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addProductToCart: (state, action) => {
      let myIndex = -1;
      state.map((item, index) => {
        if (item.id == action.payload.id) {
          myIndex = index;
        }
      });
      if (myIndex == -1) {
        state.push({id: action.payload.id, image: action.payload.image, name: action.payload.name, price: action.payload.price, qty: action.payload.qty+1});
      } else {
        state[myIndex].qty = state[myIndex].qty + 1;
      }
      },
      removeProductfromCart: (state, action) => {
          let myIndex = -1;
          state.map((item, index) => {
              if (item.id == action.payload.id) {
                  myIndex = index
              }
          });
          if (myIndex == -1) {
              
          }
          else {
              state[myIndex].qty = state[myIndex].qty - 1;
          }
      },
      deleteItemfromCart: (state, action) => {
         return state = state.filter(item => {
               item.id !== action.payload
          })
      }
  },
});

export const {addProductToCart, removeProductfromCart, deleteItemfromCart} = cartSlice.actions;
export default cartSlice.reducer;
