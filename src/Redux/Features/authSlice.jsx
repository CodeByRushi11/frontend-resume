import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// createing login user using aych thunks
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:5000/users");
      const users = await response.json();
      console.log("Users Response", users);

      const user = users.find(
        (u) => u.email === userData.email && u.password === userData.password
      );
      if (!user) {
        return rejectWithValue("Invalid user and password");
      }
      const token = `fake-jwt-token-${user.id}`;
      localStorage.setItem("token", token);
      return { user, token };
    } catch (error) {
      return rejectWithValue("Login Failed");
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: localStorage.getItem("token") || null,
    error: null,
    isAuthenticated: false,
  },
  // logout reducers
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem("token");
    },
  },
  // handling login with extra reduceres
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isAuthenticated = false;
      });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
