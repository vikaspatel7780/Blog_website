import { createSlice } from '@reduxjs/toolkit';

// Initial state is retrieved from local storage if available
const initialState = {
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
  blogInfo: JSON.parse(localStorage.getItem('blogInfo')) || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Action to handle login success
    loginSuccess(state, action) {
      state.userInfo = action.payload;
      // Save user info to local storage
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
    },
    // Action to handle logout
    logout(state) {
      state.userInfo = null;
      // Remove user info from local storage
      localStorage.removeItem('userInfo');
      localStorage.removeItem('blogInfo');
    },
    // Action to handle fetching all blogs
    allBlog(state, action) {
      state.blogInfo = action.payload; // Updating blogInfo
      // Save blog info to local storage
      localStorage.setItem("blogInfo", JSON.stringify(state.blogInfo));
    }
  },
});

export const { loginSuccess, logout, allBlog } = userSlice.actions;
export default userSlice.reducer;
