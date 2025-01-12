import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: string | null;
  email: string | null;
  loading: boolean;
  error: string | null;
  verify: boolean;
}

const initialState: UserState = {
  user: null,
  email: null,
  loading: false,
  error: null,
  verify: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Action untuk login
    login(state, action: PayloadAction<string>) {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    logout(state) {
      state.user = null;
    },
    setLoading(state) {
      state.loading = true;
    },
    setSuccess(state) {
      state.loading = false;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    setUserEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
    setEmailVerifySuccess(state) {
      state.verify = true;
    },
    setUser(state, action: PayloadAction<string>) {
      state.user = action.payload;
    },
  },
});

export const {
  login,
  logout,
  setLoading,
  setSuccess,
  setError,
  setUserEmail,
  setEmailVerifySuccess,
  setUser,
} = userSlice.actions;

export default userSlice.reducer;
