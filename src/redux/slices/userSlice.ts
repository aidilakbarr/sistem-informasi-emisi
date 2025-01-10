import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  user: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
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
  },
});

export const { login, logout, setLoading, setSuccess, setError } =
  userSlice.actions;

export default userSlice.reducer;
