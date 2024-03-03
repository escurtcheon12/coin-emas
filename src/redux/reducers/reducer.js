import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  gender: "",
  age: "",
  height: "",
  weight: "",
};

// Create reducer slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setHeight: (state, action) => {
      state.height = action.payload;
    },
    setWeight: (state, action) => {
      state.weight = action.payload;
    },
  },
});

export const { setName, setGender, setAge, setHeight, setWeight } =
  userSlice.actions;

export default userSlice.reducer;
