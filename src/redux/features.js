import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkApi) => {
    // create async thunk gives us some options we can use theme using the perameter of our callback function
    // the first perameter takes the value that  passed during dispatching of this function
    console.log(name);
    console.log(thunkApi.getState());
    try {
      const response = await axios(
        "https://course-api.com/react-useReducer-cart-project"
      );
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkApi.rejectWithValue("something went wrong");
    }
  }
);

const initialState = {
  loading: false,
  error: false,
  cartItems: [],
  amount: 0,
  total: 0,
};
const url = "https://course-api.com/react-useReducer-cart-project";
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      return {
        ...state,
        amount: 0,
        total: 0,
        cartItems: [],
      };
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => {
        if (item.id !== id) {
          return item;
        }
      });
    },
    increaseItem: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      item.amount++;
    },
    decreaseItem: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item.amount > 1) {
        item.amount--;
      } else {
        alert("can not be decreased now");
      }
    },
    handleItemsChange: (state) => {
      let amount = 0;
      let total = 0;
      if (state.cartItems.length > 0) {
        state.cartItems.forEach((item) => {
          amount += item.amount;
          total += item.amount * item.price;
        });
      }
      state.amount = amount;
      state.total = total;
    },
  },
  // extraReducers: {
  //   [getCartItems.pending]: (state) => {
  //     return {
  //       ...state,
  //       loading: true,
  //     };
  //   },
  //   [getCartItems.fulfilled]: (state, action) => {
  //     return {
  //       ...state,
  //       loading: false,
  //       cartItems: action.payload,
  //     };
  //   },
  //   [getCartItems.rejected]: (state) => {
  //     return {
  //       ...state,
  //       loading: false,
  //       error: true,
  //     };
  //   },
  // },
  extraReducers: (builder) => {
    builder.addCase(getCartItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCartItems.fulfilled, (state, action) => {
      state.cartItems = action.payload;
      state.loading = false;
    });
    builder.addCase(getCartItems.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
  },
});
export const {
  clearCart,
  removeItem,
  increaseItem,
  decreaseItem,
  handleItemsChange,
} = cartSlice.actions;
export default cartSlice.reducer;
