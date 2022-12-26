import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
  value: { name: "", age: Number, email: "" },
};

export const userSlice = createSlice({
  name: "uss",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = { name: "", age: 0, email: "" };
    },
  },
});

// const fetchUsers = createAsyncThunk("users/fetchUsers", () => {
//   return axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.data.map((user) => user.id));
// });

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   extraReducers: (builder) => {
//     builder.addCase(fetchUsers.pending, (state) => {
//       state.loading = true;
//     });
//   },
// });
//using payload change the action
//reducres is used to define a list of actions
//first we set a state in gloabally so we use store then using slice
//we create a slice and set a reducer for the intialstate actions
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
// module.exports.fetchUsers = fetchUsers;
