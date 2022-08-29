import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpen: (state) => {
      return {
        ...state,
        isOpen: true,
      };
    },
    setClose: (state) => {
      return {
        ...state,
        isOpen: false,
      };
    },
  },
});

export const { setClose, setOpen } = modalSlice.actions;
export default modalSlice.reducer;
