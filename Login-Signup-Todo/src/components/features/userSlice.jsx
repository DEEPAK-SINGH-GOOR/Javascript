import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],       // all registered users
    currentUser: null, // logged in user
  },
  reducers: {
    signup: (state, action) => {
      const { email } = action.payload;
      const userExists = state.users.find((u) => u.email === email);

      if (userExists) {
        console.log("User already exists!");
      } else {
        state.users.push(action.payload); // save new user
        state.currentUser = action.payload; // auto login after signup
        console.log("Signup successful", action.payload);
      }
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        state.currentUser = user;
        console.log("Login successful", user);
      } else {
        console.log("Invalid email or password");
      }
    },
    logout: (state) => {
      state.currentUser = null;
      console.log("User logged out");
    },
  },
});

export const { signup, login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.currentUser;

export default userSlice.reducer;
